"use client";
import React from "react";

const GardenHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* ✅ Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
            New Garden Collection 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Bring Nature Home with{" "}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4">
              Elegant Garden Decor
            </span>
          </h1>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Discover stylish, durable, and eco-friendly garden accessories to
            transform your outdoor space.
          </p>

          {/* ✅ Pricing Badge */}
          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-amber-600">$29</p>
            <p className="text-gray-600 text-sm">Free delivery on select items!</p>
          </div>

          {/* ✅ Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-amber-600 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-amber-500 transition duration-300 ease-in-out">
              Shop Now
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out">
              View Details
            </button>
          </div>

          {/* ✅ Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm flex-wrap">
            <p>✔ Premium Quality</p>
            <p>✔ Eco-Friendly</p>
            <p>✔ Secure Payments</p>
          </div>
        </div>

        {/* ✅ Right Side GIF */}
        <div className="flex-1 w-full max-w-[480px] mx-auto">
          <img
            src="https://giffiles.alphacoders.com/760/76069.gif"
            alt="Garden GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GardenHero;
