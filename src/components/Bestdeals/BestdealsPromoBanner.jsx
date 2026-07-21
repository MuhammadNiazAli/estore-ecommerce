'use client';
import React from 'react';

const BestdealsPromoBanner = () => {
  return (
    <section className="bg-black text-gray-900 w-full flex justify-center py-4 px-4 sm:px-6">
      <div className="max-w-[1000px] w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left flex-1 min-w-0">
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight">
            Flash Sale! Up to{' '}
            <span className="underline decoration-gray-900">70% OFF</span> on selected items.
          </h2>
          <p className="text-gray-900/80 mt-1 text-sm sm:text-base leading-snug">
            Limited time only. Grab your favorites before they're gone!
          </p>
        </div>
        <a
          href="#shop-now"
          className="inline-block bg-white text-black font-semibold rounded-lg px-6 py-3 text-center hover:bg-gray-500 transition duration-300 whitespace-nowrap flex-shrink-0"
          aria-label="Shop Now - Flash Sale"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default BestdealsPromoBanner;
