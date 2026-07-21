'use client';

import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

const CartItem = ({
  product = {
    id: 1,
    title: 'Wireless Headphones',
    description: 'High quality noise-cancelling headphones',
    price: 120.0,
    image:
      'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  initialQuantity = 1,
  onRemove,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onQuantityChange?.(product.id, newQty);
    }
  };

  const handleIncrease = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onQuantityChange?.(product.id, newQty);
  };

  const handleRemove = () => {
    onRemove?.(product.id);
  };

  return (
    <article className="w-full max-w-[1000px] bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-900">
      {/* Product Image */}
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
          loading="lazy"
          width={128}
          height={128}
          decoding="async"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-amber-600 text-lg sm:text-xl font-semibold">{product.title}</h3>
          <p className="text-gray-700 mt-1 text-sm sm:text-base line-clamp-2">{product.description}</p>
        </div>

        {/* Quantity & Price Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-3 sm:gap-6">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 w-fit">
            <button
              onClick={handleDecrease}
              aria-label="Decrease quantity"
              className="text-amber-600 font-bold text-base sm:text-lg px-2 sm:px-3 hover:text-amber-500 transition select-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={quantity === 1}
              type="button"
            >
              −
            </button>
            <span className="min-w-[24px] text-center text-sm sm:text-base">{quantity}</span>
            <button
              onClick={handleIncrease}
              aria-label="Increase quantity"
              className="text-amber-600 font-bold text-base sm:text-lg px-2 sm:px-3 hover:text-amber-500 transition select-none"
              type="button"
            >
              +
            </button>
          </div>

          {/* Price Display */}
          <div className="text-base sm:text-lg font-semibold text-gray-900 whitespace-nowrap">
            ${(product.price * quantity).toFixed(2)}{' '}
            <span className="text-gray-600 text-xs sm:text-sm ml-1">
              (${product.price.toFixed(2)} each)
            </span>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            aria-label="Remove item"
            className="text-red-500 hover:text-red-600 transition flex items-center justify-center"
            type="button"
          >
            <TrashIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
