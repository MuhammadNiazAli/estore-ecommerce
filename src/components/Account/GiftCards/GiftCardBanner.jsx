'use client';

import React from 'react';
import { FaGift } from 'react-icons/fa';

const GiftCardBanner = ({ onShopNow = () => {} }) => {
  return (
    <section
      aria-label="Special Gift Card Offer Banner"
      className="relative overflow-hidden rounded-3xl bg-white
        text-gray-900 shadow-xl max-w-[900px] mx-auto p-8 sm:p-12 lg:p-16 flex flex-col sm:flex-row items-center justify-between gap-6"
      role="region"
    >
      {/* Left Content */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="flex-shrink-0 rounded-full bg-black p-4 sm:p-6 shadow-lg">
          <FaGift
            className="text-4xl sm:text-5xl text-black"
            aria-hidden="true"
            focusable="false"
          />
        </div>
        <div className="min-w-0">
          <h2
            className="text-xl sm:text-2xl font-extrabold leading-tight truncate"
            title="Limited Time Offer: Get Extra 10% Value on Gift Cards!"
          >
            Limited Time Offer: Get Extra 10% Value on Gift Cards!
          </h2>
          <p
            className="mt-1 text-black text-sm sm:text-base truncate"
            title="Purchase now and enjoy more gift power for your loved ones."
          >
            Purchase now and enjoy more gift power for your loved ones.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex-shrink-0">
        <button
          type="button"
          onClick={onShopNow}
          className="px-6 py-3 bg-black text-black font-semibold rounded-full shadow-md
            hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black
            focus-visible:ring-offset-2 transition-colors duration-300 active:scale-[0.97] select-none"
          aria-label="Shop gift card offer"
        >
          Shop Now
        </button>
      </div>

      {/* Decorative Blur Circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-black rounded-full opacity-20 blur-3xl animate-pulse-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 bg-black rounded-full opacity-10 blur-4xl animate-pulse-slower"
      />
    </section>
  );
};

export default GiftCardBanner;
