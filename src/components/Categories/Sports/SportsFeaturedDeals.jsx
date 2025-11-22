"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCartPlus, FaStar } from "react-icons/fa";

// ✅ Featured Deals Data
const featuredDeals = [
  {
    id: 1,
    name: "Premium Baseball Bat",
    price: 149,
    oldPrice: 199,
    discount: "25% OFF",
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/2184203374/photo/photo-of-pretty-confident-lady-wear-jeans-waistcoat-holding-beat-looking-you-isolated-yellow.webp?a=1&b=1&s=612x612&w=0&k=20&c=Li-a6VoZz0dPNui6K3eeacL45lxtRWftuJ9ry_QbT_U=",
  },
  {
    id: 2,
    name: "Pro Basketball",
    price: 89,
    oldPrice: 120,
    discount: "20% OFF",
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/2121353141/photo/basketball-scoring-a-basket-as-it-goes-through-the-hoop.webp?a=1&b=1&s=612x612&w=0&k=20&c=uAMpM9WKbvINsKfaUvidnijTUVSbi1N2aZjVBYdRfS8=",
  },
  {
    id: 3,
    name: "Football Elite Boots",
    price: 130,
    oldPrice: 160,
    discount: "18% OFF",
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/929704368/photo/brand-new-soccer-shoes-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=g7SM8qm8C5_pwT3Y02x5XzsQdtRRFA3IMFsRmDXm6Zk=",
  },
];

const SportsFeaturedDeals = () => {
  return (
    <section className="bg-gray-900 text-yellow-400 py-14 my-[-50px]">
      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Featured Sports Deals
          </h2>
          <p className="text-gray-300 mt-3 text-lg">
            Grab the hottest discounts on premium sports gear
          </p>
        </div>

        {/* ✅ Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDeals.map((deal) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {deal.discount}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">{deal.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-400 font-extrabold text-2xl">
                    ${deal.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ${deal.oldPrice}
                  </span>
                </div>

                <div className="flex items-center gap-1 mt-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={i < Math.round(deal.rating) ? "" : "opacity-40"}
                    />
                  ))}
                  <span className="text-sm text-gray-300 ml-1">
                    {deal.rating}
                  </span>
                </div>

                <button className="mt-4 w-full bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-300 transition flex items-center justify-center gap-2">
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsFeaturedDeals;
