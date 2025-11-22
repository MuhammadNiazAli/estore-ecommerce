'use client';

import React from 'react';
import { FiShare2, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

const WishlistActions = ({ onShare, onMoveAll, onClear, isProcessing = false }) => {
  return (
    <section className="flex justify-center items-center bg-gray-900 px-6 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1100px] flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0"
        role="region"
        aria-label="Wishlist management actions"
      >
        <p className="text-center sm:text-left text-gray-300 text-base sm:text-lg max-w-lg">
          Manage your wishlist items easily using the actions below.
        </p>

        <div className="flex gap-4 sm:gap-5 flex-wrap justify-center sm:justify-end">
          {/* Share Button */}
          <button
            onClick={onShare}
            disabled={isProcessing}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 text-gray-200 hover:bg-gray-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            aria-label="Share your wishlist"
            title="Share your wishlist"
          >
            {isProcessing ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <FiShare2 className="w-5 h-5" />
            )}
            <span className="font-medium text-sm">Share</span>
          </button>

          {/* Move All to Cart Button */}
          <button
            onClick={onMoveAll}
            disabled={isProcessing}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            aria-label="Move all wishlist items to cart"
            title="Move all wishlist items to cart"
          >
            {isProcessing ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <FiShoppingCart className="w-5 h-5" />
            )}
            <span className="text-sm">Move All to Cart</span>
          </button>

          {/* Clear All Button */}
          <button
            onClick={onClear}
            disabled={isProcessing}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            aria-label="Clear all wishlist items"
            title="Clear all wishlist items"
          >
            {isProcessing ? (
              <span className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <FiTrash2 className="w-5 h-5" />
            )}
            <span className="text-sm font-medium">Clear All</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WishlistActions;
