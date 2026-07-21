"use client";
import React from "react";
import { FaGamepad, FaCrown, FaTrophy, FaUsers } from "react-icons/fa";

const GamingCategoryInfo = () => {
  return (
    <section className="w-full flex justify-center px-4 py-10 my-[-50px]">
      <div className="max-w-[1000px] w-full bg-white rounded-2xl shadow-xl p-6 md:p-10 text-gray-800">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 text-center mb-4">
          Gaming Essentials
        </h2>
        <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Explore the ultimate collection of gaming gear, accessories, and
          hardware. From high-performance headsets to customizable gaming rigs,
          everything you need for an immersive experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-4 hover:bg-gray-500 transition">
            <div className="text-amber-600 text-3xl">
              <FaGamepad />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-500">
                Ultimate Control
              </h3>
              <p className="text-gray-600 text-sm">
                Responsive controllers and gear for next-level precision.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-4 hover:bg-gray-500 transition">
            <div className="text-amber-600 text-3xl">
              <FaCrown />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-500">
                Premium Quality
              </h3>
              <p className="text-gray-600 text-sm">
                Top-notch gaming accessories designed for champions.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-4 hover:bg-gray-500 transition">
            <div className="text-amber-600 text-3xl">
              <FaTrophy />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-500">
                Competitive Edge
              </h3>
              <p className="text-gray-600 text-sm">
                Get ahead of the competition with pro-level gear.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-4 hover:bg-gray-500 transition">
            <div className="text-amber-600 text-3xl">
              <FaUsers />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-500">
                Community Focused
              </h3>
              <p className="text-gray-600 text-sm">
                Join a thriving community of passionate gamers worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="bg-amber-600 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-all">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamingCategoryInfo;
