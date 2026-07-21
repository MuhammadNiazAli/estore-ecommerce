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
    <section className="bg-white text-black w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-black">
        Industrial Products Specs Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-black rounded-lg">
          <thead>
            <tr className="bg-black text-black">
              <th className="py-3 px-5 text-left border border-black">Feature</th>
              <th className="py-3 px-5 text-left border border-black">Product A</th>
              <th className="py-3 px-5 text-left border border-black">Product B</th>
            </tr>
          </thead>
          <tbody>
            {specsData.map(({ feature, productA, productB }, i) => (
              <tr
                key={i}
                className={`border border-black ${
                  i % 2 === 0 ? "bg-black bg-opacity-20" : "bg-black bg-opacity-10"
                }`}
              >
                <td className="py-3 px-5 border border-black font-semibold">{feature}</td>
                <td className="py-3 px-5 border border-black">{productA}</td>
                <td className="py-3 px-5 border border-black">{productB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IndustrialSpecsComparison;
