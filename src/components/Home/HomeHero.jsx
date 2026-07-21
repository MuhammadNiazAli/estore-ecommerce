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
  },
  {
    id: 2,
    title: 'Relaxed Cargo Pants',
    price: '$59.50',
    imgSrc: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-3.webp',
    alt: 'Relaxed cargo pants preview',
  },
];

function DiscountBadge() {
  return (
    <Tilt scale={1.02} tiltMaxAngleX={7} tiltMaxAngleY={7}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-black to-gray-900 text-gray-900 text-[10px] sm:text-sm font-bold flex flex-col items-center justify-center shadow-xl border-[3px] border-gray-200/20 tracking-wide uppercase select-none text-center leading-tight">
        <span className="text-[11px] sm:text-sm leading-none">Save</span>
        <span className="text-lg sm:text-xl font-extrabold -mt-0.5">25%</span>
      </div>
    </Tilt>
  );
}

function ProductCard({ title, price, imgSrc, alt }) {
  return (
    <Tilt scale={1.02} tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div className="w-44 sm:w-48 p-2.5 sm:p-3 bg-white/95 rounded-xl shadow-md border border-black/40 hover:shadow-xl transition-shadow duration-300 flex items-center gap-3 backdrop-blur">
        <div className="relative w-[46px] h-[46px] shrink-0">
          <Image
            src={imgSrc}
            alt={alt}
            fill
            sizes="46px"
            className="rounded-lg object-cover shadow-sm"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
            {title}
          </p>
          <p className="text-[11px] sm:text-xs font-medium text-black mt-0.5">
            {price}
          </p>
        </div>
      </div>
    </Tilt>
  );
}

export default function HomeHero() {
  return (
    <section className="w-full bg-white text-gray-900 px-4 py-14 sm:py-16 lg:py-20">
      {/* 1240px desktop container */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        {/* Text */}
        <div className="space-y-6 sm:space-y-7 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight tracking-tight">
            Style That Moves With You
            <br />
            <span className="text-black underline decoration-black decoration-4 font-extrabold">
              Everyday Looks, Made Easy
            </span>
            <br className="hidden sm:block" />
            Wear Today
          </h1>

          <p className="text-sm sm:text-base text-gray-700 max-w-md sm:max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Find pieces that fit your routine — simple, comfortable, and made to stand out.
            No drama. Just clothes that feel good all day.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <Link
              href="/shop"
              aria-label="Browse fresh arrivals"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 bg-black text-black rounded-full font-semibold shadow-md hover:bg-black hover:shadow-lg transition duration-300 ease-in-out text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70"
            >
              Shop Now
            </Link>

            <Link
              href="/collections"
              aria-label="Check new collections"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 border border-gray-200/80 rounded-full font-semibold shadow-md hover:bg-gray-500 hover:text-black hover:shadow-lg transition duration-300 ease-in-out text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200/70"
            >
              See Collections
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative w-full h-[440px] sm:h-[520px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-64 sm:w-72 h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-black/35 shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <Image
              src="https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-f-9.webp"
              alt="Model wearing casual streetwear"
              fill
              sizes="(max-width: 640px) 256px, 288px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute top-2 left-1 sm:top-4 sm:left-2"
          >
            <ProductCard {...productCards[0]} />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute top-2 right-1 sm:top-4 sm:right-8"
          >
            <DiscountBadge />
          </motion.div>

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
}
