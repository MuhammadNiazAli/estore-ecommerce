"use client";

import React from "react";
import { FaCameraRetro, FaVideo, FaStar, FaShippingFast } from "react-icons/fa";

const CamerasCategoryInfo = () => {
  return (
    <section className="bg-white text-gray-900 py-16 my-[-40px]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-600 mb-4">
            Cameras & Photography Gear
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our premium selection of professional cameras, lenses, and
            photography accessories. Whether you’re a beginner or a pro, we
            bring you the best tools to capture stunning moments.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <FaCameraRetro className="text-amber-600 text-4xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Latest Mirrorless</h3>
            <p className="text-gray-600 text-sm">
              Cutting-edge technology for sharp images and compact designs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <FaVideo className="text-amber-600 text-4xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Pro Video Quality</h3>
            <p className="text-gray-600 text-sm">
              Capture cinema-grade videos with 4K & 8K resolution support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <FaStar className="text-amber-600 text-4xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Top Rated Gear</h3>
            <p className="text-gray-600 text-sm">
              Our selection includes the most loved cameras by photographers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <FaShippingFast className="text-amber-600 text-4xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Worldwide Shipping</h3>
            <p className="text-gray-600 text-sm">
              Fast, reliable, and free shipping on all premium camera gear.
            </p>
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
            From compact action cameras to full-frame mirrorless beasts, we
            provide an unmatched collection to suit every budget and shooting
            style. Upgrade your photography journey today and enjoy exclusive
            discounts on top brands like Canon, Sony, Nikon, Fujifilm, and more.
          </p>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <a
            href="#cameras-products"
            className="bg-amber-600 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition"
          >
            Shop All Cameras
          </a>
        </div>
      </div>
    </section>
  );
};

export default CamerasCategoryInfo;
