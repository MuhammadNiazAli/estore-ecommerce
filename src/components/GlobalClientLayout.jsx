'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SimpleLoading from '@/components/Loading/SimpleLoading';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function GlobalClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); 

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [pathname]);

  return (
    <>
      {loading && <SimpleLoading />}
      {!loading && (
        <>
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <Header />
          </div>

          <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 py-6">
            {children}
          </main>

          <div className="w-full max-w-screen-xl mx-auto px-4">
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
