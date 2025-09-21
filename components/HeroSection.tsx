'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Heart, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      {/* Floating Hearts */}
      <motion.div
        className="absolute top-20 left-10 text-primary-200"
        variants={floatingVariants}
        animate="animate"
      >
        <Heart size={40} fill="currentColor" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-secondary-200"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Heart size={32} fill="currentColor" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-accent-200"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Heart size={36} fill="currentColor" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary-600 mb-8 shadow-lg"
          >
            <Sparkles size={16} className="text-primary-500" />
            <span>Çiftler İçin Özel Tasarlandı</span>
            <Star size={16} className="text-yellow-500 fill-current" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Aşk Hikayenizi</span>
            <br />
            <span className="text-gray-800">Saklayın</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Fotoğraflar, anılar, chat ve AI asistanları ile ilişkinizi güçlendirin. 
            Sadece ikinize özel dijital dünyanızı keşfedin.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              className="btn-primary group flex items-center gap-2 text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download size={20} />
              <span>Planları Gör</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="btn-secondary group flex items-center gap-2 text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Özellikleri Keşfet</span>
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Mutlu Çift</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">50K+</div>
              <div className="text-gray-600">Paylaşılan Anı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">4.9★</div>
              <div className="text-gray-600">Uygulama Puanı</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Real App Screenshot */}
                <div className="w-full h-full relative">
                  <Image
                    src="/Simulator Screenshot - iPhone 16 - 2025-09-21 at 12.36.55.png"
                    alt="MyLove App - Ana Sayfa"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay with app info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Heart size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">MyLove</h3>
                        <p className="text-white/80 text-sm">Ana Sayfa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Heart size={16} className="text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={12} className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
