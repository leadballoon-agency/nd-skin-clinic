import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import FacebookPixel from '@/components/FacebookPixel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CO2 Laser Treatment Manchester - PRP For Free Deal | ND Skin Clinic',
  description: 'Professional CO2 laser treatment for acne scars, pigmentation, stretch marks & wrinkles. Doctor-led clinic in Prestwich, Manchester. Book 2 sessions & get FREE PRP enhancement - save £300!',
  keywords: 'CO2 laser Manchester, CO2 laser Prestwich, acne scar treatment Manchester, laser skin resurfacing, pigmentation treatment, stretch marks removal, wrinkle treatment, PRP therapy, skin clinic Manchester, laser resurfacing UK, CO2 laser acne scars, fractional laser Manchester',
  authors: [{ name: 'ND Skin Clinic' }],
  creator: 'ND Skin Clinic',
  publisher: 'ND Skin Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://co2laser.co'),
  alternates: {
    canonical: 'https://co2laser.co',
  },
  openGraph: {
    title: 'CO2 Laser Treatment Manchester - PRP For Free Deal | ND Skin Clinic',
    description: 'Professional CO2 laser treatment for acne scars, pigmentation, stretch marks & wrinkles. Doctor-led clinic in Prestwich, Manchester. Book 2 sessions & get FREE PRP enhancement - save £300!',
    url: 'https://co2laser.co',
    siteName: 'ND Skin Clinic CO2 Laser',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/home1.jpg',
        width: 1200,
        height: 630,
        alt: 'CO2 Laser Treatment at ND Skin Clinic Manchester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CO2 Laser Treatment Manchester - PRP For Free Deal | ND Skin Clinic',
    description: 'Professional CO2 laser treatment for acne scars, pigmentation, stretch marks & wrinkles. Book 2 sessions & get FREE PRP enhancement.',
    images: ['/images/home1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'GB-GMR',
    'geo.placename': 'Prestwich, Manchester',
    'geo.position': '53.5258;-2.2794',
    'ICBM': '53.5258, -2.2794',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <StructuredData />
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}