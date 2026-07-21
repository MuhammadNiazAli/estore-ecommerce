import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineCheckCircle,
} from "react-icons/ai";

const products = [
  {
    id: 1,
    title: "Wireless Over-Ear Headphones",
    subtitle: "Immersive Sound & Comfort",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639294715006-f55176f88eec?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592914567648-d818927b1c0b?q=80&w=774&auto=format&fit=crop",
    ],
    description: [
      "High fidelity sound with deep bass and clear treble.",
      "Soft memory foam ear pads for all-day comfort.",
      "Bluetooth 5.0 with up to 24 hours playtime.",
    ],
    features: [
      "Bluetooth 5.0",
      "Active Noise Cancellation",
      "24h Battery Life",
      "Built-in Microphone",
    ],
    specifications: [
      { label: "Weight", value: "260g" },
      { label: "Battery Life", value: "24 hours" },
      { label: "Bluetooth Version", value: "5.0" },
      { label: "Charging Time", value: "2 hours" },
    ],
    price: 199.99,
    discountPrice: 149.99,
    rating: 4.6,
    reviewsCount: 320,
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    subtitle: "Track Your Health in Style",
    images: [
      "https://images.unsplash.com/photo-1515415883846-e3431de1c20d?q=80&w=774&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870&auto=format&fit=crop",
    ],
    description: [
      "Monitor heart rate, sleep, and steps accurately.",
      "Water-resistant design for everyday use.",
      "Customizable watch faces and notifications.",
    ],
    features: [
      "Heart Rate Monitor",
      "Sleep Tracking",
      "Water Resistant (5ATM)",
      "Notifications & Alerts",
    ],
    specifications: [
      { label: "Weight", value: "55g" },
      { label: "Battery Life", value: "36 hours" },
      { label: "Water Resistance", value: "5 ATM" },
    ],
    price: 179.99,
    discountPrice: 139.99,
    rating: 4.4,
    reviewsCount: 215,
  },
  {
    id: 3,
    title: "Compact Wireless Keyboard",
    subtitle: "Efficiency Meets Portability",
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=774&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611842834129-f1f92390f9e7?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=870&auto=format&fit=crop",
    ],
    description: [
      "Slim, lightweight design for on-the-go productivity.",
      "Reliable Bluetooth connection with low latency.",
      "Compatible with multiple devices and OS.",
    ],
    features: [
      "Bluetooth Wireless",
      "Slim Profile",
      "Long Battery Life",
      "Multi-Device Compatibility",
    ],
    specifications: [
      { label: "Weight", value: "350g" },
      { label: "Battery Life", value: "4 months" },
      { label: "Connectivity", value: "Bluetooth 4.2" },
    ],
    price: 79.99,
    discountPrice: 59.99,
    rating: 4.7,
    reviewsCount: 410,
  },
];

// Single product detail component with dark mode style & clean UX
const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <AiFillStar key={"star-full-" + i} className="text-black w-4 h-4" />
      );
    }
    if (halfStar) {
      stars.push(
        <AiFillStar
          key="star-half"
          className="text-black w-4 h-4"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />
      );
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <AiOutlineStar key={"star-empty-" + i} className="text-black w-4 h-4" />
      );
    }
    return stars;
  };

  return (
    <section className="max-w-4xl mx-auto p-5 sm:p-8 bg-white rounded-xl shadow-lg mb-10 text-gray-800">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Images */}
        <div className="md:w-1/2">
          <div className="w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              loading="lazy"
              draggable={false}
            />
          </div>
          <div className="flex mt-3 space-x-3 overflow-x-auto no-scrollbar">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                aria-label={`View image ${idx + 1}`}
                className={`flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border-2 ${
                  img === selectedImage
                    ? "border-black"
                    : "border-transparent hover:border-black"
                } transition-colors duration-300 focus:outline-black`}
              >
                <img
                  src={img}
                  alt={`${product.title} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight">
              {product.title}
            </h1>
            {product.subtitle && (
              <p className="text-black font-semibold mb-4">{product.subtitle}</p>
            )}

            <div className="flex items-center space-x-1 mb-4">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-xs font-semibold select-none">
                {product.rating.toFixed(1)} / 5.0
              </span>
              <span className="text-gray-600 select-none">•</span>
              <span className="text-xs text-gray-600 select-none">
                {product.reviewsCount} reviews
              </span>
            </div>

            <div className="mb-4 space-y-2 leading-relaxed text-sm text-gray-700">
              {product.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-center space-x-1">
                    <AiOutlineCheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Specifications</h2>
              <div className="overflow-x-auto rounded-md border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                  <tbody className="divide-y divide-gray-200">
                    {product.specifications.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-white"}>
                        <td className="px-4 py-2 font-medium whitespace-nowrap">{spec.label}</td>
                        <td className="px-4 py-2">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              {product.discountPrice ? (
                <div className="flex items-baseline space-x-2">
                  <span className="text-black font-extrabold text-2xl tracking-tight">
                    ${product.discountPrice.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-gray-800 font-extrabold text-2xl tracking-tight">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="/cart"
                className="inline-block bg-black hover:bg-black text-black font-semibold px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 shadow-sm hover:shadow-md text-sm"
                aria-label={`Add ${product.title} to cart`}
              >
                Add to Cart
              </a>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="p-2 rounded-md hover:bg-gray-500 transition-colors duration-300 cursor-pointer shadow-sm hover:shadow-md"
                onClick={() => alert(`Added ${product.title} to wishlist!`)}
              >
                <AiOutlineHeart className="text-gray-600 hover:text-black w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main showcase with show more / less logic
const ProductsShowcase = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <main className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {showAll
          ? products.map((product) => (
              <ProductDetail key={product.id} product={product} />
            ))
          : products.slice(0, 1).map((product) => (
              <ProductDetail key={product.id} product={product} />
            ))}

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-block bg-black hover:bg-black text-black font-semibold px-5 py-2 rounded-md cursor-pointer transition-colors duration-300 shadow-sm hover:shadow-md text-sm sm:text-base"
            aria-expanded={showAll}
            aria-controls="products-list"
          >
            {showAll ? "Show Less" : `Show More (${products.length - 1} more)`}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductsShowcase;
