"use client";
import React from "react";

const PhoneAccessoriesNewsletterSignup = () => {
  return (
    <section className="bg-white text-amber-600 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Stay Updated on the Latest Accessories
        </h2>
        <p className="text-amber-500 mb-8 text-lg">
          Get exclusive deals, product launches, and phone accessory tips delivered straight to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg bg-white border border-amber-700 text-amber-400 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-700 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition duration-300 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        {/* Features List */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-amber-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-amber-700 rounded-full"></span> No spam, ever
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-amber-700 rounded-full"></span> Exclusive discounts
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-amber-700 rounded-full"></span> Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneAccessoriesNewsletterSignup;
