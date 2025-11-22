'use client';

import React from 'react';
import Link from 'next/link';

const CartStickyFooter = () => {
  const total = 179.97; // You can make this dynamic via props/context

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-950/60 backdrop-blur-md border-t border-gray-800 z-50 my-[-2px]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 py-2 sm:py-3 gap-2 sm:gap-4 text-xs sm:text-sm">
        
        {/* Left: Continue Shopping */}
        <Link
          href="/shop"
          className="text-gray-400 hover:text-white transition underline underline-offset-2 whitespace-nowrap"
        >
          ← Continue Shopping
        </Link>

        {/* Center: Total */}
        <div className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">
          Total:&nbsp;
          <span className="text-yellow-400 font-semibold text-sm sm:text-base">
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Right: Checkout Button */}
        <Link
          href="/checkout"
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold rounded-md transition shadow text-center w-full sm:w-auto py-2 px-4 sm:py-2.5 sm:px-5 text-xs sm:text-sm"
        >
          Secure Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartStickyFooter;
