'use client';

import React from 'react';
import { Speaker } from 'lucide-react';
import { motion } from 'framer-motion';

const ScreenReaderSupport = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 mb-[-50px]">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center space-y-8">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <Speaker className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-bold text-yellow-300 max-w-lg leading-tight"
        >
          Screen Reader Support
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl text-gray-400 text-base sm:text-lg leading-relaxed px-2 sm:px-0"
        >
          Our website is built with semantic HTML and ARIA attributes to ensure full compatibility with popular screen readers like NVDA, JAWS, and VoiceOver. This allows users with vision impairments to navigate and understand content effortlessly.
        </motion.p>

        {/* Features List */}
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="list-disc list-inside text-gray-300 max-w-xl text-left space-y-2 px-4 sm:px-0"
        >
          <li>Proper use of landmarks and roles for easy navigation</li>
          <li>Descriptive alt text for images and icons</li>
          <li>Meaningful link text and button labels</li>
          <li>Live regions for dynamic content updates</li>
          <li>Keyboard focus management for dialogs and menus</li>
        </motion.ul>
      </div>
    </section>
  );
};

export default ScreenReaderSupport;
