'use client'

import { motion, useInView } from 'framer-motion'
import {
    Apple,
    ArrowRight,
    CheckCircle,
    Download,
    Heart,
    Play,
    Shield,
    Sparkles,
    Star,
    Zap
} from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const DownloadSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const features = [
    {
      icon: Heart,
      title: "Aşk Hikayenizi Saklayın",
      description: "Fotoğraflar, notlar ve anılarınızı organize edin"
    },
    {
      icon: Sparkles,
      title: "8 AI Asistanı",
      description: "İlişkinizi güçlendiren akıllı asistanlar"
    },
    {
      icon: Shield,
      title: "Güvenli ve Özel",
      description: "Verileriniz şifrelenir, sadece siz erişebilirsiniz"
    },
    {
      icon: Zap,
      title: "Gerçek Zamanlı Chat",
      description: "Partnerinizle anlık mesajlaşma"
    }
  ]

  return (
    <section id="download" ref={ref} className="py-20 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white mb-8">
            <Download size={16} />
            <span>Ücretsiz İndir</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Aşk Hikayenizi
            <br />
            <span className="text-yellow-300">Bugün Başlatın</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            MyLove uygulamasını indirin ve ilişkinizi güçlendiren özelliklerle tanışın. 
            Sadece ikinize özel dijital dünyanızı keşfedin.
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {/* App Store Button */}
            <motion.button
              className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Gerçek uygulamada App Store linki olacak
                console.log('App Store download')
              }}
            >
              <Apple size={32} />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </motion.button>

            {/* Google Play Button */}
            <motion.button
              className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Gerçek uygulamada Google Play linki olacak
                console.log('Google Play download')
              }}
            >
              <Play size={32} />
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-green-300" />
              <span>Ücretsiz İndirme</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-green-300" />
              <span>iOS & Android</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-green-300" />
              <span>Güvenli & Özel</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-8 bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-between px-6 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
                    <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
                    <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
                  </div>
                </div>
                
                {/* Download Screen Content */}
                <div className="p-6 h-full bg-gradient-to-br from-pink-50 to-purple-50">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 relative mx-auto mb-4">
                      <Image
                        src="/Logo.png"
                        alt="MyLove Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">MyLove</h3>
                    <p className="text-gray-600">Aşk hikayeniz burada</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                          <Heart size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Anılarınızı Saklayın</p>
                          <p className="text-sm text-gray-600">Fotoğraflar ve notlar</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                          <Sparkles size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">AI Asistanları</p>
                          <p className="text-sm text-gray-600">8 farklı asistan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={20} />
                    <span>Ücretsiz İndir</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Star size={16} className="text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Heart size={12} className="text-primary-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadSection
