'use client';

import React from 'react';

const NewarrivalsHero = () => {
  return (
    <section
      aria-label="New Arrivals Hero Section"
      className="
        bg-gray-900 
        w-full 
        flex justify-center
        px-4 sm:px-8 md:px-12
        pt-12
        my-[-80px]
        mb-10
        "
      style={{ minHeight: 'auto' }}
    >
      <div
        className="
          max-w-[1000px]
          w-full
          text-center
          "
      >
        {/* Title */}
        <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Discover Our Latest Arrivals
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Explore the newest trends, exclusive collections, and must-have items updated regularly to keep your style fresh.
        </p>

        {/* Call to Action Button */}
        <a
          href="#new-arrivals"
          className="
            inline-block
            bg-yellow-400
            hover:bg-yellow-500
            text-gray-900
            font-semibold
            px-8 py-4
            rounded-xl
            shadow-md
            transition
            duration-300
            focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50
          "
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default NewarrivalsHero;
