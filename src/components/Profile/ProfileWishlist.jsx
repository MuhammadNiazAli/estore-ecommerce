'use client';

import React, { useState } from 'react';
import {
  HeartIcon,
  TrashIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const initialWishlist = [
  {
    id: 1,
    title: 'Wireless Noise-Cancelling Headphones',
    price: '$199.99',
    image:
      'https://images.unsplash.com/photo-1509098681029-b45e9c845022?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Smartwatch Pro Series',
    price: '$349.00',
    image:
      'https://images.unsplash.com/photo-1662220727289-27d6b2f10a82?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Ergonomic Wireless Mouse',
    price: '$49.99',
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=867&auto=format&fit=crop',
  },
];

const ProfileWishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [toast, setToast] = useState(null);

  const handleAddToCart = (title) => {
    setToast({ message: `"${title}" added to cart`, type: 'cart' });
    setTimeout(() => setToast(null), 3000);
  };

  const handleRemove = (id, title) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    setToast({ message: `"${title}" removed from wishlist`, type: 'remove' });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <section className="w-full bg-white text-gray-900 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-amber-600">
            <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Your Wishlist
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-md">
            Items you've saved for later purchases.
          </p>
        </div>

        <div className="w-full h-px bg-white my-6" />

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="flex items-center justify-center h-48 sm:h-60 text-gray-500 text-base sm:text-lg">
            Your wishlist is empty.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {wishlist.map(({ id, title, price, image }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-44 sm:h-48 md:h-52 object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-gray-900 text-base sm:text-lg md:text-xl font-semibold line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-amber-600 font-bold mt-2 text-sm sm:text-base md:text-lg">
                      {price}
                    </p>

                    <div className="mt-auto pt-4 flex justify-between items-center">
                      <button
                        onClick={() => handleAddToCart(title)}
                        className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-gray-900 font-semibold text-xs sm:text-sm px-3 py-2 rounded-full transition shadow"
                        type="button"
                      >
                        <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleRemove(id, title)}
                        className="p-2 rounded-full hover:bg-red-600/40 transition"
                        aria-label={`Remove ${title} from wishlist`}
                        type="button"
                      >
                        <TrashIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-amber-700 text-amber-500 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 z-[999]"
              role="alert"
            >
              <span className="text-sm sm:text-base">{toast.message}</span>
              <button
                onClick={() => setToast(null)}
                className="text-amber-600 hover:text-gray-900 transition"
                aria-label="Dismiss notification"
                type="button"
              >
                <XCircleIcon className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProfileWishlist;
