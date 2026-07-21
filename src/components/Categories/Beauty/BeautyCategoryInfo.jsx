'use client'
import React from 'react';
import { FaLeaf, FaSun, FaTint, FaSeedling } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLeaf className="text-green-600 w-6 h-6" />,
    title: "Eco-Friendly",
    desc: "All products are grown with sustainable methods.",
  },
  {
    icon: <FaSun className="text-amber-600 w-6 h-6" />,
    title: "Natural Light Care",
    desc: "Guidelines on ideal light conditions for each plant.",
  },
  {
    icon: <FaTint className="text-amber-600 w-6 h-6" />,
    title: "Watering Tips",
    desc: "Learn how to water your plants perfectly for long-lasting health.",
  },
  {
    icon: <FaSeedling className="text-green-500 w-6 h-6" />,
    title: "Growth Guarantee",
    desc: "Quality assurance for thriving plants delivered to you.",
  },
];

const brands = [
  "GreenScape",
  "Nature's Touch",
  "Urban Jungle",
  "Bloom & Grow",
  "Leaf & Root",
];

const BeautyCategoryInfo = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 my-[-50px]">
      {/* Title & Intro */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-4 leading-tight">
          Explore Our Beauty & Indoor Plants Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
          Discover a wide variety of indoor plants, succulents, flowering pots, and herbs
          perfect for beautifying your home and improving air quality.
        </p>
      </div>

      {/* Brands */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-500 mb-6">
          Trusted Brands You’ll Love
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-12">
          {brands.map((brand, i) => (
            <li
              key={i}
              className="text-amber-700 font-medium text-lg md:text-xl border border-amber-500 rounded-md px-5 py-2 hover:bg-gray-500 transition"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {benefits.map(({ icon, title, desc }, i) => (
          <article
            key={i}
            className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-amber-700 mb-2">{title}</h3>
            <p className="text-gray-500">{desc}</p>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Whether you're a seasoned plant parent or just starting your green journey,
          our curated collection has something perfect for every space.
        </p>
        <button
          type="button"
          className="mt-8 inline-block bg-amber-900 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-900 transition"
          aria-label="Shop the Beauty & Indoor Plants collection"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default BeautyCategoryInfo;
