'use client'
import React from "react";

const MusicCategoryInfo = () => {
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
      aria-label="Music category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Music Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Discover our exclusive music collection! Find the latest albums, singles, and gear to fuel your passion for sound.
      </p>
      <p className="text-amber-500 italic">
        From timeless classics to fresh hits, explore quality music products and experiences you’ll love.
      </p>
    </section>
  );
};

export default MusicCategoryInfo;
