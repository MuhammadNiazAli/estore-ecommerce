"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Pro Baseball Bat",
    brand: "Nike",
    price: "$150",
    weight: "32 oz",
    material: "Carbon Fiber",
    grip: "Ergonomic Rubber",
    image:
      "https://media.istockphoto.com/id/1731560391/photo/glove-bat-and-baseball-gear-on-the-sand-for-a-game-professional-competition-or-sports-ground.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z71QOodMd35z0eRlXJe0drjsND8GruMNmDLLu0atOpI=",
  },
  {
    id: 2,
    name: "Speed Runner Shoes",
    brand: "Adidas",
    price: "$120",
    weight: "10 oz",
    material: "Breathable Mesh",
    grip: "Rubber Sole",
    image:
      "https://media.istockphoto.com/id/1280748316/photo/close-up-of-female-athlete-getting-ready-to-start-running-on-track-focus-on-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZX4KzKvB_krrMj_mvvTF_lecKbs3jxvJi5qMhToXkYY=",
  },
  {
    id: 3,
    name: "Ultra Grip Gloves",
    brand: "Under Armour",
    price: "$60",
    weight: "8 oz",
    material: "Synthetic Leather",
    grip: "Non-slip Padding",
    image:
      "https://media.istockphoto.com/id/1154579643/photo/working-gloves-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ZyEyDKBVB0CEejbuvsCbDyFmIPhP8zS3bNGkU5edf0=",
  },
];

const SportsCompareBar = () => {
  const [compareProducts, setCompareProducts] = useState(sampleProducts);

  const removeProduct = (id) => {
    setCompareProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (compareProducts.length === 0) {
    return (
      <div className="bg-gray-900 text-yellow-400 p-8 rounded-lg max-w-7xl mx-auto text-center my-5">
        <p className="text-xl font-semibold">
          No products selected for comparison.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gray-900 text-yellow-400 py-8 px-4 max-w-7xl mx-auto rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Compare Products</h2>

      <div className="overflow-auto">
        <table className="min-w-full border border-gray-700 rounded-lg table-fixed">
          <thead className="bg-gray-800 sticky top-0 z-10">
            <tr>
              <th className="w-48 p-4 border-r border-gray-700 text-left">
                Feature
              </th>
              {compareProducts.map((product) => (
                <th
                  key={product.id}
                  className="w-64 p-4 border-r border-gray-700 text-center relative"
                >
                  {/* Remove button */}
                  <button
                    onClick={() => removeProduct(product.id)}
                    aria-label={`Remove ${product.name}`}
                    className="absolute right-2 top-2 text-red-500 hover:text-red-400 transition"
                  >
                    <FaTimes />
                  </button>

                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-24 w-24 object-cover rounded-lg shadow-md"
                      loading="lazy"
                    />
                    <p className="font-semibold text-lg">{product.name}</p>
                    <p className="text-gray-400 text-sm">{product.brand}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Price", key: "price" },
              { label: "Weight", key: "weight" },
              { label: "Material", key: "material" },
              { label: "Grip", key: "grip" },
            ].map(({ label, key }) => (
              <tr
                key={key}
                className="border-t border-gray-700 even:bg-gray-800 odd:bg-gray-900"
              >
                <td className="p-4 font-semibold">{label}</td>
                {compareProducts.map((product) => (
                  <td key={product.id} className="p-4 text-center">
                    {product[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SportsCompareBar;
