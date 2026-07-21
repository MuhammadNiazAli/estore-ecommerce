'use client'
import React from "react";
import { FaChair, FaDesktop, FaLightbulb, FaKeyboard, FaBook } from "react-icons/fa";

const categories = [
  {
    icon: <FaChair size={36} />,
    title: "Chairs",
    description: "Ergonomic and comfortable seating options for all-day productivity.",
  },
  {
    icon: <FaDesktop size={36} />,
    title: "Desks",
    description: "Spacious and adjustable desks to fit any office style and space.",
  },
  {
    icon: <FaLightbulb size={36} />,
    title: "Lighting",
    description: "Modern lighting solutions that reduce eye strain and improve focus.",
  },
  {
    icon: <FaKeyboard size={36} />,
    title: "Accessories",
    description: "Essential office accessories for efficiency and convenience.",
  },
  {
    icon: <FaBook size={36} />,
    title: "Storage",
    description: "Smart storage solutions to keep your workspace organized.",
  },
];

const OfficeCategoryInfo = () => {
  return (
    <section className="bg-white text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-black">
          Office Product Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-black transition-shadow duration-300"
            >
              <div className="mb-4 text-black">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-black text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeCategoryInfo;
