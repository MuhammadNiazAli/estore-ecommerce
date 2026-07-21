'use client';

import React, { useState } from 'react';

const categories = [
  'Birthday',
  'Anniversary',
  'Weddings',
  'Baby Shower',
  'Thank You',
  'Graduation',
  'Holiday',
  'Corporate',
];

const ratings = [5, 4, 3, 2, 1];

export default function GiftFilterSidebar() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 200]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRating(null);
    setPriceRange([0, 200]);
  };

  return (
    <aside
      className="w-full max-w-[300px] bg-white rounded-3xl p-6 text-gray-900 shadow-2xl flex-shrink-0"
      aria-label="Gift Filters Sidebar"
    >
      <h2 className="text-amber-600 text-2xl font-bold mb-6 tracking-tight">
         Filters
      </h2>

      {/* Categories */}
      <section className="mb-8">
        <h3 className="text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wide">
          Categories
        </h3>
        <ul className="max-h-40 overflow-y-auto pr-2 custom-scrollbar transition-all duration-500 ease-in-out space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <label
                htmlFor={`cat-${cat}`}
                className="flex items-center gap-2 cursor-pointer hover:text-amber-500 transition"
              >
                <input
                  type="checkbox"
                  id={`cat-${cat}`}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 rounded text-amber-600 bg-white border-amber-700 focus:ring-amber-600"
                />
                <span>{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Ratings */}
      <section className="mb-8">
        <h3 className="text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wide">
          Customer Rating
        </h3>
        <ul className="space-y-2">
          {ratings.map((r) => (
            <li key={r}>
              <label
                htmlFor={`rating-${r}`}
                className="flex items-center gap-2 cursor-pointer hover:text-amber-500 transition"
              >
                <input
                  type="radio"
                  id={`rating-${r}`}
                  name="rating"
                  checked={selectedRating === r}
                  onChange={() => setSelectedRating(r)}
                  className="w-4 h-4 rounded text-amber-600 bg-white border-amber-700 focus:ring-amber-600"
                />
                <span>
                  {r} Star{r > 1 ? 's' : ''}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Price Range */}
      <section className="mb-8">
        <h3 className="text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wide">
          Price Range (€)
        </h3>
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="number"
            min={0}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([
                Math.min(Number(e.target.value), priceRange[1]),
                priceRange[1],
              ])
            }
            className="w-20 rounded bg-white border border-amber-700/50 p-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
            aria-label="Minimum price"
          />
          <span>–</span>
          <input
            type="number"
            min={priceRange[0]}
            max={200}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([
                priceRange[0],
                Math.max(Number(e.target.value), priceRange[0]),
              ])
            }
            className="w-20 rounded bg-white border border-amber-700/50 p-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
            aria-label="Maximum price"
          />
        </div>
      </section>

      {/* Clear Filters Button */}
      <button
        type="button"
        onClick={clearFilters}
        className="w-full bg-amber-600 text-gray-900 font-bold py-2 rounded-full hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-700 transition"
        aria-label="Clear all filters"
      >
        Clear Filters
      </button>
    </aside>
  );
}
