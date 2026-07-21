'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart, FaRegHeart, FaEye, FaShoppingCart } from 'react-icons/fa';

const initialWishlist = [
  {
    id: 'w1',
    name: 'Stylish Sneakers',
    price: 89.99,
    image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-5.webp',
  },
  {
    id: 'w2',
    name: 'Classic Denim Jacket',
    price: 59.99,
    image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-7.webp',
  },
  {
    id: 'w3',
    name: 'Leather Handbag',
    price: 120.0,
    image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-8.webp',
  },
];

const AccountWishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const [likedIds, setLikedIds] = useState(new Set(wishlist.map((i) => i.id)));

  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (wishlist.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-white to-white rounded-xl p-8 max-w-[1000px] mx-auto text-center text-gray-600"
      >
        <h2 className="text-2xl font-extrabold mb-4 text-gray-900">Your Wishlist</h2>
        <p>You have no items in your wishlist.</p>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-white to-white rounded-xl p-8 max-w-[1000px] mx-auto"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-wide">Your Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {wishlist.map(({ id, name, price, image }) => (
          <div
            key={id}
            className="relative bg-white rounded-xl shadow-xl overflow-hidden group cursor-pointer"
          >
            {/* Image container */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-110"
                priority
              />
              {/* Glass blur overlay with icons */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6"
              >
                {/* Heart toggle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(id);
                  }}
                  aria-label={likedIds.has(id) ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
                  title={likedIds.has(id) ? `Remove ${name}` : `Add ${name}`}
                  className="text-black hover:text-black text-2xl transition"
                >
                  {likedIds.has(id) ? <FaHeart /> : <FaRegHeart />}
                </button>

                {/* View details */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Viewing details for ${name}`);
                  }}
                  aria-label={`View details for ${name}`}
                  title={`View details`}
                  className="text-gray-900 hover:text-black text-2xl transition"
                >
                  <FaEye />
                </button>

                {/* Add to cart */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Added ${name} to cart`);
                  }}
                  aria-label={`Add ${name} to cart`}
                  title={`Add to cart`}
                  className="text-gray-900 hover:text-black text-2xl transition"
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>

            {/* Product info */}
            <div className="p-5">
              <h3 className="text-gray-900 font-semibold text-lg truncate" title={name}>
                {name}
              </h3>
              <p className="text-black font-bold mt-1 text-lg">${price.toFixed(2)}</p>
            </div>

            {/* Remove button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeItem(id);
              }}
              aria-label={`Remove ${name} from wishlist`}
              title={`Remove ${name}`}
              className="absolute top-3 right-3 bg-black hover:bg-black text-gray-900 rounded-full p-2 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-black"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default AccountWishlist;
