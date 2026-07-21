"use client";

import React, { useEffect, useState } from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";

const featuredDeals = [
  {
    id: 1,
    name: "Canon EOS R5",
    price: 3899,
    oldPrice: 4200,
    rating: 5,
    discount: 8,
    image:
      "https://images.unsplash.com/photo-1585704273201-354f62ad1eea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Sony A7 IV",
    price: 2499,
    oldPrice: 2700,
    rating: 5,
    discount: 7,
    image:
      "https://images.unsplash.com/photo-1574092405003-c87529498ace?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Nikon Z6 II",
    price: 1999,
    oldPrice: 2200,
    rating: 4,
    discount: 9,
    image:
      "https://images.unsplash.com/photo-1514252297407-fb27fa872b19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Fujifilm X-T5",
    price: 1699,
    oldPrice: 1899,
    rating: 4,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1745208866974-7401d9faeb89?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExN3x8fGVufDB8fHx8fA%3D%3D",
  },
];

const CamerasFeaturedDeals = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // ✅ Countdown Logic (24-hour deal)
  useEffect(() => {
    const endTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = endTime - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-gray-900 py-16 my-[-40px]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-4 md:mb-0">
             Featured Camera Deals
          </h2>
          <div className="flex gap-2 text-lg font-semibold bg-white px-4 py-2 rounded-lg">
            <span> Deal ends in:</span>
            <span className="text-amber-600">
              {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition relative group"
            >
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-amber-600 text-black font-bold text-xs px-3 py-1 rounded-full">
                -{deal.discount}%
              </span>

              {/* Image */}
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{deal.name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < deal.rating ? "text-amber-600" : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-extrabold text-amber-600">
                    ${deal.price}
                  </span>
                  <span className="line-through text-gray-600 text-sm">
                    ${deal.oldPrice}
                  </span>
                </div>

                {/* CTA */}
                <button className="bg-amber-600 text-black w-full py-2 rounded-full font-semibold hover:bg-amber-500 transition flex items-center justify-center gap-2">
                  Grab Deal <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CamerasFeaturedDeals;
