'use client';

import React from 'react';
import { FiHeart, FiShare2, FiStar } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const features = [
  {
    icon: <FiHeart className="text-black" style={{ fontSize: '10px' }} />,
    label: <span className="text-black" style={{ fontSize: '11.5px' }}>Save Favorite Products</span>,
  },
  {
    icon: <FiStar className="text-black" style={{ fontSize: '10px' }} />,
    label: <span className="text-black" style={{ fontSize: '11.5px' }}>Quick Access Anytime</span>,
  },
];



const imageUrls = [
  'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1671656349007-0c41dab52c96?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1682125784386-d6571f1ac86a?q=80&w=608&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const WishlistingHero = () => {
  return (
    <section
      aria-label="Manage your wishlist"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-white via-white to-white text-black rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Your Personal{' '}
            <span className="text-black underline decoration-black decoration-4 underline-offset-4">
              Wishlist Hub
            </span>
            <br />
            Save Now, Shop Later
          </h1>

          <p className="text-black text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Keep all your favorite items in one place. Easily revisit, manage, and purchase the
            products you love — anytime, from anywhere.
          </p>

          {/* Feature List */}
          <ul className="flex flex-col sm:flex-row justify-start gap-4 text-xs sm:text-sm font-medium max-w-xs mx-auto lg:mx-0">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 whitespace-nowrap"
                title={item.label}
              >
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              className="px-7 py-2.5 bg-black text-black font-semibold rounded-full shadow-md hover:bg-black hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Browse products"
            >
              Browse Products
            </button>

            <button
              type="button"
              className="px-7 py-2.5 border border-black text-black font-semibold rounded-full hover:bg-black hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Share wishlist"
            >
              Share Wishlist
            </button>
          </div>
        </div>

        {/* Right Visual - stacked wishlist images */}
        <div className="flex flex-col justify-center items-center gap-5 lg:items-end">
          {imageUrls.map((url, idx) => (
            <div
              key={idx}
              className="relative w-60 h-40 sm:w-64 sm:h-44 md:w-72 md:h-48 rounded-3xl overflow-hidden border-4 border-black bg-white shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              aria-hidden="true"
            >
              <img
                src={url}
                alt={`Wishlist product preview ${idx + 1}`}
                className="w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
                loading="eager"
                decoding="async"
              />

              {/* Badge on first */}
              {idx === 0 && (
                <div className="absolute top-3 right-3 bg-black text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none pointer-events-none">
                  Wishlisted
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Decorative Icon */}
      <div className="absolute top-6 left-6 hidden lg:block text-black text-4xl opacity-15 pointer-events-none select-none">
        <FaHeart />
      </div>
    </section>
  );
};

export default WishlistingHero;
