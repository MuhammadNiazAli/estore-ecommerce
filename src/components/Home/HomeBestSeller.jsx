'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiStar, FiHeart, FiEye } from 'react-icons/fi';
import { BsHeartFill } from 'react-icons/bs';

const productList = [
  {
    id: 1,
    title: 'Modern Shirt',
    price: '$49.99',
    rating: 4,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1711188054303-3825fd23163f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImage: 'https://images.unsplash.com/photo-1711188052659-a2cb0a49a718?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A breathable cotton shirt perfect for daily wear.',
  },
  {
    id: 2,
    title: 'Smart Jacket',
    price: '$89.99',
    rating: 5,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1711188054511-08fe02246b8e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImage: 'https://images.unsplash.com/photo-1711188053977-5d45da407737?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Water-resistant smart jacket for all seasons.',
  },
  {
    id: 3,
    title: 'Winter Coat',
    price: '$129.99',
    rating: 5,
    badge: null,
    image: 'https://images.unsplash.com/photo-1711188054202-3a054a357ce8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImage: 'https://images.unsplash.com/photo-1711188054419-12b41ba78951?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Stay warm and stylish with our premium winter coat.',
  },
  {
    id: 4,
    title: 'Casual Hoodie',
    price: '$59.99',
    rating: 4,
    badge: null,
    image: 'https://images.unsplash.com/photo-1711188054480-5675dee81b41?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImage: 'https://images.unsplash.com/photo-1711188054453-77f645f71401?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Comfy fleece hoodie for laid-back days.',
  },
  {
    id: 5,
    title: 'Trendy Jeans',
    price: '$69.99',
    rating: 4,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1711188052632-037256c6a8bd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImage: 'https://images.unsplash.com/photo-1711188052712-055e97736870?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Slim-fit jeans made with stretchable denim.',
  },
  {
    id: 6,
    title: 'Leather Boots',
    price: '$99.99',
    rating: 5,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1711188054341-b537b7cd52ad?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImage: 'https://images.unsplash.com/photo-1711188055139-cf1d380c5ae7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Premium leather boots for all terrains.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 text-black" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, index) => (
        <FiStar
          key={index}
          className={`text-sm ${index < rating ? 'fill-black' : 'text-gray-600'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ProductCard({ product, isFavorite, onToggleFavorite }) {
  const badgeColor = product.badge === 'new' ? 'bg-black left-3' : 'bg-black right-3';

  return (
    <article
      className="relative flex flex-col h-96 rounded-xl bg-white/70 backdrop-blur-md border border-gray-200 text-gray-900 shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl w-full max-w-[360px] mx-auto"
      tabIndex="0"
    >
      {product.badge && (
        <span className={`absolute top-3 text-xs font-semibold px-2 py-1 rounded z-20 ${badgeColor} text-gray-900`}>
          {product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
        </span>
      )}

      {/* Icons */}
      <div className="absolute top-5 left-3 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
        {/* Heart */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          aria-pressed={isFavorite}
          className="p-2 rounded-full bg-black/10 text-black hover:bg-black/50 hover:scale-110 hover:text-black transition-all duration-300 shadow"
          type="button"
        >
          {isFavorite ? <BsHeartFill className="text-black/70 text-lg" /> : <FiHeart className="text-lg" />}
        </button>
        

        {/* Eye */}
        <Link
          href={`/product`}
          className="p-2 rounded-full bg-black/10 text-black hover:bg-black/50 hover:text-black hover:scale-110 transition-all duration-300 shadow"
        >
          <FiEye className="text-lg" />
        </Link>
      </div>

      {/* Images */}
      <div className="w-full h-56 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          loading="lazy"
        />
        <img
          src={product.hoverImage}
          alt={`${product.title} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      {/* Details */}
      <div className="p-4 space-y-2 flex flex-col justify-between flex-1">
        <h3 className="text-base font-semibold truncate" title={product.title}>
          {product.title}
        </h3>
        <p className="text-sm text-gray-700 line-clamp-2">{product.description}</p>
        <StarRating rating={product.rating} />
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-black">{product.price}</span>
          <Link
            href="/cart"
            className="py-1 px-3 bg-black hover:bg-black text-black rounded font-medium flex items-center gap-2 transition duration-300 text-sm"
            aria-label={`Add ${product.title} to cart`}
          >
            <FiShoppingCart />
            Add
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function HomeBestSeller() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleFavoriteToggle = (productId) => {
    setFavoriteIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-white mb-[-50px] my-[-50px] text-gray-900 py-16 px-4 w-full">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black text-center mb-12 tracking-tight">
          Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productList.slice(0, visibleCount).map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              isFavorite={favoriteIds.includes(item.id)}
              onToggleFavorite={handleFavoriteToggle}
            />
          ))}
        </div>

        {visibleCount < productList.length && (
          <div className="mt-10 text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-black hover:bg-black text-black rounded-lg font-semibold shadow transition duration-300"
              aria-label="Load more products"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
