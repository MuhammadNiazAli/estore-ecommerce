"use client";
import React from "react";

const AutomotiveHero = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* ✅ Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Highlight Badge */}
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
            Premium Automotive Collection 2025
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Elevate Your Ride with{" "}
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4">
              High-Performance Parts
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Discover our premium range of automotive accessories built for
            durability, performance, and unmatched style.
          </p>

          {/* ✅ Price Badge */}
          <div className="bg-gray-800/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-yellow-400">$299</p>
            <p className="text-gray-400 text-sm">Exclusive launch deal!</p>
          </div>

          {/* ✅ Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out">
              Shop Now
            </button>
            <button className="border border-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
              View Details
            </button>
          </div>

          {/* ✅ Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-400 text-sm flex-wrap">
            <p>✔ Premium Quality</p>
            <p>✔ High Performance</p>
            <p>✔ Secure Payments</p>
          </div>
        </div>

        {/* ✅ Right Side GIF */}
        <div className="flex-1 w-full max-w-[520px] mx-auto">
          <img
            src="https://i.pinimg.com/originals/25/05/16/25051662be929d78194985190aeee50a.gif"
            alt="Automotive Hero GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AutomotiveHero;
