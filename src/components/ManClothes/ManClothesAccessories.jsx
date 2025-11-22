import React from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";

const accessories = [
  {
    id: 1,
    title: "Classic Leather Belt",
    price: 49,
    oldPrice: 69,
    img: "https://images.unsplash.com/photo-1664285612706-b32633c95820?q=80&w=1258&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Handcrafted leather belt for a sharp look."
  },
  {
    id: 2,
    title: "Stylish Sunglasses",
    price: 89,
    oldPrice: 129,
    img: "https://plus.unsplash.com/premium_photo-1692809752539-fc7e9c347b14?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium UV protection and modern design."
  },
  {
    id: 3,
    title: "Luxury Wrist Watch",
    price: 199,
    oldPrice: 279,
    img: "https://images.unsplash.com/photo-1589262042626-781fb9acccd3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant stainless steel design."
  },
  {
    id: 4,
    title: "Leather Wallet",
    price: 59,
    oldPrice: 79,
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Slim, minimal, and high-quality leather."
  }
];

const ManClothesAccessories = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 uppercase tracking-wide">
          Men's Accessories
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Premium accessories to upgrade your style.
        </p>
        <div className="mt-4 w-28 h-1 bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      {/* Grid (2 per row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="p-2 bg-yellow-400 text-gray-900 rounded-full shadow hover:bg-yellow-300 transition">
                  <Heart size={18} />
                </button>
                <button className="p-2 bg-yellow-400 text-gray-900 rounded-full shadow hover:bg-yellow-300 transition">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between p-6 md:w-1/2">
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price & Button */}
              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-yellow-400">
                    ${item.price}
                  </span>
                  <span className="text-sm line-through text-gray-500">
                    ${item.oldPrice}
                  </span>
                </div>
                <button className="w-full mt-5 flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all shadow-lg hover:scale-105">
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManClothesAccessories;
