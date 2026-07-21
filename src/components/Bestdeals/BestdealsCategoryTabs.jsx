'use client';
import React, { useState } from 'react';

const categories = [
  'All Deals',
  'Electronics',
  'Fashion',
  'Accessories',
  'Home & Living',
  'Beauty',
];

const BestdealsCategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('All Deals');

  return (
    <section className="bg-white text-gray-900 w-full flex justify-center py-6">
      <div className="w-full max-w-[1200px] px-4">
        {/* Tabs Wrapper */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2 sm:pb-3 justify-start md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              aria-pressed={activeTab === category}
              className={`whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300
                ${
                  activeTab === category
                    ? 'bg-amber-600 text-gray-900 shadow-lg scale-100'
                    : 'bg-white text-gray-700 hover:bg-gray-500 hover:text-gray-900'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Selected Tab Indicator */}
        <div className="text-center md:text-left mt-4 sm:mt-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Showing results for:{" "}
            <span className="text-amber-600 font-medium">{activeTab}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestdealsCategoryTabs;
