'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import RewardingHero from '@/components/Account/Rewarding/RewardingHero';
import RewardingTiers from '@/components/Account/Rewarding/RewardingTiers';
import RewardingPointsTracker from '@/components/Account/Rewarding/RewardingPointsTracker';
import RewardingHowItWorks from '@/components/Account/Rewarding/RewardingHowItWorks';
import RewardingBenefitsGrid from '@/components/Account/Rewarding/RewardingBenefitsGrid';
import RewardingRedeemOptions from '@/components/Account/Rewarding/RewardingRedeemOptions';
import RewardingInviteFriends from '@/components/Account/Rewarding/RewardingInviteFriends';
import RewardingActivityHistory from '@/components/Account/Rewarding/RewardingActivityHistory';
import RewardingFAQs from '@/components/Account/Rewarding/RewardingFAQs';

export default function RewardingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <RewardingHero />
        <RewardingPointsTracker />
        <RewardingTiers />
        <RewardingHowItWorks />
        <RewardingBenefitsGrid />
        <RewardingRedeemOptions />
        <RewardingInviteFriends />
        <RewardingActivityHistory />
        <RewardingFAQs />
      </div>
    </main>
  );
}
