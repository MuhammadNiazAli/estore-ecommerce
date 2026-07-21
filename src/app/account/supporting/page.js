'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import SupportingHero from '@/components/Account/Supporting/SupportingHero';
import SupportingFeatures from '@/components/Account/Supporting/SupportingFeatures';
import SupportingFAQ from '@/components/Account/Supporting/SupportingFAQ';
import SupportingContactForm from '@/components/Account/Supporting/SupportingContactForm';
import SupportingTestimonials from '@/components/Account/Supporting/SupportingTestimonials';

export default function SupportingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <SupportingHero />
        <SupportingFeatures />
        <SupportingTestimonials />
        <SupportingContactForm />
        <SupportingFAQ />
      </div>
    </main>
  );
}
