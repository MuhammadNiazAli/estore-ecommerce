'use client';

import React from 'react';
import { FiEye } from 'react-icons/fi'; // Eye icon for "View Details"

const recommendedProducts = [
  {
    id: 1,
    title: 'Wireless Earbuds',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Smartwatch Series 5',
    price: 249.99,
    image:
      'https://media.istockphoto.com/id/1294821410/photo/smartwatch-on-a-pink-background-silver-aluminum-case-pine-green-strap-style-fashion-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=2baNs0Pt_3V1rqUfUewzitoUNDdaoUETFSSNB3tNcWE=',
  },
  {
    id: 3,
    title: 'Portable Bluetooth Speaker',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1675319245480-215961c129f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Fitness Tracker Pro',
    price: 129.99,
    image:
      'https://plus.unsplash.com/premium_photo-1712761997182-45455a50d8c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'VR Headset Plus',
    price: 399.99,
    image:
      'https://plus.unsplash.com/premium_photo-1680346528789-0ffcc13f5ebf?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Noise Cancelling Headphones',
    price: 199.99,
    image:
      'https://media.istockphoto.com/id/1939097229/photo/noise-canceling-headphone-with-sound-absorbing-cotton-background-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=-bMLMcGRydwi8RyU_d8WMBUrmAtR__1R9STt0eUJgqk=',
  },
];

const CartRecommendedProducts = () => {
  return (
    <div className="w-full bg-white text-gray-900 flex justify-center px-4 sm:px-6 py-10">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-black text-2xl font-semibold mb-6">
          Recommended for You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-4 flex flex-col items-center hover:bg-gray-500 transition cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <h3 className="text-gray-900 font-semibold text-lg mb-2 text-center truncate w-full">
                {product.title}
              </h3>
              <p className="text-black font-semibold text-lg mb-4">
                ${product.price.toFixed(2)}
              </p>
             <button
                type="button"
                className="bg-black hover:bg-black text-gray-900 font-semibold px-5 py-2 rounded-full w-full transition shadow-md"
                onClick={() => alert(`Added "${product.title}" to cart.`)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartRecommendedProducts;
