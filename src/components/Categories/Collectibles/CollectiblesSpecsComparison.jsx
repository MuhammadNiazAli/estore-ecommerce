'use client'
import React from "react";

const collectiblesSpecsData = [
  {
    feature: "Material",
    productA: "High-grade Resin",
    productB: "Die-cast Metal",
  },
  {
    feature: "Dimensions",
    productA: "6 x 4 inches",
    productB: "8 x 5 inches",
  },
  {
    feature: "Packaging",
    productA: "Window Display Box",
    productB: "Collector's Tin Box",
  },
  {
    feature: "Limited Edition",
    productA: "500 pieces worldwide",
    productB: "1000 pieces worldwide",
  },
  {
    feature: "Price",
    productA: "$65",
    productB: "$45",
  },
];

const CollectiblesSpecsComparison = () => {
  return (
    <section className="bg-white text-black w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-black">
        Collectible Products Specs Comparison
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
            {collectiblesSpecsData.map(({ feature, productA, productB }, i) => (
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

export default CollectiblesSpecsComparison;
