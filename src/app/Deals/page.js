'use client';

import React from 'react';
import DealHero from '@/components/Deal/DealHero';
import FlashDealTimer from '@/components/Deal/FlashDealTimer';
import DealProductsGrid from '@/components/Deal/DealProductsGrid';
import StockProgressBar from '@/components/Deal/StockProgressBar';
import CouponCodeBox from '@/components/Deal/CouponCodeBox';
import BundleDeals from '@/components/Deal/BundleDeals';
import DealTestimonials from '@/components/Deal/DealTestimonials';
import DealCategories from '@/components/Deal/DealCategories';
import DealOfTheHour from '@/components/Deal/DealOfTheHour';
import MobileAppDeals from '@/components/Deal/MobileAppDeals';
import RecentlyViewedDeals from '@/components/Deal/RecentlyViewedDeals';
import DealNewsletterForm from '@/components/Deal/DealNewsletterForm';
import StickyDealCart from '@/components/Deal/StickyDealCart';
import DealFAQ from '@/components/Deal/DealFAQ';
import LiveSalesFeed from '@/components/Deal/LiveSalesFeed';
import DealComparisonTable from '@/components/Deal/DealComparisonTable';

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-20">
      <DealHero />
      <FlashDealTimer/>
      <DealProductsGrid/>
      <StockProgressBar/>
      <CouponCodeBox/>
      <BundleDeals/>
      <DealTestimonials/>
      <DealCategories/>
      <DealOfTheHour/>
      <MobileAppDeals/>
      <RecentlyViewedDeals/>
      <DealNewsletterForm/>
      <StickyDealCart/>
      <DealFAQ/>
      <LiveSalesFeed/>
      <DealComparisonTable/>
    </main>
  );
}
