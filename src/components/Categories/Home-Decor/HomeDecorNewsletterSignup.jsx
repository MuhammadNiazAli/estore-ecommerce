"use client";
import React from "react";

const HomeDecorNewsletterSignup = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-12 px-4 flex justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Stay Inspired with Home Décor Trends
        </h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg">
          Subscribe to our newsletter and get the latest design tips, exclusive
          offers, and style inspirations straight to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="bg-black hover:bg-black text-gray-900 font-semibold px-6 py-3 rounded-lg transition duration-300 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        {/* Privacy note */}
        <p className="text-sm text-gray-600 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default HomeDecorNewsletterSignup;
