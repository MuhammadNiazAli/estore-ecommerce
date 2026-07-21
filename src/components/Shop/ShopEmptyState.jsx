'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ShopEmptyState = ({ onBrowseAll }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full min-h-[300px] flex flex-col justify-center items-center bg-gray-90s0 px-6 py-20 text-center text-gray-600 max-w-[1000px] mx-auto rounded-md shadow-inner border border-gray-200 mb-[-103px] my-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 sm:w-24 sm:h-24 mb-6 mx-auto text-black"
        fill="none"
        viewBox="0 0 64 64"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path d="M20 24h24l-4 20H24l-4-20z" />
        <circle cx="32" cy="40" r="4" />
        <path d="M16 24v-4a4 4 0 014-4h24a4 4 0 014 4v4" />
        <path d="M28 30h8" strokeLinecap="round" />
      </svg>

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        No Products Found
      </h2>

      <p className="mb-6 max-w-md text-sm sm:text-base text-gray-600">
        We couldn't find any items matching your search or filters. Try clearing them or explore our full collection.
      </p>

      <button
        onClick={onBrowseAll}
        className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-black text-gray-900 font-semibold shadow hover:bg-black transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/40"
      >
        Browse All Products
      </button>
    </motion.section>
  );
};

export default ShopEmptyState;
