'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const giftItems = [
  {
    id: 1,
    title: 'Elegant Watch',
    price: '€79.99',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Cozy Blanket',
    price: '€39.95',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Scented Candle',
    price: '€24.99',
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Leather Journal',
    price: '€45.00',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: 'Gourmet Chocolate Box',
    price: '€29.50',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80',
  },
];

export default function GiftCarousel() {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;
    setIsAtStart(el.scrollLeft <= 10);
    setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollPosition();
    el.addEventListener('scroll', checkScrollPosition);
    return () => el.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollBy = (distance) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-14 bg-white rounded-3xl shadow-2xl text-gray-900 relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-amber-600 text-3xl sm:text-4xl font-extrabold mb-10 drop-shadow-lg text-center"
      >
        Popular Gift Picks
      </motion.h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollBy(-320)}
          disabled={isAtStart}
          className={`
            hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10
            bg-amber-600 text-gray-900 rounded-full p-3 shadow-xl
            transition-all
            ${isAtStart ? 'opacity-40 cursor-not-allowed' : 'hover:bg-amber-500 scale-105'}
            focus:outline-none focus:ring-4 focus:ring-amber-600/50
          `}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        {/* Carousel Track */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex space-x-6 overflow-x-auto scroll-smooth py-2 px-1 md:px-3 select-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {giftItems.map(({ id, title, price, img }) => (
            <div
              key={id}
              role="listitem"
              tabIndex={0}
              onClick={() => alert(`Selected: ${title}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  alert(`Selected: ${title}`);
                }
              }}
              className="flex-shrink-0 w-64 bg-white border border-amber-600/20 hover:border-amber-600 transition-all rounded-xl shadow-lg hover:scale-[1.04] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <img
                src={img}
                alt={title}
                loading="lazy"
                draggable={false}
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-lg truncate">{title}</h3>
                <p className="text-amber-600 font-bold mt-1">{price}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy(320)}
          disabled={isAtEnd}
          className={`
            hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10
            bg-amber-600 text-gray-900 rounded-full p-3 shadow-xl
            transition-all
            ${isAtEnd ? 'opacity-40 cursor-not-allowed' : 'hover:bg-amber-500 scale-105'}
            focus:outline-none focus:ring-4 focus:ring-amber-600/50
          `}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
