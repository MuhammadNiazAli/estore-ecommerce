'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ratingData = [
  { stars: 5, percent: 76 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 6 },
  { stars: 2, percent: 2 },
  { stars: 1, percent: 1 },
];


const StarIcon = ({ filled = true }) => (
  <Star
    size={22}
    strokeWidth={1.5}
    fill={filled ? 'currentColor' : 'none'}
    aria-hidden="true"
    className="drop-shadow-[0_0_5px_rgba(251,191,36,0.45)]"
  />
);


const RatingBar = ({ percent, delay }) => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: `${percent}%` }}
    transition={{ delay, duration: 1.1, ease: 'easeOut' }}
    className="h-4 rounded-full bg-gradient-to-r from-black to-gray-900 shadow-[inset_0_0_8px_rgba(0,0,0,0.22)]"
  />
);

const ReviewSummary = () => {
  return (
    <section
      aria-labelledby="review-summary-title"
      className="w-full bg-white my-[-20px] py-20 px-6 text-gray-900 flex justify-center items-center"
      role="region"
      aria-live="polite"
    >
      <div className="w-full max-w-[1100px] grid md:grid-cols-2 gap-16 items-center">
 
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2
            id="review-summary-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="text-6xl sm:text-7xl font-extrabold text-black drop-shadow-lg tracking-tight"
          >
            4.8
            <span className="text-2xl text-black font-semibold ml-2 align-top">/5</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center mt-2 gap-1 text-black"
            aria-hidden="true"
          >
     
            {[...Array(5)].map((_, idx) => (
              <StarIcon key={idx} />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-4 max-w-md text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Based on{' '}
            <span className="text-gray-900 font-semibold">12,430 verified reviews</span>, all
            submitted by real customers just like you — shared in real time.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-lg mx-auto md:mx-0">
          {ratingData.map(({ stars, percent }, idx) => (
            <div
              key={stars}
              role="group"
              aria-label={`${stars} star rating, ${percent}% of total reviews`}
              className="flex items-center gap-4"
            >
           
              <span className="w-14 text-sm text-gray-700 font-medium select-none">
                {stars} star
              </span>

        
              <div
                className="flex-1 bg-white rounded-full h-4 overflow-hidden shadow-inner"
                aria-hidden="true"
              >
                <RatingBar percent={percent} delay={0.5 + idx * 0.1} />
              </div>

        
              <span className="w-12 text-sm text-gray-600 text-right tabular-nums font-medium select-none">
                {percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSummary;
