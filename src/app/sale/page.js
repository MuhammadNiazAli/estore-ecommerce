'use client';

import React from 'react';

import SaleHero from '@/components/Sale/SaleHero';
import SaleFilter from '@/components/Sale/SaleFilter';
import SaleCategoryTabs from '@/components/Sale/SaleCategoryTabs';
import SaleCountdown from '@/components/Sale/SaleCountdown';
import SaleBanner from '@/components/Sale/SaleBanner';
import SaleProducts from '@/components/Sale/SaleProducts';
import SaleTestimonials from '@/components/Sale/SaleTestimonials';
import SaleNewsletter from '@/components/Sale/SaleNewsletter';
import SaleFooter from '@/components/Sale/SaleFooter';


export default function SalePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col items-center justify-start px-4 py-10 space-y-16 max-w-7xl mx-auto">
      <SaleHero />
      <SaleCountdown />     
      <SaleBanner />          
      <SaleFilter />          
      <SaleCategoryTabs
  categories={[
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Home & Living",
    "Sports",
    "Care"
  ]}
  onTabChange={(category) => console.log("Selected:", category)}
/>
 
      <SaleProducts />       
      <SaleTestimonials />    
      <SaleNewsletter />    
      <SaleFooter />          
    </main>
  );
}
