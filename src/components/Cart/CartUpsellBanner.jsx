'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const CartUpsellBanner = () => {
  const upsellProduct = {
    id: 1,
    title: 'Wireless Bluetooth Headphones',
    image: 'https://images.unsplash.com/photo-1570993492903-ba4c3088f100?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Update with your image path
    originalPrice: 89.99,
    discountedPrice: 59.99,
    discount: '33% OFF',
  };

  return (
    <section
      aria-label="Upsell product banner"
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl overflow-hidden shadow-lg p-5 sm:p-6 mt-6 flex flex-col sm:flex-row items-center gap-5 max-w-[1000px] mx-auto"
    >
      {/* Product Image */}
      <div className="relative w-full sm:w-44 h-44 rounded-xl overflow-hidden flex-shrink-0 shadow-inner shadow-black/40">
        <Image
          src={upsellProduct.image}
          alt={upsellProduct.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, 176px"
        />
      </div>

      {/* Info */}
      <div className="flex-1 w-full flex flex-col justify-center">
        <p className="text-yellow-400 font-semibold text-sm sm:text-base tracking-wide mb-1 select-none">
          {upsellProduct.discount}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
          {upsellProduct.title}
        </h3>

        <div className="flex items-center gap-3 mb-5">
          <span className="text-green-400 font-extrabold text-xl sm:text-2xl tracking-tight">
            ${upsellProduct.discountedPrice.toFixed(2)}
          </span>
          <span className="line-through text-gray-400 text-sm sm:text-base select-none">
            ${upsellProduct.originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={() => alert(`Added "${upsellProduct.title}" to cart!`)}
          className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-md shadow-yellow-500/50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default CartUpsellBanner;
