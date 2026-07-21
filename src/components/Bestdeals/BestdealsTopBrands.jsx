'use client';
import React from 'react';

const brands = [
  {
    id: 1,
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
  {
    id: 2,
    name: 'Nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  },
  {
    id: 3,
    name: 'Samsung',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
  },
  {
    id: 4,
    name: 'Sony',
    logo: 'https://images.seeklogo.com/logo-png/12/2/sony-glass-logo-png_seeklogo-129446.png',
  },
  {
    id: 5,
    name: 'Adidas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
  },
  {
    id: 6,
    name: 'Gucci',
    logo: 'https://www.freeiconspng.com/uploads/gucci-inspired-logo-vector-transparent-background-14.png',
  },
];

const BestdealsTopBrands = () => {
  return (
    <section className="bg-white text-gray-900 py-10 px-4 sm:px-6 flex justify-center overflow-x-hidden">
      <div className="max-w-[1000px] w-full">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left mb-8">
          Top <span className="text-amber-600">Brands</span>
        </h2>

        {/* Mobile grid: 2 columns, sm+: horizontal scroll */}
        <div
          className="
            grid grid-cols-2 gap-4
            sm:flex sm:overflow-x-auto sm:scrollbar-thin sm:scrollbar-thumb-gray-700 sm:scrollbar-track-gray-900
            sm:px-0 px-6
          "
          style={{ boxSizing: 'border-box' }}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="
                flex-shrink-0
                bg-white rounded-xl p-3
                w-full sm:w-28 sm:h-28 h-24
                flex items-center justify-center
                hover:scale-100 hover:bg-gray-500 transition-transform duration-300 shadow-md
              "
              style={{ boxSizing: 'border-box' }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-10 max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestdealsTopBrands;
