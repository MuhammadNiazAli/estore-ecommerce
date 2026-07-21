'use client';

import React from 'react';
import { FiTrash2, FiShare2, FiDownload } from 'react-icons/fi';

const WishlistActions = ({ 
  onClearAll, 
  onShare, 
  onExport 
}) => {
  return (
    <div className="bg-white px-6 py-4 max-w-4xl mx-auto rounded-b-xl flex flex-wrap gap-4 justify-center sm:justify-start">
      <button
        onClick={onClearAll}
        className="flex items-center gap-2 bg-black hover:bg-black text-gray-900 font-semibold px-5 py-2 rounded-md transition"
        aria-label="Clear all wishlist items"
        type="button"
      >
        <FiTrash2 size={20} />
        Clear All
      </button>

      <button
        onClick={onShare}
        className="flex items-center gap-2 bg-black hover:bg-black text-gray-900 font-semibold px-5 py-2 rounded-md transition"
        aria-label="Share wishlist"
        type="button"
      >
        <FiShare2 size={20} />
        Share Wishlist
      </button>

      {onExport && (
        <button
          onClick={onExport}
          className="flex items-center gap-2 bg-black hover:bg-black text-gray-900 font-semibold px-5 py-2 rounded-md transition"
          aria-label="Export wishlist"
          type="button"
        >
          <FiDownload size={20} />
          Export
        </button>
      )}
    </div>
  );
};

export default WishlistActions;
