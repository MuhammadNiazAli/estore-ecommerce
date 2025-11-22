'use client';

import React from 'react';
import Link from 'next/link';
import { FiGift } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ShopBannerStrip = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 text-white py-4 px-6 shadow-md relative overflow-hidden"
      aria-label="Summer Sale Banner"
    >

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'linear-gradient(270deg, #fbbf24, #f97316, #dc2626, #fbbf24, #f97316, #dc2626)',
          backgroundSize: '1200% 1200%',
        }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex items-center gap-4"
        >
          <FiGift
            className="w-7 h-7 text-white shrink-0 drop-shadow-lg"
            aria-hidden="true"
          />
          <p className="text-base sm:text-lg font-semibold tracking-wide leading-tight drop-shadow-md max-w-lg">
            Summer Sale: Enjoy{' '}
            <span className="underline underline-offset-4 decoration-2 decoration-white">
              Free Shipping
            </span>{' '}
            on orders over{' '}
            <span className="font-extrabold tracking-wide">$50</span>
          </p>
        </motion.div>

        <Link href="/shop" passHref legacyBehavior>
          <motion.a
            whileHover={{ scale: 1.03, boxShadow: '0 4px 12px rgba(251, 191, 36, 0.5)' }}
            whileFocus={{ scale: 1.03, boxShadow: '0 0 8px 3px rgba(251,191,36,0.8)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="inline-block bg-white text-red-600 font-semibold text-sm sm:text-base px-5 py-2 rounded-md shadow-md transition-all focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-offset-2 select-none"
            aria-label="Shop now for summer sale with free shipping"
          >
            Shop Now
          </motion.a>
        </Link>
      </div>
    </motion.section>
  );
};

export default ShopBannerStrip;
