'use client';

import React from 'react';
import { FiMonitor, FiSmartphone, FiXCircle } from 'react-icons/fi';

const sessions = [
  {
    id: 1,
    device: 'Windows • Chrome',
    location: 'Amsterdam, Netherlands',
    ip: '192.168.0.12',
    lastActive: '5 minutes ago',
    current: true,
  },
  {
    id: 2,
    device: 'iPhone • Safari',
    location: 'Rotterdam, Netherlands',
    ip: '192.168.0.45',
    lastActive: '2 hours ago',
    current: false,
  },
];

const SecuritingSessions = () => {
  return (
    <section
      aria-label="Manage active sessions"
      className="w-full bg-white text-amber-600 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold mb-6">Active Sessions</h2>

      <div className="space-y-5">
        {sessions.map((session) => (
          <div
            key={session.id}
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border border-amber-900 rounded-xl p-4 transition-all duration-300 ${
              session.current ? 'ring-2 ring-amber-600' : ''
            }`}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-950 text-amber-600">
                {session.device.toLowerCase().includes('iphone') ||
                session.device.toLowerCase().includes('android') ? (
                  <FiSmartphone className="text-xl" />
                ) : (
                  <FiMonitor className="text-xl" />
                )}
              </div>

              <div>
                <p className="text-sm font-medium">{session.device}</p>
                <p className="text-xs text-amber-500">
                  {session.location} • IP: {session.ip}
                </p>
                <p className="text-xs text-amber-600 mt-1">
                  Last active: {session.lastActive}
                </p>
                {session.current && (
                  <span className="inline-block mt-2 text-amber-600 text-xs font-semibold">
                    This Device
                  </span>
                )}
              </div>
            </div>

            {!session.current && (
              <button
                type="button"
                className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 bg-amber-900 hover:bg-amber-800 rounded-full text-xs font-medium shadow-sm transition"
              >
                <FiXCircle />
                Revoke
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecuritingSessions;
