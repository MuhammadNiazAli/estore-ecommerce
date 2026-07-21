"use client";

import React from "react";

const JewelryHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-black text-black px-4 py-1 rounded-full text-sm font-semibold">
            New Jewelry Collection 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Shine Bright with{" "}
            <span className="text-black underline decoration-black decoration-4">
              Exquisite Jewelry
            </span>
          </h1>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Discover our elegant range of handcrafted jewelry designed to
            highlight your unique style.
          </p>

          {/* Pricing Badge */}
          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-black">$299</p>
            <p className="text-gray-600 text-sm">Free shipping on all orders!</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-black text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-black transition duration-300 ease-in-out">
              Shop Now
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out">
              View Details
            </button>
          </div>

          {/* Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm flex-wrap">
            <p>✔ Handcrafted Quality</p>
            <p>✔ Timeless Designs</p>
            <p>✔ Secure Payments</p>
          </div>
        </div>

        {/* Right Side GIF */}
        <div className="flex-1 w-full max-w-[480px] mx-auto">
          <img
            src="https://i.pinimg.com/originals/7b/5e/d2/7b5ed252065c09891cf43fa14ada9652.gif"
            alt="Jewelry GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default JewelryHero;
