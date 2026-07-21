'use client'
import React from "react";

const artSpecsData = [
  {
    feature: "Material",
    productA: "Handmade Canvas",
    productB: "Recycled Paper",
  },
  {
    feature: "Dimensions",
    productA: "24 x 36 inches",
    productB: "18 x 24 inches",
  },
  {
    feature: "Color Palette",
    productA: "Vibrant Acrylics",
    productB: "Watercolor Pastels",
  },
  {
    feature: "Frame",
    productA: "Wooden Frame Included",
    productB: "No Frame",
  },
  {
    feature: "Price",
    productA: "$150",
    productB: "$80",
  },
];

const ArtSpecsComparison = () => {
  return (
    <section className="bg-white text-amber-600 w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-amber-500">
        Art Products Specs Comparison
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
            {artSpecsData.map(({ feature, productA, productB }, i) => (
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

export default ArtSpecsComparison;
