'use client'
import React from "react";

const softwareSpecsData = [
  {
    feature: "Platform",
    productA: "Windows, macOS, Linux",
    productB: "Windows, macOS",
  },
  {
    feature: "License",
    productA: "Subscription",
    productB: "One-time Purchase",
  },
  {
    feature: "Supported Languages",
    productA: "English, Spanish, French",
    productB: "English, German, Japanese",
  },
  {
    feature: "Customer Support",
    productA: "24/7 Live Chat",
    productB: "Email & Phone",
  },
  {
    feature: "Price",
    productA: "$99/year",
    productB: "$149 one-time",
  },
];

const SoftwareSpecsComparison = () => {
  return (
    <section className="bg-white text-black w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-black">
        Software Products Specs Comparison
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
            {softwareSpecsData.map(({ feature, productA, productB }, i) => (
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

export default SoftwareSpecsComparison;
