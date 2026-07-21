'use client'
import React from "react";

const JewelryCategoryInfo = () => {
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
      aria-label="Jewelry category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Jewelry Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Discover our exquisite jewelry collection, featuring elegant designs crafted from premium gold,
        silver, diamonds, and gemstones. Perfect for every occasion, our jewelry adds a touch of
        sophistication and timeless beauty to your style.
      </p>
      <p className="text-black italic">
        Elevate your elegance with our carefully curated selection of necklaces, earrings, bracelets, and rings.
      </p>
    </section>
  );
};

export default JewelryCategoryInfo;
