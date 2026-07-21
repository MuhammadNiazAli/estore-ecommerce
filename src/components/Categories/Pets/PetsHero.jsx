"use client";
import React from "react";

const PetsHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* ✅ Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-block bg-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
            New Pet Collection 2025
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Give Your Pets{" "}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4">
              Ultimate Comfort
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Explore cozy beds, fun toys, and premium accessories to keep your
            pets happy and healthy every day.
          </p>

          {/* ✅ Price Highlight */}
          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-amber-600">Starting at $15</p>
            <p className="text-gray-600 text-sm">Free shipping on all pet essentials!</p>
          </div>

          {/* ✅ Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-amber-600 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-amber-500 transition duration-300 ease-in-out">
              Shop Now
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out">
              View Details
            </button>
          </div>

          {/* ✅ Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm flex-wrap">
            <p>✔ Pet-Friendly Materials</p>
            <p>✔ Affordable Prices</p>
            <p>✔ Secure Checkout</p>
          </div>
        </div>

        {/* ✅ Right Side GIF */}
        <div className="flex-1 w-full max-w-[480px] mx-auto">
          <img
            src="https://cdn.dribbble.com/userupload/22167123/file/original-796e1fbd74a3fddd0cfc1a283812129c.gif"
            alt="Pets GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PetsHero;
