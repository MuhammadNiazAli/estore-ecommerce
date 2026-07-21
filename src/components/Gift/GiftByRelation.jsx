'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartIcon,
  UsersIcon,
  GiftIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const relationData = [
  { title: 'For Mom', icon: <HeartIcon className="w-7 h-7 text-amber-600" /> },
  { title: 'For Dad', icon: <UserIcon className="w-7 h-7 text-amber-600" /> },
  { title: 'For Partner', icon: <GiftIcon className="w-7 h-7 text-amber-600" /> },
  { title: 'For Friends', icon: <UsersIcon className="w-7 h-7 text-amber-600" /> },
  { title: 'For Kids', icon: <GiftIcon className="w-7 h-7 text-amber-600" /> },
  { title: 'For Grandparents', icon: <HeartIcon className="w-7 h-7 text-amber-600" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } },
  hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 15 } },
};

export default function GiftByRelation() {
  const [visibleCount, setVisibleCount] = useState(2);

  const toggleShowMore = () => {
    if (visibleCount === 2) {
      setVisibleCount(relationData.length);
    } else {
      setVisibleCount(2);
    }
  };

  return (
    <section
      className="w-full bg-white text-gray-900 px-6 sm:px-10 py-14 max-w-[800px] mx-auto rounded-lg shadow-2xl"
      aria-label="Gift categories by relation"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="flex justify-center mb-5">
          <UsersIcon className="w-10 h-10 text-amber-600 animate-pulse" aria-hidden="true" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-600 drop-shadow-lg tracking-tight">
          Gifts by Relation
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-light tracking-wide">
          Explore thoughtful gifts curated specifically for those who matter most.
        </p>
      </div>

      {/* Cards Grid - 2 columns only */}
      <div
        className="grid grid-cols-2 gap-6 sm:gap-8"
        role="list"
      >
        <AnimatePresence initial={false}>
          {relationData.slice(0, visibleCount).map(({ title, icon }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              role="listitem"
              tabIndex={0}
              className="group bg-white border border-amber-600/25 hover:border-amber-600/70 hover:shadow-amber-700/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-shadow cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-600"
              aria-label={title}
              style={{ aspectRatio: '1 / 1' }} // maintain perfect square cards
            >
              <div className="mb-3">{icon}</div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-amber-500 transition-colors tracking-wide select-none">
                {title}
              </h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less button */}
      <div className="mt-10 text-center">
        {relationData.length > 2 && (
          <button
            type="button"
            onClick={toggleShowMore}
            className="inline-block bg-amber-600 hover:bg-amber-500 text-gray-900 font-extrabold px-8 py-3 rounded-full shadow-lg transition focus:outline-none focus:ring-4 focus:ring-amber-700"
            aria-expanded={visibleCount > 2}
            aria-controls="relation-cards"
          >
            {visibleCount > 2 ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </section>
  );
}
