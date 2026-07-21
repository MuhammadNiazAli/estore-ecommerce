import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";

const ManClothesBanner = () => {
  // ✅ Countdown Timer for 15 days in seconds (15 * 24 * 60 * 60)
  const [timeLeft, setTimeLeft] = useState(1296000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Format Time (Days:Hours:Minutes:Seconds)
  const formatTime = (seconds) => {
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d.toString().padStart(2, "0")}d : ${h
      .toString()
      .padStart(2, "0")}h : ${m.toString().padStart(2, "0")}m : ${s
      .toString()
      .padStart(2, "0")}s`;
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* ✅ Background Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1723867344540-664e13b9a863?q=80&w=1201&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Men's Fashion Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* ✅ Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 h-full flex flex-col justify-center"
      >
        {/* Discount Badge */}
        <div className="bg-black text-black font-semibold text-xs sm:text-sm px-3 py-1 rounded-full w-fit mb-4 shadow-md">
           Limited Time Deal
        </div>

        {/* ✅ Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 max-w-2xl leading-tight mb-4">
          Upgrade Your Wardrobe with{" "}
          <span className="text-black">Premium</span> Styles
        </h1>

        {/* ✅ Subheading */}
        <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl">
          Discover exclusive jackets, coats, and suits crafted for elegance and comfort.
        </p>

        {/* ✅ Countdown Timer */}
        <div className="flex items-center gap-2 text-gray-900 text-sm sm:text-base mb-6">
          <span className="bg-white px-3 py-1 rounded-lg font-semibold">
            ⏳ Deal Ends In: {formatTime(timeLeft)}
          </span>
        </div>

        {/* ✅ Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-black text-black px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-black transition text-sm sm:text-base">
            <ShoppingCart size={18} /> Shop Now
          </button>
          <button className="flex items-center gap-2 border border-black text-black px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-black hover:text-black transition text-sm sm:text-base">
            View Collection <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ManClothesBanner;
