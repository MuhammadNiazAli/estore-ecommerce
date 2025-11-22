'use client'
import React from "react";

const automotiveSpecsData = [
  {
    feature: "Engine Type",
    productA: "2.0L Turbocharged",
    productB: "3.0L V6",
  },
  {
    feature: "Horsepower",
    productA: "250 HP",
    productB: "400 HP",
  },
  {
    feature: "Fuel Efficiency",
    productA: "28 MPG",
    productB: "22 MPG",
  },
  {
    feature: "Transmission",
    productA: "8-Speed Automatic",
    productB: "6-Speed Manual",
  },
  {
    feature: "Price",
    productA: "$28,000",
    productB: "$45,000",
  },
];

const AutomotiveSpecsComparison = () => {
  return (
    <section className="bg-gray-900 text-yellow-400 w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-yellow-300">
        Automotive Specs Comparison
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
            {automotiveSpecsData.map(({ feature, productA, productB }, i) => (
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

export default AutomotiveSpecsComparison;
