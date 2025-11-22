'use client';

import React from 'react';

const AboutHero = () => {
  return (
    <section
      className="bg-gray-900 text-gray-100 py-24 px-6 flex justify-center items-center my-[-100px] mb-0"
      aria-label="About our eCommerce Store"
    >
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-yellow-400 mb-6">
          About Our eStore
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          Welcome to our premium eCommerce platform—built with precision,
          performance, and passion. This is not just a store, it's a complete
          digital retail ecosystem designed to deliver elegance, speed, and trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-300 mb-1">Project Size</h3>
            <p className="text-sm text-gray-400">100+ Fully Custom Pages</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-300 mb-1">Development Time</h3>
            <p className="text-sm text-gray-400">Completed in 27 Days</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-300 mb-1">Design Quality</h3>
            <p className="text-sm text-gray-400">Pixel-Perfect Premium UI/UX</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-300 mb-1">Performance</h3>
            <p className="text-sm text-gray-400">Optimized for Speed & SEO</p>
          </div>
        </div>

        <p className="text-md sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          From responsive design to seamless animations and real-time features, every
          line of code is hand-written to offer a luxurious user experience. Built using
          Next.js, Tailwind CSS, and Framer Motion—this store stands as a testament to
          elite frontend craftsmanship.
        </p>

        <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition duration-300">
          Explore Our Journey
        </button>
      </div>
    </section>
  );
};

export default AboutHero;
