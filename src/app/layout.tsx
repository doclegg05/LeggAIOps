import type { Metadata } from 'next'
import Script from 'next/script'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Legg AI Ops - Modern tools, built fast',
  description:
    'Legg AI Ops helps small businesses, consultants, and founders ship websites, automations, and lean MVPs in weeks, not quarters.',
  openGraph: {
    title: 'Legg AI Ops - Modern tools, built fast',
    description:
      'Service paths for growth, operations, and lean software builds. Fixed quotes, practical scopes, and clear handoff.',
    type: 'website',
    url: 'https://leggaiops.com',
  },
  metadataBase: new URL('https://leggaiops.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} bg-paper text-ink`}
    >
      <head>
        <Script
          id="analytics-placeholder"
          src="https://plausible.io/js/script.js"
          data-domain="leggaiops.com"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-w-80 bg-paper bg-legg-grid [background-size:44px_44px] font-sans">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/10 to-white/70"
        />
        {children}
      </body>
    </html>
  )
}
