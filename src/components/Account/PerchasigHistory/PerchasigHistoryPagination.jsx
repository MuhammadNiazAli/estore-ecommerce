'use client';

import React, { useState } from 'react';

const PerchasigHistoryPagination = () => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <nav
      aria-label="Pagination for purchase history"
      className="overflow-x-auto md:overflow-visible"
    >
      <div
        className="
          inline-flex flex-nowrap items-center gap-4
          py-4 px-6 min-w-full select-none
          md:flex md:flex-wrap md:justify-center md:min-w-0
        "
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={isFirst}
          aria-label="Go to previous page"
          className={`
            rounded-full font-semibold
            px-7 py-3 text-base min-w-[96px] flex justify-center items-center
            transition-all duration-300
            ${
              isFirst
                ? 'bg-yellow-950 text-yellow-600 cursor-not-allowed shadow-none'
                : 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:shadow-lg active:scale-95'
            }
            focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
          `}
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Go to page ${page}`}
              className={`
                rounded-full font-semibold
                px-7 py-3 text-base min-w-[96px] flex justify-center items-center
                transition-all duration-300
                ${
                  isActive
                    ? 'bg-yellow-500 text-yellow-900 shadow-xl scale-105'
                    : 'bg-yellow-700 text-yellow-300 hover:bg-yellow-400 hover:text-yellow-900 active:scale-95'
                }
                focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
              `}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={isLast}
          aria-label="Go to next page"
          className={`
            rounded-full font-semibold
            px-7 py-3 text-base min-w-[96px] flex justify-center items-center
            transition-all duration-300
            ${
              isLast
                ? 'bg-yellow-950 text-yellow-600 cursor-not-allowed shadow-none'
                : 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:shadow-lg active:scale-95'
            }
            focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
          `}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default PerchasigHistoryPagination;
