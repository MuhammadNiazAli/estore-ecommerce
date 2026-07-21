'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const dummyItems = [
  {
    id: 1,
    title: 'Smart Wireless Earbuds',
    description:
      'Noise-cancelling true wireless earbuds with immersive sound, touch controls, and 24-hour battery life.',
    price: '59.99',
    oldPrice: '89.99',
    rating: '4.5',
    image: 'https://images.unsplash.com/photo-1587523459887-e669248cf666?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: '4K Action Camera',
    description:
      'Waterproof 4K action camera with ultra-wide lens and image stabilization for stunning adventure shots.',
    price: '79.99',
    oldPrice: '119.99',
    rating: '4.3',
    image: 'https://plus.unsplash.com/premium_photo-1709371824843-2b72258fbd71?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Smart Fitness Tracker',
    description:
      'Lightweight fitness tracker with heart rate monitor, sleep tracking, and smartphone notifications.',
    price: '39.99',
    oldPrice: '59.99',
    rating: '4.1',
    image: 'https://images.unsplash.com/photo-1629339837617-7069ce9e7f6b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Portable Bluetooth Speaker',
    description:
      'Compact speaker with rich bass, waterproof design, and 12 hours of playback time.',
    price: '49.99',
    oldPrice: '69.99',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1675319245480-215961c129f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Wireless Charging Pad',
    description:
      'Fast wireless charger compatible with all Qi-enabled devices, slim and lightweight design.',
    price: '25.99',
    oldPrice: '39.99',
    rating: '4.0',
    image: 'https://images.unsplash.com/photo-1633381573179-d3cadd62970a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Smartphone Gimbal Stabilizer',
    description:
      '3-axis handheld gimbal for smooth video recording and professional cinematic shots.',
    price: '99.99',
    oldPrice: '139.99',
    rating: '4.4',
    image: 'https://images.unsplash.com/photo-1699854682793-1f5a3c832822?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    title: 'VR Headset',
    description:
      'Immersive virtual reality headset with adjustable lenses and wide field of view for gaming.',
    price: '149.99',
    oldPrice: '199.99',
    rating: '4.2',
    image: 'https://images.unsplash.com/photo-1657734240326-8f2ab858a2dd?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    title: 'Smart Home Security Camera',
    description:
      '1080p indoor/outdoor security camera with motion detection and night vision.',
    price: '59.99',
    oldPrice: '79.99',
    rating: '4.3',
    image: 'https://images.unsplash.com/photo-1724343025504-3afb6d67566b?q=80&w=644&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    title: 'Wireless Gaming Mouse',
    description:
      'Ergonomic wireless mouse with adjustable DPI, RGB lighting, and 20-hour battery life.',
    price: '45.99',
    oldPrice: '65.99',
    rating: '4.5',
    image: 'https://images.unsplash.com/photo-1662323861979-0538474387e3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    title: 'Mechanical Gaming Keyboard',
    description:
      'RGB backlit mechanical keyboard with tactile switches and anti-ghosting features.',
    price: '79.99',
    oldPrice: '109.99',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1656711081969-9d16ebc2d210?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    title: 'Smartphone Lens Kit',
    description:
      'Multi-lens kit with wide-angle, macro, and fisheye lenses for smartphone photography enthusiasts.',
    price: '29.99',
    oldPrice: '44.99',
    rating: '4.0',
    image: 'https://images.unsplash.com/photo-1626753847989-7b67c55edee7?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    title: 'Wireless Noise Cancelling Headphones',
    description:
      'Over-ear wireless headphones with active noise cancellation and premium sound quality.',
    price: '129.99',
    oldPrice: '179.99',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1631586552668-b31039d4921d?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 13,
    title: 'Smartwatch with Heart Rate Monitor',
    description:
      'Stylish smartwatch featuring fitness tracking, message notifications, and customizable watch faces.',
    price: '89.99',
    oldPrice: '119.99',
    rating: '4.4',
    image: 'https://images.unsplash.com/photo-1600784694429-aafecca51fab?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 14,
    title: 'Mini Drone with HD Camera',
    description:
      'Compact drone with easy controls, 720p HD camera, and 15-minute flight time for beginners.',
    price: '59.99',
    oldPrice: '84.99',
    rating: '4.1',
    image: 'https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 15,
    title: 'USB-C Hub with Multiple Ports',
    description:
      'Expand your laptop connectivity with HDMI, USB-A, SD card reader, and Ethernet ports.',
    price: '39.99',
    oldPrice: '59.99',
    rating: '4.3',
    image: 'https://images.unsplash.com/photo-1675627452478-0933ab9e5f65?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 16,
    title: 'Portable SSD Drive 1TB',
    description:
      'High-speed portable solid state drive with USB 3.1 support and durable metal enclosure.',
    price: '119.99',
    oldPrice: '159.99',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1586187543706-b43086b30978?q=80&w=526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 17,
    title: 'Wireless Keyboard and Mouse Combo',
    description:
      'Sleek wireless keyboard and mouse set with ergonomic design and long battery life.',
    price: '49.99',
    oldPrice: '69.99',
    rating: '4.2',
    image: 'https://images.unsplash.com/photo-1629087822755-2356355052b3?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 18,
    title: 'Smart LED Desk Lamp',
    description:
      'Adjustable LED desk lamp with touch controls, color temperature settings, and USB charging port.',
    price: '34.99',
    oldPrice: '49.99',
    rating: '4.4',
    image: 'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 19,
    title: 'Bluetooth Car Adapter',
    description:
      'Plug-and-play Bluetooth adapter for car audio with hands-free calling and music streaming.',
    price: '24.99',
    oldPrice: '34.99',
    rating: '4.1',
    image: 'https://plus.unsplash.com/premium_photo-1736761563170-c94f624a369f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 20,
    title: 'Smart Temperature Sensor',
    description:
      'Wireless smart sensor for monitoring room temperature and humidity via mobile app.',
    price: '29.99',
    oldPrice: '44.99',
    rating: '4.0',
    image: 'https://images.unsplash.com/photo-1620361421509-eeb389b3fd0e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 21,
    title: 'Wireless Charging Power Bank',
    description:
      'Portable power bank with built-in wireless charging pad and 10,000mAh capacity.',
    price: '49.99',
    oldPrice: '69.99',
    rating: '4.3',
    image: 'https://images.unsplash.com/photo-1606604578171-6f8f4df68af5?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const WishlistedItemsGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, dummyItems.length));
  };

  return (
    <section className="bg-white p-6 max-w-7xl mx-auto rounded-b-xl">
      <h2 className="text-amber-600 text-3xl font-extrabold mb-6 text-center sm:text-left">
        Your Wishlist
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {dummyItems.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-5 flex flex-col transition-transform hover:scale-[1.03] duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-amber-600 font-semibold text-xl truncate mb-1">
              {item.title}
            </h3>
            <p className="text-amber-500 text-sm line-clamp-3 mb-3">{item.description}</p>
            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="text-amber-600 font-bold text-lg">${item.price}</span>{' '}
                <span className="line-through text-gray-600 text-sm">${item.oldPrice}</span>
              </div>
              <div className="text-amber-600 font-semibold">{item.rating}⭐</div>
            </div>

            <Link
              href={`/product/${item.id}`}
              className="mt-auto bg-amber-700 hover:bg-amber-800 transition-colors rounded-md py-2 text-gray-900 font-semibold text-center block"
              aria-label={`Add ${item.title} to cart`}
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>

      {visibleCount < dummyItems.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-amber-600 hover:bg-amber-700 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-md transition-colors"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default WishlistedItemsGrid;
