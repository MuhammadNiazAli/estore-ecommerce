'use client';

import React from 'react';

// Import Clearance Components
import ClearanceHero from '@/components/Clearance/ClearanceHero';
import ClearanceHighlights from '@/components/Clearance/ClearanceHighlights';
import ClearanceCategoryTabs from '@/components/Clearance/ClearanceCategoryTabs';
import ClearanceFilterBar from '@/components/Clearance/ClearanceFilterBar';
import ClearanceProductsGrid from '@/components/Clearance/ClearanceProductsGrid';
import ClearanceCountdown from '@/components/Clearance/ClearanceCountdown';
import ClearanceFlashSales from '@/components/Clearance/ClearanceFlashSales';
import ClearancePromoBanner from '@/components/Clearance/ClearancePromoBanner';
import ClearanceTopBrands from '@/components/Clearance/ClearanceTopBrands';
import ClearanceLimitedStock from '@/components/Clearance/ClearanceLimitedStock';
import ClearanceTestimonials from '@/components/Clearance/ClearanceTestimonials';
import ClearanceNewsletter from '@/components/Clearance/ClearanceNewsletter';
import ClearanceFAQ from '@/components/Clearance/ClearanceFAQ';
import ClearanceFooter from '@/components/Clearance/ClearanceFooter';

export default function ClearancePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-10 lg:py-20">
      {/* Hero Section */}
      <ClearanceHero />

      {/* Highlights Section */}
      <ClearanceHighlights />

      {/* Category Tabs */}
      <ClearanceCategoryTabs />

      {/* Filter Bar */}
      <ClearanceFilterBar />

      {/* Products Grid */}
      <ClearanceProductsGrid />

      {/* Countdown Deals */}
      <ClearanceCountdown />

      {/* Flash Sales */}
      <ClearanceFlashSales />

      {/* Promo Banner */}
      <ClearancePromoBanner />

      {/* Top Brands */}
      <ClearanceTopBrands />

      {/* Limited Stock Alert Section */}
      <ClearanceLimitedStock />

      {/* Testimonials */}
      <ClearanceTestimonials />

      {/* Newsletter */}
      <ClearanceNewsletter />

      {/* FAQ Section */}
      <ClearanceFAQ />

      {/* Footer */}
      <ClearanceFooter />
    </main>
  );
}
