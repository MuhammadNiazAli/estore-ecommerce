'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPagination = ({ totalPages = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPages) pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav
      aria-label="Blog pagination"
      className="w-full flex justify-center mt-12 px-4 sm:px-6 lg:px-8"
    >
      <ul
        className="
          inline-flex items-center gap-2 max-w-[1000px]
          flex-wrap sm:flex-nowrap
          sm:overflow-visible overflow-x-auto
          scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-800
        "
      >
        {/* Previous Button */}
        <li>
          <button
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="
              flex items-center justify-center
              p-2 sm:p-2
              rounded-md border border-black
              text-black
              hover:bg-black hover:text-gray-900
              transition-colors
              disabled:opacity-40 disabled:cursor-not-allowed
              focus:outline-none focus:ring-2 focus:ring-black
              sm:text-base text-sm
            "
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
        </li>

        {/* Page Numbers */}
        {renderPageNumbers().map((page, idx) =>
          page === '...' ? (
            <li
              key={`ellipsis-${idx}`}
              className="px-2 text-black font-semibold select-none sm:text-sm text-xs"
            >
              ...
            </li>
          ) : (
            <li key={page}>
              <button
                onClick={() => handleClick(page)}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`
                  px-3 py-1.5 min-w-[36px]
                  rounded-md border border-black font-semibold
                  transition-colors
                  focus:outline-none focus:ring-2 focus:ring-black
                  ${
                    page === currentPage
                      ? 'bg-black text-gray-900 cursor-default'
                      : 'text-black hover:bg-black hover:text-gray-900'
                  }
                  sm:text-sm text-xs
                  sm:min-w-[36px] min-w-[28px]
                  sm:px-3 sm:py-1.5 px-2 py-1
                `}
                disabled={page === currentPage}
              >
                {page}
              </button>
            </li>
          )
        )}

        {/* Next Button */}
        <li>
          <button
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="
              flex items-center justify-center
              p-2 sm:p-2
              rounded-md border border-black
              text-black
              hover:bg-black hover:text-gray-900
              transition-colors
              disabled:opacity-40 disabled:cursor-not-allowed
              focus:outline-none focus:ring-2 focus:ring-black
              sm:text-base text-sm
            "
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPagination;
