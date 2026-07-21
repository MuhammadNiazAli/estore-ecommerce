'use client';
import React from 'react';

const BestdealsHero = () => {
  return (
    <section className="bg-white text-gray-900 w-full flex justify-center my-[-50px]">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        
        {/* LEFT TEXT CONTENT */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            Best <span className="text-amber-600">Deals</span> of the Season
          </h1>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-6 max-w-md leading-relaxed">
            Upgrade your style & gadgets with exclusive discounts up to 
            <span className="text-amber-600 font-semibold"> 70% OFF</span>. Limited-time offers you can’t miss.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full sm:w-auto">
            <a
              href="#shop-now"
              className="bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition duration-300 text-sm sm:text-base w-full sm:w-auto text-center"
            >
              Shop Now
            </a>
            <a
              href="#explore"
              className="border border-amber-600 text-amber-600 font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 hover:text-gray-900 transition duration-300 text-sm sm:text-base w-full sm:w-auto text-center"
            >
              Explore Deals
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?q=80&w=1236&auto=format&fit=crop"
            alt="Best Deals on Fashion & Electronics"
            className="w-[90%] sm:w-[80%] md:w-full max-w-md rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BestdealsHero;
