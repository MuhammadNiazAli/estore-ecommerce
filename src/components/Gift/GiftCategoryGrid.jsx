'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GiftIcon,
  CakeIcon,
  CalendarDaysIcon,
  HeartIcon,
  ShoppingBagIcon,
  StarIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const categories = [
  { id: 1, title: 'Birthday', icon: <CakeIcon className="w-7 h-7 text-amber-600" /> },
  { id: 2, title: 'Anniversary', icon: <HeartIcon className="w-7 h-7 text-amber-600" /> },
  { id: 3, title: 'Weddings', icon: <SparklesIcon className="w-7 h-7 text-amber-600" /> },
  { id: 4, title: 'Baby Shower', icon: <UsersIcon className="w-7 h-7 text-amber-600" /> },
  { id: 5, title: 'Thank You', icon: <GiftIcon className="w-7 h-7 text-amber-600" /> },
  { id: 6, title: 'Graduation', icon: <StarIcon className="w-7 h-7 text-amber-600" /> },
  { id: 7, title: 'Holiday', icon: <CalendarDaysIcon className="w-7 h-7 text-amber-600" /> },
  { id: 8, title: 'Corporate', icon: <ShoppingBagIcon className="w-7 h-7 text-amber-600" /> },
  { id: 9, title: 'Valentine’s Day', icon: <HeartIcon className="w-7 h-7 text-amber-600" /> },
  { id: 10, title: 'Mother’s Day', icon: <GiftIcon className="w-7 h-7 text-amber-600" /> },
  { id: 11, title: 'Father’s Day', icon: <StarIcon className="w-7 h-7 text-amber-600" /> },
  { id: 12, title: 'New Year', icon: <SparklesIcon className="w-7 h-7 text-amber-600" /> },
];

const ITEMS_PER_PAGE_MOBILE = 4;

const GiftCategoryGrid = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE_MOBILE);
  const [isMobile, setIsMobile] = useState(true);

  // Detect window width on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE_MOBILE, categories.length));
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 bg-white rounded-lg shadow-2xl text-gray-900 select-none">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-amber-600 text-3xl font-extrabold drop-shadow-lg">
          Shop by Category
        </h2>
        <p className="text-gray-700 mt-2 max-w-lg mx-auto text-sm sm:text-base">
          Find gifts curated for every special moment and celebration.
        </p>
      </motion.div>

      {/* Category Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid gap-6 grid-cols-2 sm:grid-cols-4 md:grid-cols-6"
      >
        <AnimatePresence>
          {(isMobile ? categories.slice(0, visibleCount) : categories).map(({ id, title, icon }) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white border border-amber-600/20 rounded-lg p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-amber-600/50 hover:shadow-amber-600/40 transition-transform will-change-transform"
              aria-label={`Shop gifts for ${title}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  alert(`Clicked category: ${title}`);
                }
              }}
              onClick={() => alert(`Clicked category: ${title}`)}
              // 3D Tilt on hover - framer-motion
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mb-3">{icon}</div>
              <h3 className="text-gray-900 font-semibold text-lg">{title}</h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More button for mobile */}
      {isMobile && visibleCount < categories.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMore}
            type="button"
            className="inline-block bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-amber-500 transition focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-opacity-50"
            aria-label="Show more gift categories"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default GiftCategoryGrid;
