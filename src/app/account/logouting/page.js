'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import LogoutingHero from '@/components/Account/Logouting/LogoutingHero';
import LogoutingConfirmation from '@/components/Account/Logouting/LogoutingConfirmation';
import LogoutingButton from '@/components/Account/Logouting/LogoutingButton';
import LogoutingFeedback from '@/components/Account/Logouting/LogoutingFeedback';
import LogoutingRedirect from '@/components/Account/Logouting/LogoutingRedirect';
import LogoutingLoader from '@/components/Account/Logouting/LogoutingLoader';
import LogoutingFooter from '@/components/Account/Logouting/LogoutingFooter';

export default function LogoutingPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <LogoutingHero />
        <LogoutingConfirmation />
        <LogoutingButton />
        <LogoutingFeedback />
        <LogoutingRedirect />
        <LogoutingLoader />
        <LogoutingFooter />
      </div>
    </main>
  );
}
