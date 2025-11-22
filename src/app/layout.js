import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import GlobalClientLayout from '@/components/GlobalClientLayout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Niaz E-commerce eStore',
  description: 'Demo with header, footer, and loading animations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 flex flex-col min-h-screen`}
      >
        <GlobalClientLayout>
          {children}
        </GlobalClientLayout>
      </body>
    </html>
  );
}
