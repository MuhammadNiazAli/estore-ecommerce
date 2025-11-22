'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { FiX, FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';


const categories = [
  { name: 'Clothing', count: 120 },
  { name: 'Accessories', count: 80 },
  { name: 'Electronics', count: 56 },
  { name: 'Footwear', count: 92 },
];

const brands = [
  { name: 'Brand A', count: 54 },
  { name: 'Brand B', count: 67 },
  { name: 'Brand C', count: 43 },
  { name: 'Brand D', count: 29 },
];


const isPriceRangeEmpty = (range) => range.every((v) => v === '' || v === null || v === undefined);

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

const ShopSidebarFilters = ({ onFilterChange }) => {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(['', '']);
  const [inputErrors, setInputErrors] = useState({ min: false, max: false });
  const [collapsed, setCollapsed] = useState({
    categories: false,
    brands: false,
    price: false,
  });

  const [categorySearch, setCategorySearch] = useState('');
  const [brandSearch, setBrandSearch] = useState('');
  const debouncedCategorySearch = useDebounce(categorySearch, 300);
  const debouncedBrandSearch = useDebounce(brandSearch, 300);

  const [applying, setApplying] = useState(false);

  
  const [showChips, setShowChips] = useState(true);




  useEffect(() => {
    const min = priceRange[0] === '' ? null : Number(priceRange[0]);
    const max = priceRange[1] === '' ? null : Number(priceRange[1]);
    setInputErrors({
      min: min !== null ? min < 0 || (max !== null && min > max) : false,
      max: max !== null ? (min !== null && max < min) || max > 10000 : false,
    });
  }, [priceRange]);


  const [ariaLiveMessage, setAriaLiveMessage] = useState('');
  useEffect(() => {
    setAriaLiveMessage(
      `Selected filters: ${selectedCategories.length} categories, ${selectedBrands.length} brands, ${
        !isPriceRangeEmpty(priceRange) ? 'a price range' : 'no price range'
      }`
    );
  }, [selectedCategories, selectedBrands, priceRange]);


  const filteredCategories = useMemo(() => {
    if (!debouncedCategorySearch.trim()) return categories;
    return categories.filter((c) =>
      c.name.toLowerCase().includes(debouncedCategorySearch.toLowerCase())
    );
  }, [debouncedCategorySearch]);

  const filteredBrands = useMemo(() => {
    if (!debouncedBrandSearch.trim()) return brands;
    return brands.filter((b) =>
      b.name.toLowerCase().includes(debouncedBrandSearch.toLowerCase())
    );
  }, [debouncedBrandSearch]);


  const toggleSelection = useCallback((item, selectedArray, setSelectedArray) => {
    setSelectedArray((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }, []);

  const toggleCategory = (cat) => toggleSelection(cat, selectedCategories, setSelectedCategories);
  const toggleBrand = (brand) => toggleSelection(brand, selectedBrands, setSelectedBrands);

  
  const handlePriceChange = (e, index) => {
    let value = e.target.value;
    if (value === '') {
      setPriceRange((prev) => {
        const newRange = [...prev];
        newRange[index] = '';
        return newRange;
      });
      return;
    }
    const numVal = Number(value);
    if (numVal >= 0 && numVal <= 10000) {
      setPriceRange((prev) => {
        const newRange = [...prev];
        newRange[index] = numVal;
        return newRange;
      });
    }
  };

 
  const removeFilterChip = (type, value) => {
    if (type === 'category') {
      setSelectedCategories((prev) => prev.filter((c) => c !== value));
    } else if (type === 'brand') {
      setSelectedBrands((prev) => prev.filter((b) => b !== value));
    } else if (type === 'price') {
      setPriceRange(['', '']);
    }
  };

  
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange(['', '']);
  };

  const resetPrice = () => setPriceRange(['', '']);

  
  const handleApplyFilters = () => {
    if (inputErrors.min || inputErrors.max) return;
    setApplying(true);

    onFilterChange &&
      onFilterChange({
        categories: selectedCategories,
        brands: selectedBrands,
        priceRange,
      });

    
    setTimeout(() => setApplying(false), 400);
  };

 
  const toggleCollapse = (section) =>
    setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));


  const totalFiltersSelected =
    selectedCategories.length + selectedBrands.length + (!isPriceRangeEmpty(priceRange) ? 1 : 0);

 
  const sidebarRef = useRef(null);


  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;
    if (el.scrollHeight <= el.clientHeight) {
      el.style.overflowY = 'visible';
    } else {
      el.style.overflowY = 'auto';
    }
  }, [selectedCategories, selectedBrands, priceRange, collapsed]);

 
  const FilterBadge = ({ count }) => (
    <span className="ml-2 inline-block rounded-full bg-amber-500 text-black text-xs font-semibold px-2 py-0.5 select-none transition-transform transform group-hover:scale-110">
      {count}
    </span>
  );


  const FilterChip = ({ type, label, onRemove }) => (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-1 bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-semibold hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
      aria-label={`Remove filter ${label}`}
    >
      {label} <FiX />
    </button>
  );

  return (
    <aside
      ref={sidebarRef}
      className="relative w-full max-w-[350px] md:max-w-[1000px] my-10 bg-gray-900 p-6 text-gray-300 rounded-md border border-gray-700 flex flex-col"
      aria-label="Shop Sidebar Filters"
      style={{ minHeight: '500px' }}
    >
     
      <section
        aria-live="polite"
        className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
      >
        <p className="text-sm text-amber-400 font-semibold select-none">
          {totalFiltersSelected > 0
            ? `Filters applied (${totalFiltersSelected})`
            : 'No filters applied'}
        </p>
        <button
          type="button"
          onClick={clearAllFilters}
          disabled={totalFiltersSelected === 0}
          className="text-sm text-amber-400 hover:text-amber-500 disabled:text-gray-600 disabled:cursor-not-allowed font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 rounded inline-flex items-center gap-1"
          aria-disabled={totalFiltersSelected === 0}
        >
          Clear All <FiX />
        </button>
      </section>

   
      {showChips && totalFiltersSelected > 0 && (
        <section className="mb-6 flex flex-wrap gap-2 max-h-24 overflow-y-auto custom-scrollbar">
          {selectedCategories.map((cat) => (
            <FilterChip
              key={`chip-cat-${cat}`}
              type="category"
              label={`Category: ${cat}`}
              onRemove={() => removeFilterChip('category', cat)}
            />
          ))}
          {selectedBrands.map((brand) => (
            <FilterChip
              key={`chip-brand-${brand}`}
              type="brand"
              label={`Brand: ${brand}`}
              onRemove={() => removeFilterChip('brand', brand)}
            />
          ))}
          {!isPriceRangeEmpty(priceRange) && (
            <FilterChip
              type="price"
              label={`Price: $${priceRange[0] || 0} - $${priceRange[1] || 10000}`}
              onRemove={() => removeFilterChip('price')}
            />
          )}
        </section>
      )}

   
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
       
        <section className="mb-8">
          <button
            type="button"
            onClick={() => toggleCollapse('categories')}
            aria-expanded={!collapsed.categories}
            aria-controls="categories-list"
            className="w-full flex justify-between items-center text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
          >
            Categories
            {collapsed.categories ? <FiChevronDown /> : <FiChevronUp />}
          </button>
          {!collapsed.categories && (
            <>
              <div className="relative mb-4">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                <input
                  type="search"
                  aria-label="Search categories"
                  placeholder="Search categories..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>
              <ul
                id="categories-list"
                className="space-y-2 max-h-56 overflow-y-auto custom-scrollbar"
                role="list"
              >
                {filteredCategories.length === 0 && (
                  <li className="text-gray-500 italic text-sm select-none">No categories found</li>
                )}
                {filteredCategories.map(({ name, count }) => {
                  const isChecked = selectedCategories.includes(name);
                  return (
                    <li key={name}>
                      <label
                        htmlFor={`cat-${name}`}
                        className="inline-flex items-center cursor-pointer select-none group"
                        title={`${name} (${count} items)`}
                      >
                        <input
                          id={`cat-${name}`}
                          type="checkbox"
                          className="form-checkbox h-6 w-6 text-amber-400 bg-gray-800 rounded focus:ring-amber-400 transition duration-150"
                          checked={isChecked}
                          onChange={() => toggleCategory(name)}
                          aria-checked={isChecked}
                        />
                        <span className="ml-4 text-lg text-gray-300 group-hover:text-amber-400 transition flex items-center">
                          {name}
                          <span className="ml-2 inline-block rounded-full bg-amber-500 text-black text-xs font-semibold px-2 py-0.5 select-none transition-transform transform group-hover:scale-110">
                            {count}
                          </span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </section>

       
        <section className="mb-8">
          <button
            type="button"
            onClick={() => toggleCollapse('price')}
            aria-expanded={!collapsed.price}
            aria-controls="price-range"
            className="w-full flex justify-between items-center text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
          >
            Price Range ($)
            {collapsed.price ? <FiChevronDown /> : <FiChevronUp />}
          </button>
          {!collapsed.price && (
            <>
              <div
                id="price-range"
                className="flex items-center gap-4 mb-2"
                role="group"
                aria-labelledby="price-range"
              >
                <input
                  type="number"
                  id="price-min"
                  min={0}
                  max={priceRange[1] || 10000}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  placeholder="Min"
                  className={`w-1/2 rounded bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                    inputErrors.min ? 'border-2 border-red-600' : 'border border-gray-700'
                  }`}
                  aria-invalid={inputErrors.min}
                  aria-describedby="price-min-error"
                />
                <span className="text-gray-400 font-semibold select-none">—</span>
                <input
                  type="number"
                  id="price-max"
                  min={priceRange[0] || 0}
                  max={10000}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  placeholder="Max"
                  className={`w-1/2 rounded bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                    inputErrors.max ? 'border-2 border-red-600' : 'border border-gray-700'
                  }`}
                  aria-invalid={inputErrors.max}
                  aria-describedby="price-max-error"
                />
              </div>
              {(inputErrors.min || inputErrors.max) && (
                <p
                  className="mt-2 text-sm text-red-500"
                  role="alert"
                  id={inputErrors.min ? 'price-min-error' : 'price-max-error'}
                >
                  {inputErrors.min && 'Minimum price must be ≥ 0 and ≤ maximum price.'}
                  {inputErrors.max && 'Maximum price must be ≥ minimum price and ≤ 10,000.'}
                </p>
              )}
              <button
                type="button"
                onClick={resetPrice}
                disabled={isPriceRangeEmpty(priceRange)}
                className="mt-2 text-sm text-amber-400 hover:text-amber-500 disabled:text-gray-600 disabled:cursor-not-allowed font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                aria-disabled={isPriceRangeEmpty(priceRange)}
              >
                Reset Price
              </button>
            </>
          )}
        </section>

      
        <section className="mb-6">
          <button
            type="button"
            onClick={() => toggleCollapse('brands')}
            aria-expanded={!collapsed.brands}
            aria-controls="brands-list"
            className="w-full flex justify-between items-center text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
          >
            Brands
            {collapsed.brands ? <FiChevronDown /> : <FiChevronUp />}
          </button>
          {!collapsed.brands && (
            <>
              <div className="relative mb-4">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                <input
                  type="search"
                  aria-label="Search brands"
                  placeholder="Search brands..."
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>
              <ul
                id="brands-list"
                className="space-y-2 max-h-56 overflow-y-auto custom-scrollbar"
                role="list"
              >
                {filteredBrands.length === 0 && (
                  <li className="text-gray-500 italic text-sm select-none">No brands found</li>
                )}
                {filteredBrands.map(({ name, count }) => {
                  const isChecked = selectedBrands.includes(name);
                  return (
                    <li key={name}>
                      <label
                        htmlFor={`brand-${name}`}
                        className="inline-flex items-center cursor-pointer select-none group"
                        title={`${name} (${count} items)`}
                      >
                        <input
                          id={`brand-${name}`}
                          type="checkbox"
                          className="form-checkbox h-6 w-6 text-amber-400 bg-gray-800 rounded focus:ring-amber-400 transition duration-150"
                          checked={isChecked}
                          onChange={() => toggleBrand(name)}
                          aria-checked={isChecked}
                        />
                        <span className="ml-4 text-lg text-gray-300 group-hover:text-amber-400 transition flex items-center">
                          {name}
                          <FilterBadge count={count} />
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </section>
      </div>

    
      <div className="sticky bottom-0 bg-gray-900 pt-4 -mx-6 px-6 border-t border-gray-700">
        <button
          type="button"
          onClick={handleApplyFilters}
          disabled={inputErrors.min || inputErrors.max || totalFiltersSelected === 0 || applying}
          className={`w-full py-3 rounded-full bg-amber-400 text-gray-900 font-semibold shadow-lg hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 select-none`}
          aria-disabled={inputErrors.min || inputErrors.max || totalFiltersSelected === 0 || applying}
        >
          {applying ? 'Applying...' : `Apply Filters (${totalFiltersSelected})`}
        </button>
      </div>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {ariaLiveMessage}
      </div>
    </aside>
  );
};

export default ShopSidebarFilters;
