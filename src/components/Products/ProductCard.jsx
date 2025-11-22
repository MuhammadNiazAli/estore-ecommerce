import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({
  product = {
    id: 1,
    title: "Luxury Noise-Cancelling Headphones",
    description:
      "Experience crystal-clear sound with active noise cancellation technology. Ergonomically designed for all-day comfort with soft ear cushions and adjustable headband. Enjoy up to 30 hours of battery life and quick charge support.",
    image:
      "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 349.99,
    discountPrice: 279.99,
    rating: 4.7,
    reviewsCount: 258,
    productLink: "/products/1",
    features: [
      "Active noise cancellation",
      "Ergonomic ear cushions",
      "30 hours battery life",
      "Bluetooth 5.2 connectivity",
      "Quick charge (10 min = 5 hours)",
    ],
  },
}) => {
  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar key={"star-full-" + i} className="text-yellow-400" />);
    }
    if (halfStar) {
      stars.push(
        <AiFillStar
          key="star-half"
          className="text-yellow-400"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />
      );
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<AiOutlineStar key={"star-empty-" + i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="max-w-[1100px] mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row transition-shadow duration-400 mb-[-90px]">
      {/* Product Image */}
      <a
        href={product.productLink}
        className="block flex-shrink-0 md:w-1/3 w-full h-72 md:h-auto overflow-hidden"
        aria-label={`View details of ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </a>

      {/* Product Details */}
      <div className="p-6 flex flex-col justify-between md:w-2/3">
        <div>
          {/* Title */}
          <a href={product.productLink} className="block mb-3">
            <h2 className="text-3xl font-extrabold text-white hover:text-yellow-500 transition-colors duration-300">
              {product.title}
            </h2>
          </a>

          {/* Rating & Reviews */}
          <div className="flex items-center mb-4 space-x-2">
            <div className="flex space-x-0.5">{renderStars(product.rating)}</div>
            <span className="text-gray-300 text-base">
              {product.rating.toFixed(1)} / 5.0
            </span>
            <span className="text-gray-500 text-base">•</span>
            <span className="text-gray-300 text-base">
              {product.reviewsCount} reviews
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-5">
            {product.description}
          </p>

          {/* Features list */}
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-base mb-6">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            {product.discountPrice ? (
              <div className="flex items-baseline space-x-3">
                <span className="text-yellow-500 font-extrabold text-4xl">
                  ${product.discountPrice.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through text-xl">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-white font-extrabold text-4xl">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-6">
            {/* Add to Cart Button */}
            <a
              href="/cart"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg cursor-pointer transition-colors duration-300 shadow-md hover:shadow-lg"
              aria-label={`Add ${product.title} to cart`}
            >
              Add to Cart
            </a>

            {/* Wishlist Button */}
            <button
              type="button"
              aria-label="Add to wishlist"
              className="p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer shadow-md hover:shadow-lg"
              onClick={() => alert("Added to wishlist!")}
            >
              <AiOutlineHeart className="text-gray-400 hover:text-red-500 w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
