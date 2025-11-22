'use client';

import React from 'react';
import { motion } from 'framer-motion';

const deals = [
  {
    id: 1,
    title: 'Deluxe Spa Set',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    oldPrice: '€59.99',
    newPrice: '€39.99',
    discount: '33%',
  },
  {
    id: 2,
    title: 'Bluetooth Speaker',
    img: 'https://images.unsplash.com/photo-1518449079433-4b54764d0d2e?auto=format&fit=crop&w=400&q=80',
    oldPrice: '€89.99',
    newPrice: '€64.99',
    discount: '28%',
  },
  {
    id: 3,
    title: 'Leather Wallet',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    oldPrice: '€49.99',
    newPrice: '€29.99',
    discount: '40%',
  },
];

export default function GiftDeals() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 bg-gray-900 rounded-lg shadow-2xl text-white">
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-yellow-400 text-3xl font-extrabold drop-shadow-lg">
          Special Gift Deals
        </h2>
        <p className="text-gray-300 mt-2 max-w-lg mx-auto text-sm sm:text-base">
          Grab these exclusive offers before they’re gone!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {deals.map(({ id, title, img, oldPrice, newPrice, discount }) => (
          <div
            key={id}
            className="group bg-gray-900 border border-yellow-400/20 rounded-xl overflow-hidden shadow-md hover:shadow-yellow-500/40 hover:scale-[1.03] transition-transform cursor-pointer"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg truncate" title={title}>
                {title}
              </h3>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-yellow-400 font-extrabold text-xl">
                  {newPrice}
                </span>
                <span className="text-gray-500 line-through text-sm">{oldPrice}</span>
                <span className="ml-auto bg-yellow-400 text-gray-900 font-bold px-2 py-0.5 rounded-full text-xs">
                  -{discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
