import React, { useState } from 'react';

const NewarrivalsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          aria-current={currentPage === i ? 'page' : undefined}
          className={`
            px-4 py-2 rounded-md font-semibold
            focus:outline-none focus:ring-4 focus:ring-amber-600
            transition duration-300
            ${
              currentPage === i
                ? 'bg-amber-700 text-gray-900 shadow-lg'
                : 'bg-white text-amber-600 hover:bg-amber-800 hover:text-amber-400'
            }
          `}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <nav
      aria-label="Pagination Navigation"
      className="w-full flex justify-center items-center gap-2 my-8 px-4"
    >
      {/* Mobile Prev */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className={`
          px-4 py-2 rounded-md font-semibold
          focus:outline-none focus:ring-4 focus:ring-amber-600
          transition duration-300
          ${
            currentPage === 1
              ? 'bg-white text-amber-800 cursor-not-allowed'
              : 'bg-white text-amber-600 hover:bg-amber-800 hover:text-amber-400'
          }
          sm:hidden
        `}
      >
        Prev
      </button>

      {/* Desktop Full Pagination */}
      <div className="hidden sm:flex gap-2">{renderPageNumbers()}</div>

      {/* Mobile Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className={`
          px-4 py-2 rounded-md font-semibold
          focus:outline-none focus:ring-4 focus:ring-amber-600
          transition duration-300
          ${
            currentPage === totalPages
              ? 'bg-white text-amber-800 cursor-not-allowed'
              : 'bg-white text-amber-600 hover:bg-amber-800 hover:text-amber-400'
          }
          sm:hidden
        `}
      >
        Next
      </button>
    </nav>
  );
};

export default NewarrivalsPagination;
