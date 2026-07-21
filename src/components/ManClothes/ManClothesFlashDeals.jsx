import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Urban Explorer Jacket",
    price: 299,
    oldPrice: 379,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1645711761637-0f9c073fadea?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Luxury Wool Overcoat",
    price: 499,
    oldPrice: 599,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1722858958066-97deb3471c89?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Premium Slim Suit",
    price: 649,
    oldPrice: 799,
    rating: 5,
    img: "https://images.unsplash.com/photo-1628454787246-cd6e6accc352?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Modern Trench Coat",
    price: 399,
    oldPrice: 489,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1648111145022-1af83031ade6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Casual Denim Jacket",
    price: 149,
    oldPrice: 199,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1634340454019-43e7119900c3?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Classic Black Blazer",
    price: 259,
    oldPrice: 329,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1727519366940-fd9b926e362e?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ManClothesFlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState(1296000); // 15 days in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d}d : ${h.toString().padStart(2, "0")}h : ${m
      .toString()
      .padStart(2, "0")}m : ${s.toString().padStart(2, "0")}s`;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-white my-[-20px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
           Flash Deals
        </h2>
        <div className="bg-amber-600 text-black px-4 py-2 rounded-lg text-sm font-semibold">
          Ends in: {formatTime(timeLeft)}
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden relative group shadow-lg"
          >
            {/* Image Wrapper for Zoom Effect */}
            <div className="relative overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-red-500 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                {Math.round(
                  ((product.oldPrice - product.price) / product.oldPrice) * 100
                )}
                % OFF
              </span>
              {/* Hover Actions */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex justify-center items-center gap-4 transition duration-500 ease-in-out">
                <button className="bg-amber-700 text-black p-3 rounded-full hover:bg-amber-600 transition shadow-lg">
                  <ShoppingCart size={18} />
                </button>
                <button className="bg-white text-gray-700 p-3 rounded-full hover:bg-gray-200 transition shadow-lg">
                  <Heart size={18} />
                </button>
                <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-500 transition shadow-lg">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="text-xl font-bold text-amber-700">
                  ${product.price}
                </span>
                <span className="line-through text-gray-600 text-sm">
                  ${product.oldPrice}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">⭐ {product.rating}</p>
              <button className="bg-amber-700 text-black px-6 py-2 rounded-lg font-medium hover:bg-amber-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ManClothesFlashDeals;
