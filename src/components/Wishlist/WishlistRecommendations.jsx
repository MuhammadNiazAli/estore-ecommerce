'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { MdCompareArrows } from 'react-icons/md';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const recommendedItems = [
  {
    id: 1,
    title: 'Modern Office Chair',
    description: 'Ergonomic comfort with stylish design.',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1655849676216-bf75dcde64e0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 2,
    title: 'Elegant Wooden Desk',
    description: 'Spacious surface for all your work essentials.',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1589079065352-37640fc29721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 3,
    title: 'Minimalist Lamp',
    description: 'Simple and sleek lighting solution.',
    price: 55,
    image:
      'https://images.unsplash.com/photo-1557859493-2109255bd5cd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
];

const WishlistRecommendations = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-white px-4 py-16 mb-[-130px]">
      <div className="max-w-[1000px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
        >
          You Might Also Like
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedItems.map((item, index) => {
            const isFavorite = favorites.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white dark:bg-white rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col relative group"
              >
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-4">
                    {/* Top Left Icons */}
                    <div className="flex gap-3 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500 delay-150">
                      <Link
                        href={`/compare`}
                        title="Compare"
                        className="p-2 rounded-full bg-white dark:bg-white text-gray-800 dark:text-gray-900 shadow hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-500 transition"
                      >
                        <MdCompareArrows size={18} />
                      </Link>
                      <Link
                        href={`/product`}
                        title="View"
                        className="p-2 rounded-full bg-white dark:bg-white text-gray-800 dark:text-gray-900 shadow hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-500 transition"
                      >
                        <FiEye size={18} />
                      </Link>
                    </div>

                    {/* Bottom Center Info */}
                    <div className="text-gray-900 text-center transition-all duration-500">
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="text-sm mt-1 opacity-80">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Text and Action Buttons */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-black dark:text-black font-semibold text-lg mt-2">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="mt-auto flex justify-between gap-3 pt-6">
                    <Link
                      href="/cart"
                      className="flex-1 px-5 py-2 rounded-full bg-black text-gray-900 hover:bg-black transition text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <FiShoppingCart size={18} />
                      Add to Cart
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(item.id)}
                      aria-label="Add to Wishlist"
                      className={clsx(
                        'p-2 rounded-full border transition',
                        isFavorite
                          ? 'bg-black text-gray-900 border-black hover:bg-black'
                          : 'border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-700 hover:bg-gray-500 dark:hover:bg-gray-500'
                      )}
                    >
                      <FiHeart size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WishlistRecommendations;
