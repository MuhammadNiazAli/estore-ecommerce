"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBaseballBall, FaBasketballBall, FaFootballBall, FaTableTennis } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Baseball",
    description: "Premium gloves, bats, and accessories for your next game.",
    icon: <FaBaseballBall size={28} />,
    image:
      "https://media.istockphoto.com/id/160179174/photo/isolated-yellow-tennis-ball-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=7hk4bfHnNUmxfh3oAIDQIccjJGnnP-P-KoGH4MpqZNA=",
  },
  {
    id: 2,
    name: "Basketball",
    description: "Top-quality balls, hoops, and shoes for serious players.",
    icon: <FaBasketballBall size={28} />,
    image:
      "https://images.unsplash.com/photo-1518989229647-6377f907a0b2?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Football",
    description: "Elite boots, kits, and gear for football enthusiasts.",
    icon: <FaFootballBall size={28} />,
    image:
      "https://media.istockphoto.com/id/91712739/photo/soccer-ball.webp?a=1&b=1&s=612x612&w=0&k=20&c=OSuRuh475ed7UBuXM03bjf0NEgczxmWDUk8-eylL4N8=",
  },
  {
    id: 4,
    name: "Tennis",
    description: "Rackets, balls, and accessories for every court type.",
    icon: <FaTableTennis size={28} />,
    image:
      "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SportsCategoryInfo = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Explore Sports Categories
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Find premium gear for every sport you love
          </p>
        </div>

        {/* ✅ Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-44 object-cover"
              />

              {/* Overlay Info */}
              <div className="p-5 text-center">
                <div className="flex justify-center mb-3 text-amber-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {category.description}
                </p>

                <button className="mt-4 px-5 py-2 bg-amber-600 text-black rounded-full font-semibold hover:bg-amber-500 transition">
                  Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsCategoryInfo;
