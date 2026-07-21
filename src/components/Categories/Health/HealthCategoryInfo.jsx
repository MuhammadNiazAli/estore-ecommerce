'use client'
import React from "react";

const HealthCategoryInfo = () => {
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
      aria-label="Health category information"
    >
      <h1 className="text-3xl font-semibold mb-4">Health & Wellness</h1>
      <p className="text-lg leading-relaxed mb-3">
        Welcome to our health and wellness collection! Discover premium
        products that help you maintain an active and balanced lifestyle —
        from fitness gear and supplements to personal care essentials.
      </p>
      <p className="text-black italic">
        Invest in your health today for a better tomorrow.
      </p>
    </section>
  );
};

export default HealthCategoryInfo;
