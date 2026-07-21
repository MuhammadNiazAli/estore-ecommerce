import React from 'react';
import { Star, ShoppingBag, Shield, Truck } from 'lucide-react'; // Premium icons

const highlights = [
  {
    id: 1,
    icon: <Star className="w-10 h-10 text-amber-600" />,
    title: 'Premium Quality',
    description:
      'Crafted from the finest materials for unmatched durability and comfort.',
  },
  {
    id: 2,
    icon: <ShoppingBag className="w-10 h-10 text-amber-600" />,
    title: 'Exclusive Designs',
    description:
      'Discover unique styles curated for the new season, only available here.',
  },
  {
    id: 3,
    icon: <Shield className="w-10 h-10 text-amber-600" />,
    title: 'Secure Shopping',
    description:
      'Shop with confidence thanks to our advanced security and guarantees.',
  },
  {
    id: 4,
    icon: <Truck className="w-10 h-10 text-amber-600" />,
    title: 'Fast Delivery',
    description:
      'Enjoy quick and reliable shipping straight to your doorstep.',
  },
];

const NewseasonHighlights = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-amber-600 text-3xl md:text-4xl font-bold mb-4">
          Why Shop Our New Season?
        </h2>
        <p className="text-amber-400 text-lg mb-12 max-w-2xl mx-auto">
          Experience the perfect blend of quality, style, and convenience with our premium collection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="bg-white rounded-lg p-6 text-center shadow-lg transform transition duration-500 hover:scale-105 hover:border-amber-600 border border-transparent"
            >
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="text-amber-500 text-xl font-semibold mb-2">{title}</h3>
              <p className="text-amber-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewseasonHighlights;
