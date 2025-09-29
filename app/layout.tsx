import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ballads & Brews 2025 - Kentucky Music Festival | Live Music & Craft Beer',
  description: 'Join us for the Ballads & Brews Music Festival featuring Kentucky\'s finest songwriters, craft beer tastings, and live music at Maiden City Brewing Company. October 4-5, 2025.',
  keywords: ['music festival', 'Kentucky music', 'craft beer', 'Cynthiana', 'ballads and brews', 'live music', 'folk music', 'Americana'],
  authors: [{ name: 'Ballads & Brews Festival' }],
  creator: 'Ballads & Brews Festival',
  publisher: 'The Train Station & Maiden City Brewing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bbfest.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ballads & Brews 2025 - Kentucky Music Festival | Live Music & Craft Beer',
    description: 'Join us for the Ballads & Brews Music Festival featuring Kentucky\'s finest songwriters, craft beer tastings, and live music at Maiden City Brewing Company. October 4-5, 2025 in Cynthiana, KY.',
    url: 'https://bbfest.vercel.app',
    siteName: 'Ballads & Brews Festival',
    images: [
      {
        url: '/assets/c1833c7a-716a-489e-bb90-e8e66cc0971f.png',
        width: 1200,
        height: 630,
        alt: 'Ballads & Brews Music Festival 2025 - Live music and craft beer in Kentucky',
        type: 'image/png',
      },
      {
        url: '/assets/mc2.jpg',
        width: 800,
        height: 600,
        alt: 'Maiden City Brewing Company venue for Ballads & Brews Festival',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'United States',
    emails: ['info@balladsandbrews.com'],
    phoneNumbers: ['+1-859-555-0123'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ballads & Brews 2025 - Kentucky Music Festival | Live Music & Craft Beer',
    description: '🎸 Join us for the Ballads & Brews Music Festival! Featuring Kentucky\'s finest songwriters, craft beer tastings, and live music at Maiden City Brewing Company. October 4-5, 2025 in Cynthiana, KY.',
    images: [
      {
        url: '/assets/c1833c7a-716a-489e-bb90-e8e66cc0971f.png',
        alt: 'Ballads & Brews Music Festival 2025 - Live music and craft beer in Kentucky',
      },
    ],
    creator: '@balladsandbrews',
    site: '@balladsandbrews',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
    verification: {
      google: 'your-google-site-verification-code',
    },
    other: {
      'fb:app_id': 'your-facebook-app-id',
      'og:latitude': '38.4028',
      'og:longitude': '-84.3947',
      'og:street-address': '272 Seabiscuit Way',
      'og:locality': 'Cynthiana',
      'og:region': 'KY',
      'og:postal-code': '41031',
      'og:country-name': 'United States',
      'place:location:latitude': '38.4028',
      'place:location:longitude': '-84.3947',
      'music:creator': 'The Train Station & Maiden City Brewing',
      'music:release_date': '2025-10-04',
    },
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
