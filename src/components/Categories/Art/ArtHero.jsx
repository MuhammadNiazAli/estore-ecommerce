"use client";
import React from "react";

const ArtHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Highlight Badge */}
          <div className="inline-block bg-black text-black px-4 py-1 rounded-full text-sm font-semibold">
            Exclusive Art Collection 2025
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Inspire Your Space with{" "}
            <span className="text-black underline decoration-black decoration-4">
              Stunning Art Pieces
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Explore our curated selection of modern and classic artworks designed to elevate any environment.
          </p>

          {/* Price Badge */}
          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-black">$499</p>
            <p className="text-gray-600 text-sm">Limited-time gallery offer!</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-black text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-black transition duration-300 ease-in-out">
              Browse Collection
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm flex-wrap">
            <p>✔ Original Artwork</p>
            <p>✔ Certified Authenticity</p>
            <p>✔ Secure Checkout</p>
          </div>
        </div>

        {/* Right Side GIF */}
        <div className="flex-1 w-full max-w-[520px] mx-auto">
          <img
            src="https://www.designboom.com/wp-content/uploads/2015/09/ezgif-4234234318.gif"
            alt="Art Hero GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtHero;
