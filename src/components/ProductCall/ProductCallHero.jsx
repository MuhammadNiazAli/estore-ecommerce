'use client';

import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import Image from 'next/image';

const allProducts = [
  {
    id: 1,
    title: 'Noise-Cancelling Headphones',
    description: 'Immersive sound experience with premium noise-cancellation.',
    image:
      'https://images.unsplash.com/photo-1634717037148-4dc76c09a328?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'UltraSharp Monitor',
    description: 'Crisp visuals and color accuracy for professionals.',
    image:
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Portable Bluetooth Speaker',
    description: 'Compact, powerful, and perfect for on-the-go.',
    image:
      'https://images.unsplash.com/photo-1643385958950-8f0b8852171a?q=80&w=854&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Gaming Laptop',
    description: 'High performance for the ultimate gaming experience.',
    image:
      'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Smartwatch Pro',
    description: 'Track your health and stay connected seamlessly.',
    image:
      'https://images.unsplash.com/photo-1655215920713-94440bf7213f?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'DSLR Camera Kit',
    description: 'Capture stunning photos with professional-grade tools.',
    image:
      'https://images.unsplash.com/photo-1666594113190-ae964471655e?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Wireless Ergonomic Mouse',
    description: 'Comfort and precision for long hours of use.',
    image:
      'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    title: 'Mechanical Keyboard',
    description: 'Tactile feedback with customizable RGB lighting.',
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    title: '4K Action Camera',
    description: 'Record your adventures in stunning ultra-high definition.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Smart Home Speaker',
    description: 'Voice-controlled assistant with premium sound.',
    image:
      'https://images.unsplash.com/photo-1586952518482-d19313ed5d98?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Wireless Charging Pad',
    description: 'Fast and convenient charging for your devices.',
    image:
      'https://images.unsplash.com/photo-1510557880182-3b2a7f7a4efb?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 12,
    title: 'VR Headset',
    description: 'Step into new worlds with immersive virtual reality.',
    image:
      'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 13,
    title: 'Smart Fitness Tracker',
    description: 'Monitor your activity and health metrics effortlessly.',
    image:
      'https://images.unsplash.com/photo-1526403226895-8b94b33f9a49?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 14,
    title: 'Portable Projector',
    description: 'Project movies and presentations anywhere you go.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 15,
    title: 'Noise-Isolating Earbuds',
    description: 'Compact earbuds with crystal-clear sound quality.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 16,
    title: 'Laptop Cooling Pad',
    description: 'Keep your laptop cool during intense use.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 17,
    title: 'Smartphone Gimbal',
    description: 'Stabilize your videos for professional results.',
    image:
      'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 18,
    title: 'Bluetooth Keyboard',
    description: 'Sleek and portable for typing on the go.',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 19,
    title: 'External SSD Drive',
    description: 'Fast and reliable storage for your files and backups.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 20,
    title: 'Wireless Gaming Controller',
    description: 'Ergonomic design for enhanced gameplay control.',
    image:
      'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 21,
    title: 'Smart LED Desk Lamp',
    description: 'Adjustable brightness with touch control and color modes.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=774&auto=format&fit=crop',
  },
  {
    id: 22,
    title: 'Digital Drawing Tablet',
    description: 'Create art digitally with precision and ease.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=870&auto=format&fit=crop',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-[300px] flex flex-col">
      {product.image ? (
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className="object-cover w-full h-[200px]"
        />
      ) : (
        <div className="bg-gray-200 w-full h-[200px] flex items-center justify-center text-gray-500 text-sm">
          No Image Available
        </div>
      )}
      <div className="p-4 text-left">
        <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mb-1">{product.title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

const ProductCallHero = () => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMoreProducts = () => {
    const currentLength = visibleProducts.length;
    const nextProducts = allProducts.slice(currentLength, currentLength + 3);
    setVisibleProducts([...visibleProducts, ...nextProducts]);
  };

  const handleExplore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts(allProducts.slice(0, 3));
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <section className="w-full bg-white flex justify-center items-start pt-12 px-4 sm:px-6">
        <div className="max-w-[1000px] w-full text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight">
            Discover Our Best-Selling Products
          </h1>
          <p className="text-gray-700 text-sm sm:text-lg max-w-xl mx-auto mb-6 px-2 sm:px-0">
            Handpicked deals, premium quality, and unbeatable prices. Experience shopping like never before — all
            in one place.
          </p>
          <div className="flex justify-center gap-4 flex-wrap px-2 sm:px-0">
            <button
              onClick={handleExplore}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-black font-semibold rounded-xl hover:bg-black transition-all duration-200 shadow-md w-full max-w-xs sm:w-auto"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
              {loading ? 'Loading...' : 'Start Exploring'}
            </button>
          </div>
        </div>
      </section>

      {visibleProducts.length > 0 && (
        <section className="w-full flex flex-col items-center justify-center px-4 py-12 bg-white sm:px-6">
          <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {visibleProducts.length < allProducts.length && (
            <button
              onClick={loadMoreProducts}
              className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-500 transition-all duration-200 w-full max-w-xs sm:w-auto"
            >
              Show More
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default ProductCallHero;
