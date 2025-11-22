"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// Sample phone accessories products data for comparison
const phoneAccessories = [
  {
    id: 51,
    name: "Wireless Charger",
    price: "$39",
    connectivity: "Qi Wireless",
    compatibility: "Most Smartphones",
    warranty: "1 Year",
    fastCharge: "Yes",
    image:
      "https://plus.unsplash.com/premium_photo-1729708655330-c1be62ec0f32?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 52,
    name: "Silicone Phone Case",
    price: "$19",
    connectivity: "N/A",
    compatibility: "iPhone & Android",
    warranty: "6 Months",
    fastCharge: "N/A",
    image:
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
  {
    id: 53,
    name: "Bluetooth Earbuds",
    price: "$59",
    connectivity: "Bluetooth 5.0",
    compatibility: "All Bluetooth Devices",
    warranty: "1 Year",
    fastCharge: "Yes",
    image:
      "https://plus.unsplash.com/premium_photo-1701760275641-e60a89edad6a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
];

const specs = [
  { key: "price", label: "Price" },
  { key: "connectivity", label: "Connectivity" },
  { key: "compatibility", label: "Compatibility" },
  { key: "warranty", label: "Warranty" },
  { key: "fastCharge", label: "Fast Charge Support" },
];

const PhoneAccessoriesSpecsComparison = () => {
  const [products] = useState(phoneAccessories);

  return (
    <section className="bg-gray-900 text-yellow-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
          Compare Phone Accessories Specs
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
                <div className="p-3 font-semibold text-yellow-500">{spec.label}</div>
                {products.map((product) => (
                  <div
                    key={product.id + spec.key}
                    className="p-3 text-center border-l border-yellow-600 text-sm text-yellow-300"
                  >
                    {spec.key === "fastCharge" && product[spec.key] === "Yes" ? (
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
                        {spec.key === "fastCharge" && product[spec.key] === "Yes" ? (
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

export default PhoneAccessoriesSpecsComparison;
