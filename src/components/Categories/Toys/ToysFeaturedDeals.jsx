"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaCartPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Dummy Featured Toys Data
const featuredToys = [
  {
    id: 1,
    name: "Remote Control Car",
    price: 49.99,
    oldPrice: 69.99,
    discount: "28% OFF",
    image: "https://media.istockphoto.com/id/2165859126/photo/suv-toy-car-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=zZfeQ4CraEHjGQesNj7NXpbtxHTZP_3pgNPph__ZHq0=",
  },
  {
    id: 2,
    name: "Lego Building Set",
    price: 89.99,
    oldPrice: 119.99,
    discount: "25% OFF",
    image: "https://media.istockphoto.com/id/853345248/photo/toy-blocks.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pgw1IWy-GMAvqiRVQS282k4dxeaxdYmbajaR8A982_w=",
  },
  {
    id: 3,
    name: "Kids Soft Teddy Bear",
    price: 24.99,
    oldPrice: 39.99,
    discount: "35% OFF",
    image: "https://images.unsplash.com/photo-1696527018042-54d665bb6fba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2lkcyUyMFNvZnQlMjBUZWRkeSUyMEJlYXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Electric Toy Train Set",
    price: 59.99,
    oldPrice: 89.99,
    discount: "33% OFF",
    image: "https://media.istockphoto.com/id/2186816035/photo/old-toy-locomotive.webp?a=1&b=1&s=612x612&w=0&k=20&c=0GKULQYahfheGOFReAkBI0cxoPn2NI18E-K-UA2d0R8=",
  },
];

const ToysFeaturedDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto Slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featuredToys.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredToys.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white text-gray-900 py-10 px-4 rounded-xl mt-10">
      <div className="max-w-[1200px] mx-auto">
        {/* ✅ Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-600">
            Featured Toy Deals
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-white rounded-full hover:bg-amber-700 hover:text-black transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white rounded-full hover:bg-amber-700 hover:text-black transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* ✅ Slider */}
        <div className="relative h-[320px] overflow-hidden rounded-lg">
          <AnimatePresence>
            <motion.div
              key={featuredToys[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* ✅ Image */}
              <div className="w-full md:w-1/2 h-[200px] md:h-full">
                <img
                  src={featuredToys[currentIndex].image}
                  alt={featuredToys[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ✅ Info */}
              <div className="flex flex-col justify-center p-6 md:w-1/2">
                <span className="bg-amber-700 text-black px-3 py-1 rounded-full text-xs font-bold w-max mb-3">
                  {featuredToys[currentIndex].discount}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {featuredToys[currentIndex].name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-2xl font-bold text-amber-600">
                    ${featuredToys[currentIndex].price}
                  </p>
                  <p className="text-gray-600 line-through text-lg">
                    ${featuredToys[currentIndex].oldPrice}
                  </p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition w-max">
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ✅ Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {featuredToys.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-amber-600" : "bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToysFeaturedDeals;
