import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Noto_Sans_JP, Shippori_Mincho } from 'next/font/google'
import './globals.css'

const sans = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto', display: 'swap' })
const serif = Shippori_Mincho({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-shippori', display: 'swap' })
const accent = Cormorant_Garamond({ subsets: ['latin'], weight: ['500','600'], variable: '--font-cormorant', display: 'swap' })

export const metadata: Metadata = {
  title: 'TSUZURI RESIDENCE 神戸御影｜私らしい毎日を、安心とともに。',
  description: '上質な住環境と、医療・看護・介護の安心。一人ひとりの意思を大切にする、神戸・御影のシニアレジデンス。',
}

export const viewport: Viewport = { themeColor: '#FCFAF6', colorScheme: 'light', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" className="bg-background"><body className={`${sans.variable} ${serif.variable} ${accent.variable} font-sans antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
