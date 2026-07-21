'use client';

import React from 'react';
import { Circle, Maximize, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

const contrastItems = [
  {
    icon: <Circle className="w-7 h-7 text-amber-600" />,
    title: 'Sufficient Contrast Ratios',
    description:
      'Ensure text and important UI elements have enough contrast with backgrounds, meeting WCAG AA or AAA standards.',
  },
  {
    icon: <Maximize className="w-7 h-7 text-amber-600" />,
    title: 'Scalable UI Elements',
    description:
      'Design interfaces that scale well with zoom without loss of content or usability, supporting up to 200% zoom and beyond.',
  },
  {
    icon: <ZoomIn className="w-7 h-7 text-amber-600" />,
    title: 'Flexible Text & Layout',
    description:
      'Use relative units and flexible layouts so content adjusts gracefully to user preferences and assistive technology settings.',
  },
];

const ColorContrastScaling = () => {
  return (
    <section className="w-full bg-white py-16 px-4 text-gray-900">
      <div className="max-w-[1000px] mx-auto space-y-10 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-amber-500"
        >
          Color Contrast & Scaling
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg"
        >
          Proper color contrast and scalable design ensure everyone can easily read and interact with your site, regardless of vision differences or device settings.
        </motion.p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-3 text-left">
          {contrastItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md transition-shadow duration-500 hover:shadow-gray-950/80 hover:border-gray-300 cursor-default"
            >
              <div className="flex items-center space-x-3 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-amber-400">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorContrastScaling;
