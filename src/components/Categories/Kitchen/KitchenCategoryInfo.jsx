"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInfoCircle, FaCheckCircle, FaUtensils, FaBlender, FaBox } from "react-icons/fa";

const categories = [
  {
    id: "cookware",
    name: "Cookware",
    icon: <FaUtensils />,
    description: "Premium non-stick cookware sets for your modern kitchen.",
    details: [
      "Scratch-resistant coating",
      "Even heat distribution",
      "Dishwasher safe",
    ],
    image:
      "https://images.unsplash.com/photo-1556910633-5099dc3971e8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "appliances",
    name: "Appliances",
    icon: <FaBlender />,
    description: "High-performance appliances for hassle-free cooking.",
    details: ["Energy efficient", "Smart features", "Compact design"],
    image:
      "https://media.istockphoto.com/id/2183526107/photo/classic-glossy-red-kitchen-mixer-for-home-cooking-appliance-from-a-front-view-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=aDXAQU-zOoQeiimEibFmbdH85Njf_RNCcgkWG9d_VTk=",
  },
  {
    id: "storage",
    name: "Storage",
    icon: <FaBox />,
    description: "Organize your kitchen with premium storage solutions.",
    details: ["Airtight containers", "Space-saving design", "BPA free"],
    image:
      "https://images.unsplash.com/photo-1618438502398-195e47778d6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0b3JhZ2V8ZW58MHx8MHx8fDA%3D",
  },
];

const KitchenCategoryInfo = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (category) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setLoading(false);
    }, 600); // Simulated backend delay
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-[-50px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Explore Kitchen Categories</h2>
        <p className="text-gray-400 mb-10">
          Discover premium quality products for every corner of your kitchen.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
                activeCategory.id === cat.id
                  ? "bg-yellow-500 text-gray-900 font-semibold"
                  : "border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Info Card */}
        <div className="relative max-w-4xl mx-auto">
          {loading ? (
            <motion.div
              key="loading"
              className="p-10 rounded-xl bg-gray-800 border border-yellow-500 text-yellow-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-xl animate-pulse">Loading category details...</p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-yellow-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-center text-left">
                    <h3 className="text-2xl font-semibold mb-3">
                      {activeCategory.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {activeCategory.description}
                    </p>
                    <ul className="space-y-2">
                      {activeCategory.details.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-200"
                        >
                          <FaCheckCircle className="text-yellow-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition">
                      View Products
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};

export default KitchenCategoryInfo;
