'use client'
import React from "react";

const TravelHero = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
            Explore Top Travel Destinations 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Discover the{" "}
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4">
              Wonders of the World
            </span>{" "}
            Like Never Before
          </h1>

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Embark on unforgettable journeys and create memories that last a lifetime.
          </p>

          {/* Pricing Badge */}
          <div className="bg-gray-800/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-yellow-400">$999</p>
            <p className="text-gray-400 text-sm">Special travel packages available now!</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out">
              Book Now
            </button>
            <button className="border border-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-400 text-sm flex-wrap">
            <p>✔ All-inclusive Packages</p>
            <p>✔ Expert Local Guides</p>
            <p>✔ 24/7 Customer Support</p>
          </div>
        </div>

        {/* Right Side GIF */}
        <div className="flex-1 w-full max-w-[480px] mx-auto">
          <img
            src="https://64.media.tumblr.com/7a37da0ec0b58564ba63f408487987be/tumblr_mm4sebzrps1qbui2xo1_500.gif"
            alt="Travel GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TravelHero;
