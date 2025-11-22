"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const CamerasNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4 my-[-30px]">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-400">
          Stay Updated with the Latest Cameras
        </h2>
        <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
          Get exclusive deals, new product launches, and photography tips delivered to your inbox.
        </p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-gray-800 p-4 rounded-2xl shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition duration-300"
          >
            Subscribe <FaPaperPlane />
          </button>
        </motion.form>

        {/* Status Message */}
        {status && (
          <motion.p
            className={`mt-4 ${
              status.includes("Thank") ? "text-green-400" : "text-red-400"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default CamerasNewsletterSignup;
