'use client'
import React from "react";

const PhoneAccessoriesCategoryInfo = () => {
  return (
    <section className="bg-white text-black py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-6 text-black drop-shadow-lg">
          Premium Phone Accessories
        </h1>
        <p className="text-black max-w-3xl leading-relaxed text-lg sm:text-xl mb-10">
          Discover our wide range of top-quality phone accessories designed to
          enhance your mobile experience. From fast wireless chargers to durable
          cases and crystal-clear audio devices, every product is crafted for
          style, functionality, and lasting performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-black bg-opacity-20 rounded-xl p-6 shadow-lg hover:bg-opacity-40 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Fast & Reliable Charging
            </h3>
            <p className="text-black leading-relaxed">
              Experience quick and safe charging with Qi-certified wireless
              chargers and fast-charging cables compatible with most smartphones.
            </p>
          </div>

          <div className="bg-black bg-opacity-20 rounded-xl p-6 shadow-lg hover:bg-opacity-40 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Protective & Stylish Cases
            </h3>
            <p className="text-black leading-relaxed">
              Protect your device in style with lightweight, durable cases that
              offer shock absorption without compromising on design.
            </p>
          </div>

          <div className="bg-black bg-opacity-20 rounded-xl p-6 shadow-lg hover:bg-opacity-40 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Premium Audio Gear
            </h3>
            <p className="text-black leading-relaxed">
              Enjoy crystal-clear sound with noise-cancelling earbuds and
              high-fidelity speakers designed for immersive audio experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneAccessoriesCategoryInfo;
