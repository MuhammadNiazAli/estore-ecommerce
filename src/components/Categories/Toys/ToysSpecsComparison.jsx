"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrash, FaPlus } from "react-icons/fa";

// ✅ Dummy Toys Data
const toys = [
  {
    id: 1,
    name: "Remote Control Car",
    brand: "ToyZone",
    price: "$49.99",
    material: "Plastic",
    features: ["Rechargeable", "LED Lights"],
    weight: "1.2kg",
    image:
      "https://media.istockphoto.com/id/2162211599/photo/remote-control-car-on-dirt-track.webp?a=1&b=1&s=612x612&w=0&k=20&c=ycTOuphdX9XxXG5bKLIy0krXmDvfkD0VB76DIuyns9w=",
  },
  {
    id: 2,
    name: "Lego Building Set",
    brand: "Lego",
    price: "$89.99",
    material: "ABS Plastic",
    features: ["Creative Build", "Colorful Blocks"],
    weight: "2.5kg",
    image:
      "https://media.istockphoto.com/id/853345850/photo/toy-blocks.webp?a=1&b=1&s=612x612&w=0&k=20&c=MZdnRpgUTqgUpxCvNRTLi47_6C_zOENR9USJ-vr766U=",
  },
  {
    id: 3,
    name: "Soft Teddy Bear",
    brand: "CuddleToys",
    price: "$24.99",
    material: "Cotton Plush",
    features: ["Super Soft", "Washable"],
    weight: "0.8kg",
    image:
      "https://media.istockphoto.com/id/167154546/photo/cute-teddy-bear-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlogH5VQojYn4TaZV8xYdTQID89v8J9Rwq2m94S_P-c=",
  },
  {
    id: 4,
    name: "Electric Train Set",
    brand: "FunTracks",
    price: "$59.99",
    material: "Metal & Plastic",
    features: ["Sound Effects", "LED Lights"],
    weight: "3kg",
    image:
      "https://media.istockphoto.com/id/2162879133/photo/sydney-train.webp?a=1&b=1&s=612x612&w=0&k=20&c=J3xTQIFctnwUwoOPZJuP3jHovY9fKW8fBgxRUo6gu_k=",
  },
];

const ToysSpecsComparison = () => {
  const [selectedToys, setSelectedToys] = useState([toys[0], toys[1]]);

  const addToy = (id) => {
    const toy = toys.find((t) => t.id === id);
    if (toy && !selectedToys.some((t) => t.id === toy.id)) {
      setSelectedToys([...selectedToys, toy]);
    }
  };

  const removeToy = (id) => {
    setSelectedToys(selectedToys.filter((t) => t.id !== id));
  };

  return (
    <section className="bg-white text-gray-900 py-10 px-4 rounded-xl mt-10">
      <div className="max-w-[1200px] mx-auto">
        {/* ✅ Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-6">
          Compare Toy Specifications
        </h2>

        {/* ✅ Add Toy Dropdown */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <select
            className="bg-white text-gray-900 px-4 py-2 rounded-md border border-gray-200"
            onChange={(e) => addToy(parseInt(e.target.value))}
          >
            <option value="">Add a toy to compare</option>
            {toys.map((toy) => (
              <option key={toy.id} value={toy.id}>
                {toy.name}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ Responsive Comparison Table */}
        <div className="overflow-x-auto">
          <motion.table
            className="min-w-[700px] w-full border border-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <thead className="bg-white text-amber-600">
              <tr>
                <th className="p-3 text-left">Specs</th>
                {selectedToys.map((toy) => (
                  <th key={toy.id} className="p-3 relative">
                    <div className="flex flex-col items-center">
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="w-24 h-24 object-cover rounded-lg mb-2"
                      />
                      <p className="font-semibold">{toy.name}</p>
                      <button
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-400 text-gray-900 p-1 rounded-full text-xs"
                        onClick={() => removeToy(toy.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold">Brand</td>
                {selectedToys.map((toy) => (
                  <td key={toy.id} className="p-3 text-center">
                    {toy.brand}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold">Price</td>
                {selectedToys.map((toy) => (
                  <td key={toy.id} className="p-3 text-center">
                    {toy.price}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold">Material</td>
                {selectedToys.map((toy) => (
                  <td key={toy.id} className="p-3 text-center">
                    {toy.material}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold">Features</td>
                {selectedToys.map((toy) => (
                  <td key={toy.id} className="p-3 text-center">
                    {toy.features.join(", ")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold">Weight</td>
                {selectedToys.map((toy) => (
                  <td key={toy.id} className="p-3 text-center">
                    {toy.weight}
                  </td>
                ))}
              </tr>
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
};

export default ToysSpecsComparison;
