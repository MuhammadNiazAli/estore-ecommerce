'use client';

import React, { useState } from 'react';
import { HeartIcon as HeartOutline, EyeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';

const accessories = [
  {
    id: 1,
    name: 'Wireless Mouse',
    description: 'Ergonomic design with long battery life.',
    image: 'https://images.unsplash.com/photo-1662371893881-1b2fae8e4304?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Laptop Sleeve',
    description: 'Protect your laptop with a slim, padded sleeve.',
    image: 'https://images.unsplash.com/photo-1705508216613-be1715a31212?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'USB-C Hub',
    description: 'Expand your connectivity with multiple ports.',
    image: 'https://images.unsplash.com/photo-1616578273461-3a99ce422de6?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'External SSD',
    description: 'Fast and portable storage solution.',
    image: 'https://images.unsplash.com/photo-1577538926210-fc6cc624fde2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const LaptopAccessoriesSection = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-[1000px] mx-auto px-4 py-12 my-[-30px] mb-0">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Must-Have Laptop Accessories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {accessories.map(({ id, name, description, image }) => {
          const isFavorited = favorites.includes(id);

          return (
            <motion.div
              key={id}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg group transition"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover Icons */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button
                    onClick={() => toggleFavorite(id)}
                    className="p-2 rounded-full bg-gray-700 hover:bg-pink-600"
                  >
                    {isFavorited ? (
                      <HeartSolid className="h-5 w-5 text-pink-400" />
                    ) : (
                      <HeartOutline className="h-5 w-5 text-white" />
                    )}
                  </button>
                  <Link href={`/product/${id}`}>
                    <button className="p-2 rounded-full bg-gray-700 hover:bg-blue-600">
                      <EyeIcon className="h-5 w-5 text-white" />
                    </button>
                  </Link>
                </div>
                {/* Optional Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{description}</p>
                <Link href="/cart">
                  <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <ShoppingCartIcon className="h-5 w-5" />
                    Add to Cart
                  </button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default LaptopAccessoriesSection;
