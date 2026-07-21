'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';

const products = [
  {
    id: 1,
    title: 'Noise-Canceling Headphones',
    price: 89,
    oldPrice: 139,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 2,
    title: 'Smartwatch Series 5',
    price: 199,
    oldPrice: 249,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 3,
    title: 'Wireless Bluetooth Speaker',
    price: 59,
    oldPrice: null,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=398&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 4,
    title: 'DSLR Camera',
    price: 499,
    oldPrice: 599,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 5,
    title: 'Gaming Laptop',
    price: 1099,
    oldPrice: 1299,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1651863548695-b474e99ffcb9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    price: 79,
    oldPrice: 99,
    rating: 4.1,
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=404&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 7,
    title: 'Stylish Sunglasses',
    price: 49,
    oldPrice: 59,
    rating: 3.9,
    image:
      'https://images.unsplash.com/photo-1641390323814-b6720f65dee9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 8,
    title: 'Leather Backpack',
    price: 89,
    oldPrice: 119,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-amber-600" aria-label={`Rating: ${rating} out of 5`}>
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-4 h-4 sm:w-5 sm:h-5"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.036 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.287-3.974z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-4 h-4 sm:w-5 sm:h-5"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.036 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.287-3.974z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 20 20"
          className="w-4 h-4 sm:w-5 sm:h-5"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.036 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.287-3.974z" />
        </svg>
      ))}
    </div>
  );
};

const ShopProductsGrid = () => {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      className="w-full py-8 px-4 sm:px-6 md:px-8 bg-white text-gray-700 min-h-screen"
      aria-label="Product listing"
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
        {products.map((product) => (
          <article
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-amber-400"
            tabIndex={0}
            aria-label={`${product.title}, price $${product.price}`}
          >
            {/* Image */}
            <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 truncate">
                {product.title}
              </h3>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400 font-semibold text-lg sm:text-xl">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through text-xs sm:text-sm select-none">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <div className="mb-3">{renderStars(product.rating)}</div>

              {/* Buttons */}
              <div className="mt-auto flex items-center gap-2">
                {/* Add to Cart */}
                <button
                  aria-label={`Add ${product.title} to cart`}
                  onClick={() => router.push(`/cart?id`)}
                  className="flex items-center gap-1 bg-amber-400 text-gray-900 px-3 py-1.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-200 active:scale-95"
                >
                  <FiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add
                </button>

                {/* Favorite */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={`${
                    favorites.includes(product.id)
                      ? 'Remove from wishlist'
                      : 'Add to wishlist'
                  }`}
                  className={`p-1.5 rounded-full transition-all focus:outline-none focus:ring-2 flex items-center justify-center text-xs sm:text-sm ${
                    favorites.includes(product.id)
                      ? 'bg-red-600 text-gray-900 shadow-md hover:bg-red-700'
                      : 'bg-white hover:bg-gray-500 text-amber-400'
                  }`}
                >
                  <FiHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* View */}
                <button
                  onClick={() => router.push(`/product`)}
                  aria-label={`View details for ${product.title}`}
                  className="p-1.5 bg-white rounded-full hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition flex items-center justify-center text-xs sm:text-sm text-amber-400 hover:text-gray-900"
                >
                  <FiEye className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ShopProductsGrid;
