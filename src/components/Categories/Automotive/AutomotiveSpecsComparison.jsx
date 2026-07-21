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
    <section className="bg-white text-amber-600 w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-amber-500">
        Automotive Specs Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-amber-900 rounded-lg">
          <thead>
            <tr className="bg-amber-900 text-amber-300">
              <th className="py-3 px-5 text-left border border-amber-900">Feature</th>
              <th className="py-3 px-5 text-left border border-amber-900">Product A</th>
              <th className="py-3 px-5 text-left border border-amber-900">Product B</th>
            </tr>
          </thead>
          <tbody>
            {automotiveSpecsData.map(({ feature, productA, productB }, i) => (
              <tr
                key={i}
                className={`border border-amber-900 ${
                  i % 2 === 0 ? "bg-amber-950 bg-opacity-20" : "bg-amber-950 bg-opacity-10"
                }`}
              >
                <td className="py-3 px-5 border border-amber-900 font-semibold">{feature}</td>
                <td className="py-3 px-5 border border-amber-900">{productA}</td>
                <td className="py-3 px-5 border border-amber-900">{productB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AutomotiveSpecsComparison;
