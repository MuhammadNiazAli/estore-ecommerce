'use client';

import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    date: '2025-07-15',
    rating: 5,
    comment:
      'Amazing gift ideas! The personalization option made my present extra special. Highly recommend this store.',
  },
  {
    id: 2,
    name: 'Liam K.',
    date: '2025-06-30',
    rating: 4,
    comment:
      'Great selection and fast shipping. The mobile offers are fantastic and easy to browse.',
  },
  {
    id: 3,
    name: 'Emma R.',
    date: '2025-07-10',
    rating: 5,
    comment:
      'Customer service was very helpful when I needed assistance choosing a gift for my anniversary.',
  },
  {
    id: 4,
    name: 'Noah T.',
    date: '2025-07-05',
    rating: 4,
    comment: 'Love the gift bundles! Good value and perfect for last-minute shopping.',
  },
  {
    id: 5,
    name: 'Olivia W.',
    date: '2025-07-02',
    rating: 5,
    comment: 'The newsletter keeps me updated with the best deals — very useful!',
  },
  {
    id: 6,
    name: 'Ethan J.',
    date: '2025-07-12',
    rating: 5,
    comment:
      'Fast delivery and the gift wrapping was beautiful. Made the recipient really happy!',
  },
];

// 3D Star component using layered gradients and slight shadows for depth
function Star({ filled }) {
  const fillColor = filled ? '#facc15' : '#b45309'; // yellow-400 vs yellow-700
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="starGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fillColor} stopOpacity="1" />
          <stop offset="100%" stopColor="#b28704" stopOpacity="1" />
        </linearGradient>
        <filter
          id="starShadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feDropShadow dx="0" dy="1" stdDeviation="0.4" floodColor="#9a7d03" floodOpacity="0.6" />
          <feDropShadow dx="0" dy="2" stdDeviation="0.6" floodColor="#6b4f01" floodOpacity="0.4" />
        </filter>
      </defs>
      <path
        fill="url(#starGrad)"
        stroke={filled ? '#a16207' : '#78350f'}
        strokeWidth="1"
        filter={filled ? 'url(#starShadow)' : 'none'}
        d="M12 2.5l3.09 6.26 6.91 1.004-5 4.868 1.18 6.882L12 17.27l-6.18 3.244 1.18-6.882-5-4.868 6.91-1.004L12 2.5z"
      />
    </svg>
  );
}

export default function GiftReviewWall() {
  return (
    <section
      aria-label="Customer reviews"
      className="max-w-[1200px] mx-auto p-6 bg-gray-900 rounded-lg shadow-2xl text-white"
    >
      <h2 className="text-yellow-400 text-3xl font-extrabold mb-6 text-center drop-shadow-lg">
        What Our Customers Say
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-800 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {reviews.map(({ id, name, date, rating, comment }) => (
          <article
            key={id}
            className="bg-gray-800 rounded-md p-5 shadow-md flex flex-col"
            tabIndex={0}
            aria-label={`Review by ${name}, rated ${rating} out of 5 stars`}
          >
            <div className="flex items-center gap-1 mb-2" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} filled={star <= rating} />
              ))}
            </div>
            <p className="text-yellow-300 flex-grow whitespace-pre-wrap">{comment}</p>
            <footer className="mt-4 text-yellow-400 text-sm font-semibold">
              — {name},{' '}
              <time dateTime={date} className="not-italic">
                {new Date(date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </footer>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
