'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import SecuritingHero from '@/components/Account/Securiting/SercutingHero';
import SecuritingPassword from '@/components/Account/Securiting/SecuritingPassword';
import Securiting2FA from '@/components/Account/Securiting/Securiting2FA';
import SecuritingAlerts from '@/components/Account/Securiting/SecuritingAlerts';
import SecuritingSessions from '@/components/Account/Securiting/SecuritingSessions';
import SecuritingDeleteAccount from '@/components/Account/Securiting/SecuritingDeleteAccount';

export default function SecuritingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />

      <div className="flex-1 space-y-12">
        <SecuritingHero />
        <SecuritingPassword />
        <Securiting2FA />
        <SecuritingAlerts />
        <SecuritingSessions />
        <SecuritingDeleteAccount />
      </div>
    </main>
  );
}
