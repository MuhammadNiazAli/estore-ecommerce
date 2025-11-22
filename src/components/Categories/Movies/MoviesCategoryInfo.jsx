'use client'
import React from "react";

const MoviesCategoryInfo = () => {
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
      aria-label="Movies category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Movies Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Dive into our curated movies collection! Explore blockbuster hits, timeless classics, and exclusive editions to elevate your entertainment experience.
      </p>
      <p className="text-yellow-300 italic">
        From action-packed adventures to heartwarming dramas, find movies that captivate every mood and moment.
      </p>
    </section>
  );
};

export default MoviesCategoryInfo;
