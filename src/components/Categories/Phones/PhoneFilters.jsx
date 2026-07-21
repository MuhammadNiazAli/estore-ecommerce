'use client';

import React, { useState } from 'react';
import { XCircle, SlidersHorizontal } from 'lucide-react';

const brands = ['All', 'Apple', 'Samsung', 'OnePlus', 'Google', 'Xiaomi', 'Oppo', 'Vivo'];
const operatingSystems = ['All', 'iOS', 'Android'];
const screenSizes = ['All', '4-5 inch', '5-6 inch', '6+ inch'];

const priceRanges = [
  { label: 'All', value: [0, 2000] },
  { label: '$0 - $300', value: [0, 300] },
  { label: '$300 - $600', value: [300, 600] },
  { label: '$600 - $1000', value: [600, 1000] },
  { label: '$1000+', value: [1000, 2000] },
];

const PhoneFilters = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [brandSearch, setBrandSearch] = useState('');
  const [osSearch, setOsSearch] = useState('');
  const [screenSizeSearch, setScreenSizeSearch] = useState('');

  const handleChange = (name, value) => {
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      brand: 'All',
      os: 'All',
      screenSize: 'All',
      priceRange: [0, 2000],
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
    setBrandSearch('');
    setOsSearch('');
    setScreenSizeSearch('');
  };

  const filterOptions = (options, search) =>
    options.filter((opt) => opt.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="bg-white my-10 p-6 rounded-xl shadow-lg max-w-[1100px] mx-auto text-gray-900">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <SlidersHorizontal className="w-6 h-6 text-black" />
          Filter Phones
        </h2>
        <button
  type="button"
  onClick={handleReset}
  className="flex items-center gap-1 text-xs bg-white hover:bg-gray-500 px-2 py-1 rounded-full transition"
>
  <XCircle className="w-3 h-3" />
  Reset All
</button>

      </header>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand */}
        <div>
          <label htmlFor="brand" className="block mb-2 font-semibold">
            Brand
          </label>
          <input
            type="text"
            placeholder="Search Brand..."
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="mb-2 w-full px-3 py-2 rounded bg-white border border-gray-200 text-gray-900 focus:ring-2 focus:ring-black"
          />
          <select
            id="brand"
            value={localFilters.brand}
            onChange={(e) => handleChange('brand', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-black"
          >
            {filterOptions(brands, brandSearch).map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* OS */}
        <div>
          <label htmlFor="os" className="block mb-2 font-semibold">
            Operating System
          </label>
          <input
            type="text"
            placeholder="Search OS..."
            value={osSearch}
            onChange={(e) => setOsSearch(e.target.value)}
            className="mb-2 w-full px-3 py-2 rounded bg-white border border-gray-200 focus:ring-2 focus:ring-black"
          />
          <select
            id="os"
            value={localFilters.os}
            onChange={(e) => handleChange('os', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-black"
          >
            {filterOptions(operatingSystems, osSearch).map((os) => (
              <option key={os} value={os}>
                {os}
              </option>
            ))}
          </select>
        </div>

        {/* Screen Size */}
        <div>
          <label htmlFor="screenSize" className="block mb-2 font-semibold">
            Screen Size
          </label>
          <input
            type="text"
            placeholder="Search Screen Size..."
            value={screenSizeSearch}
            onChange={(e) => setScreenSizeSearch(e.target.value)}
            className="mb-2 w-full px-3 py-2 rounded bg-white border border-gray-200 focus:ring-2 focus:ring-black"
          />
          <select
            id="screenSize"
            value={localFilters.screenSize}
            onChange={(e) => handleChange('screenSize', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-black"
          >
            {filterOptions(screenSizes, screenSizeSearch).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Slider */}
        <div className="md:col-span-3 mt-4">
          <label className="block mb-2 font-semibold">
            Price Range: <span className="text-black">${localFilters.priceRange[0]} - ${localFilters.priceRange[1]}</span>
          </label>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={localFilters.priceRange[1]}
            onChange={(e) =>
              setLocalFilters((prev) => ({
                ...prev,
                priceRange: [0, Number(e.target.value)],
              }))
            }
            className="w-full accent-black"
          />
        </div>

        {/* Buttons */}
        <div className="md:col-span-3 flex justify-center gap-4 mt-6 flex-wrap">
          <button
            type="submit"
            className="bg-black text-black px-8 py-2 rounded-full font-semibold shadow hover:bg-black transition text-sm"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-white text-gray-900 px-8 py-2 rounded-full font-semibold shadow hover:bg-gray-500 transition text-sm"
          >
            Reset Filters
          </button>
        </div>
      </form>

      {/* Active Filters Summary */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">Active Filters:</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(localFilters)
            .filter(([key, val]) => key !== 'priceRange' && val !== 'All')
            .map(([key, val]) => (
              <span
                key={key}
                className="bg-white text-black px-3 py-1 rounded-full text-xs flex items-center gap-2"
              >
                {key}: {val}
                <button
                  onClick={() => handleChange(key, 'All')}
                  className="text-gray-600 hover:text-black"
                  aria-label={`Remove ${val}`}
                >
                  ✕
                </button>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PhoneFilters;
