"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus, FaSearch, FaCheckCircle } from "react-icons/fa";

const dealsData = [
  {
    id: 1,
    name: "Non-Stick Cookware Set",
    image:
      "https://media.istockphoto.com/id/1315141585/photo/frying-pan-with-non-stick-ceramic-coating-and-spatula-on-a-white-wooden-background-cooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=UzlVuyAl_MyzD8o6g3LzSU2WbEvIRwNaMGov4W6qykY=",
    price: 120,
    oldPrice: 180,
    discount: 33,
    endsIn: 3600,
  },
  {
    id: 2,
    name: "Premium Chef Knife",
    image:
      "https://images.unsplash.com/photo-1432835305417-6919779246b4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45,
    oldPrice: 70,
    discount: 35,
    endsIn: 5400,
  },
  {
    id: 3,
    name: "Electric Blender Pro",
    image:
      "https://media.istockphoto.com/id/2107379909/photo/young-adult-asian-man-prepare-and-make-protein-shake-drink-mixed-fruit-cereal-juice-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Pvno-T1fof9CKCtG5ntqg460TqS_7VTUgAOLjrcJiM=",
    price: 89,
    oldPrice: 120,
    discount: 25,
    endsIn: 4200,
  },
];

const KitchenFeaturedDeals = () => {
  const [deals, setDeals] = useState(dealsData);
  const [loading, setLoading] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeals((prev) =>
        prev.map((deal) =>
          deal.endsIn > 0 ? { ...deal, endsIn: deal.endsIn - 1 } : deal
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleAddToCart = (dealId) => {
    setLoading(true);
    setTimeout(() => {
      alert(`Item ${dealId} added to cart!`);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="bg-white text-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured Kitchen Deals
        </h2>
        {loading && (
          <p className="text-center text-black mb-4 animate-pulse">
            Adding to cart...
          </p>
        )}

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((deal) => (
            <motion.div
              key={deal.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-black relative"
              whileHover={{ scale: 1.02 }}
            >
              <span className="absolute top-3 left-3 bg-black text-gray-900 text-[11px] font-semibold px-2 py-[2px] rounded-full">
                {deal.discount}% OFF
              </span>

              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-3 text-center">
                <h3 className="text-[15px] font-semibold mb-1">
                  {deal.name}
                </h3>
                <p className="text-black text-[14px] font-bold">
                  ${deal.price}{" "}
                  <span className="line-through text-gray-500 text-[12px]">
                    ${deal.oldPrice}
                  </span>
                </p>
                <p className="text-gray-600 text-[12px] mt-1">
                  Ends in: {formatTime(deal.endsIn)}
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-2 mt-3">
                  <button
                    onClick={() => handleAddToCart(deal.id)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-black text-gray-900 text-sm font-semibold rounded hover:bg-black transition"
                  >
                    <FaCartPlus size={13} /> Cart
                  </button>
                  <button
                    onClick={() => setSelectedDeal(deal)}
                    className="flex items-center gap-1 px-3 py-1.5 border border-black text-black text-sm rounded hover:bg-black hover:text-gray-900 transition"
                  >
                    <FaSearch size={13} /> View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedDeal && (
          <motion.div
            className="fixed inset-0 bg-white/70 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black w-full max-w-md p-5 rounded-lg shadow-lg border border-black relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setSelectedDeal(null)}
                className="absolute top-3 right-3 text-black text-xl"
              >
                ✕
              </button>
              <img
                src={selectedDeal.image}
                alt={selectedDeal.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold">{selectedDeal.name}</h3>
              <p className="mt-1 text-black text-[15px] font-bold">
                ${selectedDeal.price}{" "}
                <span className="line-through text-gray-500 text-sm">
                  ${selectedDeal.oldPrice}
                </span>
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                Limited-time deal! Hurry before it ends.
              </p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => {
                    handleAddToCart(selectedDeal.id);
                    setSelectedDeal(null);
                  }}
                  className="px-4 py-2 bg-black text-gray-900 text-sm font-semibold rounded hover:bg-black transition flex items-center gap-2"
                >
                  <FaCheckCircle size={14} /> Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default KitchenFeaturedDeals;
