'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Clothing', 'Accessories', 'Electronics'];

const ShopFilters = ({ onFilterChange }) => {
  const [active, setActive] = useState('All');

  const handleClick = (category) => {
    setActive(category);
    if (onFilterChange) onFilterChange(category);
  };

  return (
    <div className="w-full bg-white py-5 px-4 border-b border-gray-200">
      <div className="max-w-[1000px] mx-auto flex justify-center flex-wrap gap-3 sm:gap-4">
        {categories.map((category) => {
          const isActive = active === category;
          return (
            <motion.button
              key={category}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() => handleClick(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
                ${
                  isActive
                    ? 'bg-amber-400 text-gray-900 shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-amber-400 hover:text-gray-900'
                }
                focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1`}
            >
              {category}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ShopFilters;
