'use client';

import React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useDragControls,
} from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const WishlistHero = ({ wishlistCount = 12, savedDeals = 5 }) => {
  const controls = useDragControls();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 25,
    mass: 1.5,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 25,
    mass: 1.5,
  });

  return (
    <section className="relative bg-gray-900 px-6 py-20 sm:py-28 md:py-32 overflow-hidden my-[-60px] mb-0">
      

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heart Drag Icon */}
        <motion.div
          drag
          dragControls={controls}
          dragElastic={0.5}
          dragSnapToOrigin
          dragMomentum={false}
          style={{ x: springX, y: springY }}
          className="inline-flex items-center justify-center text-amber-400 mb-10 sm:mb-12 cursor-grab active:cursor-grabbing"
        >
          <FiHeart className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
        >
          Your{' '}
          <span className="text-amber-400 underline underline-offset-4 decoration-amber-500 decoration-4">
            Wishlist
          </span>{' '}
          Is Ready
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          Organize your dream items, track exclusive offers, and never miss a deal again — your personalized wishlist experience.
        </motion.p>

        {/* Wishlist Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-10 text-gray-300"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-amber-400">
              {wishlistCount}
            </span>
            <span className="text-sm tracking-widest uppercase">
              Items Saved
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-500">
              {savedDeals}
            </span>
            <span className="text-sm tracking-widest uppercase">
              Active Deals
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          <button
            type="button"
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 font-semibold shadow-md hover:from-amber-500 hover:to-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-500 transition"
          >
            View Wishlist
          </button>
          <button
            type="button"
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full border-2 border-amber-400 text-amber-400 font-semibold hover:bg-amber-50 hover:text-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-400 transition"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WishlistHero;
