'use client';

import React from 'react';
import { FiTruck, FiPackage, FiArrowRightCircle, FiRefreshCcw } from 'react-icons/fi';
import { motion } from 'framer-motion';

const OrderHero = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-gray-900 px-6 py-24 sm:py-28 md:py-36 overflow-hidden mb-[-100px] my-[-80px]"
      style={{ minHeight: '520px' }}
    >
      {/* Glass Overlay */}

   

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-amber-400 drop-shadow-sm"
        >
          Your <span className="text-indigo-500 underline decoration-wavy underline-offset-4">Order Journey</span> Begins Now
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Track your orders, manage deliveries, and explore your personalized shopping experience — built for speed, security, and satisfaction.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <button
            type="button"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-indigo-600 text-white font-semibold text-base sm:text-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            <FiTruck className="text-xl animate-bounce-slow" />
            Track Order
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-7 py-3 rounded-full border-2 border-indigo-500 text-indigo-500 font-semibold text-base sm:text-lg hover:bg-indigo-600 hover:text-white hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            <FiPackage className="text-xl animate-pulse" />
            Continue Shopping
          </button>
        </motion.div>

        {/* Order Features */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm sm:text-base text-gray-300"
        >
          {[
            { icon: <FiArrowRightCircle className="text-amber-400 text-xl" />, label: 'Real-Time Tracking' },
            { icon: <FiTruck className="text-emerald-400 text-xl" />, label: 'Fast & Free Shipping' },
            { icon: <FiRefreshCcw className="text-pink-400 text-xl" />, label: 'Easy Returns & Refunds' },
            { icon: <FiPackage className="text-sky-400 text-xl" />, label: 'Secure Package Handling' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-3 bg-white/5 px-5 py-4 rounded-xl backdrop-blur-lg hover:scale-105 transition-transform duration-300"
            >
              {item.icon}
              <span className="text-gray-100">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OrderHero;
