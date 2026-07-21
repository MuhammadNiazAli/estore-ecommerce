'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const customerPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1751256743518-5836ec5154e9?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0',
    name: 'Emily Carter',
    quote: 'Absolutely loved the quality!',
    product: 'Leather Backpack',
  },
  {
    src: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
    name: 'Jason Wright',
    quote: 'Great service and super fast delivery!',
    product: 'Noise-Canceling Headphones',
  },
  {
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    name: 'Sophia Nguyen',
    quote: 'This watch is even better in person!',
    product: 'Smartwatch Series 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    name: 'Daniel Kim',
    quote: 'Speaker quality is crystal clear.',
    product: 'Bluetooth Speaker',
  },
  {
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    name: 'Olivia Brown',
    quote: 'Can’t go anywhere without these shades!',
    product: 'Stylish Sunglasses',
  },
  {
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    name: 'Liam Davis',
    quote: 'Perfect fit and amazing material.',
    product: 'Fitness Tracker',
  },
];

const containerAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const photoAnim = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const ReviewPhotosGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = useCallback((index) => setActiveIndex(index), []);
  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrevPhoto = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? customerPhotos.length - 1 : current - 1));
  }, []);

  const showNextPhoto = useCallback(() => {
    setActiveIndex((current) => (current === customerPhotos.length - 1 ? 0 : current + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeIndex !== null) closeModal();
      if (e.key === 'ArrowLeft' && activeIndex !== null) showPrevPhoto();
      if (e.key === 'ArrowRight' && activeIndex !== null) showNextPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, closeModal, showPrevPhoto, showNextPhoto]);

  return (
    <section className="w-full bg-white py-16 px-6 my-[-20px]">
      <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10 text-center tracking-wide">
        See What Our Happy Customers Are Sharing
      </h3>
      <p className="max-w-xl mx-auto text-center text-gray-700 mb-14 text-sm sm:text-base">
        Browse through authentic photos shared by our customers. Click on any image to view it in fullscreen and explore more.
      </p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto"
        variants={containerAnim}
        initial="hidden"
        animate="visible"
      >
        {customerPhotos.map((item, idx) => (
          <motion.div
            key={item.src}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            variants={photoAnim}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(idx)}
          >
            <Image
              src={item.src}
              alt={`Customer ${item.name} shared this photo`}
              width={400}
              height={300}
              className="object-cover w-full h-48 sm:h-56 transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="/placeholder.png"
              loading="lazy"
              draggable={false}
            />

            {/* Hover Text Overlay */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 px-4 py-10 bg-white/80 bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
              initial={false}
              animate={{ opacity: 1 }}
            >
              <p className="text-black font-semibold text-sm sm:text-base mb-1 italic">
                “{item.quote}”
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-black" />
                <span className="text-black text-sm">{item.name}</span>
                <span className="text-gray-700 text-xs">({item.product})</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal View */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key="photo-modal"
            className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded"
              aria-label="Close fullscreen photo view"
            >
              <X size={28} />
            </button>

            <button
              onClick={showPrevPhoto}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded"
              aria-label="Previous photo"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              key={activeIndex}
              className="max-w-[90vw] max-h-[80vh] rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Image
                src={customerPhotos[activeIndex].src}
                alt={`Fullscreen photo shared by ${customerPhotos[activeIndex].name}`}
                width={900}
                height={600}
                className="object-contain rounded-lg select-none"
                priority
                draggable={false}
              />
            </motion.div>

            <button
              onClick={showNextPhoto}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded"
              aria-label="Next photo"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewPhotosGallery;
