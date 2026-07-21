'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTruck, FiCreditCard, FiTag, FiHeadphones } from 'react-icons/fi';

const serviceItems = [
  {
    id: 'free-shipping',
    title: 'Free Shipping',
    description:
      'We deliver your orders to your doorstep without any shipping charges, no matter the size or price.',
    Icon: FiTruck,
    aria: 'Truck icon representing free shipping',
  },
  {
    id: 'money-back',
    title: 'Easy Refunds',
    description:
      'If you are not completely satisfied, return your purchase within 30 days for a full refund, no hassle.',
    Icon: FiCreditCard,
    aria: 'Credit card icon representing money-back guarantee',
  },
  {
    id: 'discount-offers',
    title: 'VIP Savings',
    description:
      'Benefit from special discounts and deals available regularly on selected products.',
    Icon: FiTag,
    aria: 'Tag icon representing exclusive discounts',
  },
  {
    id: 'support-24-7',
    title: 'Support 24/7',
    description:
      'Our customer care team is available any time of the day to help you with any questions or issues.',
    Icon: FiHeadphones,
    aria: 'Headphones icon representing 24/7 customer support',
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.045,
    transition: {
      duration: 0.12,
      ease: 'easeInOut',
    },
  },
};

const FeatureCard = ({ item, index }) => {
  const { id, title, description, Icon, aria } = item;
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={index}
      variants={cardMotion}
      whileHover="hover"
      whileFocus="hover"
      tabIndex={0}
      role="region"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="flex flex-col sm:flex-row items-start gap-6 bg-white border border-black/50 rounded-3xl p-7 sm:p-9 shadow-xl cursor-pointer transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-black/80"
    >
      <div
        className="flex-shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/25 text-black shadow-md animate-pulse"
        aria-hidden="true"
        aria-label={aria}
      >
        <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      <div className="mt-4 sm:mt-0">
        <h3
          id={`${id}-title`}
          className="text-black font-bold text-xl sm:text-2xl mb-2 tracking-wide"
        >
          {title}
        </h3>
        <p
          id={`${id}-desc`}
          className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-prose"
        >
          {description}
        </p>
      </div>
    </motion.article>
  );
};

const HomeKnowicon = () => {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="bg-gradient-to-b from-white text-gray-900 py-10 sm:py-14 px-6 sm:px-16"
    >
      <div className="max-w-[1200px] mx-auto">
      <h2
  id="why-us-heading"
  className="text-center text-[25px] xs:text-[24px] sm:text-[32px] md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-10 my-15 sm:my-10 tracking-tight leading-snug sm:leading-tight lg:my-[-50px] lg:mb-[50px]"
>
  Why Choose Us?
</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-14">
          {serviceItems.map((item, idx) => (
            <FeatureCard key={item.id} item={item} index={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeKnowicon;
