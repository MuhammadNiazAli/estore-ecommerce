'use client';

import React from 'react';
import { FaGift, FaRegCreditCard, FaDollarSign } from 'react-icons/fa';

const giftCardFeatures = [
  { icon: <FaGift className="text-black text-sm" />, label: 'Various Designs' },
  { icon: <FaRegCreditCard className="text-black text-sm" />, label: 'Flexible Amounts' },
  { icon: <FaDollarSign className="text-black text-sm" />, label: 'Instant Delivery' },
];

const GiftCardHero = () => {
  return (
    <section
      aria-label="Explore our Gift Cards"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 
        bg-white text-gray-900 
        rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Discover Our{' '}
            <span className="text-black underline decoration-black decoration-4 underline-offset-4">
              Gift Cards
            </span>
            <br />
            Perfect for Every Occasion
          </h1>

          <p className="text-black text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Give the gift of choice with our beautifully designed gift cards — flexible, easy to buy, and redeemable anytime.
          </p>

          {/* Features List */}
          <ul className="flex flex-col sm:flex-row justify-start gap-4 text-xs sm:text-sm text-black font-medium max-w-xs mx-auto lg:mx-0">
            {giftCardFeatures.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 whitespace-nowrap"
                title={item.label}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              className="px-7 py-2.5 bg-black text-black font-semibold rounded-full shadow-md 
                hover:bg-black hover:shadow-lg transition-all duration-300 outline-none"
              aria-label="Shop gift cards"
            >
              Shop Gift Cards
            </button>

            <button
              type="button"
              className="px-7 py-2.5 border border-gray-200 text-gray-900 font-semibold rounded-full 
                hover:bg-gray-500 hover:text-black transition-all duration-300 outline-none"
              aria-label="Learn more about gift cards"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Icon Visual */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-black border-4 border-black 
              shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center mb-30"
            aria-hidden="true"
          >
            <FaGift className="text-black text-[5.5rem]" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Icon */}
      <div className="absolute top-6 left-6 hidden lg:block text-black text-4xl opacity-15 pointer-events-none select-none">
        <FaGift />
      </div>
    </section>
  );
};

export default GiftCardHero;
