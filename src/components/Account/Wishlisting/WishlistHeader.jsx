'use client';

import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const WishlistHeader = ({ totalItems = 12, onClear }) => {
  return (
    <header className="bg-white text-amber-600 px-6 py-5 rounded-t-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl font-extrabold tracking-wide">My Wishlist</h1>
        <p className="text-amber-500 mt-1">
          You have <span className="font-semibold">{totalItems}</span> item
          {totalItems !== 1 ? 's' : ''}
        </p>
      </div>

      <button
        onClick={onClear}
        className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 px-4 py-2 rounded-md font-semibold transition text-black"
        aria-label="Clear all wishlist items"
      >
        <FiTrash2 size={20} />
        Clear All
      </button>
    </header>
  );
};

export default WishlistHeader;
