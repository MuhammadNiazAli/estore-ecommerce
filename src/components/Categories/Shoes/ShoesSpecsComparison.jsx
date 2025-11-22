'use client'
import React from "react";

const shoeSpecs = [
  {
    id: 1,
    name: "Running Sneakers",
    brand: "Sportify",
    weight: "250g",
    sole: "Rubber",
    waterproof: "No",
    price: "$99",
    rating: 4,
  },
  {
    id: 2,
    name: "Classic Leather Shoes",
    brand: "EliteStyle",
    weight: "400g",
    sole: "Leather",
    waterproof: "Yes",
    price: "$129",
    rating: 5,
  },
  {
    id: 3,
    name: "Trail Running Shoes",
    brand: "Sportify",
    weight: "300g",
    sole: "Rubber",
    waterproof: "Yes",
    price: "$115",
    rating: 5,
  },
];

const ShoesSpecsComparison = () => {
  return (
    <div className="max-w-full overflow-x-auto p-4 bg-gray-900 rounded-lg shadow-lg">
      <table className="min-w-[600px] w-full border-collapse text-left text-yellow-400">
        <thead>
          <tr className="bg-yellow-700/20">
            <th className="p-3 border border-yellow-500 font-semibold">Specification</th>
            {shoeSpecs.map((shoe) => (
              <th
                key={shoe.id}
                className="p-3 border border-yellow-500 text-center whitespace-nowrap font-semibold"
              >
                {shoe.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-yellow-900/10">
            <td className="p-3 border border-yellow-600 font-semibold">Brand</td>
            {shoeSpecs.map((shoe) => (
              <td
                key={shoe.id}
                className="p-3 border border-yellow-600 text-center whitespace-nowrap"
              >
                {shoe.brand}
              </td>
            ))}
          </tr>
          <tr className="even:bg-yellow-900/10">
            <td className="p-3 border border-yellow-600 font-semibold">Weight</td>
            {shoeSpecs.map((shoe) => (
              <td
                key={shoe.id}
                className="p-3 border border-yellow-600 text-center whitespace-nowrap"
              >
                {shoe.weight}
              </td>
            ))}
          </tr>
          <tr className="even:bg-yellow-900/10">
            <td className="p-3 border border-yellow-600 font-semibold">Sole</td>
            {shoeSpecs.map((shoe) => (
              <td
                key={shoe.id}
                className="p-3 border border-yellow-600 text-center whitespace-nowrap"
              >
                {shoe.sole}
              </td>
            ))}
          </tr>
          <tr className="even:bg-yellow-900/10">
            <td className="p-3 border border-yellow-600 font-semibold">Waterproof</td>
            {shoeSpecs.map((shoe) => (
              <td
                key={shoe.id}
                className="p-3 border border-yellow-600 text-center whitespace-nowrap"
              >
                {shoe.waterproof}
              </td>
            ))}
          </tr>
          <tr className="even:bg-yellow-900/10">
            <td className="p-3 border border-yellow-600 font-semibold">Price</td>
            {shoeSpecs.map((shoe) => (
              <td
                key={shoe.id}
                className="p-3 border border-yellow-600 text-center whitespace-nowrap"
              >
                {shoe.price}
              </td>
            ))}
          </tr>
          <tr className="even:bg-yellow-900/10">
            <td className="p-3 border border-yellow-600 font-semibold">Rating</td>
            {shoeSpecs.map((shoe) => (
              <td
                key={shoe.id}
                className="p-3 border border-yellow-600 text-center whitespace-nowrap"
              >
                {shoe.rating} / 5
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoesSpecsComparison;
