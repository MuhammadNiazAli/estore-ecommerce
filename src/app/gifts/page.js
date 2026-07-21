'use client';

import React from 'react';

import GiftHero from '@/components/Gift/GiftHero';
import GiftCategoryGrid from '@/components/Gift/GiftCategoryGrid';
import GiftOccasionTabs from '@/components/Gift/GiftOccasionTabs';
import GiftCarousel from '@/components/Gift/GiftCarousel';
import GiftDeals from '@/components/Gift/GiftDeals';
import GiftIdeas from '@/components/Gift/GiftIdeas';
import GiftByRelation from '@/components/Gift/GiftByRelation';
import GiftReviewWall from '@/components/Gift/GiftReviewWall';
import GiftBundleOffers from '@/components/Gift/GiftBundleOffers';
import GiftTrending from '@/components/Gift/GiftTrending';
import GiftCTA from '@/components/Gift/GiftCTA';
import GiftFAQ from '@/components/Gift/GiftFAQ';
import GiftTips from '@/components/Gift/GiftTips';
import GiftLocationPicker from '@/components/Gift/GiftLocationPicker';
import GiftVideoBanner from '@/components/Gift/GiftVideoBanner';
import GiftSelector3D from '@/components/Gift/GiftSelector3D';
import GiftPersonalizer from '@/components/Gift/GiftPersonalizer';
import GiftLiveFeed from '@/components/Gift/GiftLiveFeed';
import GiftFilterSidebar from '@/components/Gift/GiftFilterSidebar';
import GiftMobileOffers from '@/components/Gift/GiftMobileOffers';

const GiftPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 sm:px-6 py-10 lg:py-20 space-y-16">
      {/* Hero Section */}
      <GiftHero />
      <GiftVideoBanner />

      {/* Occasion + Category Selection */}
      <GiftOccasionTabs />
      <GiftCategoryGrid />

      {/* Main Highlights */}
      <GiftCarousel />
      <GiftDeals />
      <GiftLiveFeed />

      {/* Dynamic Filtering Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="hidden lg:block">
          <GiftFilterSidebar />
        </div>

        {/* Gift Ideas & Listings */}
        <div className="lg:col-span-3 space-y-12">
          <GiftIdeas />
          <GiftTrending />
          <GiftByRelation />
          <GiftBundleOffers />
        </div>
      </div>

      {/* Interactive & Personalization */}
      <GiftSelector3D />
      <GiftPersonalizer />

      {/* Social Proof & Info */}
      <GiftReviewWall />
      <GiftFAQ />
      <GiftTips />

      {/* Location & CTA */}
      <GiftLocationPicker />
      <GiftCTA />
  

      {/* Mobile Sticky Promo */}
      <div className="lg:hidden">
        <GiftMobileOffers />
      </div>
    </main>
  );
};

export default GiftPage;
