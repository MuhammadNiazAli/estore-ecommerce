'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ShippingHero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-gray-900 text-white px-6 py-24 sm:py-32 flex items-center justify-center"
      aria-label="Shipping hero section"
    >

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1000px] text-center px-4 my-[-100px]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-md"
        >
          <span className="block">Fast & Reliable</span>
          <span className="text-amber-400 underline decoration-amber-500 decoration-[10px] underline-offset-[10px] inline-block mt-2">
            Shipping
          </span>{' '}
          <span className="block">Services Worldwide</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.1 }}
          className="mt-8 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow"
        >
          Experience lightning-fast delivery with real-time tracking, proactive updates,
          and global reach — your package, delivered on time, every time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            className="relative inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 font-bold text-lg shadow-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:scale-95"
          >
            Get Started
            <span className="absolute -inset-0.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShippingHero;
