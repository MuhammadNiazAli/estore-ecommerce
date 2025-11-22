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
      className="w-full bg-gray-900 text-yellow-400 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold mb-6">Active Sessions</h2>

      <div className="space-y-5">
        {sessions.map((session) => (
          <div
            key={session.id}
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-800 border border-yellow-700 rounded-xl p-4 transition-all duration-300 ${
              session.current ? 'ring-2 ring-yellow-400' : ''
            }`}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-yellow-900 text-yellow-400">
                {session.device.toLowerCase().includes('iphone') ||
                session.device.toLowerCase().includes('android') ? (
                  <FiSmartphone className="text-xl" />
                ) : (
                  <FiMonitor className="text-xl" />
                )}
              </div>

              <div>
                <p className="text-sm font-medium">{session.device}</p>
                <p className="text-xs text-yellow-300">
                  {session.location} • IP: {session.ip}
                </p>
                <p className="text-xs text-yellow-400 mt-1">
                  Last active: {session.lastActive}
                </p>
                {session.current && (
                  <span className="inline-block mt-2 text-yellow-400 text-xs font-semibold">
                    This Device
                  </span>
                )}
              </div>
            </div>

            {!session.current && (
              <button
                type="button"
                className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 bg-yellow-700 hover:bg-yellow-600 rounded-full text-xs font-medium shadow-sm transition"
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
