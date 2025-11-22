'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import Link from 'next/link';

const WishlistEmpty = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-lg"
      >
        {/* Heart Icon */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mb-6 text-amber-400"
        >
          <FiHeart size={60} className="animate-pulse drop-shadow-md" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug"
        >
          Your Wishlist is Empty
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto"
        >
          Looks like you haven't added any favorites yet. Browse our collections and save what you love.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/shop" passHref>
            <button
              type="button"
              className="mt-8 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 font-semibold shadow-lg hover:from-amber-500 hover:to-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-500 transition-all duration-200"
            >
              Start Shopping
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WishlistEmpty;
