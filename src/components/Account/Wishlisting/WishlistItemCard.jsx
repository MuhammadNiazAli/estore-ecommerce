'use client';

import React from 'react';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';

const WishlistItemCard = ({
  image = 'https://images.unsplash.com/photo-1606813909321-3cbd99f47e55?auto=format&fit=crop&w=400&q=80',
  title = 'Stylish Headphones',
  description = 'High-quality wireless headphones with noise cancellation.',
  price = 79.99,
  oldPrice = 99.99,
  rating = 4.5,
  onAddToCart,
  onRemove,
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row max-w-3xl mx-auto text-white p-4 gap-4">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full sm:w-48 h-48 object-cover rounded-lg flex-shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold truncate">{title}</h3>
          <p className="text-yellow-300 mt-1 line-clamp-2">{description}</p>
        </div>

        {/* Price & rating */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold text-yellow-400">${price.toFixed(2)}</span>{' '}
            {oldPrice && (
              <span className="line-through text-yellow-700 ml-2">${oldPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Rating stars */}
          <div className="flex items-center space-x-1 text-yellow-400">
            {[...Array(fullStars)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            ))}
            {halfStar && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="half-grad">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half-grad)"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={onAddToCart}
            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-semibold px-4 py-2 rounded-lg transition"
            aria-label={`Add ${title} to cart`}
          >
            <FiShoppingCart size={20} />
            Add to Cart
          </button>

          <button
            onClick={onRemove}
            aria-label={`Remove ${title} from wishlist`}
            className="text-yellow-400 hover:text-yellow-600 transition"
          >
            <FiTrash2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItemCard;
