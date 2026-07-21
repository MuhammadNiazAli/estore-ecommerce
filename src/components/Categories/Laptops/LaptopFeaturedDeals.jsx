'use client';
import React, { useRef, useState } from 'react';
import {
  HeartIcon as HeartOutline,
  EyeIcon,
  ArrowsRightLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';

const deals = [
  {
    id: 1,
    name: 'MacBook Air M2',
    price: 1199,
    oldPrice: 1299,
    image:
      'https://images.unsplash.com/photo-1730794545099-14902983739d?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 1399,
    oldPrice: 1599,
    image:
      'https://images.unsplash.com/photo-1628114855403-820f62c99e02?w=870&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'ASUS ROG Zephyrus G14',
    price: 1499,
    oldPrice: 1699,
    image:
      'https://images.unsplash.com/photo-1628115367019-607aedaee62a?w=870&auto=format&fit=crop&q=80',
  },
  // Add 47+ more with similar structure and real images:
  {
    id: 4,
    name: 'Dell XPS 13',
    price: 1249,
    oldPrice: 1399,
    image:
      'https://images.unsplash.com/photo-1624505211449-2867a652a772?w=870&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'HP Spectre x360',
    price: 1299,
    oldPrice: 1449,
    image:
      'https://images.unsplash.com/photo-1624505134344-a0a96e34e2c2?w=870&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Microsoft Surface Laptop 4',
    price: 1399,
    oldPrice: 1499,
    image:
      'https://images.unsplash.com/photo-1632079387592-91f5a4590197?w=870&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Acer Swift 3',
    price: 799,
    oldPrice: 899,
    image:
      'https://images.unsplash.com/photo-1660485650942-4b15cde4155b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxsYXB0b3AlMjBwcm9kdWN0fGVufDB8fDB8fHww',
  },
  {
    id: 8,
    name: 'Razer Blade 15',
    price: 1799,
    oldPrice: 1999,
    image:
      'https://plus.unsplash.com/premium_photo-1682515008380-780eb5f6cc35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxsYXB0b3AlMjBwcm9kdWN0fGVufDB8fDB8fHww',
  },
  {
    id: 9,
    name: 'Lenovo Yoga 9i',
    price: 1399,
    oldPrice: 1599,
    image:
      'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=870&auto=format&fit=crop&q=80',
  },
  // Continue up to 50+ with similar pattern...
];

const LaptopFeaturedDeals = () => {
  const scrollRef = useRef(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative max-w-[1000px] mx-auto px-4 py-10 my-[-40px] mb-0">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Featured Deals</h2>

      {/* Scroll Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute z-10 top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 hover:bg-gray-50 text-gray-900 p-2 rounded-full shadow-md transition"
        aria-label="Scroll Left"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute z-10 top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 hover:bg-gray-50 text-gray-900 p-2 rounded-full shadow-md transition"
        aria-label="Scroll Right"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      {/* Scrollable Deals */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar scroll-smooth"
      >
        {deals.map(({ id, name, price, oldPrice, image }) => (
          <div
            key={id}
            className="relative min-w-[280px] bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer flex-shrink-0"
          >
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Glass-blur Overlay */}
            <div className="absolute inset-0 backdrop-blur-md bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
              <button
                className="p-2 rounded-full bg-white hover:bg-red-600 transition text-gray-900"
                onClick={() => toggleFavorite(id)}
              >
                {favorites.includes(id) ? (
                  <HeartSolid className="w-5 h-5 text-red-500" />
                ) : (
                  <HeartOutline className="w-5 h-5" />
                )}
              </button>

              <Link
                href={`/laptop/${id}`}
                className="p-2 rounded-full bg-white hover:bg-blue-600 transition text-gray-900"
              >
                <EyeIcon className="w-5 h-5" />
              </Link>

              <Link
                href={`/compare/${id}`}
                className="p-2 rounded-full bg-white hover:bg-green-600 transition text-gray-900"
              >
                <ArrowsRightLeftIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate" title={name}>
                {name}
              </h3>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-blue-500 font-bold text-xl">${price}</span>
                <span className="line-through text-gray-500">${oldPrice}</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? 'text-amber-600' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-2 text-sm">(120)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar utility */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default LaptopFeaturedDeals;
