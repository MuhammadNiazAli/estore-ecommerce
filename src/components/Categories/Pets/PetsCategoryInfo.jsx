'use client'
import React from "react";

const PetsCategoryInfo = () => {
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
      aria-label="Pets category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Pets Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Welcome to our exclusive pet collection! Explore high-quality products for your furry, feathered, and scaly friends — from cozy beds and grooming essentials to travel gear and fun toys.
      </p>
      <p className="text-yellow-300 italic">
        Keep your pets happy and healthy with premium care solutions tailored for every pet lover.
      </p>
    </section>
  );
};

export default PetsCategoryInfo;
