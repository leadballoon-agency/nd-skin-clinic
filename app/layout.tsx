import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CO2 Laser Treatment - ND Skin Clinic',
  description: 'Safe and extremely effective CO2 laser skin rejuvenation for aging and damaged skin at ND Skin Clinic, Prestwich, Manchester.',
  keywords: 'CO2 laser, skin resurfacing, wrinkle treatment, acne scars, Manchester aesthetics, Prestwich skin clinic',
  openGraph: {
    title: 'CO2 Laser Treatment - ND Skin Clinic',
    description: 'Safe and effective CO2 laser skin rejuvenation in Manchester',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}