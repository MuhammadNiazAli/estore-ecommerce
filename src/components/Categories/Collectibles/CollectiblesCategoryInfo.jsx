'use client'
import React from "react";

const CollectiblesCategoryInfo = () => {
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
      aria-label="Collectibles category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Collectibles Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Discover our exclusive range of rare collectibles, vintage treasures, and limited-edition items that capture history and uniqueness.
      </p>
      <p className="text-amber-500 italic">
        Whether you're a passionate collector or just getting started, find timeless pieces that tell a story.
      </p>
    </section>
  );
};

export default CollectiblesCategoryInfo;
