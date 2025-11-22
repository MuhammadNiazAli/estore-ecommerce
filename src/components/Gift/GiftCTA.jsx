'use client';

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const GiftCTA = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-6 sm:px-12 rounded-lg shadow-2xl max-w-[1200px] mx-auto mt-12 text-center mb-[-100px]">
      <h2 className="text-yellow-400 text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
        Find the Perfect Gift Today
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
        Explore our curated collections and make every moment unforgettable.
      </p>
      <button
        type="button"
        className="inline-flex items-center gap-3 bg-yellow-400 text-gray-900 font-extrabold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        aria-label="Shop gifts now"
      >
        Shop Now
        <ArrowRightIcon className="w-6 h-6" />
      </button>
    </section>
  );
};

export default GiftCTA;
