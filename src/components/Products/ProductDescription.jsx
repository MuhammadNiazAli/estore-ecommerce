import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineCheckCircle } from "react-icons/ai";

const ProductDescription = ({
  product = {
    title: "AeroGlide Pro Wireless Earbuds",
    description: [
      "Engineered for superior audio clarity and ultra-low latency, AeroGlide Pro offers a truly wireless experience with crisp highs and deep bass.",
      "Compact ergonomic design ensures comfortable fit for extended wear, perfect for workouts, travel, or daily commutes.",
      "Advanced touch controls and voice assistant integration make managing your music and calls effortless.",
      "IPX7 waterproof rating protects against sweat and rain, so you stay powered no matter the conditions.",
    ],
    features: [
      "True Wireless Stereo (TWS)",
      "Low Latency Mode (60ms)",
      "IPX7 Waterproof",
      "Touch Gesture Controls",
      "Wireless Charging Case",
      "Built-in Voice Assistant",
    ],
    specifications: [
      { label: "Battery Life", value: "8 hours (earbuds), 24 hours (case)" },
      { label: "Bluetooth", value: "5.1" },
      { label: "Charging Time", value: "1.5 hours" },
      { label: "Weight", value: "50g (with case)" },
      { label: "Drivers", value: "10mm dynamic" },
    ],
    rating: 4.9,
    reviewsCount: 189,
  },
}) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <AiFillStar
          key={`star-full-${i}`}
          className="text-black w-5 h-5"
          aria-hidden="true"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="star-half" className="relative w-5 h-5 inline-block">
          <AiFillStar
            className="text-black absolute top-0 left-0 w-5 h-5 overflow-hidden"
            style={{ clipPath: "inset(0 50% 0 0)" }}
            aria-hidden="true"
          />
          <AiOutlineStar className="text-black w-5 h-5" aria-hidden="true" />
        </span>
      );
    }

    const emptyStarsCount = 5 - stars.length;
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <AiOutlineStar
          key={`star-empty-${i}`}
          className="text-black w-5 h-5"
          aria-hidden="true"
        />
      );
    }

    return stars;
  };

  return (
    <section className="max-w-4xl w-full mx-auto p-6 sm:p-10 bg-white rounded-xl shadow-lg select-none text-gray-800">
      {/* Title & Rating */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
          {product.title}
        </h1>

        <div
          className="flex items-center space-x-3"
          role="region"
          aria-label="Product rating"
        >
          <div className="flex" aria-hidden="true">
            {renderStars(product.rating)}
          </div>
          <span className="font-semibold text-sm tabular-nums">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-gray-600 select-none">·</span>
          <span className="text-gray-600 text-sm tabular-nums">
            {product.reviewsCount} Reviews
          </span>
        </div>
      </header>

      {/* Description */}
      <article className="mb-10 space-y-5 text-base leading-relaxed font-sans">
        {product.description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>

      {/* Features list */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-5">
          What Makes It Special
        </h2>
        <ul className="flex flex-wrap gap-3 sm:gap-4">
          {product.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center space-x-2 bg-white rounded-md px-4 py-2 shadow-sm cursor-default"
              title={feature}
              tabIndex={0}
              aria-label={`Feature: ${feature}`}
            >
              <AiOutlineCheckCircle className="text-black w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700 text-sm font-medium truncate max-w-xs">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Specifications */}
      <section>
        <h2 className="text-xl font-semibold mb-5">
          Technical Specifications
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-inner bg-white">
          <table className="w-full text-sm sm:text-base">
            <tbody>
              {product.specifications.map((spec, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : ""}>
                  <th
                    scope="row"
                    className="px-4 sm:px-6 py-3 font-semibold whitespace-nowrap text-left"
                  >
                    {spec.label}
                  </th>
                  <td className="px-4 sm:px-6 py-3 text-left">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button
          type="button"
          className="w-full sm:w-auto bg-black text-gray-900 font-bold py-3 px-8 rounded-md shadow-lg
            hover:bg-black focus:outline-none focus:ring-4 focus:ring-black transition-colors duration-300"
          aria-label="Add product to cart"
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="w-full sm:w-auto bg-white text-gray-700 font-semibold py-3 px-8 rounded-md shadow-md
            hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-black transition-colors duration-300"
          aria-label="Add product to wishlist"
        >
          Add to Wishlist
        </button>
      </div>
    </section>
  );
};

export default ProductDescription;
