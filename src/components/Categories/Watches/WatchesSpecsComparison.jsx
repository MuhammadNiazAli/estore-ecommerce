"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  XMarkIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

const watchSpecs = [
  {
    id: 1,
    name: "Rolex Submariner",
    brand: "Rolex",
    image:
      "https://images.unsplash.com/photo-1671119720870-df45dcaf81c1?q=80&w=1055",
    price: 11250,
    originalPrice: 12500,
    movement: "Automatic",
    waterResistance: "300m",
    caseSize: "41mm",
    strap: "Oystersteel",
    features: ["Chronometer", "Ceramic Bezel", "Date Display"],
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    brand: "Omega",
    image:
      "https://images.unsplash.com/photo-1588524789663-e6163803c589?q=80&w=1213",
    price: 8820,
    originalPrice: 9800,
    movement: "Manual Winding",
    waterResistance: "50m",
    caseSize: "42mm",
    strap: "Stainless Steel",
    features: ["Chronograph", "Tachymeter Scale"],
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1679436204470-87dc7da1e8be?q=80&w=1025",
    price: 699,
    originalPrice: 799,
    movement: "Smartwatch",
    waterResistance: "100m",
    caseSize: "49mm",
    strap: "Fluoroelastomer",
    features: ["GPS", "Heart Rate", "ECG", "Cellular"],
  },
  {
    id: 4,
    name: "Tag Heuer Monaco",
    brand: "Tag Heuer",
    image:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1170",
    price: 5850,
    originalPrice: 6500,
    movement: "Automatic",
    waterResistance: "100m",
    caseSize: "39mm",
    strap: "Leather",
    features: ["Chronograph", "Square Dial", "Sapphire Crystal"],
  },
];

const WatchesSpecsComparison = () => {
  const [selected, setSelected] = useState([]);

  const addWatch = (watch) => {
    if (selected.length < 3 && !selected.find((w) => w.id === watch.id)) {
      setSelected([...selected, watch]);
    }
  };

  const removeWatch = (id) => {
    setSelected(selected.filter((w) => w.id !== id));
  };

  return (
    <section className="bg-white text-gray-900 py-10 px-4 md:px-8 my-[-50px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Compare Watches Specs
        </h2>

        {/* Watch Selector */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {watchSpecs.map((watch) => (
            <button
              key={watch.id}
              onClick={() => addWatch(watch)}
              className="bg-white hover:bg-black hover:text-gray-900 px-4 py-2 rounded-lg text-sm transition"
            >
              + {watch.name}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        {selected.length === 0 ? (
          <p className="text-center text-gray-600">
            Select up to 3 watches to compare.
          </p>
        ) : (
          <motion.div
            className="overflow-x-auto bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left w-40">Specs</th>
                  {selected.map((watch) => (
                    <th
                      key={watch.id}
                      className="p-4 relative text-center border-l border-gray-200"
                    >
                      <button
                        onClick={() => removeWatch(watch.id)}
                        className="absolute top-2 right-2 bg-white p-1 rounded-full hover:bg-black"
                      >
                        <XMarkIcon className="w-5 h-5 text-gray-900" />
                      </button>
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className="w-24 h-24 mx-auto rounded-lg object-cover"
                      />
                      <p className="mt-2 font-semibold">{watch.name}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr>
                  <td className="p-3 font-semibold">Brand</td>
                  {selected.map((w) => (
                    <td key={w.id} className="p-3 text-center">
                      {w.brand}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Price</td>
                  {selected.map((w) => (
                    <td key={w.id} className="p-3 text-center">
                      <span className="text-black font-bold">
                        ${w.price.toLocaleString()}
                      </span>
                      <br />
                      <span className="line-through text-gray-500">
                        ${w.originalPrice.toLocaleString()}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Movement</td>
                  {selected.map((w) => (
                    <td key={w.id} className="p-3 text-center">
                      {w.movement}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Water Resistance</td>
                  {selected.map((w) => (
                    <td key={w.id} className="p-3 text-center">
                      {w.waterResistance}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Case Size</td>
                  {selected.map((w) => (
                    <td key={w.id} className="p-3 text-center">
                      {w.caseSize}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Strap Material</td>
                  {selected.map((w) => (
                    <td key={w.id} className="p-3 text-center">
                      {w.strap}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Features</td>
                  {selected.map((w) => (
                    <td key={w.id} className="p-3 text-center">
                      {w.features.join(", ")}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WatchesSpecsComparison;
