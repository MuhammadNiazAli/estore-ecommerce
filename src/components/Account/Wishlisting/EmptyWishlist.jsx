'use client';

import React from 'react';
import { FiHeart } from 'react-icons/fi';

const EmptyWishlist = ({ onShopNow }) => {
  return (
    <div className="bg-white text-black rounded-xl max-w-lg mx-auto p-10 flex flex-col items-center justify-center gap-6 text-center">
      <FiHeart className="text-black w-16 h-16 animate-pulse" aria-hidden="true" />
      
      <h2 className="text-3xl font-bold text-black">Your Wishlist is Empty</h2>
      
      <p className="text-black max-w-xs">
        Looks like you haven’t added any items to your wishlist yet.
        Start exploring and add your favorite products!
      </p>
      
      <button
        onClick={onShopNow}
        className="mt-4 bg-black hover:bg-black transition rounded-md px-6 py-3 font-semibold text-gray-900"
        aria-label="Start shopping now"
      >
        Shop Now
      </button>
    </div>
  );
};

export default EmptyWishlist;
