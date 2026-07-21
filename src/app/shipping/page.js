'use client';

import React from 'react';
import ShippingHero from '@/components/Shipping/ShippingHero';
import ShippingOptions from '@/components/Shipping/ShippingOptions';
import ShippingRates from '@/components/Shipping/ShippingRates';
import ShippingTimeline from '@/components/Shipping/ShippingTimeline';
import ShippingPolicy from '@/components/Shipping/ShippingPolicy';
import ShippingFAQ from '@/components/Shipping/ShippingFAQ';
import ShippingTracker from '@/components/Shipping/ShippingTracker';

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-start px-4 pt-20 max-w-[1200px] mx-auto">
      <ShippingHero />
      <ShippingOptions />
      <ShippingRates />
      <ShippingTimeline />
      <ShippingPolicy />
      <ShippingFAQ />
      <ShippingTracker />
    </main>
  );
}
