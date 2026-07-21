'use client';

import React from 'react';
import {
  FiShoppingBag,
  FiCpu,
  FiWatch,
  FiHeadphones,
  FiCamera,
  FiPhone,
  FiGift,
} from 'react-icons/fi';

const categories = [
  { id: 1, name: 'Clothing', icon: <FiShoppingBag size={24} /> },
  { id: 2, name: 'Electronics', icon: <FiCpu size={24} /> },
  { id: 3, name: 'Watches', icon: <FiWatch size={24} /> },
  { id: 4, name: 'Audio', icon: <FiHeadphones size={24} /> },
  { id: 5, name: 'Photography', icon: <FiCamera size={24} /> },
  { id: 6, name: 'Smartphones', icon: <FiPhone size={24} /> },
  { id: 7, name: 'Gadgets', icon: <FiCpu size={24} /> },
  { id: 8, name: 'Gifts', icon: <FiGift size={24} /> },
];

const DealCategories = () => {
  return (
    <section className="w-full px-4 py-14 bg-white my-[-50px] text-gray-900 flex justify-center">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {categories.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl cursor-pointer
                         hover:bg-amber-700 hover:text-black transition duration-300 ease-in-out
                         shadow-md hover:shadow-lg"
            >
              <div className="mb-2">{icon}</div>
              <span className="font-semibold text-base sm:text-lg text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealCategories;
