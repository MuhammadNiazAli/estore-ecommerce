'use client';

import React from 'react';
import { Keyboard } from 'lucide-react';
import { motion } from 'framer-motion';

const KeyboardNavigation = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 mb-[-50px]">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center space-y-8">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <Keyboard className="w-16 h-16 sm:w-20 sm:h-20 text-black" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-bold text-black leading-tight max-w-xl"
        >
          Keyboard Navigation Support
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl text-gray-600 text-base sm:text-lg leading-relaxed px-2 sm:px-0"
        >
          Our website is fully navigable using a keyboard alone. You can tab through all interactive elements, activate buttons with Enter or Space, and see clear focus outlines for easy navigation.
        </motion.p>

        {/* Features List */}
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="list-disc list-inside text-gray-700 max-w-xl text-left space-y-2 px-4 sm:px-0"
        >
          <li>Logical tab order following the visual layout</li>
          <li>Visible focus indicators on all interactive elements</li>
          <li>Skip-to-content links for quick navigation</li>
          <li>Keyboard accessible dropdowns, modals, and forms</li>
          <li>Support for assistive devices like switch controls</li>
        </motion.ul>
      </div>
    </section>
  );
};

export default KeyboardNavigation;
