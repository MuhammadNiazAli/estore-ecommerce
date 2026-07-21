'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import SittingHero from '@/components/Account/Sittings/SittingHero';
import SittingProfileForm from '@/components/Account/Sittings/SittingProfileForm';
import SittingLanguageRegion from '@/components/Account/Sittings/SittingLanguageRegion';
import SittingNotifications from '@/components/Account/Sittings/SittingNotifications';
import SittingThemeToggle from '@/components/Account/Sittings/SittingThemeToggle';
import SittingPrivacySettings from '@/components/Account/Sittings/SittingPrivacySettings';
import SittingAccountSummary from '@/components/Account/Sittings/SittingAccountSummary';
import SittingConnectedAccounts from '@/components/Account/Sittings/SittingConnectedAccounts';

export default function SittingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <SittingHero />
        <SittingProfileForm />
        <SittingLanguageRegion />
        <SittingNotifications />
        <SittingThemeToggle />
        <SittingPrivacySettings />
        <SittingConnectedAccounts />
        <SittingAccountSummary />
      </div>
    </main>
  );
}
