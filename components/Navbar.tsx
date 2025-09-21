'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Heart, Menu, MessageCircle, Shield, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  )
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Özellikler', href: '#features', icon: Sparkles },
    { name: 'Ekran Görüntüleri', href: '#screenshots', icon: MessageCircle },
    { name: 'Fiyatlandırma', href: '#pricing', icon: Shield },
    { name: 'İndir', href: '#download', icon: Download }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 relative">
              <Image
                src="/Logo.png"
                alt="MyLove Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              MyLove
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-700 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium backdrop-blur-sm"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden md:flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-3xl font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#download')}
          >
            <Download size={20} />
            <span>Ücretsiz İndir</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
        >
          <div className="py-6 space-y-3 bg-white/5 backdrop-blur-xl rounded-3xl mx-2 mt-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full flex items-center gap-4 p-4 mx-3 rounded-2xl hover:bg-white/10 transition-all duration-300 text-left backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <item.icon size={22} className="text-white" />
                </div>
                <span className="font-medium text-white">{item.name}</span>
              </motion.button>
            ))}
            
            {/* Mobile CTA Button */}
            <motion.button
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-5 mx-3 rounded-3xl font-semibold mt-6 shadow-2xl shadow-pink-500/25 border border-white/20"
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#download')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Download size={22} />
              <span>Ücretsiz İndir</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.nav>
  )
}

export default Navbar
