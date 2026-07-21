'use client';

import React, { useState } from 'react';

const WishlistPagination = ({ totalPages = 5, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav
      aria-label="Wishlist pagination"
      className="bg-white text-gray-900 flex justify-center items-center space-x-2 py-3 px-4 rounded-md w-full max-w-md mx-auto"
    >
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`px-3 py-1 rounded-md font-semibold transition ${
          currentPage === 1
            ? 'text-black cursor-not-allowed'
            : 'hover:bg-black'
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          aria-current={currentPage === page ? 'page' : undefined}
          className={`px-3 py-1 rounded-md font-semibold transition ${
            currentPage === page
              ? 'bg-black text-gray-900 shadow-lg'
              : 'hover:bg-black text-black'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() =>
          currentPage < totalPages && handlePageClick(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`px-3 py-1 rounded-md font-semibold transition ${
          currentPage === totalPages
            ? 'text-black cursor-not-allowed'
            : 'hover:bg-black'
        }`}
      >
        Next
      </button>
    </nav>
  );
};

export default WishlistPagination;
