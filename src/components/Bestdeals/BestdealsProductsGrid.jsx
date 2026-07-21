'use client';
import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    oldPrice: 149.99,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1657223143975-d29d7959a70f?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Smart Watch Series 6',
    price: 249.99,
    oldPrice: 299.99,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1617043593449-c881f876a4b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Classic Leather Jacket',
    price: 189.99,
    oldPrice: 229.99,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1647539989255-ac2634cc8c92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Running Sneakers',
    price: 79.99,
    oldPrice: 120.0,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const BestdealsProductsGrid = () => {
  return (
    <section className="bg-white text-gray-900 w-full flex justify-center py-12 px-4 sm:px-6">
      <div className="w-full max-w-[1000px]">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-100 transition-transform duration-500"
                />

                {/* ACTION BUTTONS */}
                <div className="absolute inset-0 bg-white/80 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="p-2 bg-black text-gray-900 rounded-full hover:bg-black transition">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-black text-gray-900 rounded-full hover:bg-black transition">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-black text-gray-900 rounded-full hover:bg-black transition">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* DETAILS */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-center items-center gap-2 mb-2">
                  <span className="text-black font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </div>
                {/* Rating */}
                <div className="flex justify-center text-black text-sm">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestdealsProductsGrid;
