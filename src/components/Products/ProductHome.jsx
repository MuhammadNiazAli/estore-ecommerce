// ProductHome.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { MdLocalShipping, MdCompareArrows } from "react-icons/md";

// Image Sets & Individual Prices
const imageMap = {
  red: [
    "https://images.unsplash.com/photo-1711188054462-7a154520861e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1711188054031-8c72c6f03a36?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1711188054312-daa8489bf228?q=80&w=800&auto=format&fit=crop",
  ],
  blue: [
    "https://images.unsplash.com/photo-1711188054031-8c72c6f03a36?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1711188054462-7a154520861e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1711188054312-daa8489bf228?q=80&w=800&auto=format&fit=crop",
  ],
  green: [
    "https://images.unsplash.com/photo-1711188054312-daa8489bf228?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1711188054031-8c72c6f03a36?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1711188054462-7a154520861e?q=80&w=800&auto=format&fit=crop",
  ],
};

const imagePrices = {
  "https://images.unsplash.com/photo-1711188054462-7a154520861e?q=80&w=800&auto=format&fit=crop": 129.99,
  "https://images.unsplash.com/photo-1711188054031-8c72c6f03a36?q=80&w=800&auto=format&fit=crop": 139.99,
  "https://images.unsplash.com/photo-1711188054312-daa8489bf228?q=80&w=800&auto=format&fit=crop": 149.99,
};

const colors = [
  { id: "red", colorCode: "#B91C1C" },
  { id: "blue", colorCode: "#1E40AF" },
  { id: "green", colorCode: "#047857" },
];

const sizes = ["S", "M", "L", "XL"];

const ProductHome = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });

  const images = imageMap[selectedColor] || [];
  const imgRef = useRef(null);

  const increment = () => setQuantity((q) => Math.min(q + 1, 99));
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  const currentImage = images[mainImageIndex];
  const basePrice = imagePrices[currentImage] || 129.99;
  const totalPrice = (basePrice * quantity).toFixed(2);
  const discountPercent = 28;
  const originalPrice = (basePrice / (1 - discountPercent / 100)).toFixed(2);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();
    let x = e.pageX - left - window.pageXOffset;
    let y = e.pageY - top - window.pageYOffset;
    x = Math.max(0, Math.min(x, width));
    y = Math.max(0, Math.min(y, height));
    setMagnifierPosition({ x, y });
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white bg-gray-900 my-[-50px]">
      {/* LEFT SIDE */}
      <div>
        <div
          className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-50 flex items-center justify-center"
          style={{ maxWidth: 500, height: 500 }}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            ref={imgRef}
            src={currentImage}
            alt="Main"
            className="max-w-full max-h-full object-contain select-none"
            draggable={false}
          />
          {showMagnifier && imgRef.current && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden md:block"
             style={{
  position: "absolute",
  pointerEvents: "none",
  top: magnifierPosition.y - 75,
  left: magnifierPosition.x - 75,
  width: 150,
  height: 150,
  borderRadius: "50%",
  backgroundColor: "#fff",
  backgroundImage: `url(${currentImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: `${imgRef.current.width * 2.5}px ${imgRef.current.height * 2.5}px`,
  backgroundPosition: `${-magnifierPosition.x * 2.5 + 75}px ${-magnifierPosition.y * 2.5 + 75}px`,
  border: "0.5px solid rgba(0, 0, 0, 0.1)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  willChange: "top, left, backgroundPosition",
  transition: "none",
  zIndex: 999,
}}

            />
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 justify-center mt-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setMainImageIndex(i)}
              className={`w-20 h-20 border-2 rounded-lg overflow-hidden cursor-pointer ${
                mainImageIndex === i ? "border-yellow-500" : "border-gray-700 hover:border-yellow-600"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Premium Winter Jacket</h1>
          <div className="flex items-center gap-2 text-yellow-400 mb-4">
            <AiFillStar />
            <span className="font-semibold">4.6</span>
            <span className="text-sm text-gray-400">(241 reviews)</span>
          </div>

          <div className="mb-4">
            <span className="text-2xl font-bold text-yellow-400">${totalPrice}</span>
            <span className="text-sm line-through text-gray-500 ml-3">${originalPrice}</span>
            <span className="ml-2 text-green-400 text-sm">{discountPercent}% OFF</span>
          </div>

          <p className="text-gray-300 mb-6">
            Durable and stylish winter jacket perfect for extreme cold, snow, and outdoor adventures. Breathable, windproof, and waterproof.
          </p>

          <ul className="list-disc pl-5 mb-6 text-sm text-gray-400 space-y-1">
            <li>Wind & Waterproof Fabric</li>
            <li>Multiple Pockets</li>
            <li>Adjustable Hoodie</li>
            <li>Thermal Lining</li>
          </ul>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Color:</h3>
            <div className="flex gap-3">
              {colors.map(({ id, colorCode }) => (
                <button
                  key={id}
                  style={{ backgroundColor: colorCode }}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === id ? "border-yellow-400 scale-110" : "border-gray-500 hover:scale-105"
                  } transition-transform`}
                  onClick={() => {
                    setSelectedColor(id);
                    setMainImageIndex(0);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Size:</h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-1 border-2 rounded-md font-medium ${
                    selectedSize === size
                      ? "bg-yellow-500 text-black border-yellow-400"
                      : "border-gray-600 text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="mb-2 font-semibold">Quantity:</h3>
            <div className="flex items-center border border-gray-700 rounded-md overflow-hidden w-max bg-gray-800">
              <button className="px-3 text-xl" onClick={decrement}>−</button>
              <input
                value={quantity}
                onChange={(e) => {
                  let val = Math.max(1, Math.min(99, parseInt(e.target.value) || 1));
                  setQuantity(val);
                }}
                type="number"
                className="w-12 text-center bg-transparent outline-none"
              />
              <button className="px-3 text-xl" onClick={increment}>+</button>
            </div>
          </div>
        </div>

        {/* Add to Cart + Wishlist */}
        <div className="space-y-4">
          <Link href="/cart">
            <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-300 transition cursor-pointer">
              Add to Cart
            </button>
          </Link>

          <div className="flex flex-wrap items-center gap-4 justify-center text-sm text-gray-400 my-6">
            <Link href="/compare">
              <button className="flex items-center gap-1 hover:text-white cursor-pointer">
                <MdCompareArrows className="text-lg" /> Compare
              </button>
            </Link>

            <Link href="/wishlist">
              <button className="flex items-center gap-1 hover:text-white cursor-pointer">
                <AiOutlineHeart className="text-lg" /> Wishlist
              </button>
            </Link>

            <Link href="/shipping">
              <div className="flex items-center gap-1 text-green-500 hover:underline cursor-pointer">
                <MdLocalShipping className="text-lg" />
                <span>Free Delivery</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHome;
