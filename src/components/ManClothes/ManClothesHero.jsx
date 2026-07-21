import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Urban Coat Explorer ",
    description: "Premium leather jacket with urban-inspired details.",
    price: 249,
    oldPrice: 349,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1592343516109-362f7bd871aa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Luxury Wool Coat",
    description: "Timeless elegance crafted with premium wool.",
    price: 399,
    oldPrice: 499,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Classic Denim Shirt",
    description: "Effortlessly stylish with modern denim texture.",
    price: 129,
    oldPrice: 179,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(autoSlide);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 1.1,
      transition: { duration: 1 },
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white text-gray-900">
      {/* Background Image Layer */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={products[index].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <img
            src={products[index].img}
            alt={products[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-white/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay (ALWAYS ON TOP) */}
      <div className="absolute inset-0 z-50 flex flex-col justify-center items-start px-8 md:px-16 lg:px-32 gap-6 max-w-2xl">
        <motion.h2
          key={products[index].title}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-black text-sm uppercase tracking-[4px]"
        >
          Exclusive Drop
        </motion.h2>
        <motion.h1
          key={products[index].id + 'title'}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          {products[index].title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-700 text-lg md:text-xl"
        >
          {products[index].description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center gap-6 mt-4"
        >
          <span className="text-black text-3xl font-bold">
            ${products[index].price}
          </span>
          <span className="line-through text-gray-600">
            ${products[index].oldPrice}
          </span>
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#111827',
              color: '#000',
            }}
            className="bg-black text-black px-8 py-4 rounded-lg font-semibold"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#111',
              color: '#111827',
            }}
            className="border border-black text-black px-8 py-4 rounded-lg font-semibold"
          >
            View Details
          </motion.button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-black rounded-full p-4 z-50"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-black rounded-full p-4 z-50"
      >
        ▶
      </button>

      {/* Bottom Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-50">
        {products.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-8 rounded-full ${
              i === index ? 'bg-black' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
