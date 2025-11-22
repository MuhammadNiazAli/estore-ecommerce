'use client'
import React from "react";

const IndustrialCategoryInfo = () => {
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
      aria-label="Industrial category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Industrial Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Discover our premium industrial collection — built for strength, durability, and efficiency in every project.
      </p>
      <p className="text-yellow-300 italic">
        From heavy-duty tools to essential safety gear, find trusted products designed for professionals.
      </p>
    </section>
  );
};

export default IndustrialCategoryInfo;
