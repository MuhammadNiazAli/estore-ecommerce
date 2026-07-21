'use client'

import React from 'react';
import Link from 'next/link';

const laptops = [
  {
    id: 1,
    name: 'Sleek Pro Laptop',
    price: 1299,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1730794545099-14902983739d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'UltraBook X',
    price: 999,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1628114855403-820f62c99e02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGxhcHRvcCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    name: 'Gaming Beast Laptop',
    price: 1499,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1628115367019-607aedaee62a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGxhcHRvcCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 4,
    name: 'Business Pro Laptop',
    price: 1099,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1624505211449-2867a652a772?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGxhcHRvcCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    name: 'Everyday Laptop',
    price: 799,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1624505134344-a0a96e34e2c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGxhcHRvcCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 6,
    name: 'Workstation Laptop',
    price: 1799,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1632079387592-91f5a4590197?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxsYXB0b3AlMjBwcm9kdWN0fGVufDB8fDB8fHww',
  },
];

const LaptopProductGrid = ({ laptopsData = laptops }) => {
  return (
    <section className="max-w-[1000px] mx-auto px-4 py-12 my-[-40px] mb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {laptopsData.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">No laptops found.</p>
        )}

        {laptopsData.map(({ id, name, price, image, rating }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover mb-4 rounded-md"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
            <p className="text-amber-600 font-bold text-xl mb-1">${price}</p>
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-amber-600 font-semibold">{rating.toFixed(1)}</span>
              <svg
                className="w-5 h-5 text-amber-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
              </svg>
            </div>
            <Link
              href={`/laptop/${id}`}
              className="mt-auto bg-amber-800 hover:bg-amber-900 text-gray-900 font-semibold px-6 py-2 rounded-md transition inline-block w-full text-center"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaptopProductGrid;
