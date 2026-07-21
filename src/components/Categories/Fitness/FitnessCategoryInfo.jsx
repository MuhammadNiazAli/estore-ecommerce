'use client'
import React from "react";
import { FaDumbbell, FaHeartbeat, FaShieldAlt, FaLeaf } from "react-icons/fa";

const features = [
  {
    icon: <FaDumbbell className="text-amber-600 w-8 h-8" />,
    title: "Premium Quality Equipment",
    desc: "Engineered from top-grade materials for durability and performance.",
  },
  {
    icon: <FaHeartbeat className="text-amber-600 w-8 h-8" />,
    title: "Improve Your Health",
    desc: "Designed to boost your endurance, strength, and overall fitness.",
  },
  {
    icon: <FaShieldAlt className="text-amber-600 w-8 h-8" />,
    title: "Safe & Reliable",
    desc: "Tested to meet highest safety standards for worry-free workouts.",
  },
  {
    icon: <FaLeaf className="text-amber-600 w-8 h-8" />,
    title: "Eco-Friendly Materials",
    desc: "Sustainable manufacturing processes for a greener planet.",
  },
];

const FitnessCategoryInfo = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 sm:px-12 md:px-20 my-[-30px] lg:px-32 rounded-xl shadow-xl max-w-[1200px] mx-auto ">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">
          Elevate Your Fitness Journey
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Discover premium fitness gear that’s designed to help you reach your goals with
          style, comfort, and efficiency. From strength training to cardio, we’ve got
          everything you need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {features.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-amber-600/50 transition-shadow duration-300 cursor-default"
          >
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FitnessCategoryInfo;
