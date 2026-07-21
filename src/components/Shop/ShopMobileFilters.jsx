'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';

const categories = ['All', 'Clothing', 'Accessories', 'Electronics'];

const ShopMobileFilters = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('All');

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSelect = (category) => {
    setActive(category);
    onFilterChange?.(category);
    setIsOpen(false);
  };

  return (
    <>
    
      <button
        onClick={toggleModal}
        aria-label="Open Filters"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black text-gray-900 px-5 py-3 rounded-full shadow-xl hover:bg-black transition focus:outline-none focus:ring-4 focus:ring-black"
      >
        <FiFilter size={20} />
        Filters
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center px-4 bg-white/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-[400px] w-full bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-200"
            >
              {/* Close Button */}
              <button
                onClick={toggleModal}
                aria-label="Close Filters"
                className="absolute top-4 right-4 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded-full"
              >
                <FiX size={24} />
              </button>

              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 text-center">
                Filter by Category
              </h2>

              <div className="flex flex-col gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => handleSelect(category)}
                    whileTap={{ scale: 0.96 }}
                    className={`w-full py-3 rounded-full font-semibold text-base text-center transition duration-200
                      ${
                        active === category
                          ? 'bg-black text-gray-900 shadow-md'
                          : 'bg-white text-gray-700 hover:bg-black hover:text-gray-900'
                      }
                      focus:outline-none focus:ring-4 focus:ring-black`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShopMobileFilters;
