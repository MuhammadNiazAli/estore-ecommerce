'use client';

import React from 'react';
import { motion } from 'framer-motion';

const generatePages = (currentPage, totalPages) => {
  const delta = 2; 
  const range = [];
  const rangeWithDots = [];
  let lastPage = 0;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || 
      i === totalPages || 
      (i >= currentPage - delta && i <= currentPage + delta) 
    ) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (lastPage) {
      if (i - lastPage === 2) {
   
        rangeWithDots.push(lastPage + 1);
      } else if (i - lastPage > 2) {
   
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    lastPage = i;
  }

  return rangeWithDots;
};

const ShopPagination = ({
  totalPages = 10,
  currentPage = 1,
  onPageChange = () => {},
}) => {
  if (totalPages <= 1) return null;

  const pages = generatePages(currentPage, totalPages);

  const handleKeyDown = (e, page) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onPageChange(page);
    }
  };

  return (
    <nav
      aria-label="Pagination Navigation"
      className="w-full bg-white py-6 px-4"
    >
      <div className="max-w-[1000px] mx-auto flex justify-center flex-wrap items-center gap-3">
 
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
          aria-label="Go to first page"
          className={`min-w-[44px] px-4 py-2 rounded-lg font-semibold transition
            ${
              currentPage === 1
                ? 'bg-white text-gray-500 cursor-not-allowed'
                : 'bg-amber-400 text-gray-900 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400'
            }`}
        >
          « First
        </motion.button>

      
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
          aria-label="Go to previous page"
          className={`min-w-[44px] px-4 py-2 rounded-lg font-semibold transition
            ${
              currentPage === 1
                ? 'bg-white text-gray-500 cursor-not-allowed'
                : 'bg-amber-400 text-gray-900 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400'
            }`}
        >
          ← Prev
        </motion.button>

    
        {pages.map((page, idx) =>
          page === '...' ? (
            <span
              key={`ellipsis-${idx}`}
              className="px-4 py-2 text-gray-500 font-medium select-none"
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <motion.button
              key={page}
              whileTap={{ scale: 0.96 }}
              onClick={() => onPageChange(page)}
              onKeyDown={(e) => handleKeyDown(e, page)}
              aria-current={page === currentPage ? 'page' : undefined}
              tabIndex={page === currentPage ? -1 : 0}
              className={`min-w-[44px] px-4 py-2 rounded-md font-semibold transition
                focus:outline-none focus:ring-2 focus:ring-amber-400
                ${
                  page === currentPage
                    ? 'bg-amber-500 text-gray-900 cursor-default pointer-events-none'
                    : 'bg-white text-gray-700 hover:bg-amber-400 hover:text-gray-900'
                }`}
            >
              {page}
            </motion.button>
          )
        )}

 
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          aria-disabled={currentPage === totalPages}
          aria-label="Go to next page"
          className={`min-w-[44px] px-4 py-2 rounded-lg font-semibold transition
            ${
              currentPage === totalPages
                ? 'bg-white text-gray-500 cursor-not-allowed'
                : 'bg-amber-400 text-gray-900 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400'
            }`}
        >
          Next →
        </motion.button>

      
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-disabled={currentPage === totalPages}
          aria-label="Go to last page"
          className={`min-w-[44px] px-4 py-2 rounded-lg font-semibold transition
            ${
              currentPage === totalPages
                ? 'bg-white text-gray-500 cursor-not-allowed'
                : 'bg-amber-400 text-gray-900 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400'
            }`}
        >
          Last »
        </motion.button>
      </div>
    </nav>
  );
};

export default ShopPagination;
