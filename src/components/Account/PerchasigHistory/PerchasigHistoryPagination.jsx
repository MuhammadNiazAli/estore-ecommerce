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
                ? 'bg-black text-black cursor-not-allowed shadow-none'
                : 'bg-black text-black hover:bg-black hover:shadow-lg active:scale-95'
            }
            focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2
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
                    ? 'bg-black text-black shadow-xl scale-105'
                    : 'bg-black text-black hover:bg-black hover:text-black active:scale-95'
                }
                focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2
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
                ? 'bg-black text-black cursor-not-allowed shadow-none'
                : 'bg-black text-black hover:bg-black hover:shadow-lg active:scale-95'
            }
            focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2
          `}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default PerchasigHistoryPagination;
