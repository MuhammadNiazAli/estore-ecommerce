'use client'
import React from "react";

const specsData = [
  {
    feature: "Material",
    productA: "Solid Wood",
    productB: "Ceramic",
    productC: "Fleece",
  },
  {
    feature: "Finish",
    productA: "Matte",
    productB: "Glossy",
    productC: "Soft",
  },
  {
    feature: "Dimensions",
    productA: "120x60x45 cm",
    productB: "15x15x30 cm",
    productC: "150x200 cm",
  },
  {
    feature: "Color Options",
    productA: "Natural, Walnut",
    productB: "White, Blue",
    productC: "Beige, Gray",
  },
  {
    feature: "Weight",
    productA: "20 kg",
    productB: "1.5 kg",
    productC: "2 kg",
  },
  {
    feature: "Care Instructions",
    productA: "Wipe with dry cloth",
    productB: "Hand wash only",
    productC: "Machine washable",
  },
];

const HomeDecorSpecsComparison = () => {
  return (
    <section className="bg-gray-900 text-yellow-400 py-10 px-4 max-w-7xl mx-auto rounded-lg shadow-lg my-[-30px]">
      <h2 className="text-3xl font-bold mb-8 text-center">Product Specs Comparison</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] table-auto border-collapse text-left">
          <thead>
            <tr className="border-b border-yellow-600">
              <th className="px-4 py-3 text-yellow-300">Feature</th>
              <th className="px-4 py-3">Elegant Wooden Table</th>
              <th className="px-4 py-3">Ceramic Vase Set</th>
              <th className="px-4 py-3">Cozy Throw Blanket</th>
            </tr>
          </thead>
          <tbody>
            {specsData.map(({ feature, productA, productB, productC }, idx) => (
              <tr
                key={feature}
                className={idx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
              >
                <td className="px-4 py-3 font-semibold text-yellow-300">{feature}</td>
                <td className="px-4 py-3">{productA}</td>
                <td className="px-4 py-3">{productB}</td>
                <td className="px-4 py-3">{productC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HomeDecorSpecsComparison;
