'use client';

import React from 'react';

// Import Bestdeals Components
import BestdealsHero from '@/components/Bestdeals/BestdealsHero';
import BestdealsHighlights from '@/components/Bestdeals/BestdealsHighlights';
import BestdealsCategoryTabs from '@/components/Bestdeals/BestdealsCategoryTabs';
import BestdealsProductsGrid from '@/components/Bestdeals/BestdealsProductsGrid';
import BestdealsFilterBar from '@/components/Bestdeals/BestdealsFilterBar';
import BestdealsCountdown from '@/components/Bestdeals/BestdealsCountdown';
import BestdealsPromoBanner from '@/components/Bestdeals/BestdealsPromoBanner';
import BestdealsFlashSales from '@/components/Bestdeals/BestdealsFlashSales';
import BestdealsTopBrands from '@/components/Bestdeals/BestdealsTopBrands';
import BestdealsTestimonials from '@/components/Bestdeals/BestdealsTestimonials';
import BestdealsNewsletter from '@/components/Bestdeals/BestdealsNewsletter';
import BestdealsFAQ from '@/components/Bestdeals/BestdealsFAQ';
import BestdealsFooter from '@/components/Bestdeals/BestdealsFooter';

export default function BestdealsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-10 lg:py-20">
      {/* Hero Section */}
      <BestdealsHero />

      {/* Highlights Section */}
      <BestdealsHighlights />

      {/* Category Tabs */}
      <BestdealsCategoryTabs />

      {/* Filter Bar */}
      <BestdealsFilterBar />

      {/* Products Grid */}
      <BestdealsProductsGrid />

      {/* Countdown Deals */}
      <BestdealsCountdown />

      {/* Promo Banner */}
      <BestdealsPromoBanner />

      {/* Flash Sales */}
      <BestdealsFlashSales />

      {/* Top Brands */}
      <BestdealsTopBrands />

      {/* Testimonials */}
      <BestdealsTestimonials />

      {/* Newsletter Subscription */}
      <BestdealsNewsletter />

      {/* FAQ Section */}
      <BestdealsFAQ />

      {/* Footer Section */}
      <BestdealsFooter />
    </main>
  );
}
