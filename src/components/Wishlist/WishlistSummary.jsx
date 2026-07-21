'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-gray-900"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const ConfirmModal = ({ onConfirm, onCancel, visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-[999]"
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white dark:bg-white rounded-xl max-w-md w-full p-6 shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-900 mb-4">
            Clear Wishlist?
          </h3>
          <p className="text-gray-700 dark:text-gray-700 mb-6">
            Are you sure you want to clear all items from your wishlist? This action cannot be undone.
          </p>
          <div className="flex justify-end gap-3 flex-wrap">
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-md bg-gray-200 dark:bg-white text-gray-800 dark:text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-amber-700"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-md bg-red-600 text-gray-900 font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition flex items-center gap-2"
              autoFocus
            >
              <FiTrash2 aria-hidden="true" />
              Clear
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const WishlistSummary = ({
  totalItems = 0,
  onMoveAllToCart = () => {},
  onClearWishlist = () => {},
  isProcessing = false,
  wishlistName = '',
  customMessage = '',
}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClearClick = () => setShowConfirm(true);
  const handleConfirmClear = () => {
    setShowConfirm(false);
    onClearWishlist();
  };
  const handleCancelClear = () => setShowConfirm(false);

  return (
    <>
      <section className="flex justify-center items-center bg-white px-4 py-16 sm:py-20 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-6xl bg-white dark:bg-white rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14 flex flex-col gap-10 md:flex-row justify-between items-center"
        >
          {/* LEFT: Heading & Message */}
          <div className="flex-1 w-full">
            <motion.h2
              key={totalItems}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-gray-900 dark:text-gray-900 tracking-tight"
            >
              {totalItems > 0
                ? `You have ${totalItems} item${totalItems !== 1 ? 's' : ''} in your wishlist`
                : 'Your wishlist is empty'}
            </motion.h2>

            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-700 font-medium min-h-[1.6em]">
              {customMessage ||
                (totalItems > 0
                  ? 'Save them for later or move them all to your cart to checkout quickly.'
                  : 'Browse products and add your favorites here for easy access later.')}
            </p>
          </div>

          {/* CENTER: Item count bubble (only if items exist) */}
          {totalItems > 0 && (
            <motion.div
              className="hidden sm:flex items-center justify-center bg-amber-800 dark:bg-amber-900 text-gray-900 font-semibold rounded-full w-12 h-12 select-none"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              aria-label={`${totalItems} items in wishlist`}
            >
              {totalItems}
            </motion.div>
          )}

          {/* RIGHT: Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-end gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={onMoveAllToCart}
              disabled={totalItems === 0 || isProcessing}
              className={twMerge(
                'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-gray-900 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-600 focus-visible:ring-offset-2',
                totalItems === 0 || isProcessing
                  ? 'bg-amber-600 cursor-not-allowed'
                  : 'bg-amber-800 hover:bg-amber-900 active:bg-amber-900'
              )}
              aria-label="Move all wishlist items to cart"
            >
              {isProcessing ? <Spinner /> : <FiShoppingCart className="w-5 h-5" />}
              Move All to Cart
            </button>

            <button
              type="button"
              onClick={handleClearClick}
              disabled={totalItems === 0 || isProcessing}
              className={twMerge(
                'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border transition focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 focus-visible:ring-offset-2',
                totalItems === 0 || isProcessing
                  ? 'border-gray-400 text-gray-600 cursor-not-allowed'
                  : 'border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-700 hover:bg-gray-500 dark:hover:bg-gray-500'
              )}
              aria-label="Clear wishlist"
            >
              <FiTrash2 className="w-5 h-5" />
              Clear Wishlist
            </button>
          </div>
        </motion.div>
      </section>

      {/* Confirm Dialog */}
      <ConfirmModal
        visible={showConfirm}
        onConfirm={handleConfirmClear}
        onCancel={handleCancelClear}
      />
    </>
  );
};

export default WishlistSummary;
