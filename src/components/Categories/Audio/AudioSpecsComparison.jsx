"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const audioComparisonData = [
  {
    feature: "Bluetooth Version",
    productA: "Bluetooth 5.0",
    productB: "Bluetooth 4.2",
  },
  {
    feature: "Battery Life",
    productA: "30 Hours",
    productB: "20 Hours",
  },
  {
    feature: "Noise Cancellation",
    productA: true,
    productB: false,
  },
  {
    feature: "Water Resistance",
    productA: "IPX5",
    productB: "None",
  },
  {
    feature: "Price",
    productA: "$199",
    productB: "$129",
  },
];

const AudioSpecsComparison = () => {
  return (
    <section className="bg-white text-gray-900 py-12 px-4 my-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Compare Audio Specs
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Find the perfect audio device that fits your lifestyle.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full text-left">
            <thead className="bg-white text-black uppercase text-sm">
              <tr>
                <th className="py-4 px-4">Feature</th>
                <th className="py-4 px-4">Premium Headphones</th>
                <th className="py-4 px-4">Budget Headphones</th>
              </tr>
            </thead>
            <tbody>
              {audioComparisonData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-200 ${
                    idx % 2 === 0 ? "bg-white" : "bg-white"
                  }`}
                >
                  <td className="py-4 px-4 font-semibold text-gray-700">
                    {item.feature}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof item.productA === "boolean" ? (
                      item.productA ? (
                        <FaCheckCircle className="text-black text-xl mx-auto" />
                      ) : (
                        <FaTimesCircle className="text-black text-xl mx-auto" />
                      )
                    ) : (
                      <span>{item.productA}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof item.productB === "boolean" ? (
                      item.productB ? (
                        <FaCheckCircle className="text-black text-xl mx-auto" />
                      ) : (
                        <FaTimesCircle className="text-black text-xl mx-auto" />
                      )
                    ) : (
                      <span>{item.productB}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Cards for Mobile */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {/* Product A Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-black mb-4">
              Premium Headphones
            </h3>
            <ul className="space-y-2 text-gray-700">
              {audioComparisonData.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.feature}</span>
                  <span>
                    {typeof item.productA === "boolean" ? (
                      item.productA ? (
                        <FaCheckCircle className="text-black" />
                      ) : (
                        <FaTimesCircle className="text-black" />
                      )
                    ) : (
                      item.productA
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product B Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-black mb-4">
              Budget Headphones
            </h3>
            <ul className="space-y-2 text-gray-700">
              {audioComparisonData.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.feature}</span>
                  <span>
                    {typeof item.productB === "boolean" ? (
                      item.productB ? (
                        <FaCheckCircle className="text-black" />
                      ) : (
                        <FaTimesCircle className="text-black" />
                      )
                    ) : (
                      item.productB
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSpecsComparison;
