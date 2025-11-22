'use client'
import React from "react";

const TravelCategoryInfo = () => {
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
      aria-label="Travel category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Travel Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Explore our top travel essentials and accessories designed to make your journeys smooth and unforgettable.
      </p>
      <p className="text-yellow-300 italic">
        From backpacks to gadgets, find everything you need for your next adventure.
      </p>
    </section>
  );
};

export default TravelCategoryInfo;
