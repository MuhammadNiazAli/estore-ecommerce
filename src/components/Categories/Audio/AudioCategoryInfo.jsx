"use client";

import React from "react";
import { FaHeadphonesAlt, FaMicrophoneAlt, FaMusic, FaVolumeUp } from "react-icons/fa";

const AudioCategoryInfo = () => {
  return (
    <section className="bg-white text-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Elevate Your Audio Experience
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Discover premium headphones, speakers, microphones, and sound systems 
            designed for ultimate clarity and comfort. Whether you're a music lover, 
            gamer, or podcaster, our audio collection brings you exceptional sound quality 
            for every moment.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <FaHeadphonesAlt className="text-black text-xl" />
              <span>High-Fidelity Headphones for crystal-clear sound</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMicrophoneAlt className="text-black text-xl" />
              <span>Professional Microphones for studio-quality recording</span>
            </li>
            <li className="flex items-center gap-3">
              <FaVolumeUp className="text-black text-xl" />
              <span>Powerful Speakers for immersive experiences</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMusic className="text-black text-xl" />
              <span>Wireless Solutions for seamless connectivity</span>
            </li>
          </ul>
          <button className="mt-4 bg-black hover:bg-black text-black font-semibold px-6 py-3 rounded-full transition duration-300">
            Shop Audio Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1725408023075-e6570bb675d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8"
            alt="Premium Audio"
            className="rounded-xl shadow-xl w-full max-w-md object-cover transform hover:scale-105 transition duration-500"
          />
          {/* Decorative Overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/40 via-white/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default AudioCategoryInfo;
