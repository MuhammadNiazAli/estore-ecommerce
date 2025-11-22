'use client';

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const productCards = [
  {
    id: 1,
    title: 'Linen Blend Top',
    price: '$74.00',
    imgSrc: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-4.webp',
    alt: 'Linen blend top preview',
    position: 'top-left',
    tiltConfig: { maxX: 10, maxY: 10 },
  },
  {
    id: 2,
    title: 'Relaxed Cargo Pants',
    price: '$59.50',
    imgSrc: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-3.webp',
    alt: 'Relaxed cargo pants preview',
    position: 'bottom-right',
    tiltConfig: { maxX: 10, maxY: 10 },
  },
];

const DiscountBadge = () => (
  <Tilt scale={1.02} tiltMaxAngleX={7} tiltMaxAngleY={7}>
   <div className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white text-[10px] sm:text-sm font-bold flex flex-col items-center justify-center shadow-xl border-[3px] border-white/20 tracking-wide uppercase select-none text-center leading-tight my-2 sm:my-3">
  <span className="text-[11px] sm:text-sm leading-none">Save</span>
  <span className="text-lg sm:text-xl font-extrabold -mt-0.5">25%</span>
</div>

  </Tilt>
);

const ProductCard = ({ title, price, imgSrc, alt }) => (
  <Tilt scale={1.02} tiltMaxAngleX={10} tiltMaxAngleY={10}>
<div className="w-44 sm:w-48 p-2.5 sm:p-3.5 bg-white rounded-xl shadow-md border border-yellow-400/60 hover:shadow-xl transition-shadow duration-300 flex items-center gap-3">
  <Image
    src={imgSrc}
    alt={alt}
    width={46} // reduced from 52
    height={46}
    className="rounded-lg object-cover shadow-sm"
    priority={false}
  />
  <div className="flex flex-col justify-center">
    <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">{title}</p>
    <p className="text-[11px] sm:text-xs font-medium text-yellow-600 mt-0.5">{price}</p>
  </div>
</div>


  </Tilt>
);

const HomeHero = () => {
  return (
    <section className="w-full lg:h-[750px] px-4 py-12 my-[-100px] bg-gradient-to-b from-gray-900 text-white">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-16 items-center">
        {/* Text Block */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight tracking-tight">
            Style That Moves With You <br />
            <span className="text-yellow-400 underline decoration-yellow-300 decoration-4 font-extrabold">
            Everyday Looks, Effortlessly Done
          </span>

            <br className="hidden sm:block" /> Ready to Wear
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-md sm:max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Find pieces that actually fit your routine — simple, comfortable, and made to stand out.
            No drama. Just clothes that make sense and feel great doing it.
          </p>

          
<div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5">
  <Link href="/shop" aria-label="Browse fresh arrivals">
    <button
      className="px-6 sm:px-7 py-2.5 sm:py-3 bg-yellow-400 text-black rounded-full font-semibold shadow-md hover:bg-yellow-300 hover:shadow-lg transition duration-300 ease-in-out text-sm sm:text-base cursor-pointer"
    >
      Shop Now
    </button>
  </Link>

  <Link href="/collections" aria-label="Check new collections">
    <button
      className="px-6 sm:px-7 py-2.5 sm:py-3 border border-white rounded-full font-semibold shadow-md hover:bg-white hover:text-black hover:shadow-lg transition duration-300 ease-in-out text-sm sm:text-base cursor-pointer"
    >
      See Collections
    </button>
  </Link>
</div>
        </div>

        {/* Visual Block */}
        <div className="relative w-full h-[440px] sm:h-[500px] flex items-center justify-center">
          {/* Main Hero Image */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden border border-yellow-500/70 shadow-xl hover:shadow-2xl transition-shadow duration-500 group"
>
  {/* Image */}
  <Image
    src="https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-f-9.webp"
    alt="Model wearing casual streetwear"
    layout="fill"
    objectFit="cover"
    className="rounded-2xl transition-transform duration-500"
    priority
  />
</motion.div>


          {/* Top Left Product Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute top-2 left-1 sm:top-4 sm:left-2"
          >
            <ProductCard {...productCards[0]} />
          </motion.div>

          {/* Top Right Discount Badge */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute top-2 right-1 sm:top-4 sm:right-8 mt-2"
          >
            <DiscountBadge />
          </motion.div>

          {/* Bottom Right Product Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute bottom-2 right-1 sm:bottom-4 sm:right-2"
          >
            <ProductCard {...productCards[1]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
