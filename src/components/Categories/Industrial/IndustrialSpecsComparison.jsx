'use client'
import React from "react";

const specsData = [
  {
    feature: "Material",
    productA: "Reinforced Steel",
    productB: "Aluminum Alloy",
  },
  {
    feature: "Weight",
    productA: "15 kg",
    productB: "10 kg",
  },
  {
    feature: "Durability",
    productA: "High Impact Resistance",
    productB: "Corrosion Resistant",
  },
  {
    feature: "Finish",
    productA: "Powder Coated",
    productB: "Anodized",
  },
  {
    feature: "Price",
    productA: "$250",
    productB: "$300",
  },
];

const IndustrialSpecsComparison = () => {
  return (
    <section className="bg-gray-900 text-yellow-400 w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-yellow-300">
        Industrial Products Specs Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-yellow-700 rounded-lg">
          <thead>
            <tr className="bg-yellow-800 text-yellow-100">
              <th className="py-3 px-5 text-left border border-yellow-700">Feature</th>
              <th className="py-3 px-5 text-left border border-yellow-700">Product A</th>
              <th className="py-3 px-5 text-left border border-yellow-700">Product B</th>
            </tr>
          </thead>
          <tbody>
            {specsData.map(({ feature, productA, productB }, i) => (
              <tr
                key={i}
                className={`border border-yellow-700 ${
                  i % 2 === 0 ? "bg-yellow-900 bg-opacity-20" : "bg-yellow-900 bg-opacity-10"
                }`}
              >
                <td className="py-3 px-5 border border-yellow-700 font-semibold">{feature}</td>
                <td className="py-3 px-5 border border-yellow-700">{productA}</td>
                <td className="py-3 px-5 border border-yellow-700">{productB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IndustrialSpecsComparison;
