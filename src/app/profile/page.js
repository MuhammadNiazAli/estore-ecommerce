'use client';

import React from 'react';

import ProfileHero from '@/components/Profile/ProfileHero';
import ProfileDetails from '@/components/Profile/ProfileDetails';
import ProfileOrders from '@/components/Profile/ProfileOrders';
import ProfileAddresses from '@/components/Profile/ProfileAddresses';
import ProfilePaymentMethods from '@/components/Profile/ProfilePaymentMethods';
import ProfileSettings from '@/components/Profile/ProfileSettings';

import ProfileReviews from '@/components/Profile/ProfileReviews';
import ProfileWishlist from '@/components/Profile/ProfileWishlist';
import ProfileNotifications from '@/components/Profile/ProfileNotifications';
import ProfileActivityLog from '@/components/Profile/ProfileActivityLog';
import ProfileSocialLinks from '@/components/Profile/ProfileSocialLinks';
import ProfileSubscription from '@/components/Profile/ProfileSubscription';

import ProfileAchievements from '@/components/Profile/ProfileAchievements';
import ProfileSecurityQuestions from '@/components/Profile/ProfileSecurityQuestions';
import ProfileReferralLinks from '@/components/Profile/ProfileReferralLinks';
import ProfileDeviceSessions from '@/components/Profile/ProfileDeviceSessions';
import ProfileHelp from '@/components/Profile/ProfileHelp';

const ProfilePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-12 lg:py-20 space-y-10">

      {/* Essential Sections */}
      <ProfileHero />
      <ProfileDetails />
      <ProfileOrders />
      <ProfileAddresses />
      <ProfilePaymentMethods />
      <ProfileSettings />

      {/* Optional Sections */}
      <ProfileReviews />
      <ProfileWishlist />
      <ProfileNotifications />
      <ProfileActivityLog />
      <ProfileSocialLinks />
      <ProfileSubscription />

      {/* Unimportant / Rare Sections (Optional to Render) */}
      <ProfileAchievements />
      <ProfileSecurityQuestions />
      <ProfileReferralLinks />
      <ProfileDeviceSessions />
      <ProfileHelp />

    </main>
  );
};

export default ProfilePage;
