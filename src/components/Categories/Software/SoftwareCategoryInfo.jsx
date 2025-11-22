'use client'
import React from "react";

const SoftwareCategoryInfo = () => {
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
      aria-label="Software category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Software Category</h1>
      <p className="text-lg leading-relaxed mb-3">
        Explore our premium software solutions designed to boost productivity, security, and creativity for individuals and businesses.
      </p>
      <p className="text-yellow-300 italic">
        From powerful editing tools to advanced security suites, discover trusted software to empower your digital life.
      </p>
    </section>
  );
};

export default SoftwareCategoryInfo;
