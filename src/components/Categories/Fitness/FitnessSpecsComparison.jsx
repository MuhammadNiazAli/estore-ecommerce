"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fitnessProducts = [
  {
    id: 1,
    name: "Adjustable Dumbbell Set",
    price: "$249",
    weight: "24kg",
    material: "Cast Iron + Rubber",
    foldable: "No",
    warranty: "2 Years",
    image:
      "https://plus.unsplash.com/premium_photo-1669261222932-35c2491e7340?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkzfHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Compact Spin Bike",
    price: "$799",
    weight: "35kg",
    material: "Steel Frame",
    foldable: "Yes",
    warranty: "3 Years",
    image:
      "https://plus.unsplash.com/premium_photo-1661602113146-5f99ff3e4040?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk5fHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    name: "Battle Rope Elite",
    price: "$119",
    weight: "12kg",
    material: "PolyDacron",
    foldable: "No",
    warranty: "1 Year",
    image:
      "https://plus.unsplash.com/premium_photo-1663133917315-a331d4fd62a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D",
  },
];

const specs = [
  { key: "price", label: "Price" },
  { key: "weight", label: "Weight" },
  { key: "material", label: "Material" },
  { key: "foldable", label: "Foldable" },
  { key: "warranty", label: "Warranty" },
];

const FitnessSpecsComparison = () => {
  const [products] = useState(fitnessProducts);

  return (
    <section className="bg-white text-black py-12 my-[-50px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Compare Fitness Equipment
        </h2>

        {/* Desktop View: Table */}
        <div className="hidden lg:block border border-black rounded-lg shadow-lg overflow-hidden">
          <div className="min-w-full">
            {/* Header Row */}
            <div className="grid grid-cols-[200px_repeat(3,minmax(150px,1fr))] bg-white">
              <div className="p-3 font-semibold text-gray-700">Specs</div>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-3 text-center border-l border-black"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 mx-auto object-cover rounded mb-2"
                  />
                  <p className="text-sm font-semibold">{product.name}</p>
                </div>
              ))}
            </div>

            {/* Specs Rows */}
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[200px_repeat(3,minmax(150px,1fr))] ${
                  idx % 2 === 0 ? "bg-white" : "bg-white"
                }`}
              >
                <div className="p-3 font-semibold text-gray-600">
                  {spec.label}
                </div>
                {products.map((product) => (
                  <div
                    key={product.id + spec.key}
                    className="p-3 text-center border-l border-black text-sm"
                  >
                    {product[spec.key] === "Yes" || product[spec.key] === "Yes" ? (
                      <FaCheckCircle className="text-black mx-auto" />
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
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-lg border border-black overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-200 pb-1"
                    >
                      <span className="text-gray-600">{spec.label}</span>
                      <span>
                        {product[spec.key] === "Yes" ? (
                          <FaCheckCircle className="text-black" />
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

export default FitnessSpecsComparison;
