import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ballads & Brews 2025 - Kentucky Music Festival',
  description: 'Join us for the Ballads & Brews Music Festival featuring Kentucky\'s finest songwriters, craft beer tastings, and live music at Maiden City Brewing Company.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
