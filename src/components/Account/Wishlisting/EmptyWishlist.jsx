'use client';

import React from 'react';
import { FiHeart } from 'react-icons/fi';

const EmptyWishlist = ({ onShopNow }) => {
  return (
    <div className="bg-gray-900 text-yellow-400 rounded-xl max-w-lg mx-auto p-10 flex flex-col items-center justify-center gap-6 text-center">
      <FiHeart className="text-yellow-400 w-16 h-16 animate-pulse" aria-hidden="true" />
      
      <h2 className="text-3xl font-bold text-yellow-400">Your Wishlist is Empty</h2>
      
      <p className="text-yellow-300 max-w-xs">
        Looks like you haven’t added any items to your wishlist yet.
        Start exploring and add your favorite products!
      </p>
      
      <button
        onClick={onShopNow}
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 transition rounded-md px-6 py-3 font-semibold text-gray-900"
        aria-label="Start shopping now"
      >
        Shop Now
      </button>
    </div>
  );
};

export default EmptyWishlist;
