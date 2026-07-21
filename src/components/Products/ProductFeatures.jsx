import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Ultra-fast Charging Technology",
    description:
      "Charge your device up to 80% in just 30 minutes with our state-of-the-art charging tech.",
    premium: true,
  },
  {
    title: "Seamless Bluetooth 5.2 Connectivity",
    description:
      "Enjoy faster, more stable connections with low energy consumption and extended range.",
  },
  {
    title: "Advanced Noise Cancellation",
    description:
      "Block out ambient noise and immerse yourself in crystal-clear sound with adaptive ANC.",
    premium: true,
  },
  {
    title: "Ergonomic & Lightweight Design",
    description:
      "Designed for comfort during long usage with a sleek, lightweight frame.",
  },
  {
    title: "IP68 Waterproof & Dustproof",
    description: "Certified for water and dust resistance — perfect for active lifestyles.",
  },
  {
    title: "Intuitive Touch Controls",
    description:
      "Easily control music, calls, and voice assistants with simple tap and swipe gestures.",
  },
  {
    title: "Multi-Device Pairing",
    description:
      "Connect and switch effortlessly between up to 3 devices without re-pairing.",
  },
  {
    title: "24-Hour Battery Life",
    description:
      "Long-lasting battery ensures your music keeps going all day without interruption.",
  },
  {
    title: "User-Friendly Companion App",
    description:
      "Control settings, customize features, and get support through a dedicated app.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.04,
    boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const FeatureCard = ({ feature, onOpen }) => {
  return (
    <motion.div
      className="flex flex-col bg-white rounded-xl p-5 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-400 transition-shadow"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      tabIndex={0}
      role="button"
      aria-label={`Feature details: ${feature.title}`}
      onClick={() => onOpen(feature)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(feature);
      }}
    >
      <div className="flex items-center space-x-3 mb-2">
        <AiOutlineCheckCircle className="text-green-500 w-7 h-7 flex-shrink-0" />
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          {feature.title}
          {feature.premium && (
            <span className="ml-2 px-2 py-0.5 text-xs font-bold text-gray-900 bg-green-600 rounded-full select-none">
              Premium
            </span>
          )}
        </h3>
      </div>
      <p className="text-gray-700 line-clamp-3">{feature.description}</p>
      <motion.button
        aria-label={`More info about ${feature.title}`}
        className="mt-3 inline-flex items-center text-green-400 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
        onClick={(e) => {
          e.stopPropagation();
          onOpen(feature);
        }}
      >
        <AiOutlineInfoCircle className="w-5 h-5 mr-1" />
        More Info
      </motion.button>
    </motion.div>
  );
};

const ProductFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const closeModal = () => setSelectedFeature(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white  rounded-2xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-gray-900 sm:text-gray-900 mb-8 text-center">
        Premium Features
      </h2>
      <p className="max-w-3xl mx-auto mb-12 text-center text-gray-700 sm:text-gray-600 text-lg">
        Discover the cutting-edge features designed to enhance your experience with this product.
        Click or tap on any feature to learn more.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} onOpen={setSelectedFeature} />
        ))}
      </motion.div>

      {/* Modal for feature details */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
            aria-labelledby="feature-title"
            aria-describedby="feature-desc"
          >
            <motion.div
              className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-700 focus:outline-none"
                onClick={closeModal}
                aria-label="Close feature details"
              >
                <AiOutlineClose className="w-6 h-6" />
              </button>
              <h3
                id="feature-title"
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                {selectedFeature.title}
              </h3>
              <p id="feature-desc" className="text-gray-700 leading-relaxed">
                {selectedFeature.description}
              </p>
              {selectedFeature.premium && (
                <span className="inline-block mt-6 px-3 py-1 text-sm font-semibold text-gray-900 bg-green-600 rounded-full select-none">
                  Premium Feature
                </span>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductFeatures;
