'use client';

import React, { useState } from 'react';
import AccountHero from '@/components/Account/AccountHero';
import AccountSidebar from '@/components/Account/AccountSidebar';
import AccountProfile from '@/components/Account/AccountProfile';
import AccountOrders from '@/components/Account/AccountOrders';
import AccountWishlist from '@/components/Account/AccountWishlist';
import AccountAddresses from '@/components/Account/AccountAddresses';
import AccountPaymentMethods from '@/components/Account/AccountPaymentMethods';
import AccountSecurity from '@/components/Account/AccountSecurity';
import AccountSettings from '@/components/Account/AccountSettings';
import AccountLogout from '@/components/Account/AccountLogout';

export default function AccountPage() {
  const [userData, setUserData] = useState({
    fullName: 'Niaz Ali',
    email: 'niaz@example.com',
    phone: '+31 1234567890',
    profilePic: '/profile.jpg',
    addresses: [],          
    paymentMethods: [],     
    preferences: {
      newsletter: true,
      darkMode: true,
    },
  });

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <AccountHero userData={userData} />
        <AccountProfile userData={userData} setUserData={setUserData} />
        <AccountOrders />
        <AccountWishlist />
        <AccountAddresses addresses={userData.addresses} setUserData={setUserData} />
        <AccountPaymentMethods methods={userData.paymentMethods} setUserData={setUserData} />
        <AccountSecurity userData={userData} setUserData={setUserData} />
        <AccountSettings preferences={userData.preferences} setUserData={setUserData} />
        <AccountLogout />
      </div>
    </main>
  );
}
