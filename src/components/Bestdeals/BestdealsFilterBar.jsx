'use client';
import React, { useState } from 'react';
import { List, Grid } from 'lucide-react';

const BestdealsFilterBar = () => {
  const [sortOption, setSortOption] = useState('Featured');
  const [viewMode, setViewMode] = useState('grid');

  return (
    <section className="bg-white text-gray-900 w-full flex justify-center py-4 px-4 sm:px-6">
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Sort Dropdown */}
        <div className="w-full md:w-auto">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 text-sm focus:outline-none focus:border-amber-600 w-full md:w-auto"
          >
            <option value="Featured">Featured</option>
            <option value="PriceLowHigh">Price: Low to High</option>
            <option value="PriceHighLow">Price: High to Low</option>
            <option value="Newest">Newest Arrivals</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <span>$0</span>
          <input
            type="range"
            min="0"
            max="1000"
            className="accent-amber-600 w-32 sm:w-40"
          />
          <span>$1000</span>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition ${
              viewMode === 'grid'
                ? 'bg-amber-600 text-gray-900'
                : 'bg-white hover:bg-gray-500'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition ${
              viewMode === 'list'
                ? 'bg-amber-600 text-gray-900'
                : 'bg-white hover:bg-gray-500'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>

        {/* Clear Filters */}
        <button className="text-amber-600 hover:text-amber-500 font-semibold text-sm">
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default BestdealsFilterBar; 