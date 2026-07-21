'use client'
import React from "react";

const specsData = [
  {
    feature: "Material",
    productA: "Water-resistant Nylon",
    productB: "Polycarbonate Hard Shell",
  },
  {
    feature: "Weight",
    productA: "1.2 kg",
    productB: "3.5 kg",
  },
  {
    feature: "Capacity",
    productA: "40 Liters",
    productB: "55 Liters",
  },
  {
    feature: "Wheels",
    productA: "No Wheels",
    productB: "4 Multi-directional Wheels",
  },
  {
    feature: "Price",
    productA: "$150",
    productB: "$220",
  },
];

const TravelSpecsComparison = () => {
  return (
    <section className="bg-white text-black w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-black">
        Travel Products Specs Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-black rounded-lg">
          <thead>
            <tr className="bg-black text-black">
              <th className="py-3 px-5 text-left border border-black">Feature</th>
              <th className="py-3 px-5 text-left border border-black">Travel Backpack</th>
              <th className="py-3 px-5 text-left border border-black">Suitcase</th>
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

export default TravelSpecsComparison;
