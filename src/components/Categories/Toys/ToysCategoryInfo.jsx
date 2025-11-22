"use client";

import React from "react";
import { FaGift, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { motion } from "framer-motion";

const ToysCategoryInfo = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 md:px-10 rounded-2xl shadow-xl mt-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* ✅ Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Toys & Games Collection
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
            Explore a world of fun and creativity with our premium toys collection. From educational puzzles 
            to exciting outdoor playsets, we’ve got everything to spark joy in your little one’s life. 
            Carefully selected for safety, durability, and endless entertainment.
          </p>

          {/* ✅ Key Highlights */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400 text-lg" />
              <span>Wide range of toys for all age groups</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400 text-lg" />
              <span>Premium quality & child-safe materials</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400 text-lg" />
              <span>Exclusive deals and discounts every week</span>
            </li>
          </ul>

          {/* ✅ Call to Action */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition">
              Shop Now
            </button>
            <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-full transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* ✅ Right Side - Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 gap-4"
        >
          {[
            { icon: <FaTruckFast />, title: "Fast Delivery", desc: "Within 48 Hours" },
            { icon: <FaGift />, title: "Gift Options", desc: "Perfect for Occasions" },
            { icon: <FaHeadset />, title: "24/7 Support", desc: "Always Here to Help" },
            { icon: <FaCheckCircle />, title: "Quality Assured", desc: "Safe & Certified" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-4 rounded-xl flex flex-col items-center text-center shadow hover:shadow-lg transition"
            >
              <div className="text-yellow-400 text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToysCategoryInfo;
