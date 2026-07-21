'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13 app router ke liye

const LogoutingRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // 3 seconds baad redirect karein login ya home page par
    const timer = setTimeout(() => {
      router.push('/login'); // yahan apni redirect path daalein
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section
      aria-label="Redirecting after logout"
      className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg text-amber-600 text-center"
    >
      <h2 className="text-2xl font-bold mb-4">
        You have been logged out successfully.
      </h2>
      <p className="text-amber-500">
        Redirecting you to the login page...
      </p>
    </section>
  );
};

export default LogoutingRedirect;
