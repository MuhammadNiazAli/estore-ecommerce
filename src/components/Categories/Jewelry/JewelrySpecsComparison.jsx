"use client";
import React from "react";

const specsData = [
  {
    id: 1,
    name: "Gold Necklace",
    metal: "18K Yellow Gold",
    weight: "15g",
    gemstone: "Diamond",
    price: "$1200",
  },
  {
    id: 2,
    name: "Silver Bracelet",
    metal: "Sterling Silver",
    weight: "10g",
    gemstone: "None",
    price: "$350",
  },
  {
    id: 3,
    name: "Pearl Earrings",
    metal: "14K White Gold",
    weight: "5g",
    gemstone: "Pearls",
    price: "$600",
  },
];

const JewelrySpecsComparison = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-amber-600 text-3xl font-bold mb-8 text-center">
          Jewelry Specifications Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-amber-800 rounded-lg overflow-hidden text-amber-500">
            <thead className="bg-amber-950">
              <tr>
                <th className="py-3 px-6 text-left border-b border-amber-800">Item</th>
                <th className="py-3 px-6 text-left border-b border-amber-800">Metal</th>
                <th className="py-3 px-6 text-left border-b border-amber-800">Weight</th>
                <th className="py-3 px-6 text-left border-b border-amber-800">Gemstone</th>
                <th className="py-3 px-6 text-left border-b border-amber-800">Price</th>
              </tr>
            </thead>
            <tbody>
              {specsData.map(({ id, name, metal, weight, gemstone, price }) => (
                <tr
                  key={id}
                  className="even:bg-amber-950/20 odd:bg-amber-950/10 hover:bg-amber-900 transition-colors"
                >
                  <td className="py-3 px-6 border-b border-amber-800 font-semibold">{name}</td>
                  <td className="py-3 px-6 border-b border-amber-800">{metal}</td>
                  <td className="py-3 px-6 border-b border-amber-800">{weight}</td>
                  <td className="py-3 px-6 border-b border-amber-800">{gemstone}</td>
                  <td className="py-3 px-6 border-b border-amber-800 font-semibold text-amber-600">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default JewelrySpecsComparison;
