import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MyLove - Çiftler İçin Özel Uygulama',
  description: 'Aşk hikayenizi saklayın, anılarınızı paylaşın ve ilişkinizi güçlendirin. AI asistanları, chat, timeline ve daha fazlası ile çiftler için tasarlanmış özel uygulama.',
  keywords: 'çift uygulaması, aşk, ilişki, anı, chat, AI asistan, timeline, fotoğraf paylaşımı',
  authors: [{ name: 'MyLove Team' }],
  creator: 'MyLove',
  publisher: 'MyLove',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mylove.app'),
  openGraph: {
    title: 'MyLove - Çiftler İçin Özel Uygulama',
    description: 'Aşk hikayenizi saklayın, anılarınızı paylaşın ve ilişkinizi güçlendirin.',
    url: 'https://mylove.app',
    siteName: 'MyLove',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MyLove App',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyLove - Çiftler İçin Özel Uygulama',
    description: 'Aşk hikayenizi saklayın, anılarınızı paylaşın ve ilişkinizi güçlendirin.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
