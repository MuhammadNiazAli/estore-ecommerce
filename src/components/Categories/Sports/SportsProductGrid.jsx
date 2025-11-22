"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa";

// ✅ Sample Sports Products Data
const productsData = [
  {
    id: 94,
    name: "Kickboxing Shin Guards",
    category: "Martial Arts",
    price: 40,
    rating: 3,
    image: "https://media.istockphoto.com/id/1731150975/photo/woman-wearing-shin-guards-and-getting-ready-to-muay-thai-workout-at-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=tVTQ9DhsVZFK3_PP8-WBkdj_vZAfku2wC_5De_ssxEY=",
  },
  {
    id: 95,
    name: "MMA Training Gloves",
    category: "Martial Arts",
    price: 55,
    rating: 4,
    image: "https://media.istockphoto.com/id/1126503889/photo/dedicated-strong-brunette-with-ponytail-in-sportswear-bare-foot-and-with-boxing-gloves.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZMqRvQEWwbagjf7obuvlzkxxWk6OfnJ2xO7_Csx3_xY=",
  },

  // 96 - 100 General Sports Accessories
  {
    id: 96,
    name: "Sports Water Bottle 1L",
    category: "General",
    price: 15,
    rating: 4,
    image: "https://media.istockphoto.com/id/2172158517/photo/empty-plastic-water-bottles-with-caps-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=HzECappECCSO3QLdWAdS6mjTOncbLRmmGCT-t7RvihI=",
  },
  {
    id: 97,
    name: "Sports Backpack Lightweight",
    category: "General",
    price: 65,
    rating: 5,
    image: "https://media.istockphoto.com/id/2226565346/photo/a-clear-bottle-of-water-is-resting-on-the-ground-adjacent-to-a-backpack.webp?a=1&b=1&s=612x612&w=0&k=20&c=0J1dGRLpyg516GHFuyzQ_fmlvhooumb-TOC5Tv51670=",
  },
  {
    id: 98,
    name: "Sports Headphones Wireless",
    category: "General",
    price: 120,
    rating: 4,
    image: "https://media.istockphoto.com/id/91712739/photo/soccer-ball.webp?a=1&b=1&s=612x612&w=0&k=20&c=OSuRuh475ed7UBuXM03bjf0NEgczxmWDUk8-eylL4N8=",
  },
  {
    id: 99,
    name: "Sports Sunglasses Polarized",
    category: "General",
    price: 90,
    rating: 4,
    image: "https://plus.unsplash.com/premium_photo-1676469395214-9e35c21c5c4b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 100,
    name: "Sports Fitness Tracker Watch",
    category: "General",
    price: 150,
    rating: 5,
    image: "https://images.unsplash.com/photo-1562204320-31975a5e09ce?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: 101,
    name: "Wilson NCAA Ball",
    category: "General",
    price: 150,
    rating: 5,
    image: "https://images.unsplash.com/photo-1489956152110-c70feae4150b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// ✅ Sorting options
const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating: High to Low", value: "rating-desc" },
  { label: "Popularity", value: "popularity" },
];

const SportsProductGrid = () => {
  const [sortBy, setSortBy] = useState("popularity");

  // ✅ Sorted Products
  const sortedProducts = useMemo(() => {
    const sorted = [...productsData];
    if (sortBy === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating-desc") sorted.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "popularity") sorted.sort((a, b) => b.popularity - a.popularity);
    return sorted;
  }, [sortBy]);

  return (
    <section className="bg-gray-900 py-12 my-[-50px]">
      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Header with Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-gray-50">Sports Gear Collection</h2>
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-yellow-400 text-gray-50 bg-gray-900/80"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden relative group"
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
                    <button className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition">
                      <FaCartPlus size={18} />
                    </button>
                    <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition">
                      <FaEye size={18} />
                    </button>
                    <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-400 transition">
                      <FaHeart size={18} />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-yellow-500 font-bold text-xl">${product.price}</p>
                  <p className="text-gray-500 text-sm">⭐ {product.rating}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsProductGrid;
