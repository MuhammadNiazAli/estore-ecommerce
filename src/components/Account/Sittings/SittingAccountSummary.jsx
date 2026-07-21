'use client';

import React from 'react';
import { FiUser, FiCalendar, FiMail, FiLock } from 'react-icons/fi';

const accountInfo = {
  username: 'niaz_ali',
  email: 'niaz.ali@example.com',
  joinedDate: 'January 15, 2023',
  accountStatus: 'Active',
};

const SittingAccountSummary = () => {
  return (
    <section
      aria-label="Account summary information"
      className="w-full max-w-[900px] mx-auto bg-white text-gray-900 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold mb-6">Account Summary</h2>

      <ul className="space-y-5">
        <li className="flex items-center gap-4">
          <FiUser className="text-amber-600 text-2xl" />
          <div>
            <p className="text-sm font-semibold">Username</p>
            <p className="text-amber-500">{accountInfo.username}</p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <FiMail className="text-amber-600 text-2xl" />
          <div>
            <p className="text-sm font-semibold">Email Address</p>
            <p className="text-amber-500">{accountInfo.email}</p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <FiCalendar className="text-amber-600 text-2xl" />
          <div>
            <p className="text-sm font-semibold">Member Since</p>
            <p className="text-amber-500">{accountInfo.joinedDate}</p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <FiLock className="text-amber-600 text-2xl" />
          <div>
            <p className="text-sm font-semibold">Account Status</p>
            <p
              className={`${
                accountInfo.accountStatus === 'Active'
                  ? 'text-amber-700'
                  : 'text-red-400'
              } font-semibold`}
            >
              {accountInfo.accountStatus}
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SittingAccountSummary;
