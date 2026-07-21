'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const bundles = [
  {
    id: 1,
    title: 'Office Essentials Kit',
    products: ['Laptop', 'Wireless Mouse', 'Laptop Bag'],
    price: 749,
    oldPrice: 1050,
    image:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Content Creator Pack',
    products: ['Ring Light', 'Tripod', 'Wireless Mic'],
    price: 199,
    oldPrice: 289,
    image:
      'https://images.unsplash.com/photo-1561503616-64b54b7da444?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Work From Home Set',
    products: ['Desk', 'Chair', 'Monitor Arm'],
    price: 489,
    oldPrice: 679,
    image:
      'https://images.unsplash.com/photo-1564272153-2771b7aab168?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const BundleDeals = () => {
  return (
    <section className="w-full px-4 py-16 bg-white text-gray-900 flex justify-center my-[-20px]">
      <div className="w-full max-w-[1000px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Bundle & Save</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Grab curated product bundles at special prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle, index) => {
            const discount = Math.round(
              ((bundle.oldPrice - bundle.price) / bundle.oldPrice) * 100
            );

            return (
              <motion.article
                key={bundle.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 focus-within:shadow-xl outline-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                tabIndex={-1}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={bundle.image}
                    alt={`${bundle.title} bundle image`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold">{bundle.title}</h3>
                  <p className="text-sm text-gray-600">
                    {bundle.products.join(', ')}
                  </p>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-black">
                        ${bundle.price}
                      </span>
                      <span className="text-sm line-through text-gray-600 ml-2">
                        ${bundle.oldPrice}
                      </span>
                    </div>
                    <span className="bg-black text-black text-xs font-semibold px-2 py-1 rounded-full select-none">
                      Save {discount}%
                    </span>
                  </div>

                  <Link
                    href={`/bundles/${bundle.id}`}
                    aria-label={`Buy ${bundle.title} bundle`}
                    className="inline-flex mt-3 items-center gap-2 text-sm font-semibold text-black hover:text-black transition focus:outline-none focus:ring-2 focus:ring-black rounded"
                  >
                    Buy Bundle <FiArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BundleDeals;
