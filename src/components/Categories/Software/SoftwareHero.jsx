"use client";
import React from "react";

const SoftwareHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 lg:py-24 my-[-50px] mb-[-20px]">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
            New Software Tools 2025
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Innovative Solutions for Your{" "}
            <span className="text-amber-600 underline decoration-amber-500 decoration-4">
              Digital Workflow
            </span>
          </h1>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed">
            Explore our cutting-edge software designed to boost productivity
            and streamline your projects.
          </p>

          {/* Pricing Badge */}
          <div className="bg-white/60 p-4 rounded-xl inline-block">
            <p className="text-3xl font-bold text-amber-600">$49</p>
            <p className="text-gray-600 text-sm">Free trial available!</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-amber-600 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-amber-500 transition duration-300 ease-in-out">
              Get Started
            </button>
            <button className="border border-gray-200 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-600 text-sm flex-wrap">
            <p>✔ Cloud-Based</p>
            <p>✔ User Friendly</p>
            <p>✔ 24/7 Support</p>
          </div>
        </div>

        {/* Right Side GIF */}
        <div className="flex-1 w-full max-w-[480px] mx-auto">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyYTZlZG50ajF6a2d0MmEwbmhpM3hod3E2aGRjY3lzbXIyanFsZXd5byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/source.gif"
            alt="Software Workflow GIF"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SoftwareHero;
