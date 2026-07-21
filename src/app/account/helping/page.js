'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import HelpingHero from '@/components/Account/Helping/HelpingHero';
import HelpingFAQs from '@/components/Account/Helping/HelpingFAQs';
import HelpingReturns from '@/components/Account/Helping/HelpingReturns';
import HelpingPayments from '@/components/Account/Helping/HelpingPayments';
import HelpingShipping from '@/components/Account/Helping/HelpingShipping';
import HelpingOrders from '@/components/Account/Helping/HelpingOrders';
import HelpingGiftCards from '@/components/Account/Helping/HelpingGiftCards';
import HelpingPromotions from '@/components/Account/Helping/HelpingPromotions';
import HelpingAccount from '@/components/Account/Helping/HelpingAccount';
import HelpingSecurity from '@/components/Account/Helping/HelpingSecurity';
import HelpingContact from '@/components/Account/Helping/HelpingContact';
import HelpingLiveChat from '@/components/Account/Helping/HelpingLiveChat';
import HelpingPolicies from '@/components/Account/Helping/HelpingPolicies';
import HelpingTrackOrder from '@/components/Account/Helping/HelpingTrackOrder';
import HelpingSupportTickets from '@/components/Account/Helping/HelpingSupportTickets';
import HelpingLanguageSupport from '@/components/Account/Helping/HelpingLanguageSupport';

export default function HelpingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <HelpingHero />
        <HelpingFAQs />
        <HelpingReturns />
        <HelpingPayments />
        <HelpingShipping />
        <HelpingOrders />
        <HelpingGiftCards />
        <HelpingPromotions />
        <HelpingAccount />
        <HelpingSecurity />
        <HelpingContact />
        <HelpingLiveChat />
        <HelpingPolicies />
        <HelpingTrackOrder />
        <HelpingSupportTickets />
        <HelpingLanguageSupport />
      </div>
    </main>
  );
}
