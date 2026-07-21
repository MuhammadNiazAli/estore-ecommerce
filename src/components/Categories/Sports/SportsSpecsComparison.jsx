"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// ✅ Sports Products for Comparison
const products = [
  {
    id: 1,
    name: "Pro Baseball Bat",
    price: 149,
    weight: "1.2 kg",
    material: "Premium Maple Wood",
    durability: "High",
    rating: 4.9,
    available: true,
    highlight: true, // Best Choice
    image:
      "https://media.istockphoto.com/id/1731560391/photo/glove-bat-and-baseball-gear-on-the-sand-for-a-game-professional-competition-or-sports-ground.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z71QOodMd35z0eRlXJe0drjsND8GruMNmDLLu0atOpI=",
  },
  {
    id: 2,
    name: "Elite Tennis Racket",
    price: 199,
    weight: "350 g",
    material: "Graphite Composite",
    durability: "Medium",
    rating: 4.7,
    available: true,
    highlight: false,
    image:
      "https://media.istockphoto.com/id/172320125/photo/tennis-kid.webp?a=1&b=1&s=612x612&w=0&k=20&c=LDBALubP67_B1uea0bU1VJvatqXzieT_atttzmpmMoA=",
  },
  {
    id: 3,
    name: "Basketball Pro",
    price: 99,
    weight: "620 g",
    material: "Synthetic Leather",
    durability: "High",
    rating: 4.6,
    available: false,
    highlight: false,
    image:
      "https://media.istockphoto.com/id/1292791907/photo/shoot-for-the-sky-and-you-will-score.webp?a=1&b=1&s=612x612&w=0&k=20&c=avNZ0SZ9Tk6GD_un3umddHTCymkmFA4aAu432bfsQb8=",
  },
];

const specs = [
  "Price",
  "Weight",
  "Material",
  "Durability",
  "Rating",
  "Availability",
];

const SportsSpecsComparison = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* ✅ Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Compare Sports Gear Specifications
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Choose the best product based on features and price
          </p>
        </div>

        {/* ✅ Responsive Table */}
        <div className="overflow-x-auto">
          <motion.table
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-w-[700px] w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            {/* Table Header */}
            <thead className="bg-white text-black text-lg">
              <tr>
                <th className="p-4 text-left">Specifications</th>
                {products.map((product) => (
                  <th
                    key={product.id}
                    className={`p-4 text-center ${
                      product.highlight ? "bg-black text-gray-900" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg mb-2"
                      />
                      <p className="font-bold">{product.name}</p>
                      <p className="text-sm text-gray-600">${product.price}</p>
                      {product.highlight && (
                        <span className="text-xs bg-black text-black px-2 py-1 rounded-full mt-1 font-semibold">
                          Best Choice
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-700">
              {/* ✅ Price */}
              <tr className="border-b">
                <td className="p-4 font-semibold">Price</td>
                {products.map((p) => (
                  <td
                    key={p.id}
                    className="text-center font-bold text-black p-4"
                  >
                    ${p.price}
                  </td>
                ))}
              </tr>

              {/* ✅ Weight */}
              <tr className="border-b">
                <td className="p-4 font-semibold">Weight</td>
                {products.map((p) => (
                  <td key={p.id} className="text-center p-4">
                    {p.weight}
                  </td>
                ))}
              </tr>

              {/* ✅ Material */}
              <tr className="border-b">
                <td className="p-4 font-semibold">Material</td>
                {products.map((p) => (
                  <td key={p.id} className="text-center p-4">
                    {p.material}
                  </td>
                ))}
              </tr>

              {/* ✅ Durability */}
              <tr className="border-b">
                <td className="p-4 font-semibold">Durability</td>
                {products.map((p) => (
                  <td key={p.id} className="text-center p-4">
                    {p.durability}
                  </td>
                ))}
              </tr>

              {/* ✅ Rating */}
              <tr className="border-b">
                <td className="p-4 font-semibold">Rating</td>
                {products.map((p) => (
                  <td key={p.id} className="text-center p-4">
                    ⭐ {p.rating}
                  </td>
                ))}
              </tr>

              {/* ✅ Availability */}
              <tr>
                <td className="p-4 font-semibold">Availability</td>
                {products.map((p) => (
                  <td key={p.id} className="text-center p-4">
                    {p.available ? (
                      <FaCheckCircle className="text-black mx-auto" />
                    ) : (
                      <FaTimesCircle className="text-black mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
};

export default SportsSpecsComparison;
