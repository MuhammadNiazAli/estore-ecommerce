import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react"; // Icons
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Urban Explorer Jacket",
    brand: "EliteWear",
    price: 299,
    oldPrice: 379,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1616042256017-5ae731cf47b1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Luxury Wool Overcoat",
    brand: "RoyalStyle",
    price: 499,
    oldPrice: 599,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Premium Slim Suit",
    brand: "Gentlemen's Club",
    price: 649,
    oldPrice: 799,
    rating: 5,
    img: "https://images.unsplash.com/photo-1580568287125-ae9bad4f0eef?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Modern Trench Coat",
    brand: "StyleHub",
    price: 399,
    oldPrice: 489,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Casual Denim Jacket",
    brand: "UrbanVibe",
    price: 149,
    oldPrice: 199,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1727441685303-e145d687075f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Classic Black Blazer",
    brand: "GentleFit",
    price: 259,
    oldPrice: 329,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1585412459212-8def26f7e84c?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Streetwear Hoodie",
    brand: "HypeMode",
    price: 129,
    oldPrice: 169,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1604367159763-fd334d982068?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Elegant Tuxedo",
    brand: "RoyalGent",
    price: 799,
    oldPrice: 899,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1676278746103-c5a62b7faab9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Bomber Jacket",
    brand: "TrendEdge",
    price: 199,
    oldPrice: 259,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1662624080599-dd453fbe6cd0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ManClothesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Featured Men's Collection
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden group relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image Wrapper with Hover Overlay */}
            <div className="relative overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Hover Overlay Actions */}
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                <button className="bg-black text-black p-3 rounded-full hover:bg-black transition">
                  <ShoppingCart size={20} />
                </button>
                <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition">
                  <Heart size={20} />
                </button>
                <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-500 transition">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <div className="flex items-center justify-center gap-2 my-2">
                <span className="text-xl font-bold text-black">
                  ${product.price}
                </span>
                <span className="line-through text-gray-600 text-sm">
                  ${product.oldPrice}
                </span>
              </div>
              <p className="text-sm text-gray-600">⭐ {product.rating}</p>
              <button className="mt-3 bg-black text-black px-5 py-2 rounded-lg font-medium hover:bg-black transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ManClothesGrid;
