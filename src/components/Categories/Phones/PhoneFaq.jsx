'use client';

import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Smartphones',
    description: 'Latest flagship and budget smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 2,
    name: 'Feature Phones',
    description: 'Reliable & simple mobile phones',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f9992d4a46?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 3,
    name: 'Gaming Phones',
    description: 'High performance phones for gamers',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 4,
    name: 'Refurbished',
    description: 'Certified like-new phones at great prices',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 5,
    name: 'Accessories',
    description: 'Cases, chargers, headphones & more',
    image: 'https://images.unsplash.com/photo-1526403227356-2e1fc5f1f3c7?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 6,
    name: 'Wearables',
    description: 'Smart watches and fitness trackers',
    image: 'https://images.unsplash.com/photo-1516557070060-682fc6aa99ba?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 7,
    name: 'Unlocked Phones',
    description: 'Phones that work with any carrier',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f9992d4a46?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 8,
    name: 'Phone Cases',
    description: 'Protective and stylish phone cases',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 9,
    name: 'Power Banks',
    description: 'Portable chargers for your devices',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 10,
    name: 'Bluetooth Headsets',
    description: 'Wireless earphones and headphones',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 11,
    name: 'Screen Protectors',
    description: 'Protect your screen from scratches',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 12,
    name: 'Car Accessories',
    description: 'Phone holders, chargers, and more',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 13,
    name: 'Smart Home',
    description: 'Smart speakers, lights, and devices',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 14,
    name: 'Fitness Gadgets',
    description: 'Trackers and smart fitness devices',
    image: 'https://images.unsplash.com/photo-1503437313881-503a91226419?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 15,
    name: 'Kids Phones',
    description: 'Phones designed for children',
    image: 'https://images.unsplash.com/photo-1520975695232-0b4d5d5cc27e?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 16,
    name: 'Refurbished Accessories',
    description: 'Certified refurbished phone accessories',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 17,
    name: 'Phone Cleaning Kits',
    description: 'Keep your phone spotless and clean',
    image: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf4b?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 18,
    name: 'Memory Cards',
    description: 'Expand your phone storage',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 19,
    name: 'Mobile Gaming Accessories',
    description: 'Controllers, grips, and more',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=80&q=80',
  },
  {
    id: 20,
    name: 'Phone Repair Tools',
    description: 'Tools for DIY phone repair',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=80&q=80',
  },
];

const PhoneCategories = () => {
  return (
    <section className="max-w-[1000px] mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold text-center text-neutral-50 mb-10">
        Mobile Phone Categories
      </h2>

      <div className="flex overflow-x-auto no-scrollbar space-x-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
        {categories.map(({ id, name, description, image }) => (
          <button
            key={id}
            type="button"
            aria-label={`Browse category ${name}`}
            className="
              flex-shrink-0 w-64 lg:w-full bg-white rounded-2xl shadow hover:shadow-xl
              transition-shadow duration-300 p-4 flex items-center gap-4 cursor-pointer
              focus:outline-none focus:ring-4 focus:ring-black
            "
          >
            <img
              src={image}
              alt={`${name} icon`}
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
              width={64}
              height={64}
            />
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900 leading-tight">{name}</h3>
              <p className="text-xs text-gray-600 mt-1">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default PhoneCategories;
