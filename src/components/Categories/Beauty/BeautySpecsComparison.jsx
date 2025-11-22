"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const beautyProducts = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: "$79",
    height: "50cm",
    light: "Indirect Light",
    water: "Weekly",
    petSafe: "Yes",
    image:
      "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Succulent Mix Pot",
    price: "$35",
    height: "15cm",
    light: "Full Sun",
    water: "Bi-weekly",
    petSafe: "No",
    image:
      "https://images.unsplash.com/photo-1499001683898-8b100af6fada?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    name: "Orchid in Ceramic Pot",
    price: "$89",
    height: "40cm",
    light: "Bright Indirect",
    water: "Weekly",
    petSafe: "Yes",
    image:
      "https://images.unsplash.com/photo-1710079224130-499906a208d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  },
];

const specs = [
  { key: "price", label: "Price" },
  { key: "height", label: "Height" },
  { key: "light", label: "Light Requirement" },
  { key: "water", label: "Watering" },
  { key: "petSafe", label: "Pet Safe" },
];

const BeautySpecsComparison = () => {
  const [products] = useState(beautyProducts);

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-[-50px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
          Compare Nature & Plant Specs
        </h2>

        {/* Desktop View: Table */}
        <div className="hidden lg:block border border-yellow-600 rounded-lg shadow-lg overflow-hidden">
          <div className="min-w-full">
            {/* Header Row */}
            <div className="grid grid-cols-[200px_repeat(3,minmax(150px,1fr))] bg-gray-900">
              <div className="p-3 font-semibold text-yellow-500">Specs</div>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-3 text-center border-l border-yellow-600"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 mx-auto object-cover rounded mb-2 border-2 border-yellow-500"
                  />
                  <p className="text-sm font-semibold text-yellow-400">{product.name}</p>
                </div>
              ))}
            </div>

            {/* Specs Rows */}
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[200px_repeat(3,minmax(150px,1fr))] ${
                  idx % 2 === 0 ? "bg-gray-900" : "bg-gray-900"
                }`}
              >
                <div className="p-3 font-semibold text-yellow-500">
                  {spec.label}
                </div>
                {products.map((product) => (
                  <div
                    key={product.id + spec.key}
                    className="p-3 text-center border-l border-yellow-600 text-sm text-yellow-300"
                  >
                    {spec.key === "petSafe" && product[spec.key] === "Yes" ? (
                      <FaCheckCircle className="text-yellow-400 mx-auto" />
                    ) : (
                      product[spec.key]
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View: Cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-yellow-950 rounded-lg shadow-lg border border-yellow-600 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover border-b border-yellow-600"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">
                  {product.name}
                </h3>
                <ul className="space-y-2 text-sm text-yellow-300">
                  {specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-yellow-700 pb-1"
                    >
                      <span className="text-yellow-500">{spec.label}</span>
                      <span>
                        {spec.key === "petSafe" && product[spec.key] === "Yes" ? (
                          <FaCheckCircle className="text-yellow-400" />
                        ) : (
                          product[spec.key]
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautySpecsComparison;
