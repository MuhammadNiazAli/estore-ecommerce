"use client";
import React from "react";

const ClothingHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* ✅ Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-black text-black px-4 py-1 rounded-full text-sm font-semibold">
            New Clothing Collection 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Redefine Your Style with{" "}
            <span className="text-black underline decoration-black decoration-4">
              Premium Apparel
            </span>
          </h1>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Explore our exclusive range of modern, comfortable, and
            fashion-forward clothing tailored for you.
          </p>

          {/* ✅ Pricing Badge */}
          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-black">$49</p>
            <p className="text-gray-600 text-sm">Free shipping on all orders!</p>
          </div>

          {/* ✅ Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-black text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-black transition duration-300 ease-in-out">
              Shop Now
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out">
              View Details
            </button>
          </div>

          {/* ✅ Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm flex-wrap">
            <p>✔ Premium Quality</p>
            <p>✔ Trendy Designs</p>
            <p>✔ Secure Payments</p>
          </div>
        </div>

        {/* ✅ Right Side GIF */}
        <div className="flex-1 w-full max-w-[480px] mx-auto">
          <img
            src="https://images.squarespace-cdn.com/content/v1/572aea7c2eeb81370a1603b5/1663362085592-CEE752P8YRXPFI0QHAD3/briyoko_terao+farms+thumbnail+tshirt.gif?format=1500w"
            alt="Clothing GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ClothingHero;
