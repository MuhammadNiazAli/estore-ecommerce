'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const brands = [
  {
    name: 'Apple',
    image:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-deeppurple-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946',
    productCount: 25,
  },
  {
    name: 'Samsung',
    image:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-deeppurple-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946',
    productCount: 18,
  },
  {
    name: 'OnePlus',
    image:
      'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Wintermist_9.png',
    productCount: 15,
  },
  {
    name: 'Google',
    image:
      'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Wintermist_9.png',
    productCount: 12,
  },
];

const PhoneBrandHighlights = ({ onBrandSelect }) => {
  const [activeBrand, setActiveBrand] = useState('');

  const handleBrandClick = (brandName) => {
    setActiveBrand(brandName);
    if (onBrandSelect) {
      onBrandSelect(brandName); // Call parent callback
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto my-16 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-3xl font-extrabold text-gray-900 drop-shadow-lg">
          Shop by Brand
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Choose your favorite brand and explore premium smartphones.
        </p>
      </div>

      {/* Brand Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-center">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => handleBrandClick(brand.name)}
            aria-label={`Shop ${brand.name} phones`}
            title={`Shop ${brand.name} phones`}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group 
              transform transition duration-500 hover:scale-105 focus:outline-none 
              focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-75 
              ${activeBrand === brand.name ? 'ring-2 ring-black' : ''}`}
          >
            {/* Brand Image */}
            <div className="w-full h-48 sm:h-56 md:h-64">
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-[700ms] 
                  group-hover:scale-110 group-hover:rotate-[1.5deg]"
              />
            </div>

            {/* Brand Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/60 backdrop-blur-sm py-2 px-3 text-center">
              <span className="text-gray-900 font-semibold text-lg select-none">
                {brand.name}
              </span>
              <p className="text-gray-700 text-xs mt-1">
                {brand.productCount} Products
              </p>
            </div>

            {/* Selected Badge */}
            {activeBrand === brand.name && (
              <span className="absolute top-2 right-2 bg-black text-black px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow">
                <CheckCircle className="w-4 h-4" />
                Selected
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active Brand Info */}
      {activeBrand && (
        <div className="mt-8 text-center text-gray-700 text-sm">
          Showing products for <span className="text-black font-semibold">{activeBrand}</span>
        </div>
      )}
    </section>
  );
};

export default PhoneBrandHighlights;
