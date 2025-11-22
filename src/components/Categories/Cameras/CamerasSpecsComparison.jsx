"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";

const camerasData = [
  {
    id: 1,
    name: "Canon EOS R5",
    brand: "Canon",
    price: 3899,
    sensor: "Full Frame",
    resolution: "45MP",
    video: "8K",
    weight: "738g",
    features: ["IBIS", "Touchscreen", "Weather-Sealed"],
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1586206050425-56fb1aa7cbab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Sony A7 IV",
    brand: "Sony",
    price: 2499,
    sensor: "Full Frame",
    resolution: "33MP",
    video: "4K",
    weight: "658g",
    features: ["IBIS", "Touchscreen", "Weather-Sealed"],
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1606706252682-c45e9f5eba20?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Nikon Z6 II",
    brand: "Nikon",
    price: 1999,
    sensor: "Full Frame",
    resolution: "24MP",
    video: "4K",
    weight: "705g",
    features: ["IBIS", "Touchscreen", "Weather-Sealed"],
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1586079041952-0b8f9bfb569e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzNHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const specLabels = [
  { key: "sensor", label: "Sensor" },
  { key: "resolution", label: "Resolution" },
  { key: "video", label: "Video" },
  { key: "weight", label: "Weight" },
];

const CamerasSpecsComparison = () => {
  const [selectedCameras, setSelectedCameras] = useState([camerasData[0], camerasData[1]]);

  const toggleCamera = (camera) => {
    if (selectedCameras.find((c) => c.id === camera.id)) {
      setSelectedCameras(selectedCameras.filter((c) => c.id !== camera.id));
    } else if (selectedCameras.length < 3) {
      setSelectedCameras([...selectedCameras, camera]);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16 my-[-40px]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-6 text-center">
          Compare Camera Specifications
        </h2>

        {/* Camera Selection */}
        <div className="flex gap-4 flex-wrap justify-center mb-8">
          {camerasData.map((camera) => (
            <button
              key={camera.id}
              onClick={() => toggleCamera(camera)}
              className={`border px-4 py-2 rounded-lg transition ${
                selectedCameras.find((c) => c.id === camera.id)
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "border-gray-700 text-white hover:bg-gray-800"
              }`}
            >
              {camera.name}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr>
                <th className="bg-gray-700 text-left p-4">Specs</th>
                {selectedCameras.map((camera) => (
                  <th key={camera.id} className="bg-gray-700 p-4 min-w-[200px]">
                    <div className="flex flex-col items-center">
                      <img
                        src={camera.image}
                        alt={camera.name}
                        className="w-32 h-32 object-cover rounded-lg mb-2"
                      />
                      <p className="font-semibold">{camera.name}</p>
                      <p className="text-yellow-400 font-bold">${camera.price}</p>
                      <div className="flex justify-center mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < camera.rating ? "text-yellow-400" : "text-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specLabels.map((spec) => (
                <tr key={spec.key} className="border-t border-gray-700">
                  <td className="p-4 font-semibold">{spec.label}</td>
                  {selectedCameras.map((camera) => (
                    <td key={camera.id} className="p-4 text-center">
                      {camera[spec.key]}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Features */}
              <tr className="border-t border-gray-700">
                <td className="p-4 font-semibold">Features</td>
                {selectedCameras.map((camera) => (
                  <td key={camera.id} className="p-4 text-center">
                    {camera.features.includes("IBIS") ? (
                      <p className="text-green-400 flex items-center justify-center gap-1">
                        <FaCheck /> IBIS
                      </p>
                    ) : (
                      <p className="text-red-400 flex items-center justify-center gap-1">
                        <FaTimes /> No IBIS
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Select up to 3 cameras to compare their specifications side by side.
        </p>
      </div>
    </section>
  );
};

export default CamerasSpecsComparison;
