'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DOTS = '...';

function paginationRange(currentPage, totalPageCount, siblingCount = 1) {
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPageCount) {
    return Array.from({ length: totalPageCount }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, DOTS, totalPageCount];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPageCount - rightItemCount + 1 + i
    );
    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }
}

const ReviewPagination = ({ totalPages = 20, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (onPageChange) onPageChange(currentPage);
    if (paginationRef.current) paginationRef.current.focus();
  }, [currentPage, onPageChange]);

  const onNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const onPrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const onPageClick = (page) => {
    if (page !== DOTS) setCurrentPage(page);
  };

  const paginationRangeItems = paginationRange(currentPage, totalPages, 1);

  return (
    <nav
      aria-label="Reviews Pagination"
      className="w-full bg-white py-6 px-4 flex justify-center my-[-10px] mb-[-20px]"
      tabIndex={-1}
      ref={paginationRef}
    >
      <ul
        className="
          flex items-center gap-3
          bg-white px-5 py-3 rounded-3xl shadow-lg border border-gray-200
          max-w-[700px] w-full
          overflow-x-auto scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-700
          sm:justify-center
        "
      >
       
        <li>
          <button
            onClick={onPrevious}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
            aria-label="Previous Page"
            className={`
              flex items-center justify-center w-12 h-10 rounded-full font-semibold
              transition-colors duration-200
              ${currentPage === 1
                ? 'text-gray-600 bg-white cursor-not-allowed'
                : 'text-amber-500 hover:bg-amber-600 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-400'}
            `}
          >
            ←
          </button>
        </li>

     
        {paginationRangeItems.map((pageNumber, idx) => {
          const isDots = pageNumber === DOTS;
          const isActive = pageNumber === currentPage;

          return (
            <li key={isDots ? `dots-${idx}` : pageNumber}>
              {isDots ? (
                <span className="px-3 text-lg text-gray-500 select-none cursor-default" aria-hidden="true">
                  &hellip;
                </span>
              ) : (
                <button
                  onClick={() => onPageClick(pageNumber)}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={isActive ? `Page ${pageNumber}, current page` : `Go to page ${pageNumber}`}
                  className={`
                    relative w-10 h-10 flex items-center justify-center font-semibold
                    rounded-full transition-colors duration-300
                    focus:outline-none focus:ring-4 focus:ring-amber-400
                    ${isActive
                      ? 'text-gray-900 bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}
                  `}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="activePage"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 z-0"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{pageNumber}</span>
                </button>
              )}
            </li>
          );
        })}

      
        <li>
          <button
            onClick={onNext}
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
            aria-label="Next Page"
            className={`
              flex items-center justify-center w-12 h-10 rounded-full font-semibold
              transition-colors duration-200
              ${currentPage === totalPages
                ? 'text-gray-600 bg-white cursor-not-allowed'
                : 'text-amber-500 hover:bg-amber-600 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-400'}
            `}
          >
            →
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ReviewPagination;
