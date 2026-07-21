'use client';

import React from 'react';

const LaptopCategoryInfo = () => {
  const guides = [
    {
      title: 'Processor (CPU)',
      content:
        'The brain of your laptop — choose Intel Core i5/i7 or AMD Ryzen 5/7 for smooth multitasking and power.',
    },
    {
      title: 'Memory (RAM)',
      content:
        '8GB is fine for daily tasks; 16GB+ is recommended for professionals and gamers.',
    },
    {
      title: 'Storage',
      content:
        'SSD drives offer fast speeds. Aim for 256GB minimum, 512GB+ for media-heavy use.',
    },
    {
      title: 'Graphics (GPU)',
      content:
        'Integrated GPU is fine for basics; dedicated NVIDIA/AMD cards are ideal for gaming and design.',
    },
    {
      title: 'Display',
      content:
        'Full HD (1920x1080) is standard; 4K for premium clarity. IPS panels offer better viewing angles.',
    },
    {
      title: 'Battery Life',
      content:
        'Look for 8+ hours to stay productive on the go.',
    },
    {
      title: 'Portability & Build',
      content:
        'Lightweight designs under 3 lbs with durable materials improve comfort and durability.',
    },
    {
      title: 'Connectivity',
      content:
        'Ensure USB-C, HDMI, and Wi-Fi 6 support for all your peripherals.',
    },
    {
      title: 'Operating System',
      content:
        'Windows for versatility, macOS for creatives, Chrome OS for web-centric users.',
    },
  ];

  const tips = [
    'Set your budget upfront to prioritize features.',
    'Read reviews and benchmarks for real-world performance.',
    'Check warranty and customer support policies.',
    'Consider future upgrades like RAM or storage.',
    'Test keyboard and display quality in-store if possible.',
  ];

  return (
    <section className="max-w-[900px] mx-auto p-6 bg-white rounded-xl shadow-lg text-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Why Choose Our Laptops?
      </h2>

      <p className="mb-6 leading-relaxed text-center max-w-[600px] mx-auto">
        Discover powerful, reliable laptops designed for every need — from work and study to gaming and creativity.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Buying Guide</h3>
      <div className="space-y-5 mb-8">
        {guides.map(({ title, content }) => (
          <div key={title}>
            <h4 className="font-semibold text-lg text-black">{title}</h4>
            <p>{content}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Expert Tips</h3>
      <ul className="list-disc list-inside space-y-2 mb-8">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>

      <p className="leading-relaxed text-center max-w-[600px] mx-auto">
        Shop with confidence — enjoy fast shipping, hassle-free returns, and dedicated customer support.
      </p>
    </section>
  );
};

export default LaptopCategoryInfo;
