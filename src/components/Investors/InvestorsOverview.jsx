'use client';
import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Market Capitalization', value: '$5.6B' },
  { label: 'Employees Worldwide', value: '8,200+' },
  { label: 'Global Offices', value: '25' },
  { label: 'Annual Revenue', value: '$1.5B' },
];

const InvestorsOverview = () => {
  return (
    <section
      aria-label="Company Overview for Investors"
      className="bg-gray-900 text-yellow-400 py-16 px-4 flex justify-center my-15"
    >
      <div className="w-full max-w-[1100px] space-y-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Company Overview
        </motion.h2>

        <motion.p
          className="text-yellow-300 text-center max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          As a global leader in innovation and sustainability, we remain committed to creating long-term value for our investors. With a robust presence across continents and a talented, diverse team, our focus is on accelerating growth, building lasting partnerships, and shaping the industries of tomorrow.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto"
          role="list"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {metrics.map(({ label, value }, idx) => (
            <motion.div
              key={idx}
              role="listitem"
              className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-yellow-400/50 focus-within:shadow-yellow-400/50 transition-shadow duration-300 text-center cursor-default"
              tabIndex={0}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <p className="text-yellow-400 font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3">
                {value}
              </p>
              <p className="text-yellow-300 font-medium text-sm sm:text-base">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsOverview;
