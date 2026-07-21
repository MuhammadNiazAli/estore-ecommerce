'use client';

import React from 'react';
import { Package, Star, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Package className="w-8 h-8 text-amber-600" />,
    title: 'Premium Quality',
    description:
      'Each product is carefully selected to meet the highest quality standards and ensure long-lasting durability.',
  },
  {
    icon: <Star className="w-8 h-8 text-amber-600" />,
    title: 'Trusted by Thousands',
    description:
      'Join thousands of happy customers who have rated us 5 stars for exceptional service and value.',
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-amber-600" />,
    title: 'Satisfaction Guaranteed',
    description:
      'Your satisfaction is our priority — enjoy easy returns, refunds, and support whenever needed.',
  },
];

const ProductCallOverview = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 py-12 sm:px-6 my-[-40px] mb-0">
      <div className="max-w-[1000px] w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-4">
          Why Choose Our Products?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-base sm:text-lg px-2 sm:px-0">
          We provide an exceptional shopping experience with products that combine quality, value, and trust. Explore our core features that set us apart.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl p-6 hover:bg-gray-500 transition-colors duration-200"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-amber-600 mb-2">{title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCallOverview;
