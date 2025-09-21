'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Heart } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-pink-100"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/Logo.png"
                  alt="MyLove Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                MyLove
              </span>
            </Link>

            {/* Back Button */}
            <motion.button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300 backdrop-blur-sm border border-pink-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} className="text-pink-600" />
              <span className="text-pink-600 font-medium">Geri</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <motion.main
        className="container mx-auto px-6 py-12 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="bg-white/50 backdrop-blur-xl border-t border-pink-100 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              © 2024 MyLove. Tüm hakları saklıdır.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/legal/privacy" className="text-pink-600 hover:text-pink-700 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/legal/terms" className="text-pink-600 hover:text-pink-700 transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/legal/contact" className="text-pink-600 hover:text-pink-700 transition-colors">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
