'use client'
import React from "react";

const ArtCategoryInfo = () => {
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
      aria-label="Art category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Art Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Explore our curated selection of fine art pieces, prints, and creative works designed to inspire and beautify your space.
      </p>
      <p className="text-yellow-300 italic">
        From timeless classics to contemporary masterpieces, find art that speaks to your soul.
      </p>
    </section>
  );
};

export default ArtCategoryInfo;
