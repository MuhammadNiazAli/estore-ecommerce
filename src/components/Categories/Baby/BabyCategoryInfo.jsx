'use client'
import React from "react";

const BabyCategoryInfo = () => {
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
      aria-label="Baby category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Baby Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Welcome to our carefully curated baby collection! Find everything you need to keep your little ones safe, comfortable, and happy.
      </p>
      <p className="text-amber-500 italic">
        From essentials to adorable outfits, explore quality baby products you can trust.
      </p>
    </section>
  );
};

export default BabyCategoryInfo;
