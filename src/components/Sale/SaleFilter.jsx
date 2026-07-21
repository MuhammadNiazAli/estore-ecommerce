'use client';

import React, { useState } from 'react';

export default function SalePage() {
  // ✅ Product Data
  const productsData = [
    {
      id: 1,
      name: 'Smartphone',
      category: 'Electronics',
      price: 699,
      image:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1227&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Sneakers',
      category: 'Fashion',
      price: 120,
      image:
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1287&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Laptop',
      category: 'Electronics',
      price: 1200,
      image:
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1287&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Luxury Watch',
      category: 'Accessories',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1288&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'T-Shirt',
      category: 'Fashion',
      price: 45,
      image:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1064&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      category: 'Electronics',
      price: 159,
      image:
        'https://images.unsplash.com/photo-1722448113450-f6860b7fbfe5?q=80&w=1035&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'Leather Handbag',
      category: 'Accessories',
      price: 220,
      image:
        'https://plus.unsplash.com/premium_photo-1680384369790-a4c40c51491c?q=80&w=1227&auto=format&fit=crop',
    },
    {
      id: 8,
      name: 'Gaming Console',
      category: 'Electronics',
      price: 499,
      image:
        'https://plus.unsplash.com/premium_photo-1680086980474-9883d5ba4dd1?q=80&w=1287&auto=format&fit=crop',
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // ✅ Handle Filter
  const handleFilterChange = (category) => {
    if (category === 'All') {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter((item) => item.category === category)
      );
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 py-10 space-y-10 max-w-7xl mx-auto mb-[-20px]">
      {/* ✅ Heading */}
      <h1 className="text-2xl md:text-4xl font-extrabold text-center leading-snug">
        Hot Deals <span className="text-amber-700">This Season</span>
      </h1>

      {/* ✅ Filter */}
      <SaleFilter
        categories={['Electronics', 'Fashion', 'Accessories']}
        onFilterChange={handleFilterChange}
      />

      {/* ✅ Products */}
      <SaleProducts products={filteredProducts} />
    </main>
  );
}

/* ----------------------
   ✅ SaleFilter Component
----------------------- */
const SaleFilter = ({ categories = [], onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[1000px] w-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-3">
        {['All', ...categories].map((category, index) => (
          <button
            key={index}
            onClick={() => handleFilterClick(category)}
            className={`rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 shadow-md
              ${
                activeCategory === category
                  ? 'bg-amber-600 text-gray-900'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }
              px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

/* ----------------------
   ✅ SaleProducts Component
----------------------- */
const SaleProducts = ({ products }) => {
  return (
    <section className="w-full flex justify-center px-2">
      <div className="max-w-[1000px] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full h-28 sm:h-36 md:h-44 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-gray-900 mt-2 sm:mt-3">
                {product.name}
              </h3>

              {/* Price */}
              <p className="text-amber-700 font-bold mt-1 text-sm sm:text-base">
                ${product.price}
              </p>

              {/* Button */}
           <button
  className="mt-2 sm:mt-3 px-3 sm:px-4 md:px-5 py-1.5 sm:py-1.5 md:py-2
             bg-white text-amber-600 rounded-full whitespace-nowrap
             text-xs sm:text-sm md:text-base font-semibold
             hover:bg-amber-600 hover:text-gray-900 transition-all duration-300"
>
  Add to Cart
</button>

            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-sm sm:text-base">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};
