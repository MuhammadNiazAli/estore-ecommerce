import React from "react";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Luxury Leather Jacket",
    image:
      "https://media.istockphoto.com/id/484543793/photo/leather-jacket.webp?a=1&b=1&s=612x612&w=0&k=20&c=ILWk0zQpzWI9Q8nekDq40r0tdX7EKWqT7UWmlchYdFQ=",
    price: 120,
    oldPrice: 180,
    rating: 4.5,
    discount: "Clearance",
  },
  {
    id: 2,
    title: "Smart Watch Series 6",
    image:
      "https://images.unsplash.com/photo-1648474394307-161b89b4d1d6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 220,
    oldPrice: 299,
    rating: 4.7,
    discount: "Limited",
  },
  {
    id: 3,
    title: "Wireless Noise-Canceling Headphones",
    image:
      "https://media.istockphoto.com/id/1363897157/photo/wireless-in-ear-headphones-insulated-with-black-leather-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ou7ICSeCP1iO7DJG7Pdg1Bl2gHlxCTC7LyCZcIAd-S4=",
    price: 150,
    oldPrice: 199,
    rating: 4.6,
    discount: "Clearance",
  },
  {
    id: 4,
    title: "Designer Sneakers",
    image:
      "https://media.istockphoto.com/id/1237681114/photo/sport-shoe-design-details-on-sketch-book.webp?a=1&b=1&s=612x612&w=0&k=20&c=eqycjlj_QiLtk0a9M6dvXRD8VOUSD4Rex89gUPhkl3c=",
    price: 90,
    oldPrice: 150,
    rating: 4.3,
    discount: "Sale",
  },
];

const ClearanceProductsGrid = () => {
  return (
    <section className="bg-gray-900 py-10 flex justify-center">
      <div className="max-w-[1000px] w-full px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400">
            Clearance Sale
          </h2>
          <p className="text-gray-300 mt-2">
            Grab your favorites at the best prices before they’re gone!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl overflow-hidden  transition-shadow duration-300 relative"
            >
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-yellow-500 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {product.discount}
              </span>

              {/* Product Image */}
              <div className="overflow-hidden group relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <button className="bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-400 transition">
                    <ShoppingCart size={18} />
                  </button>
                  <button className="bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-400 transition">
                    <Heart size={18} />
                  </button>
                  <button className="bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-400 transition">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg truncate">
                  {product.title}
                </h3>
                {/* Rating */}
                <div className="flex items-center text-yellow-400 text-sm mt-2">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  <span className="text-gray-400 ml-2">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                {/* Price */}
                <div className="mt-2">
                  <span className="text-yellow-400 font-bold text-lg">
                    ${product.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClearanceProductsGrid;
