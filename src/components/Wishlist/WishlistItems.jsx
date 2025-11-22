'use client';

import React from 'react';
import Image from 'next/image';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';

const wishlistProducts = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 89.99,
    image:
      'https://images.unsplash.com/photo-1655849676216-bf75dcde64e0?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Elegant Wooden Desk',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1589079065352-37640fc29721?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Minimalist Lamp',
    price: 55,
    image:
      'https://images.unsplash.com/photo-1557859493-2109255bd5cd?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Modern Sunglasses',
    price: 59.99,
    image:
      'https://images.unsplash.com/photo-1619976491498-f2dadb25fb3b?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Comfortable Chair',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1689287428096-7e1dcc705a5c?q=80&w=361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const WishlistItems = () => {
  return (
    <section className="max-w-[1100px] mx-auto p-4 sm:p-6 bg-gray-900 rounded-md">
      <h2 className="text-xl font-semibold text-white mb-4">Your Wishlist Items</h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {wishlistProducts.map(({ id, title, price, image }) => (
          <li
            key={id}
            className="bg-white dark:bg-gray-800 rounded-md shadow-md hover:shadow-xl transition overflow-hidden relative group"
          >
            <div className="relative w-full h-28 sm:h-32 rounded-t-md overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 150px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={id === 1}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-start p-2">
                <div className="flex gap-2 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300 delay-100">
                  <Link
                    href="/cart"
                    title="Add to Cart"
                    className="p-1.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    <FiShoppingCart size={16} />
                  </Link>
                  <button
                    type="button"
                    title="Remove from Wishlist"
                    className="p-1.5 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-3 flex flex-col items-center text-center">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate w-full">
                {title}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-1">
                ${price.toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WishlistItems;
