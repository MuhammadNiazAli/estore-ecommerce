'use client';

import React from 'react';
import ProductCallHero from '@/components/ProductCall/ProductCallHero';
import ProductCallOverview from '@/components/ProductCall/ProductCallOverview';
import ProductCallSteps from '@/components/ProductCall/ProductCallSteps';
import ProductCallBenefits from '@/components/ProductCall/ProductCallBenefits';
import ProductCallForm from '@/components/ProductCall/ProductCallForm';
import ProductCallTestimonials from '@/components/ProductCall/ProductCallTestimonials';
import ProductCallFAQ from '@/components/ProductCall/ProductCallFAQ';
import ProductCallFooterCTA from '@/components/ProductCall/ProductCallFooterCTA';

export default function ProductCallPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 py-10 space-y-16">
      <ProductCallHero />
      <ProductCallOverview />
      <ProductCallSteps />
      <ProductCallBenefits />
      <ProductCallForm />
      <ProductCallTestimonials />
      <ProductCallFAQ />
      <ProductCallFooterCTA />
    </main>
  );
}
