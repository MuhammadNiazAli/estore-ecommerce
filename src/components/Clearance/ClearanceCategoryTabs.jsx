"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, Star } from "lucide-react";

// ✅ SAMPLE DATA
const allProducts = [
  // Clothing (10)
  {
    id: 1,
    category: "Clothing",
    title: "Classic White T-Shirt",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 19.99,
    oldPrice: 29.99,
    rating: 4.5,
  },
  {
    id: 2,
    category: "Clothing",
    title: "Blue Denim Jeans",
    image:
      "https://images.unsplash.com/photo-1604272804518-4496d93d3652?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.7,
  },
  {
    id: 3,
    category: "Clothing",
    title: "Black Leather Jacket",
    image:
      "https://images.unsplash.com/photo-1727524366429-27de8607d5f6?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.8,
  },
  {
    id: 4,
    category: "Clothing",
    title: "Summer Shorts",
    image:
      "https://images.unsplash.com/photo-1719473466836-ff9f5ebe0e1b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 25.0,
    oldPrice: null,
    rating: 4.3,
  },
  {
    id: 5,
    category: "Clothing",
    title: "Formal Shirt",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 35.5,
    oldPrice: 49.99,
    rating: 4.6,
  },
  {
    id: 6,
    category: "Clothing",
    title: "Casual Hoodie",
    image:
      "https://images.unsplash.com/photo-1685328403732-64be6bb9d112?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.2,
  },
  {
    id: 7,
    category: "Clothing",
    title: "Wool Sweater",
    image:
      "https://images.unsplash.com/photo-1711097258176-c1a4bb511aa7?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.7,
  },
  {
    id: 8,
    category: "Clothing",
    title: "Sports Jacket",
    image:
      "https://images.unsplash.com/photo-1740710370552-a49b5b01f80a?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120.0,
    oldPrice: 150.0,
    rating: 4.9,
  },
  {
    id: 9,
    category: "Clothing",
    title: "Linen Pants",
    image:
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45.0,
    oldPrice: null,
    rating: 4.4,
  },
  {
    id: 10,
    category: "Clothing",
    title: "Cotton Tank Top",
    image:
      "https://media.istockphoto.com/id/2221519926/photo/3d-mens-t-shirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=J5IlfrXL3a3dY5JGGpYRM9oYzUIm98999lQ-UHF25zs=",
    price: 15.0,
    oldPrice: 20.0,
    rating: 4.0,
  },

  // Accessories (10)
  {
    id: 11,
    category: "Accessories",
    title: "Stylish Sunglasses",
    image:
      "https://images.unsplash.com/photo-1623998021769-83ec049dad36?q=80&w=1237&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 75.0,
    oldPrice: 99.99,
    rating: 4.6,
  },
  {
    id: 12,
    category: "Accessories",
    title: "Leather Wallet",
    image:
      "https://images.unsplash.com/photo-1582126486298-9d5194a50d82?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45.99,
    oldPrice: 59.99,
    rating: 4.7,
  },
  {
    id: 13,
    category: "Accessories",
    title: "Classic Watch",
    image:
      "https://images.unsplash.com/photo-1720516494265-ce32a91ada94?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 150.0,
    oldPrice: 199.99,
    rating: 4.8,
  },
  {
    id: 14,
    category: "Accessories",
    title: "Designer Belt",
    image:
      "https://images.unsplash.com/photo-1752386209421-8cd3eda50868?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40.0,
    oldPrice: 55.0,
    rating: 4.3,
  },
  {
    id: 15,
    category: "Accessories",
    title: "Silver Necklace",
    image:
      "https://images.unsplash.com/photo-1601544737793-0d21af535968?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 89.99,
    oldPrice: 129.99,
    rating: 4.7,
  },
  {
    id: 16,
    category: "Accessories",
    title: "Beanie Hat",
    image:
      "https://images.unsplash.com/photo-1630691650107-53dd500d2907?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 20.0,
    oldPrice: 25.0,
    rating: 4.2,
  },
  {
    id: 17,
    category: "Accessories",
    title: "Leather Gloves",
    image:
      "https://media.istockphoto.com/id/2154156155/photo/old-worn-leather-work-gloves-workgloves.webp?a=1&b=1&s=612x612&w=0&k=20&c=_EQms5B16qOtPvtGQCj9i7QZCgRU39TarAACFCeetHg=",
    price: 35.0,
    oldPrice: 45.0,
    rating: 4.4,
  },
  {
    id: 18,
    category: "Accessories",
    title: "Fashion Scarf",
    image:
      "https://media.istockphoto.com/id/1333955586/photo/beautiful-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=i54nJrChX851uTpxGhXtNvQYH9-Benqay6ZQURi2y04=",
    price: 25.0,
    oldPrice: 30.0,
    rating: 4.5,
  },
  {
    id: 19,
    category: "Accessories",
    title: "Smartphone Case",
    image:
      "https://media.istockphoto.com/id/1310474222/photo/pile-of-multicolored-plastic-back-covers-for-mobile-phone-choice-of-smart-phone-protector.webp?a=1&b=1&s=612x612&w=0&k=20&c=zGzejwkY0gg59ijmYc3u5PO7_t-na_h5DFgUdxTl22U=",
    price: 15.0,
    oldPrice: null,
    rating: 4.1,
  },
  {
    id: 20,
    category: "Accessories",
    title: "Wireless Earbuds",
    image:
      "https://media.istockphoto.com/id/1370718733/photo/grey-headphones-wireless-earphones-with-case-isolated-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EmgUi6bTy4s05nRn8DKgcL2POR3MLxyWbYd_V7HD_w4=",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.6,
  },

  // Electronics (10)
  {
    id: 21,
    category: "Electronics",
    title: "Bluetooth Speaker",
    image:
      "https://media.istockphoto.com/id/1299435511/photo/bluetooth-earbuds-or-earphones-with-box-package-isolated-on-white-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=nmBS_Q0aL-MGcLRAfi06IrFdIQrJz4HfXcEhYa3sRiM=",
    price: 99.99,
    oldPrice: 129.99,
    rating: 4.7,
  },
  {
    id: 22,
    category: "Electronics",
    title: "Smart Watch",
    image:
      "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?q=80&w=1209&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.8,
  },
  {
    id: 23,
    category: "Electronics",
    title: "Wireless Mouse",
    image:
      "https://media.istockphoto.com/id/185277608/photo/hand-with-computer-mouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=nNIjp0dA-YhZeHQYp9s3dDzibcxaphlmHqiGoOlJ-ZM=",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.4,
  },
  {
    id: 24,
    category: "Electronics",
    title: "Mechanical Keyboard",
    image:
      "https://images.unsplash.com/photo-1558050032-160f36233a07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 89.99,
    oldPrice: 110.0,
    rating: 4.6,
  },
  {
    id: 25,
    category: "Electronics",
    title: "4K Monitor",
    image:
      "https://images.unsplash.com/photo-1711540846697-56b9f66d17f1?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 399.99,
    oldPrice: 499.99,
    rating: 4.9,
  },
  {
    id: 26,
    category: "Electronics",
    title: "Noise Cancelling Headphones",
    image:
      "https://images.unsplash.com/photo-1656457468703-2aaebb8477b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.8,
  },
  {
    id: 27,
    category: "Electronics",
    title: "Portable Charger",
    image:
      "https://media.istockphoto.com/id/1159572124/photo/silver-power-bank.webp?a=1&b=1&s=612x612&w=0&k=20&c=_X7BSMCQ1QI_jCbAn63VGSgVI8w7vFR7GWK2Dhjvyjk=",
    price: 25.99,
    oldPrice: 35.0,
    rating: 4.5,
  },
  {
    id: 28,
    category: "Electronics",
    title: "Smartphone Gimbal",
    image:
      "https://media.istockphoto.com/id/1188030194/photo/man-doing-live-video-with-phone-with-stabilizer-in-ny.webp?a=1&b=1&s=612x612&w=0&k=20&c=L92hinXmmwo8teJZBhTOXQkA-ZGM6s1W-L_sztvMO00=",
    price: 99.99,
    oldPrice: 129.99,
    rating: 4.7,
  },
  {
    id: 29,
    category: "Electronics",
    title: "Action Camera",
    image:
      "https://media.istockphoto.com/id/1310250081/photo/new-4k-action-camera-on-a-suction-mount-in-black-color-isolated-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=PTgvYP__U0PIlJ5pXQZJ99tfm3mZSAieHZyLgZtVPjc=",
    price: 249.99,
    oldPrice: 299.99,
    rating: 4.6,
  },
  {
    id: 30,
    category: "Electronics",
    title: "VR Headset",
    image:
      "https://media.istockphoto.com/id/1913776322/photo/virtual-reality-headset-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=K-vLJMC8Wd0qchxZe7U--XXsrH6oXOWVgqkdTxK7-R0=",
    price: 399.99,
    oldPrice: 499.99,
    rating: 4.8,
  },
];

const tabs = ["All", "Clothing", "Accessories", "Electronics"];

function StarRating({ rating }) {
  return (
    <div className="flex items-center text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={`${
            i < Math.floor(rating) ? "fill-yellow-400" : "stroke-yellow-400"
          }`}
        />
      ))}
    </div>
  );
}

export default function ClearanceCategoryTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = useMemo(() => {
    if (activeTab === "All") return allProducts;
    return allProducts.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const handleShowMore = () => setVisibleCount((prev) => prev + 12);

  return (
    <section className="max-w-[1000px] mx-auto px-3 sm:px-4 py-6 my-10">
      {/* Tabs */}
      <nav className="flex justify-center gap-4 sm:gap-6 border-b border-gray-700 relative mb-6">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(12);
              }}
              className={`relative text-xs sm:text-base font-semibold pb-2 transition-colors ${
                isActive ? "text-yellow-400" : "text-gray-300 hover:text-yellow-300"
              }`}
            >
              {tab}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-yellow-400 rounded"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredProducts.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md group relative"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover Actions */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white p-2 rounded-full hover:bg-yellow-400">
                    <Heart className="w-4 h-4 text-gray-800" />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-yellow-400">
                    <Eye className="w-4 h-4 text-gray-800" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-yellow-300 text-sm sm:text-base font-semibold truncate">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-xs sm:text-sm my-1">
                  <StarRating rating={item.rating} />
                  <span className="text-gray-400 ml-1">{item.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold text-sm sm:text-base">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.oldPrice && (
                    <span className="text-gray-500 line-through text-xs sm:text-sm">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <button className="w-full mt-3 bg-yellow-400 text-gray-900 text-xs sm:text-sm font-semibold rounded py-2 hover:bg-yellow-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Show More Button */}
      {activeTab === "All" && visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 text-sm font-semibold bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}
