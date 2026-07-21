'use client';

import React, { useState } from 'react';

const filterOptions = [
  { value: 'all', label: 'All Items' },
  { value: 'in-stock', label: 'In Stock' },
  { value: 'out-of-stock', label: 'Out of Stock' },
  { value: 'discounted', label: 'Discounted' },
];

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'rating-high-low', label: 'Rating: High to Low' },
];

const WishlistFilterSort = ({ onFilterChange, onSortChange }) => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (onFilterChange) onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    if (onSortChange) onSortChange(e.target.value);
  };

  return (
    <div className="bg-white text-amber-600 max-w-4xl mx-auto rounded-b-xl px-6 py-4 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-between">
      {/* Filter */}
      <label className="flex flex-col text-sm sm:text-base font-semibold w-full sm:w-auto">
        Filter by:
        <select
          aria-label="Filter wishlist items"
          value={filter}
          onChange={handleFilterChange}
          className="mt-1 bg-white text-amber-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
        >
          {filterOptions.map(({ value, label }) => (
            <option key={value} value={value} className="bg-white text-amber-600">
              {label}
            </option>
          ))}
        </select>
      </label>

      {/* Sort */}
      <label className="flex flex-col text-sm sm:text-base font-semibold w-full sm:w-auto">
        Sort by:
        <select
          aria-label="Sort wishlist items"
          value={sort}
          onChange={handleSortChange}
          className="mt-1 bg-white text-amber-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
        >
          {sortOptions.map(({ value, label }) => (
            <option key={value} value={value} className="bg-white text-amber-600">
              {label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default WishlistFilterSort;
