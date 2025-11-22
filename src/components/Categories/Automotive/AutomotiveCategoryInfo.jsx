'use client'
import React from "react";

const AutomotiveCategoryInfo = () => {
  return (
    <section
      className="
        bg-gray-900 
        text-yellow-400 
        max-w-[1000px] 
        w-full 
        mx-auto 
        p-8 
        rounded-lg
        my-[-30px]
      "
      aria-label="Automotive category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Automotive Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Welcome to our premium automotive collection! Find top-quality car accessories, performance upgrades,
        and maintenance essentials designed to keep your vehicle in peak condition.
      </p>
      <p className="text-yellow-300 italic">
        Drive with confidence and style—explore our automotive products today.
      </p>
    </section>
  );
};

export default AutomotiveCategoryInfo;
