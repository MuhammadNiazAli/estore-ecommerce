'use client';

import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartEmpty = ({ onContinueShopping }) => {
  return (
    <div className="w-full bg-white text-gray-900 flex justify-center px-4 sm:px-6 py-16 min-h-[300px]">
      <div className="max-w-[1000px] w-full flex flex-col items-center text-center gap-6">
        <ShoppingCartIcon className="w-20 h-20 text-black opacity-70" />

        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          Your Cart is Empty
        </h2>
        <p className="text-gray-700 max-w-md">
          Looks like you haven’t added any items to your cart yet. Start shopping now and find
          something you love!
        </p>

        <button
          onClick={onContinueShopping}
          className="mt-4 px-8 py-3 bg-black hover:bg-black text-gray-900 font-semibold rounded-full transition shadow-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
