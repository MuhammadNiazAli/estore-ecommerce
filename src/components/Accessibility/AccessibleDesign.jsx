'use client';

import React from 'react';
import { Contrast, MousePointerClick, Keyboard, Accessibility } from 'lucide-react';
import { motion } from 'framer-motion';

const designTips = [
  {
    icon: <Contrast className="w-7 h-7 text-amber-600" aria-hidden="true" />,
    title: 'High Contrast Colors',
    description:
      'Use strong contrast between text and background to improve readability for visually impaired users.',
  },
  {
    icon: <Keyboard className="w-7 h-7 text-amber-600" aria-hidden="true" />,
    title: 'Keyboard Navigation',
    description:
      'Ensure all features and actions are accessible using only a keyboard, with visible focus indicators.',
  },
  {
    icon: <MousePointerClick className="w-7 h-7 text-amber-600" aria-hidden="true" />,
    title: 'Click Targets & Spacing',
    description:
      'Make buttons and links large enough with clear spacing to be easily clickable on all devices.',
  },
  {
    icon: <Accessibility className="w-7 h-7 text-amber-600" aria-hidden="true" />,
    title: 'Semantic Structure',
    description:
      'Use proper HTML semantics for headings, lists, and landmarks to aid screen reader navigation.',
  },
];

const AccessibleDesign = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 text-gray-900 my-[-60px] mb-10">
      <div className="max-w-[1000px] mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-amber-500"
          tabIndex={-1}
        >
          Principles of Accessible Design
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed"
        >
          Designing for accessibility means considering everyone. These core principles help ensure inclusive digital experiences.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {designTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-gray-950/80 transition-shadow duration-300 cursor-default"
              role="region"
              aria-labelledby={`tip-title-${index}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                {tip.icon}
                <h3
                  id={`tip-title-${index}`}
                  className="text-lg font-semibold text-amber-400"
                >
                  {tip.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessibleDesign;
