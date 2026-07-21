import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featuredProducts = [
  {
    id: 1,
    name: "Urban Explorer Jacket",
    brand: "EliteWear",
    price: 299,
    oldPrice: 379,
    rating: 4.9,
    description:
      "Premium bomber jacket designed for urban explorers. Sleek fit, all-day comfort, and durability.",
    img: "https://media.istockphoto.com/id/594458468/photo/mens-black-coat.webp?a=1&b=1&s=612x612&w=0&k=20&c=9OT0RLZMsjeWDJZ_y6J2zqX-_LvnXvKaXq8BwEQ7tHU=",
    colors: ["Black", "Olive", "Navy"],
    sizes: ["M", "L", "XL"],
    features: ["100% Premium Leather", "Breathable Inner Lining", "Water Resistant"]
  },
  {
    id: 2,
    name: "Luxury Wool Overcoat",
    brand: "RoyalStyle",
    price: 499,
    oldPrice: 599,
    rating: 4.8,
    description:
      "Classic wool overcoat for the ultimate luxury feel. Warmth meets timeless elegance.",
    img: "https://images.unsplash.com/photo-1646855672493-b6925d356c9e?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colors: ["Gray", "Camel", "Black"],
    sizes: ["L", "XL"],
    features: ["Pure Wool Fabric", "Handcrafted Finish", "Timeless Design"]
  },
  {
    id: 3,
    name: "Premium Slim Suit",
    brand: "Gentlemen's Club",
    price: 649,
    oldPrice: 799,
    rating: 5,
    description:
      "Tailored slim-fit suit with Italian craftsmanship for a refined modern look.",
    img: "https://images.unsplash.com/photo-1593030821647-0c9c4a845da3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colors: ["Black", "Charcoal", "Blue"],
    sizes: ["M", "L", "XL"],
    features: ["Italian Fabric", "Precision Tailoring", "Modern Slim Fit"]
  },
];

const ManClothesFeatured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 100);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentProduct = featuredProducts[currentIndex];

  return (
    <div className="relative w-full min-h-[600px] lg:min-h-[700px] bg-white text-gray-900 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          {/* HD Background Image */}
          <img
            src={currentProduct.img}
            alt={currentProduct.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-white/60"></div>

          {/* Content Section */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge for Desktop */}
            <div className="hidden lg:inline-block bg-amber-700 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
              Limited Stock
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">
              {currentProduct.name}
            </h1>
            <p className="text-sm lg:text-lg text-gray-700 mb-3">
              {currentProduct.description}
            </p>

            {/* Extra Details for Desktop */}
            <div className="hidden lg:flex flex-col gap-2 text-gray-700 text-sm mb-4">
              <span>Brand: <span className="text-amber-600">{currentProduct.brand}</span></span>
              <span>Rating: ⭐ {currentProduct.rating}</span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl lg:text-4xl font-bold text-amber-600">
                ${currentProduct.price}
              </span>
              <span className="line-through text-gray-600 text-lg">
                ${currentProduct.oldPrice}
              </span>
            </div>

            {/* Colors */}
            <div className="flex gap-2 mb-4">
              {currentProduct.colors.map((color) => (
                <span
                  key={color}
                  className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-gray-500"
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
              ))}
            </div>

            {/* Sizes for Desktop */}
            <div className="hidden lg:flex gap-2 mb-4">
              {currentProduct.sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 border border-amber-600 text-amber-600 rounded text-xs font-medium"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Features for Desktop */}
            <ul className="hidden lg:grid grid-cols-2 gap-2 text-gray-700 text-sm mb-6">
              {currentProduct.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                   {feature}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-amber-700 text-black px-5 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
                Add to Cart
              </button>
              <button className="border border-amber-700 text-amber-600 px-5 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-amber-700 hover:text-black transition">
                View Details
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {featuredProducts.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-amber-600" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>

      {/* Progress Bar */}
   
    </div>
  );
};

export default ManClothesFeatured;
