'use client';

import React from 'react';

const WishlistLoader = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl max-w-4xl mx-auto w-full space-y-6">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="flex items-center space-x-4 animate-pulse"
          role="status"
          aria-label="Loading wishlist item"
        >
          {/* Image placeholder */}
          <div className="w-20 h-20 bg-gray-700 rounded-md" />

          {/* Text placeholders */}
          <div className="flex-1 space-y-3 py-1">
            <div className="h-5 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-600 rounded w-1/2"></div>
            <div className="h-4 bg-gray-600 rounded w-1/4"></div>
          </div>

          {/* Button placeholder */}
          <div className="w-16 h-10 bg-gray-700 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default WishlistLoader;
