'use client';
import React from 'react';

const BestdealsNewsletter = () => {
  return (
    <section className="bg-white text-gray-900 w-full py-10 px-4 sm:px-6 flex justify-center">
      <div className="max-w-[1000px] w-full text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Stay Updated with <span className="text-amber-600">Best Deals</span>
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Subscribe to our newsletter and get exclusive offers directly in your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default BestdealsNewsletter;
