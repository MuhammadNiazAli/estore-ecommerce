'use client';

import React from 'react';
import CartHero from '@/components/Cart/CartHero';
import CartItems from '@/components/Cart/CartItems';
import CartItem from '@/components/Cart/CartItem';
import CartSummary from '@/components/Cart/CartSummary';
import CartCouponCode from '@/components/Cart/CartCouponCode';
import CartEmpty from '@/components/Cart/CartEmpty';
import CartActionButtons from '@/components/Cart/CartActionButtons';
import CartStickyFooter from '@/components/Cart/CartStickyFooter';
import CartSecureCheckoutNote from '@/components/Cart/CartSecureCheckoutNote';

import CartShippingEstimator from '@/components/Cart/CartShippingEstimator';
import CartGiftOptions from '@/components/Cart/CartGiftOptions';
import CartTaxInfo from '@/components/Cart/CartTaxInfo';
import CartRewardPoints from '@/components/Cart/CartRewardPoints';
import CartLoginPrompt from '@/components/Cart/CartLoginPrompt';

import CartRecommendedProducts from '@/components/Cart/CartRecommendedProducts';
import CartRecentlyViewed from '@/components/Cart/CartRecentlyViewed';
import CartUpsellBanner from '@/components/Cart/CartUpsellBanner';

import CartLoadingSkeleton from '@/components/Cart/CartLoadingSkeleton';
import CartToastNotification from '@/components/Cart/CartToastNotification';
import CartConfirmationDialog from '@/components/Cart/CartConfirmationDialog';

import CartAnalyticsTracker from '@/components/Cart/CartAnalyticsTracker';
import CartProgressBar from '@/components/Cart/CartProgressBar';

const CartPage = () => {
  return (
    <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <CartHero />
      <CartAnalyticsTracker />
      <CartProgressBar />

      {/* If Cart is Empty */}
      {/* <CartEmpty /> */}

      {/* If Cart has items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <CartItems />
          {/* Individual items would be rendered inside CartItems, but you can also test with <CartItem /> */}
          <CartCouponCode />
          <CartGiftOptions />
          <CartShippingEstimator />
          <CartRewardPoints />
          <CartTaxInfo />
          <CartLoginPrompt />
        </div>

        <div className="space-y-6">
          <CartSummary />
          <CartActionButtons />
          <CartSecureCheckoutNote />
        </div>
      </div>

      <CartUpsellBanner />
      <CartRecommendedProducts />
      <CartRecentlyViewed />

      <CartStickyFooter />
      <CartLoadingSkeleton />
      <CartToastNotification />
      <CartConfirmationDialog />
    </main>
  );
};

export default CartPage;
