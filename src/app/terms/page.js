'use client';

import React from 'react';
import TermsHero from '@/components/Terms/TermsHero';
import TermsIntroduction from '@/components/Terms/TermsIntroduction';
import TermsDefinitions from '@/components/Terms/TermsDefinitions';
import TermsUserResponsibilities from '@/components/Terms/TermsUserResponsibilities';
import TermsPrivacyPolicy from '@/components/Terms/TermsPrivacyPolicy';
import TermsUsageRights from '@/components/Terms/TermsUsageRights';
import TermsLimitations from '@/components/Terms/TermsLimitations';
import TermsTermination from '@/components/Terms/TermsTermination';
import TermsDisputeResolution from '@/components/Terms/TermsDisputeResolution';
import TermsContactInfo from '@/components/Terms/TermsContactInfo';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <TermsHero />
      <TermsIntroduction />
      <TermsDefinitions />
      <TermsUserResponsibilities />
      <TermsPrivacyPolicy />
      <TermsUsageRights />
      <TermsLimitations />
      <TermsTermination />
      <TermsDisputeResolution />
      <TermsContactInfo />
    </main>
  );
}
