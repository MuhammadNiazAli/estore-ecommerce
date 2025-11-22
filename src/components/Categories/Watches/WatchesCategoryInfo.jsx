"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClockIcon, CurrencyDollarIcon, StarIcon, CubeIcon } from "@heroicons/react/24/solid";

const WatchesCategoryInfo = () => {
  return (
    <section className="w-full bg-gray-900 text-yellow-400 py-10 px-4 md:px-8">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Luxury & Smart Watches</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mb-10">
          Discover an exclusive collection of premium and smart watches designed to suit
          every style. From timeless classics to the latest tech innovations, our range
          combines elegance with functionality.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <ClockIcon className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Top Brands</h3>
            <p className="text-gray-300 text-sm">Rolex, Omega, Apple, Seiko, Tag Heuer</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <CurrencyDollarIcon className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Price Range</h3>
            <p className="text-gray-300 text-sm">$200 - $35,000</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <CubeIcon className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Materials</h3>
            <p className="text-gray-300 text-sm">Steel, Gold, Titanium, Ceramic</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <StarIcon className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Customer Rating</h3>
            <p className="text-gray-300 text-sm">4.7/5 Average Rating</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WatchesCategoryInfo;
