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
      className="max-w-xl mx-auto bg-white rounded-3xl p-8 my-8 shadow-xl text-gray-900 select-none"
      aria-label="Special coupon offer"
      role="region"
    >
      <header className="mb-4">
        <h2 className="text-amber-600 font-semibold tracking-widest uppercase text-sm">
          Special Offer
        </h2>
        <p className="text-4xl font-extrabold leading-tight mt-1">{discount}</p>
      </header>

      <p className="text-gray-700 text-base mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between bg-white px-5 py-3 rounded-xl ring-1 ring-amber-700 focus-within:ring-2 focus-within:ring-amber-600 transition-all">
        <code
          className="font-mono text-xl tracking-widest text-amber-500 select-text"
          aria-label="Coupon code"
        >
          {code}
        </code>
        <button
          onClick={handleCopy}
          aria-live="polite"
          aria-label={copied ? 'Coupon code copied' : 'Copy coupon code'}
          className={`flex items-center gap-2 text-amber-600 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 rounded px-3 py-1
          ${copied ? 'cursor-default text-green-400' : 'hover:text-amber-500 active:scale-95 transition-transform duration-150'}
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
        className="mt-8 w-full bg-amber-600 hover:bg-amber-500 text-black font-bold py-3 rounded-2xl shadow-lg shadow-amber-800/30 transition-colors focus:outline-none focus:ring-4 focus:ring-amber-700"
        onClick={() => alert(`Coupon code "${code}" applied!`)}
        aria-label="Apply coupon code"
      >
        Apply Coupon
      </button>
    </motion.section>
  );
};

export default CouponCodeBox;
