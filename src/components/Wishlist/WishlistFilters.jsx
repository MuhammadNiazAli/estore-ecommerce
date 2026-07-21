'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiEye, FiShoppingCart } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const categories = ['Clothing', 'Accessories', 'Electronics', 'On Sale'];

const allProducts = [
 {
    id: 1,
    title: 'Noise-Canceling Headphones',
    price: 89,
    oldPrice: 139,
    image: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=580&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Smart Fitness Tracker',
    price: 59,
    oldPrice: 99,
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=859&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Compact Bluetooth Speaker',
    price: 45,
    oldPrice: 79,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1031&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Wireless Charging Pad',
    price: 29,
    oldPrice: 59,
    image: 'https://plus.unsplash.com/premium_photo-1671017712452-92d279cb3363?q=80&w=423&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Smart LED Table Lamp',
    price: 39,
    oldPrice: 69,
    image: 'https://plus.unsplash.com/premium_photo-1672166939591-b2547bd18fca?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Gaming Mouse RGB',
    price: 25,
    oldPrice: 45,
    image: 'https://images.unsplash.com/photo-1627745212312-e399f57157ea?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    title: 'Ergonomic Office Chair',
    price: 149,
    oldPrice: 199,
    image: 'https://images.unsplash.com/photo-1750306957077-b74e45fe1819?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    title: 'Portable Tripod Stand',
    price: 19,
    oldPrice: 29,
    image: 'https://images.unsplash.com/photo-1669255344189-fc6a34d42f3a?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    title: 'Laptop Cooling Pad',
    price: 34,
    oldPrice: 59,
    image: 'https://plus.unsplash.com/premium_photo-1680371834671-26c3d8f0e0d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    title: 'Adjustable Phone Stand',
    price: 14,
    oldPrice: 24,
    image: 'https://images.unsplash.com/photo-1669255344177-dc55f537acc9?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    title: 'Wireless Security Camera',
    price: 99,
    oldPrice: 149,
    image: 'https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    title: 'Stylish Digital Alarm Clock',
    price: 22,
    oldPrice: 39,
    image: 'https://images.unsplash.com/photo-1595001918824-83250c5f0599?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 13,
    title: 'Noise Reduction Microphone',
    price: 79,
    oldPrice: 119,
    image: 'https://images.unsplash.com/photo-1642181329718-5f13fbc560b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 14,
    title: 'High-Speed USB Hub',
    price: 18,
    oldPrice: 29,
    image: 'https://images.unsplash.com/photo-1632017261554-7c6712cb0a09?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 15,
    title: 'Wireless Presentation Remote',
    price: 35,
    oldPrice: 59,
    image: 'https://images.unsplash.com/photo-1595756630832-848909a39597?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 16,
    title: 'Creative Desk Organizer',
    price: 27,
    oldPrice: 39,
    image: 'https://images.unsplash.com/photo-1455994972514-4624f7f224a7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 17,
    title: 'Magnetic Cable Holder',
    price: 9,
    oldPrice: 15,
    image: 'https://images.unsplash.com/photo-1635179885954-c778885a1197?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 18,
    title: 'Compact Power Bank 10000mAh',
    price: 32,
    oldPrice: 49,
    image: 'https://images.unsplash.com/photo-1554941071-34ae1db151e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFVTQiUyMEMlMjBNdWx0aXBvcnQlMjBBZGFwdGVyfGVufDB8fDB8fHww',
  },
  {
    id: 19,
    title: 'Smart Thermostat Controller',
    price: 119,
    oldPrice: 179,
    image: 'https://images.unsplash.com/photo-1685660477695-73713eaf512a?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
    {
    id: 20,
    title: 'USB-C Multiport Adapter',
    price: 44,
    oldPrice: 69,
    image: 'https://images.unsplash.com/photo-1668435074918-3dc9e1694b84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFVTQiUyMEMlMjBNdWx0aXBvcnQlMjBBZGFwdGVyfGVufDB8fDB8fHww',
  },
  {
    id: 21,
    title: 'Noise-Canceling Headphones',
    oldPrice: 140,
    price: 70,
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=580&q=80',
  },
  {
    id: 26,
    title: 'Gaming Mouse RGB',
    oldPrice: 50,
    price: 25,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 28,
    title: 'Portable Tripod Stand',
    oldPrice: 30,
    price: 15,
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=327&q=80',
  },
  {
    id: 32,
    title: 'Stylish Digital Alarm Clock',
    oldPrice: 40,
    price: 20,
    image:
      'https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 33,
    title: 'Noise Reduction Microphone',
    oldPrice: 120,
    price: 60,
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 34,
    title: 'High-Speed USB Hub',
    oldPrice: 30,
    price: 15,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 35,
    title: 'Wireless Presentation Remote',
    oldPrice: 60,
    price: 30,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 36,
    title: 'Creative Desk Organizer',
    oldPrice: 40,
    price: 20,
    image:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 37,
    title: 'Magnetic Cable Holder',
    oldPrice: 15,
    price: 7.5,
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=464&q=80',
  },
  {
    id: 38,
    title: 'Compact Power Bank 10000mAh',
    oldPrice: 50,
    price: 25,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 40,
    title: 'USB-C Multiport Adapter',
    oldPrice: 70,
    price: 35,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
];


// Add category info
const categorizedProducts = allProducts.map((product, index) => ({
  ...product,
  category: categories[index % categories.length],
}));

const filters = ['All', ...categories];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function WishlistFilters() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Maintain favorite status by product id
  const [favorites, setFavorites] = useState(() => new Set());

  const router = useRouter();

  const filteredProducts =
    activeFilter === 'All'
      ? categorizedProducts
      : categorizedProducts.filter((p) => p.category === activeFilter);

  // Toggle favorite state
  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="bg-white py-8 px-4 min-h-[500px]">
      {/* Filters */}
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className="
    max-w-[1000px] mx-auto
    grid grid-cols-2 gap-3 justify-items-center
    sm:flex sm:flex-wrap sm:gap-3 sm:justify-center
  "
>
  {filters.map((filter) => (
    <button
      key={filter}
      onClick={() => setActiveFilter(filter)}
      type="button"
      className={`
        px-4 py-2 rounded-full font-semibold border transition
        text-sm sm:text-base
        ${
          activeFilter === filter
            ? 'bg-amber-800 text-gray-900 border-amber-800 shadow-lg'
            : 'bg-transparent text-amber-800 border-amber-800 hover:bg-amber-300 dark:hover:bg-gray-500'
        }
        focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-1
        w-full
        max-w-full
        sm:max-w-[130px]
      `}
      aria-pressed={activeFilter === filter}
      aria-label={`Filter products by ${filter}`}
    >
      {filter}
    </button>
  ))}
</motion.div>


      {/* Products Grid */}
      <motion.div
        layout
        className="max-w-[1000px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProducts.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-gray-500 col-span-full"
            >
              No products found in this category.
            </motion.p>
          )}

          {filteredProducts.map((product) => (
            <motion.article
              key={product.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white dark:bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
                         hover:shadow-xl focus:shadow-xl focus:outline-none
                         ring-1 ring-transparent focus:ring-amber-600 transition-shadow duration-300"
              tabIndex={0}
              aria-label={`${product.title}, price $${product.price.toFixed(2)}`}
            >
              {/* Image with hover scale animation */}
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
                loading="lazy"
                draggable={false}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />

              <div className="p-4">
                <h3
                  className="font-semibold text-lg text-gray-900 dark:text-gray-800 truncate"
                  title={product.title}
                >
                  {product.title}
                </h3>
                <p className="mt-1 text-amber-600 font-bold text-xl">
                  ${product.price.toFixed(2)}
                </p>
                {product.oldPrice && product.oldPrice > product.price && (
                  <p className="text-sm line-through text-gray-600">
                    ${product.oldPrice.toFixed(2)}
                  </p>
                )}
                <div className="mt-3 flex gap-5 text-gray-600 dark:text-gray-700 justify-start">
                  {/* Cart icon navigates to product page */}
                  <FiShoppingCart
                    tabIndex={0}
                    role="button"
                    aria-label="Add to cart"
                    className="w-6 h-6 hover:text-amber-800 cursor-pointer transition-colors duration-200"
                    onClick={() => router.push(`/cart`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') router.push(`/cart`);
                    }}
                  />
                  {/* Heart icon toggles favorite */}
                  <FiHeart
                    tabIndex={0}
                    role="button"
                    aria-label={
                      favorites.has(product.id)
                        ? 'Remove from favorites'
                        : 'Add to favorites'
                    }
                    className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
                      favorites.has(product.id) ? 'text-red-600' : 'hover:text-red-600 text-gray-600 dark:text-gray-700'
                    }`}
                    onClick={() => toggleFavorite(product.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') toggleFavorite(product.id);
                    }}
                  />
                  {/* View icon navigates to details page */}
                  <FiEye
                    tabIndex={0}
                    role="button"
                    aria-label="View details"
                    className="w-6 h-6 hover:text-amber-600 cursor-pointer transition-colors duration-200"
                    onClick={() => router.push(`/product`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') router.push(`/product`);
                    }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
