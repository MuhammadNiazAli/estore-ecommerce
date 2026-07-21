'use client'
import React from "react";

const GardenCategoryInfo = () => {
  return (
    <section
      className="
        bg-white 
        text-black 
        max-w-[1000px] 
        w-full 
        mx-auto 
        p-8 
        rounded-lg
        my-[-30px]
      "
      aria-label="Garden category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Garden Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Welcome to our premium garden collection! Discover everything you need to cultivate a beautiful, thriving outdoor space — from tools and pots to plants and furniture.
      </p>
      <p className="text-black italic">
        Grow your garden with quality products designed for every gardener’s needs.
      </p>
    </section>
  );
};

export default GardenCategoryInfo;
