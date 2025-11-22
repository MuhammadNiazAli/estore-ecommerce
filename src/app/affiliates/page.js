'use client';

import React from 'react';
import AffiliatesHero from '@/components/Affiliates/AffiliatesHero';
import AffiliatesBenefits from '@/components/Affiliates/AffiliatesBenefits';
import AffiliatesHowItWorks from '@/components/Affiliates/AffiliatesHowItWorks';
import AffiliatesTestimonials from '@/components/Affiliates/AffiliatesTestimonials';
import AffiliatesSignupForm from '@/components/Affiliates/AffiliatesSignupForm';
import AffiliatesFAQ from '@/components/Affiliates/AffiliatesFAQ';
import AffiliatesStats from '@/components/Affiliates/AffiliatesStats';
import AffiliatesPartners from '@/components/Affiliates/AffiliatesPartners';
import AffiliatesContact from '@/components/Affiliates/AffiliatesContact';
import AffiliatesFooter from '@/components/Affiliates/AffiliatesFooter';

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <AffiliatesHero />
      <AffiliatesBenefits />
      <AffiliatesHowItWorks />
      <AffiliatesTestimonials />
      <AffiliatesSignupForm />
      <AffiliatesFAQ />
      <AffiliatesStats />
      <AffiliatesPartners />
      <AffiliatesContact />
      <AffiliatesFooter />
    </main>
  );
}
