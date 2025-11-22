"use client";
import React from "react";

const specsData = [
  {
    name: "Pro Gaming Laptop",
    price: "$2,199",
    specs: {
      CPU: "Intel Core i9 13th Gen",
      GPU: "NVIDIA RTX 4080",
      RAM: "32GB DDR5",
      Storage: "1TB NVMe SSD",
      Display: "17.3” QHD 240Hz",
      Weight: "2.5kg",
    },
  },
  {
    name: "Elite Gaming Laptop",
    price: "$1,799",
    specs: {
      CPU: "AMD Ryzen 9 7900HX",
      GPU: "NVIDIA RTX 4070",
      RAM: "16GB DDR5",
      Storage: "1TB NVMe SSD",
      Display: "16” QHD 165Hz",
      Weight: "2.3kg",
    },
  },
  {
    name: "Performance Laptop",
    price: "$1,399",
    specs: {
      CPU: "Intel Core i7 12th Gen",
      GPU: "NVIDIA RTX 3060",
      RAM: "16GB DDR4",
      Storage: "512GB SSD",
      Display: "15.6” FHD 144Hz",
      Weight: "2.1kg",
    },
  },
];

const GamingSpecsComparison = () => {
  return (
    <section className="w-full flex justify-center px-4 py-10 my-[-50px]">
      <div className="max-w-[1000px] w-full bg-gray-900 rounded-2xl shadow-xl p-6 md:p-10 text-gray-100">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-8">
          Gaming Specs Comparison
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-800 text-yellow-300">
                <th className="p-3 text-left">Specs</th>
                {specsData.map((product, index) => (
                  <th key={index} className="p-3 text-center">
                    {product.name}
                    <div className="text-yellow-400 font-semibold">
                      {product.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(specsData[0].specs).map((specKey, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  } hover:bg-gray-600 transition`}
                >
                  <td className="p-3 font-medium text-yellow-400">{specKey}</td>
                  {specsData.map((product, colIndex) => (
                    <td key={colIndex} className="p-3 text-center text-gray-300">
                      {product.specs[specKey]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-all">
            Shop Gaming Laptops
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamingSpecsComparison;
