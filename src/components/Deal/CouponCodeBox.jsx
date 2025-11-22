'use client';

import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const CouponCodeBox = ({
  code = 'SAVE20',
  discount = '20% OFF',
  description = 'Get instant 20% discount on your first purchase.',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto bg-gray-900 rounded-3xl p-8 my-8 shadow-xl text-white select-none"
      aria-label="Special coupon offer"
      role="region"
    >
      <header className="mb-4">
        <h2 className="text-yellow-400 font-semibold tracking-widest uppercase text-sm">
          Special Offer
        </h2>
        <p className="text-4xl font-extrabold leading-tight mt-1">{discount}</p>
      </header>

      <p className="text-gray-300 text-base mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between bg-gray-700 px-5 py-3 rounded-xl ring-1 ring-yellow-500 focus-within:ring-2 focus-within:ring-yellow-400 transition-all">
        <code
          className="font-mono text-xl tracking-widest text-yellow-300 select-text"
          aria-label="Coupon code"
        >
          {code}
        </code>
        <button
          onClick={handleCopy}
          aria-live="polite"
          aria-label={copied ? 'Coupon code copied' : 'Copy coupon code'}
          className={`flex items-center gap-2 text-yellow-400 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-3 py-1
          ${copied ? 'cursor-default text-green-400' : 'hover:text-yellow-300 active:scale-95 transition-transform duration-150'}
          `}
          disabled={copied}
          type="button"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="flex items-center gap-1"
              >
                <FiCheck size={18} aria-hidden="true" /> Copied
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="flex items-center gap-1"
              >
                <FiCopy size={18} aria-hidden="true" /> Copy
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <button
        type="button"
        className="mt-8 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-2xl shadow-lg shadow-yellow-600/30 transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-500"
        onClick={() => alert(`Coupon code "${code}" applied!`)}
        aria-label="Apply coupon code"
      >
        Apply Coupon
      </button>
    </motion.section>
  );
};

export default CouponCodeBox;
