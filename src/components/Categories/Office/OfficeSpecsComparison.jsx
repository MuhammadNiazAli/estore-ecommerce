'use client'
import React from "react";

const products = [
  {
    name: "Ergonomic Office Chair",
    brand: "ComfortSeat",
    price: "$180",
    features: ["Adjustable Height", "Lumbar Support", "Breathable Mesh"],
    rating: "★★★★★",
  },
  {
    name: "Standing Desk Converter",
    brand: "FlexiDesk",
    price: "$220",
    features: ["Height Adjustable", "Spacious Surface", "Sturdy Frame"],
    rating: "★★★★☆",
  },
  {
    name: "LED Desk Lamp",
    brand: "BrightLite",
    price: "$55",
    features: ["Dimmable", "Eye-Care Technology", "USB Charging Port"],
    rating: "★★★★☆",
  },
];

const OfficeSpecsComparison = () => {
  return (
    <section className="bg-white text-black p-6 rounded-lg max-w-6xl mx-auto my-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">
        Office Products Specs Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-black rounded-lg">
          <thead className="bg-black text-black">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Brand</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Features</th>
              <th className="p-3 text-left">Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ name, brand, price, features, rating }) => (
              <tr
                key={name}
                className="border-t border-black hover:bg-black transition-colors"
              >
                <td className="p-3 font-semibold">{name}</td>
                <td className="p-3">{brand}</td>
                <td className="p-3">{price}</td>
                <td className="p-3 text-sm">
                  <ul className="list-disc list-inside">
                    {features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-3">{rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OfficeSpecsComparison;
