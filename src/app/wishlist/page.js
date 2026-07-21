'use client';

import React from 'react';

import WishlistHero from '@/components/Wishlist/WishlistHero';
import WishlistFilters from '@/components/Wishlist/WishlistFilters';
import WishlistSummary from '@/components/Wishlist/WishlistSummary';
import WishlistActions from '@/components/Wishlist/WishlistActions';
import WishlistItems from '@/components/Wishlist/WishlistItems';
import WishlistEmpty from '@/components/Wishlist/WishlistEmpty';
import WishlistRecommendations from '@/components/Wishlist/WishlistRecommendations';

export default function WishlistPage() {
  const sampleItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 89.99,
      image:
        'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80',
      inStock: true,
    },
    {
      id: 2,
      name: 'Stylish Backpack',
      category: 'Accessories',
      price: 49.99,
      image:
        'https://images.unsplash.com/photo-1504734665345-c65ecf4fa48d?auto=format&fit=crop&w=400&q=80',
      inStock: false,
    },
  ];

  const recommendations = [
    {
      id: 101,
      name: 'Smart Watch',
      price: 199.99,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 102,
      name: 'Leather Wallet',
      price: 39.99,
      image:
        'https://images.unsplash.com/photo-1518546305929-9f0bcddb3c5e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-20 py-12">

      <div className="w-full max-w-7xl">
        <WishlistHero itemCount={sampleItems.length} />
      </div>

    
      {sampleItems.length === 0 ? (
        <div className="w-full max-w-7xl">
          <WishlistEmpty />
        </div>
      ) : (
        <>
          <WishlistFilters onFilter={() => {}} />


          <div className="w-full max-w-7xl">
            <WishlistSummary items={sampleItems} />
          </div>

          <div className="w-full max-w-7xl">
            <WishlistActions
              onAddAllToCart={() => alert('Added all to cart')}
              onClearWishlist={() => alert('Wishlist cleared')}
            />
          </div>

          <div className="w-full max-w-7xl">
            <WishlistItems
              items={sampleItems}
              onRemove={(id) => alert(`Remove item ${id}`)}
              onAddToCart={(id) => alert(`Add item ${id} to cart`)}
            />
          </div>

          <div className="w-full max-w-7xl">
            <WishlistRecommendations recommendations={recommendations} />
          </div>
        </>
      )}
    </main>
  );
}
