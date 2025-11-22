"use client";
import React from "react";

const CollectiblesHero = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Highlight Badge */}
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
            Rare Collectibles Vault 2025
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Discover{" "}
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4">
              Timeless Collectibles
            </span>{" "}
            for Every Collector
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Browse vintage cards, action figures, and one-of-a-kind memorabilia that celebrate your passion.
          </p>

          {/* Price Badge */}
          <div className="bg-gray-800/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-yellow-400">Starting at $49</p>
            <p className="text-gray-400 text-sm">Limited-time collectibles event!</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out">
              Explore Vault
            </button>
            <button className="border border-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-400 text-sm flex-wrap">
            <p>✔ Verified Authenticity</p>
            <p>✔ Limited Editions</p>
            <p>✔ Worldwide Shipping</p>
          </div>
        </div>

        {/* Right Side GIF */}
        <div className="flex-1 w-full max-w-[520px] mx-auto">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyMnNpemgwM3IzcnZkenJmaTdnbzJ6b2U3Mjdid2Vld3VnNG11bGFrcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BOBwaXIvgFk2mx4hkp/source.gif"
            alt="Collectibles Hero GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CollectiblesHero;
