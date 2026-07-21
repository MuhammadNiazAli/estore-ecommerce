'use client'
import React from "react";

const ClothingCategoryInfo = () => {
  return (
    <section
      className="
        bg-white 
        text-amber-600 
        max-w-[1000px] 
        w-full 
        mx-auto 
        p-8 
        rounded-lg
        my-[-30px]
        "
      aria-label="Clothing category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Clothing Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Welcome to our exclusive clothing collection! Discover a range of high-quality apparel crafted to
        keep you stylish and comfortable all year round.
      </p>
      <p className="text-amber-500 italic">
        Explore the latest trends and timeless classics with confidence.
      </p>
    </section>
  );
};

export default ClothingCategoryInfo;
