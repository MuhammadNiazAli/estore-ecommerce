"use client";

import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";

const accessoriesData = [
{
    id: 1,
    name: "Lego Classic Creative Bricks",
    brand: "LEGO",
    price: 49.99,
    material: "Plastic",
    features: ["Creative Building", "Educational"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1585249085702-e5ac880bc693?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Hot Wheels Track Builder",
    brand: "Hot Wheels",
    price: 29.99,
    material: "Plastic",
    features: ["Racing Track", "Customizable"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/2208466008/photo/childrens-plastic-toys-for-boys.webp?a=1&b=1&s=612x612&w=0&k=20&c=9-ylPsfJhkCLq_n3j2ZWcYRsQCZimFWMIj9HUGF2Jtw=",
  },
  {
    id: 3,
    name: "Barbie Dreamhouse Dollhouse",
    brand: "Barbie",
    price: 199.99,
    material: "Plastic",
    features: ["Lights & Sounds", "3 Floors"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/490818930/photo/pretty-stylish-pregnant-woman-in-a-store-for-children.webp?a=1&b=1&s=612x612&w=0&k=20&c=KIrvLj_GmfOfvMz5azLRj1tCHgDpCvJbAq4QzIs3VVE=",
  },
  {
    id: 4,
    name: "NERF Elite Disruptor Blaster",
    brand: "NERF",
    price: 24.99,
    material: "Plastic",
    features: ["Quick-Draw", "6-Dart Drum"],
    rating: 4,
    stock: true,
    image: "https://media.istockphoto.com/id/1425781568/photo/toy-blaster-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=JeLoPG47iA-1uap2U7iqeBzhYNBL8rUYiH_jPJm1oeg=",
  },
  {
    id: 5,
    name: "Play-Doh 36-Pack",
    brand: "Play-Doh",
    price: 19.99,
    material: "Modeling Compound",
    features: ["Creative Play", "36 Colors"],
    rating: 5,
    stock: true,
    image: "https://media.istockphoto.com/id/880807988/photo/colorful-clay-for-kids-playing.webp?a=1&b=1&s=612x612&w=0&k=20&c=v1jmc3yxkmS6DSW9_Z6pxSPnlIPpiYHS1gHQ8MOmrME=",
  },
  {
    id: 6,
    name: "Fisher-Price Laugh & Learn Puppy",
    brand: "Fisher-Price",
    price: 24.99,
    material: "Plush & Plastic",
    features: ["Interactive", "Educational Songs"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1580229845513-7f52331610e4?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ToysAccessoriesSection = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!cartItems.find((cartItem) => cartItem.id === item.id)) {
      setCartItems([...cartItems, item]);
      alert(`Added "${item.name}" to cart!`);
    } else {
      alert(`"${item.name}" is already in the cart.`);
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-amber-600" />
        ) : (
          <FaRegStar key={i} className="text-gray-600" />
        )
      );
    }
    return stars;
  };

  return (
    <section className="bg-white text-gray-900 py-12 px-6 rounded-lg max-w-[1200px] mx-auto my-12">
      <h2 className="text-3xl font-bold mb-8 text-amber-600 text-center">
        Toy Accessories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {accessoriesData.map((accessory) => (
          <div
            key={accessory.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={accessory.image}
              alt={accessory.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{accessory.name}</h3>
              <div className="flex items-center mb-3">{renderRatingStars(accessory.rating)}</div>
              <p className="text-amber-600 text-xl font-bold mb-4">${accessory.price.toFixed(2)}</p>

              <button
                onClick={() => addToCart(accessory)}
                className="mt-auto bg-amber-700 hover:bg-amber-600 text-black rounded-full px-5 py-2 font-semibold flex items-center justify-center gap-2 transition"
                aria-label={`Add ${accessory.name} to cart`}
              >
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToysAccessoriesSection;
