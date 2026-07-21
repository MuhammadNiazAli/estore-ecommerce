'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const options = [

  { value: 'popularity', label: 'Sort by Popularity', link: '/shop?sort=popularity' },
  { value: 'newest', label: 'Sort by Newest', link: '/shop?sort=newest' },
  { value: 'priceLowToHigh', label: 'Price: Low to High', link: '/shop?sort=priceLowToHigh' },
  { value: 'priceHighToLow', label: 'Price: High to Low', link: '/shop?sort=priceHighToLow' },
  { value: 'rating', label: 'Sort by Rating', link: '/shop?sort=rating' },

  { value: 'categoryClothing', label: 'Category: Clothing', link: '/shop/category/clothing' },
  { value: 'categoryAccessories', label: 'Category: Accessories', link: '/shop/category/accessories' },
  { value: 'categoryElectronics', label: 'Category: Electronics', link: '/shop/category/electronics' },
  { value: 'categoryShoes', label: 'Category: Shoes', link: '/shop/category/shoes' },
  { value: 'categoryHome', label: 'Category: Home & Garden', link: '/shop/category/home-garden' },


  { value: 'categoryBooks', label: 'Category: Books', link: '/shop/category/books' },
  { value: 'categoryBeauty', label: 'Category: Beauty & Personal Care', link: '/shop/category/beauty' },
  { value: 'categorySports', label: 'Category: Sports & Outdoors', link: '/shop/category/sports' },
  { value: 'categoryToys', label: 'Category: Toys & Games', link: '/shop/category/toys' },
  { value: 'categoryAutomotive', label: 'Category: Automotive', link: '/shop/category/automotive' },
  { value: 'categoryFurniture', label: 'Category: Furniture', link: '/shop/category/furniture' },
  { value: 'categoryWatches', label: 'Category: Watches', link: '/shop/category/watches' },
  { value: 'categoryBags', label: 'Category: Bags & Luggage', link: '/shop/category/bags' },
  { value: 'categoryFitness', label: 'Category: Fitness Equipment', link: '/shop/category/fitness' },
  { value: 'categoryGroceries', label: 'Category: Groceries', link: '/shop/category/groceries' },

 
  { value: 'brandNike', label: 'Brand: Nike', link: '/shop/brand/nike' },
  { value: 'brandAdidas', label: 'Brand: Adidas', link: '/shop/brand/adidas' },
  { value: 'brandApple', label: 'Brand: Apple', link: '/shop/brand/apple' },
  { value: 'brandSamsung', label: 'Brand: Samsung', link: '/shop/brand/samsung' },
  { value: 'brandSony', label: 'Brand: Sony', link: '/shop/brand/sony' },
  { value: 'brandMicrosoft', label: 'Brand: Microsoft', link: '/shop/brand/microsoft' },
  { value: 'brandGoogle', label: 'Brand: Google', link: '/shop/brand/google' },
  { value: 'brandLG', label: 'Brand: LG', link: '/shop/brand/lg' },
  { value: 'brandUnderArmour', label: 'Brand: Under Armour', link: '/shop/brand/under-armour' },
  { value: 'brandZara', label: 'Brand: Zara', link: '/shop/brand/zara' },
  { value: 'brandHnM', label: 'Brand: H&M', link: '/shop/brand/hm' },
  { value: 'brandAsus', label: 'Brand: ASUS', link: '/shop/brand/asus' },
  { value: 'brandDell', label: 'Brand: Dell', link: '/shop/brand/dell' },


  { value: 'discounted', label: 'Discounted Items', link: '/shop?filter=discounted' },
  { value: 'freeShipping', label: 'Free Shipping', link: '/shop?filter=freeShipping' },
  { value: 'bestSellers', label: 'Best Sellers', link: '/shop?filter=bestSellers' },
  { value: 'newArrivals', label: 'New Arrivals', link: '/shop?filter=newArrivals' },
  { value: 'mostReviewed', label: 'Most Reviewed', link: '/shop?filter=mostReviewed' },
  { value: 'topRated', label: 'Top Rated', link: '/shop?filter=topRated' },
  { value: 'limitedEdition', label: 'Limited Edition', link: '/shop?filter=limitedEdition' },
  { value: 'exclusiveOffers', label: 'Exclusive Offers', link: '/shop?filter=exclusiveOffers' },
  { value: 'holidayDeals', label: 'Holiday Deals', link: '/shop?filter=holidayDeals' },
  { value: 'bundleDeals', label: 'Bundle Deals', link: '/shop?filter=bundleDeals' },
  { value: 'clearance', label: 'Clearance Sale', link: '/shop?filter=clearance' },


  { value: 'priceUnder50', label: 'Price: Under $50', link: '/shop?price=under-50' },
  { value: 'price50to100', label: 'Price: $50 to $100', link: '/shop?price=50-100' },
  { value: 'price100to200', label: 'Price: $100 to $200', link: '/shop?price=100-200' },
  { value: 'priceAbove200', label: 'Price: Above $200', link: '/shop?price=above-200' },

 
  { value: 'forMen', label: 'For Men', link: '/shop/for/men' },
  { value: 'forWomen', label: 'For Women', link: '/shop/for/women' },
  { value: 'forKids', label: 'For Kids', link: '/shop/for/kids' },
  { value: 'forHome', label: 'For Home Use', link: '/shop/for/home' },

 
  { value: 'inStock', label: 'In Stock Only', link: '/shop?availability=in-stock' },
  { value: 'preOrder', label: 'Pre-order Products', link: '/shop?availability=preorder' },
  { value: 'backInStock', label: 'Back in Stock', link: '/shop?filter=backInStock' },


  { value: 'ecoFriendly', label: 'Eco-Friendly', link: '/shop?tag=eco' },
  { value: 'handmade', label: 'Handmade Items', link: '/shop?tag=handmade' },
  { value: 'luxury', label: 'Luxury Picks', link: '/shop?tag=luxury' },
  { value: 'editorChoice', label: 'Editor\'s Choice', link: '/shop?filter=editorChoice' },
];


const ShopSortBar = ({ onSortChange }) => {
  const [selected, setSelected] = useState(options[0].value);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const toggleRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
    const selectedOption = options.find((opt) => opt.value === value);
    if (onSortChange) onSortChange(selectedOption?.value, selectedOption?.link);
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === selected)?.label ?? 'Select';

  return (
    <section className="w-full bg-white px-6 py-4 select-none relative">
      <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 sm:gap-0 relative">
        <label
          htmlFor="sort"
          className="hidden sm:block text-gray-600 font-semibold mr-4 select-none"
        >
          Sort Products:
        </label>

        {isMobile ? (
          <select
            id="sort"
            className="block w-full sm:w-72 bg-white text-gray-700 px-5 py-3 pr-10 rounded-md shadow-md
              focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer transition duration-200 hover:bg-gray-500"
            value={selected}
            onChange={(e) => {
              const value = e.target.value;
              setSelected(value);
              const selectedOption = options.find((opt) => opt.value === value);
              if (onSortChange) onSortChange(selectedOption?.value, selectedOption?.link);
            }}
          >
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        ) : (
          <>
            <button
              ref={toggleRef}
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="relative w-72 bg-white text-gray-700 px-5 py-3 pr-10 rounded-md shadow-md
                focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer text-left
                hover:bg-gray-500 flex justify-between items-center"
            >
              <span>{selectedLabel}</span>
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                  open ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
              </svg>
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  ref={containerRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute z-50 bg-white/60 backdrop-blur-md rounded-md shadow-lg p-4 max-w-[800px] w-full max-h-[300px] overflow-auto
                    top-full left-1/2 -translate-x-1/2 mt-2 grid grid-cols-5 gap-x-4 gap-y-6
                    scrollbar-thin scrollbar-thumb-gray-950 scrollbar-track-transparent"
                >
                  {options.map(({ value, label }) => {
                    const isSelected = value === selected;
                    return (
                      <li
                        key={value}
                        role="option"
                        aria-selected={isSelected}
                        tabIndex={0}
                        onClick={() => handleSelect(value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelect(value);
                          }
                        }}
                        className={`cursor-pointer rounded-md px-3 py-3 text-sm font-medium
                          transition-all duration-200
                          ${
                            isSelected
                              ? 'bg-amber-500 text-gray-900 font-bold'
                              : 'text-gray-700 hover:bg-amber-400 hover:text-gray-900'
                          }
                          focus:outline-none focus:ring-2 focus:ring-amber-400`}
                      >
                        {label}
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
};

export default ShopSortBar;
