'use client';

import React, { useState } from 'react';
import CartItem from './CartItem'; // Update path as needed

const sampleProducts = [
  {
    id: 1,
    title: 'Wireless Headphones',
    description: 'High quality noise-cancelling headphones',
    price: 120.0,
    image:
      'https://plus.unsplash.com/premium_photo-1682096467444-8861e1dc3bc2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Smart Watch',
    description: 'Waterproof fitness tracker with heart rate monitor',
    price: 199.99,
    image:
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const CartItems = () => {
  const [items, setItems] = useState(sampleProducts.map(p => ({ ...p, quantity: 1 })));

  const handleRemove = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, qty) => {
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  if (items.length === 0) {
    return (
      <section className="w-full bg-white text-gray-900 flex justify-center items-center px-4 sm:px-6 py-20">
        <div className="text-center">
          <p className="text-amber-600 text-2xl font-semibold mb-3">Your cart is empty</p>
          <p className="text-gray-600 text-sm">
            Looks like you haven’t added anything yet. Start shopping now!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-10 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        {items.map(product => (
          <CartItem
            key={product.id}
            product={product}
            initialQuantity={product.quantity}
            onRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
    </section>
  );
};

export default CartItems;
