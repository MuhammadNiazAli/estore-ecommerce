'use client';

import React from 'react';

import PrivacyHero from '@/components/Privacy/PrivacyHero';
import PrivacyInformationCollection from '@/components/Privacy/PrivacyInformationCollection';
import PrivacyUseOfInformation from '@/components/Privacy/PrivacyUseOfInformation';
import PrivacyDataSharing from '@/components/Privacy/PrivacyDataSharing';
import PrivacyDataStorage from '@/components/Privacy/PrivacyDataStorage';
import PrivacyCookies from '@/components/Privacy/PrivacyCookies';
import PrivacyUserRights from '@/components/Privacy/PrivacyUserRights';
import PrivacyThirdPartyLinks from '@/components/Privacy/PrivacyThirdPartyLinks';
import PrivacyPolicyChanges from '@/components/Privacy/PrivacyPolicyChanges';
import PrivacyContact from '@/components/Privacy/PrivacyContact';
import PrivacyFAQ from '@/components/Privacy/PrivacyFAQ';
import PrivacySubscriptionNotice from '@/components/Privacy/PrivacySubscriptionNotice';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <PrivacyHero />
      <PrivacyInformationCollection />
      <PrivacyUseOfInformation />
      <PrivacyDataSharing />
      <PrivacyDataStorage />
      <PrivacyCookies />
      <PrivacyUserRights />
      <PrivacyThirdPartyLinks />
      <PrivacyPolicyChanges />
      <PrivacyContact />
      <PrivacyFAQ />
      <PrivacySubscriptionNotice/>
    </main>
  );
}
