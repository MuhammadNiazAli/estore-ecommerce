'use client';

import React, { useState } from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';
import WishlistingHero from '@/components/Account/Wishlisting/WishlistingHero';
import WishlistedItemsGrid from '@/components/Account/Wishlisting/WishlistedItemsGrid';
import WishlistItemCard from '@/components/Account/Wishlisting/WishlistItemCard'; // Optional direct render
import WishlistActions from '@/components/Account/Wishlisting/WishlistActions';
import WishlistFilterSort from '@/components/Account/Wishlisting/WishlistFilterSort';
import WishlistHeader from '@/components/Account/Wishlisting/WishlistHeader';
import WishlistLoader from '@/components/Account/Wishlisting/WishlistLoader';
import WishlistPagination from '@/components/Account/Wishlisting/WishlistPagination';
import WishlistToast from '@/components/Account/Wishlisting/WishlistToast';
import WishlistShareOverlay from '@/components/Account/Wishlisting/WishlistShareOverlay';
import WishlistConfirmationModal from '@/components/Account/Wishlisting/WishlistConfirmationModal';
import EmptyWishlist from '@/components/Account/Wishlisting/EmptyWishlist';

export default function WishlistingPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: '4K Smart LED TV',
      price: 499,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=500&q=80',
      inStock: true,
    },
    {
      id: 2,
      name: 'Gaming Laptop',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1587202372775-98973a33f6ef?auto=format&fit=crop&w=500&q=80',
      inStock: false,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [showShareOverlay, setShowShareOverlay] = useState(false);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />

      <div className="flex-1 space-y-10">
        <WishlistingHero />

        <WishlistHeader />
        <WishlistFilterSort />

        {isLoading ? (
          <WishlistLoader />
        ) : wishlistItems.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <>
            <WishlistedItemsGrid items={wishlistItems} />
            <WishlistActions
              onShare={() => setShowShareOverlay(true)}
              onClear={() => setShowConfirmClear(true)}
            />
            <WishlistPagination />
          </>
        )}

        {showShareOverlay && (
          <WishlistShareOverlay onClose={() => setShowShareOverlay(false)} />
        )}

        {showConfirmClear && (
          <WishlistConfirmationModal
            onCancel={() => setShowConfirmClear(false)}
            onConfirm={() => {
              setWishlistItems([]);
              setShowConfirmClear(false);
            }}
          />
        )}

        <WishlistToast />
      </div>
    </main>
  );
}
