import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ultra HD Smart TV",
    image:
      "https://media.istockphoto.com/id/611294276/photo/uhd-4k-smart-tv-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2eqTM2U7NqFAW2oxmCWPPMssIpvjZP9Edg3Ku7Ixn5o=",
    price: 399,
    oldPrice: 599,
    stock: 10,
    sold: 7,
  },
  {
    id: 2,
    name: "Gaming Laptop Pro",
    image:
      "https://media.istockphoto.com/id/2102173791/photo/handsome-african-american-excited-man-wearing-eyeglasses-holding-computer-using-laptop-win.webp?a=1&b=1&s=612x612&w=0&k=20&c=geKteAKZS6WYX7ACiOIMTWLspuTb4KlXHcil_rdoV1g=",
    price: 1099,
    oldPrice: 1499,
    stock: 20,
    sold: 15,
  },
  {
    id: 3,
    name: "Premium Leather Bag",
    image:
      "https://media.istockphoto.com/id/173550778/photo/my-purse.webp?a=1&b=1&s=612x612&w=0&k=20&c=HBpYlkmDsjYpgUcVLaXJA7GKj1c4F97FwmOeVmw7muk=",
    price: 89,
    oldPrice: 150,
    stock: 15,
    sold: 12,
  },
];

const ClearanceLimitedStock = () => {
  return (
    <section className="bg-white text-amber-600 py-10 my-[-10px]">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          Limited Stock Deals 
        </h2>
        <p className="text-gray-700 text-center mb-10">
          Hurry! These items are almost sold out. Grab yours before it’s too late!
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const percentage = (product.sold / product.stock) * 100;
            return (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden  transition"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-500 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    Limited Stock
                  </span>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {product.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-amber-600 font-bold text-lg">
                      ${product.price}
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      ${product.oldPrice}
                    </span>
                  </div>

                  {/* Stock Progress */}
                  <div className="mt-4">
                    <div className="flex justify-between text-gray-700 text-xs mb-1">
                      <span>{product.sold} Sold</span>
                      <span>{product.stock - product.sold} Left</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-amber-700 h-2"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <button className="w-full mt-5 bg-amber-700 text-gray-900 py-2 rounded-lg font-semibold hover:bg-amber-600 transition flex items-center justify-center gap-2">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClearanceLimitedStock;
