'use client';

import React from 'react';

// Components
import ReturnChangeHero from '@/components/ReturnChange/ReturnChangeHero';
import ReturnChangeSteps from '@/components/ReturnChange/ReturnChangeSteps';
import ReturnChangeReasons from '@/components/ReturnChange/ReturnChangeReasons';
import ReturnChangeForm from '@/components/ReturnChange/ReturnChangeForm';
import ReturnChangeStatus from '@/components/ReturnChange/ReturnChangeStatus';
import ReturnChangePolicy from '@/components/ReturnChange/ReturnChangePolicy';
import ReturnChangeFAQ from '@/components/ReturnChange/ReturnChangeFAQ';
import ReturnChangeContactHelp from '@/components/ReturnChange/ReturnChangeContactHelp';
import ReturnChangeTips from '@/components/ReturnChange/ReturnChangeTips';
import ReturnChangeCTA from '@/components/ReturnChange/ReturnChangeCTA';

const ReturnChangePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-12 lg:py-20 space-y-10">

      {/* Essential Sections */}
      <ReturnChangeHero />
      <ReturnChangeSteps />
      <ReturnChangeForm />
      <ReturnChangeStatus />

      {/* Helpful Details */}
      <ReturnChangeReasons />
      <ReturnChangePolicy />
      <ReturnChangeTips />
      <ReturnChangeFAQ />

      {/* Final Help & CTA */}
      <ReturnChangeContactHelp />
      <ReturnChangeCTA />

    </main>
  );
};

export default ReturnChangePage;
