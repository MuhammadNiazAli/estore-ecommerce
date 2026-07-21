'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCallFooterCTA = () => {
  return (
    <footer className="w-full bg-white flex justify-center items-center px-4 py-12 sm:px-6 mb-[-50px]">
      <div className="max-w-[1000px] w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Elevate Your Shopping Experience?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-xl mx-auto px-2 sm:px-0">
          Don’t miss out on our limited-time deals and premium product lineup. Shop now and enjoy exclusive perks.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-black font-semibold rounded-xl hover:bg-black transition-all duration-200 shadow-md w-full max-w-xs sm:w-auto">
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 border border-black text-black font-semibold rounded-xl hover:bg-black hover:text-black transition-all duration-200 w-full max-w-xs sm:w-auto">
            Contact Support
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ProductCallFooterCTA;
