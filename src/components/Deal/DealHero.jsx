'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiShield, FiTruck, FiRepeat, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const featureList = [
  {
    icon: <FiShield size={18} className="sm:size-[20px]" />,
    title: 'Secure Checkout',
    desc: 'Encrypted payments for total peace of mind.',
  },
  {
    icon: <FiTruck size={18} className="sm:size-[20px]" />,
    title: 'Fast Delivery',
    desc: 'Speedy shipping you can rely on.',
  },
  {
    icon: <FiRepeat size={18} className="sm:size-[20px]" />,
    title: 'Free Returns',
    desc: 'Changed your mind? We got you.',
  },
  {
    icon: <FiStar size={18} className="sm:size-[20px]" />,
    title: 'Top-rated Picks',
    desc: 'Loved by thousands of happy buyers.',
  },
];

const DealHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-in-up', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.25,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-900 text-white overflow-hidden py-16 px-4 sm:px-6 md:px-10 xl:px-0 flex justify-center my-[-100px] mb-[-50px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGBYqgFX9ERwcCdntyBSz9jyuNFvRy2rGDn_f-hEk2NVbnl1Kl9atyIrwpZcCnYwyvBc&usqp=CAU"
          alt="Promo Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Text Block */}
        <div className="text-center lg:text-left space-y-6 fade-in-up">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Discover Your{' '}
            <span className="text-yellow-400 underline decoration-4 decoration-yellow-300">
              Best Deals
            </span>{' '}
            Today
          </motion.h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Get access to exclusive discounts, flash offers, and special bundles curated just for smart shoppers. Don’t wait — great deals go fast.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 fade-in-up">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold flex items-center hover:bg-yellow-300 transition duration-300 shadow-md hover:shadow-lg">
              Start Shopping <FiArrowRight className="ml-2" size={18} />
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 shadow-md hover:shadow-lg">
              View All Offers
            </button>
          </div>
        </div>

        {/* Image + Feature List */}
        <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-400">
          <Image
            src="https://www.realgorillaseeds.com/wp-content/uploads/2023/11/discount.gif"
            alt="Flash Sale Animation"
            fill
            className="object-cover rounded-3xl"
            priority
          />

          {/* Feature Cards */}
          <div className="absolute left-4 right-4 bottom-3 sm:bottom-5 md:bottom-6 grid grid-cols-2 gap-3 p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl w-[90%] mx-auto max-w-sm">
            {featureList.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2 text-[10px] sm:text-sm text-black hover:bg-white/40 p-2 rounded-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-yellow-400">{feature.icon}</div>
                <div>
                  <p className="font-semibold leading-snug">{feature.title}</p>
                  <p className="text-gray-500 text-[9px] sm:text-xs leading-snug">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealHero;
