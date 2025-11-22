'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';




import GiftCardBalance from '@/components/Account/GiftCards/GiftCardBalance';
import GiftCardConfirmation from '@/components/Account/GiftCards/GiftCardConfirmation';
import GiftCardDetails from '@/components/Account/GiftCards/GiftCardDetails';
import GiftCardFAQ from '@/components/Account/GiftCards/GiftCardFAQ';
import GiftCardHero from '@/components/Account/GiftCards/GiftCardHero';
import GiftCardList from '@/components/Account/GiftCards/GiftCardList';
import GiftCardOffers from '@/components/Account/GiftCards/GiftCardOffers';
import GiftCardPurchaseForm from '@/components/Account/GiftCards/GiftCardPurchaseForm';
import GiftCardRedeem from '@/components/Account/GiftCards/GiftCardRedeem';

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <GiftCardHero />
        <GiftCardOffers />
        <GiftCardList/>
        <GiftCardDetails />
        <GiftCardPurchaseForm />
        <GiftCardRedeem/>
        <GiftCardBalance/>
        <GiftCardConfirmation />
        <GiftCardFAQ />
      </div>
    </main>
  );
}
