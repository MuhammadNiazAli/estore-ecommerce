'use client'

import React from 'react';

const sortOptions = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'priceLowHigh', label: 'Price: Low to High' },
  { value: 'priceHighLow', label: 'Price: High to Low' },
  { value: 'rating', label: 'Rating' },
];

const LaptopSortBar = ({ sortOption = 'popularity', onSortChange }) => {
  const handleChange = (e) => {
    onSortChange?.(e.target.value);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4">
      <div className="flex justify-end items-center mb-6">
        <label
          htmlFor="sort"
          className="mr-2 text-gray-300 font-medium select-none"
        >
          Sort By:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={handleChange}
          className="bg-gray-800 text-gray-100 p-2 rounded-md cursor-pointer"
        >
          {sortOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LaptopSortBar;
