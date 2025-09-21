'use client'

import { motion } from 'framer-motion'
import {
    ArrowRight,
    Facebook,
    Heart,
    Instagram,
    Lock,
    Mail,
    MapPin,
    Phone,
    Shield,
    Twitter,
    Users,
    Youtube
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Özellikler', href: '#features' },
      { name: 'AI Asistanları', href: '#features' },
      { name: 'Güvenlik', href: '#features' },
      { name: 'Fiyatlandırma', href: '#pricing' }
    ],
    support: [
      { name: 'Yardım Merkezi', href: '/legal/contact' },
      { name: 'İletişim', href: '/legal/contact' },
      { name: 'SSS', href: '/legal/contact' },
      { name: 'Topluluk', href: '/legal/contact' }
    ],
    legal: [
      { name: 'Gizlilik Politikası', href: '/legal/privacy' },
      { name: 'Kullanım Şartları', href: '/legal/terms' },
      { name: 'Hakkımızda', href: '/legal/about' },
      { name: 'İletişim', href: '/legal/contact' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/Logo.png"
                  alt="MyLove Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">MyLove</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Çiftler için özel olarak tasarlanmış uygulama ile aşk hikayenizi dijital dünyada yaşayın. 
              Anılarınızı saklayın, AI asistanları ile ilişkinizi güçlendirin.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} />
                <span>info@mylove.app</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} />
                <span>+90 (212) 555 0123</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Product Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Ürün</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Destek</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Yasal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Güncellemelerden Haberdar Olun</h3>
            <p className="text-gray-400 mb-6">
              Yeni özellikler ve güncellemeler hakkında ilk siz haberdar olun
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Abone Ol</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; {currentYear} MyLove. Tüm hakları saklıdır.</p>
          </div>

          {/* Security Badges */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield size={16} />
              <span className="text-sm">SSL Güvenli</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Lock size={16} />
              <span className="text-sm">Şifreli</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users size={16} />
              <span className="text-sm">Özel</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
