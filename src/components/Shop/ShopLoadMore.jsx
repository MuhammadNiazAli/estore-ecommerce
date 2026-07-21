'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ShopLoadMore = ({ isLoading = false, onClick }) => {
  return (
    <div className="w-full py-12 px-6 bg-white text-center">
      <div className="max-w-[1000px] mx-auto">
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={onClick}
          disabled={isLoading}
          className="relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-br from-black via-gray-700 to-gray-900 text-gray-900 font-semibold text-base shadow-2xl hover:shadow-black/30 focus:outline-none focus:ring-4 focus:ring-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
      
          <motion.span
            className="absolute -inset-px rounded-full bg-gradient-to-r from-black to-gray-900 blur-md opacity-25 group-hover:opacity-60 transition-opacity duration-500"
            aria-hidden="true"
          />

          {isLoading && (
            <motion.svg
              className="w-5 h-5 animate-spin text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </motion.svg>
          )}

          {isLoading ? 'Loading more...' : 'View More Products'}
        </motion.button>
      </div>
    </div>
  );
};

export default ShopLoadMore;
