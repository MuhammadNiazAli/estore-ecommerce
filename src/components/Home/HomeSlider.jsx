'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import {
  FiShoppingCart,
  FiStar,
  FiHeart,
  FiEye,
  FiInfo,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

const PRODUCTS = [
  { id: 1, name: 'Stylish Headphones', price: '$59.99', rating: 4, image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-1-variant.webp' },
  { id: 2, name: 'Premium Smartwatch', price: '$129.00', rating: 5, image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-4-variant.webp' },
  { id: 3, name: 'Wireless Earbuds', price: '$89.00', rating: 4, image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-7-variant.webp' },
  { id: 4, name: 'Gaming Keyboard', price: '$75.00', rating: 5, image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-12-variant.webp' },
  { id: 5, name: 'Bluetooth Speaker', price: '$45.50', rating: 4, image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-11-variant.webp' },
  { id: 6, name: 'USB-C Dock Station', price: '$32.00', rating: 3, image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-9-variant.webp' },
  { id: 7, name: 'VR Headset', price: '$199.00', rating: 5, image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-3-variant.webp' },
  { id: 8, name: 'Luxury Watch', price: '$299.00', rating: 5, image: 'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-4-variant.webp' },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1" aria-label={`Rating: ${count} out of 5 stars`} role="img">
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          className={`text-xs ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ProductCard({ product, favorited, onFavoriteToggle }) {
  const { id, name, price, rating, image } = product;

  return (
    <article
      tabIndex={0}
      aria-label={`${name} product card`}
      className="relative flex flex-col h-[360px] rounded-xl bg-gray-50/10 backdrop-blur-md border border-gray-800/50 text-white shadow-lg overflow-hidden group"
      style={{ transition: 'transform 0.4s ease' }}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-[60%] object-contain rounded-t-xl transition-transform duration-300 group-hover:scale-105"
      />

      <section className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-90 p-4 rounded-b-xl text-white z-10 transition">
        <div className="flex justify-between items-center">
          <h3 title={name} className="max-w-[75%] truncate font-semibold text-base">{name}</h3>
          <button
            type="button"
            onClick={() => onFavoriteToggle(id)}
            aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={favorited}
            className={`p-1 rounded focus:outline-none focus:ring-0 transition-colors ${
              favorited ? 'text-red-600 hover:text-red-700' : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <FiHeart className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-1">
          <StarRating count={rating} />
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-yellow-400 text-lg">{price}</span>
          <Link href="/Cart" passHref>
            <button
              type="button"
              aria-label={`Add ${name} to cart`}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold bg-yellow-400 text-black rounded hover:bg-yellow-300 focus:outline-none focus:ring-0 transition-colors"
            >
              <FiShoppingCart className="w-5 h-5" />
              Add
            </button>
          </Link>
        </div>
      </section>

      <aside className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
      <button
  type="button"
  onClick={() => onFavoriteToggle(id)}
  aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
  className={`w-9 h-9 flex items-center justify-center rounded-full focus:outline-none focus:ring-0 transition-colors ${
    favorited
      ? 'bg-red-600 hover:bg-red-700 text-white'
      : 'bg-white/30 hover:bg-red-500/60 text-red-600 hover:text-red-400'
  }`}
>
  <FiHeart className="w-5 h-5" />
</button>


    <Link
    href="/product"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/30 hover:bg-yellow-500/60 text-yellow-400 transition-colors"
    aria-label={`View details of ${name}`}
     >
      <FiEye className="w-5 h-5" />
     </Link>


        <button
          type="button"
          aria-label="More product information"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/30 hover:bg-blue-500/65 text-blue-300 transition-colors"
        >
          <FiInfo className="w-5 h-5" />
        </button>
      </aside>
    </article>
  );
}

export default function ProductSlider() {
  const [favorites, setFavorites] = useState({});
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleToggleFavorite = (productId) => {
    setFavorites(current => ({
      ...current,
      [productId]: !current[productId],
    }));
  };

  useEffect(() => {
    if (!swiperInstance) return;

    swiperInstance.params.navigation.prevEl = prevRef.current;
    swiperInstance.params.navigation.nextEl = nextRef.current;
    swiperInstance.navigation.destroy();
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, [swiperInstance]);

  return (
    <section
      aria-label="Product showcase slider"
      className="relative w-full bg-gradient-to-b from-gray-900 px-4 py-12 text-white overflow-visible"
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      {/* Navigation buttons with adjusted spacing */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        className="absolute left-[-15px] top-1/2 z-40 -translate-y-1/2 bg-gray-700/30 hover:bg-gray-900/10 hover:border border border-gray-800 hover:border-gray-700
 rounded-full p-3 shadow-lg transition-colors duration-300 my-[-15px]"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        className="absolute right-[-15px] top-1/2 z-40 -translate-y-1/2 bg-gray-700/30 hover:bg-gray-900/10 hover:border border border-gray-800 hover:border-gray-700 rounded-full p-3 shadow-lg transition-colors duration-300 my-[-15px]"
      >
        <FiChevronRight size={28} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={setSwiperInstance}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            'swiper-pagination-bullet transition-all duration-300 ease-in-out bg-yellow-400 opacity-60 hover:opacity-90 transform hover:scale-125',
          bulletActiveClass: 'opacity-100 scale-150',
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
        speed={600}
        className="pb-14"
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          768: { slidesPerView: 3, slidesPerGroup: 3 },
          1024: { slidesPerView: 4, slidesPerGroup: 4 },
        }}
      >
        {PRODUCTS.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              favorited={!!favorites[product.id]}
              onFavoriteToggle={handleToggleFavorite}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
