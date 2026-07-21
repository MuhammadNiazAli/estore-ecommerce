'use client';

import React, { useState } from 'react';

const LaptopPagination = ({ totalPages = 5, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    onPageChange?.(page); // Optional external callback
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav
      className="max-w-[1000px] mx-auto px-4 py-6 flex items-center justify-center gap-1 sm:gap-2 flex-wrap my-[-15px] mb-[-40px]"
      aria-label="Pagination"
    >
      {/* Prev Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border transition font-medium 
          ${currentPage === 1
            ? 'bg-white text-gray-500 cursor-not-allowed'
            : 'bg-white text-gray-900 hover:bg-amber-800'}
        `}
        aria-label="Previous Page"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 border rounded-md font-medium transition
            ${
              page === currentPage
                ? 'bg-amber-800 text-gray-900'
                : 'bg-white text-gray-700 hover:bg-gray-500 hover:text-gray-900'
            }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border transition font-medium
          ${currentPage === totalPages
            ? 'bg-white text-gray-500 cursor-not-allowed'
            : 'bg-white text-gray-900 hover:bg-amber-800'}
        `}
        aria-label="Next Page"
      >
        Next
      </button>
    </nav>
  );
};

export default LaptopPagination;
