import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const allProducts = [
  {
    id: 1,
    title: "Luxury Noise-Cancelling Headphones",
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sleek Smartwatch Pro",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1515415883846-e3431de1c20d?q=80&w=774&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ergonomic Wireless Keyboard",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1639294715006-f55176f88eec?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Precision Gaming Mouse",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1619531814949-68c3d8b4e15d?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Ultra HD 4K Monitor",
    price: 329.99,
    originalPrice: 399.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1615800000433-bca7f58e8d3f?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Studio Condenser Microphone",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1587574293340-98f9d4565c12?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Bluetooth Home Speaker",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1601979031925-3ccde2c9676d?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Portable Action Camera",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555617982-4b4a29f5ee0c?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Compact Drone with 4K",
    price: 449.99,
    originalPrice: 549.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Stylish Wireless Earbuds",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224f278?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Modern Desktop Lamp",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Compact Travel Power Bank",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1600180758890-6b94519f4195?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Smart Home Security Camera",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1580894894513-82c6c902b33f?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 14,
    title: "Curved UltraWide Monitor",
    price: 449.99,
    originalPrice: 549.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1603791452906-1901c9b6b63c?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 15,
    title: "RGB Mechanical Keyboard",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1617299797391-5cb1ecac810f?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 16,
    title: "Ergonomic Office Chair",
    price: 229.99,
    originalPrice: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1581090700227-1e8d1b1f00f8?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 17,
    title: "Smart LED Light Strip",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1593642533144-3d62b2e8ddee?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 18,
    title: "Portable Bluetooth Projector",
    price: 289.99,
    originalPrice: 349.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1609932079766-9e1f24ec2831?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 19,
    title: "Wireless Charging Dock",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1612178991990-e3b61e1df0df?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 20,
    title: "Stylish Laptop Backpack",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1589987601259-0d0a1ceec2d4?q=80&w=870&auto=format&fit=crop",
  },
  // You can continue similarly till 50+ (let me know if you want full 50 now or lazy-load logic also)
];


const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <AiFillStar key={"star-full-" + i} className="text-amber-600 w-5 h-5" />
    );
  }

  if (halfStar) {
    stars.push(
      <AiFillStar
        key="star-half"
        className="text-amber-600 w-5 h-5"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      />
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <AiOutlineStar key={"star-empty-" + i} className="text-amber-600 w-5 h-5" />
    );
  }

  return stars;
};

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Product List
      </h2>

      <ul className="divide-y divide-gray-200">
        {allProducts.slice(0, visibleCount).map(({ id, title, price, originalPrice, rating, image }) => (
          <li
            key={id}
            className="flex items-center space-x-6 py-4 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
          >
            <img
              src={image}
              alt={title}
              className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
              loading="lazy"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex">{renderStars(rating)}</div>
                <span className="text-amber-600 font-semibold">{rating.toFixed(1)}</span>
              </div>
              <div className="mt-1 flex items-baseline space-x-2">
                <span className="text-xl font-extrabold text-gray-900">
                  ${price.toFixed(2)}
                </span>
                {originalPrice && originalPrice > price && (
                  <span className="text-gray-500 line-through text-sm">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {visibleCount < allProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-amber-600 text-gray-900 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductList;
