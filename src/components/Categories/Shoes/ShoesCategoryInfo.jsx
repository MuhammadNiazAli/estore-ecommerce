'use client'
import React from 'react';

const ShoesCategoryInfo = () => {
  return (
    <section className="bg-white text-amber-500 px-8 py-16 max-w-6xl mx-auto rounded-xl shadow-xl select-none">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
          Discover Our Premium Shoes Collection
        </h2>
        <p className="text-lg leading-relaxed text-amber-400 mb-8">
          Step into unmatched style and comfort with our exclusive range of shoes. Whether you're after sporty sneakers, classic loafers, or elegant boots, we deliver quality craftsmanship and exceptional deals tailored just for you.
        </p>
        <button
          type="button"
          className="inline-block bg-gradient-to-r from-amber-700 to-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md hover:brightness-110 transition"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default ShoesCategoryInfo;
