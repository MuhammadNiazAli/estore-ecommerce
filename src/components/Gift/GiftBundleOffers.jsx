'use client';

import React, { useState } from 'react';
import { GiftIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const bundleData = [
  {
    id: 1,
    title: 'Birthday Surprise Bundle',
    description: 'Includes curated gifts, greeting card & premium wrapping. Ideal for all ages.',
    price: '€29.99',
  },
  {
    id: 2,
    title: 'Tech Lover Set',
    description: 'Wireless earbuds, gadget accessories & a smart keychain — all in one.',
    price: '€59.99',
  },
  {
    id: 3,
    title: 'Luxury Self-Care Pack',
    description: 'Essential oils, silk eye mask, bath salts & candles. Relaxation guaranteed.',
    price: '€44.95',
  },
  {
    id: 4,
    title: 'Holiday Cheer Collection',
    description: 'Festive candles, cozy socks, and holiday treats bundled for joy.',
    price: '€39.50',
  },
  {
    id: 5,
    title: 'Fitness Essentials Pack',
    description: 'Resistance bands, water bottle & workout towel for active lifestyles.',
    price: '€34.99',
  },
  {
    id: 6,
    title: 'Gourmet Food Basket',
    description: 'A selection of fine cheeses, chocolates, and preserves for foodies.',
    price: '€49.99',
  },
];

const GiftBundleOffers = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, bundleData.length));
  };

  return (
    <section
      className="w-full bg-white text-gray-900 px-6 sm:px-10 py-14 rounded-lg shadow-2xl max-w-[1200px] mx-auto"
      aria-label="Exclusive gift bundle offers"
    >
      {/* Section Header */}
      <div className="text-center mb-10 select-none">
        <div className="flex justify-center mb-4">
          <GiftIcon className="w-9 h-9 text-amber-600 animate-bounce" aria-hidden="true" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-600 drop-shadow-lg tracking-tight">
          Exclusive Gift Bundles
        </h2>
        <p className="text-gray-700 mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light tracking-wide">
          Handpicked combinations with love — for birthdays, celebrations, and just because.
        </p>
      </div>

      {/* Bundles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {bundleData.slice(0, visibleCount).map((bundle) => (
          <article
            key={bundle.id}
            className="bg-white border border-amber-600/20 rounded-2xl shadow-md p-6 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-600 transition hover:shadow-amber-700/30 hover:border-amber-600/70"
            tabIndex={0}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{bundle.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
              {bundle.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-amber-600 font-bold text-lg select-none">{bundle.price}</span>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-500 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
                aria-label={`View details for ${bundle.title}`}
                onClick={() => alert(`Details for ${bundle.title}`)}
              >
                View Details <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < bundleData.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleViewMore}
            className="bg-amber-600 text-gray-900 font-extrabold px-8 py-3 rounded-full shadow-lg hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-700 transition"
            aria-label="View more gift bundles"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default GiftBundleOffers;
