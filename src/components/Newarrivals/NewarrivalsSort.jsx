import React, { useState } from 'react';

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'priceLow', label: 'Price: Low to High' },
  { value: 'priceHigh', label: 'Price: High to Low' },
  { value: 'popularity', label: 'Popularity' },
];

const NewarrivalsSort = () => {
  const [selected, setSelected] = useState('newest');

  const handleChange = (e) => {
    setSelected(e.target.value);
    // Add your sorting logic here or call props callback
  };

  return (
    <section className="w-full max-w-sm mx-auto my-6 px-4">
      <label
        htmlFor="sort"
        className="block mb-2 text-yellow-400 font-semibold text-lg tracking-wide"
      >
        Sort By:
      </label>
      <select
        id="sort"
        value={selected}
        onChange={handleChange}
        className="
          w-full
          bg-gray-800
          text-yellow-300
          border border-yellow-500
          rounded-lg
          px-5 py-3
          shadow-md
          appearance-none
          focus:outline-none
          focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-60
          transition
          duration-300
          cursor-pointer
          hover:bg-gray-700
          sm:text-base text-sm
        "
        aria-label="Sort products"
      >
        {sortOptions.map(({ value, label }) => (
          <option key={value} value={value} className="text-gray-900">
            {label}
          </option>
        ))}
      </select>
    </section>
  );
};

export default NewarrivalsSort;
