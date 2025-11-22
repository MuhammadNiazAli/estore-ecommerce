'use client';

import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const trendingGifts = [
  {
    id: 1,
    name: 'Luxury Silk Scarf',
    price: '€49.99',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Handcrafted Wooden Watch',
    price: '€89.00',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Custom Photo Album',
    price: '€29.99',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Elegant Candle Set',
    price: '€39.50',
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Gourmet Chocolate Box',
    price: '€24.99',
    image:
      'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Personalized Mug',
    price: '€19.99',
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80',
  },
];

export default function GiftTrending() {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollByDistance = (distance) => {
    if (!scrollRef.current || isScrolling) return;

    setIsScrolling(true);
    scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });

    // Unlock after animation (~500ms)
    setTimeout(() => {
      setIsScrolling(false);
    }, 550);
  };

  return (
    <section className="max-w-[1100px] mx-auto p-8 bg-gray-900 rounded-3xl shadow-2xl relative text-white">
      <h2 className="text-yellow-400 text-4xl font-extrabold mb-8 text-center drop-shadow-lg tracking-tight">
        Trending Gifts
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollByDistance(-320)}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 bg-yellow-400 rounded-full shadow-lg text-gray-900 hover:bg-yellow-300 transition focus:outline-none focus:ring-4 focus:ring-yellow-500 ${
            isScrolling ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          tabIndex={0}
          disabled={isScrolling}
        >
          <ChevronLeftIcon className="w-7 h-7" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 px-6"
          style={{
            scrollPaddingLeft: '24px',
            scrollPaddingRight: '24px',
            scrollbarWidth: 'none',
            // Removed pointerEvents none so user can scroll manually
          }}
          aria-label="Trending gifts carousel"
          role="list"
        >
          {trendingGifts.map(({ id, name, price, image }) => (
            <article
              key={id}
              className="snap-start min-w-[280px] flex-shrink-0 rounded-xl bg-yellow-900/20 border border-yellow-400/40 shadow-md cursor-pointer hover:scale-[1.07] hover:shadow-yellow-400 transition-transform duration-300 ease-in-out focus:outline-yellow-400 focus:outline-2 focus:outline-offset-2"
              tabIndex={0}
              aria-label={`${name}, priced at ${price}`}
              role="listitem"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-44 object-cover rounded-t-xl"
                loading="lazy"
                decoding="async"
              />
              <div className="p-4">
                <h3 className="text-yellow-400 font-semibold text-xl leading-tight truncate">
                  {name}
                </h3>
                <p className="text-yellow-300 mt-2 font-extrabold text-lg">{price}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollByDistance(320)}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 bg-yellow-400 rounded-full shadow-lg text-gray-900 hover:bg-yellow-300 transition focus:outline-none focus:ring-4 focus:ring-yellow-500 ${
            isScrolling ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          tabIndex={0}
          disabled={isScrolling}
        >
          <ChevronRightIcon className="w-7 h-7" />
        </button>

        {/* Gradient fades */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-gray-900"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-900"></div>

        {/* Hide scrollbar for Webkit browsers */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
