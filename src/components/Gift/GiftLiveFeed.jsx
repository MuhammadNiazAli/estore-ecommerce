'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/solid';

const initialFeed = [
  {
    id: 1,
    user: 'Anna K.',
    action: 'just bought',
    product: 'Handmade Ceramic Vase',
    time: '2 minutes ago',
  },
  {
    id: 2,
    user: 'Liam R.',
    action: 'added to wishlist',
    product: 'Bluetooth Speaker',
    time: '5 minutes ago',
  },
  {
    id: 3,
    user: 'Sofia M.',
    action: 'reviewed',
    product: 'Eco-Friendly Gift Wrap',
    time: '10 minutes ago',
  },
];

export default function GiftLiveFeed() {
  const [feedItems, setFeedItems] = useState(initialFeed);

  useEffect(() => {
    const newActivities = [
      {
        id: 4,
        user: 'Ethan P.',
        action: 'just bought',
        product: 'Personalized Mug',
        time: 'Just now',
      },
      {
        id: 5,
        user: 'Mia L.',
        action: 'added to wishlist',
        product: 'Gourmet Chocolate Box',
        time: 'Just now',
      },
      {
        id: 6,
        user: 'Noah S.',
        action: 'reviewed',
        product: 'Leather Journal',
        time: 'Just now',
      },
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < newActivities.length) {
        setFeedItems((prev) => [newActivities[index], ...prev].slice(0, 6));
        index++;
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Optional: Debug log to check feedItems content
  // Remove or comment out in production
  console.log('feedItems:', feedItems);

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 bg-white rounded-3xl shadow-2xl text-gray-900 relative overflow-hidden">
      <h2 className="text-black text-3xl sm:text-4xl font-bold text-center mb-10 tracking-tight drop-shadow-md">
        Live Gift Activity Feed
      </h2>

      <div className="relative max-h-[320px] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar transition-all duration-500 ease-in-out">
        <AnimatePresence initial={false}>
          {feedItems
            .filter(Boolean) // Filter out any undefined/null items safely
            .map(({ id, user, action, product, time }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex items-start sm:items-center gap-4 border-b border-black/20 py-4 px-1 sm:px-2 last:border-none group hover:bg-white/30 rounded-md transition-colors duration-300"
              >
                <div className="bg-black/10 p-2 rounded-full shrink-0">
                  <UserIcon className="w-7 h-7 sm:w-8 sm:h-8 text-black group-hover:scale-105 transition-transform duration-200" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm sm:text-base leading-snug">
                    <span className="font-semibold text-black">{user}</span>{' '}
                    <span className="text-gray-900">{action}</span>{' '}
                    <span className="font-semibold underline decoration-black underline-offset-4 hover:text-black transition cursor-pointer">
                      {product}
                    </span>
                  </p>
                  <span className="text-gray-600 text-xs mt-1">{time}</span>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Fades for top/bottom edge */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10" />
      </div>
    </section>
  );
}
