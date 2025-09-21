'use client'

import { motion, useInView } from 'framer-motion'
import {
    Brain,
    Calendar,
    Camera,
    ChevronLeft,
    ChevronRight,
    Heart,
    Play,
    Users
} from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const ScreenshotsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const screenshots = [
    {
      id: 1,
      title: "Ana Sayfa",
      description: "Günlük ruh halinizi paylaşın ve partnerinizin durumunu görün",
      image: "/Simulator Screenshot - iPhone 16 - 2025-09-21 at 12.36.55.png",
      icon: Heart
    },
    {
      id: 2,
      title: "Chat & AI Asistanları",
      description: "Partnerinizle sohbet edin ve AI asistanlarından yardım alın",
      image: "/Simulator Screenshot - iPhone 16 - 2025-09-21 at 12.37.02.png",
      icon: Brain
    },
    {
      id: 3,
      title: "Etkinlikler",
      description: "Özel günlerinizi planlayın ve hatırlayın",
      image: "/Simulator Screenshot - iPhone 16 - 2025-09-21 at 12.37.13.png",
      icon: Calendar
    },
    {
      id: 4,
      title: "Fotoğraf Albümü",
      description: "Anılarınızı güvenle saklayın ve organize edin",
      image: "/Simulator Screenshot - iPhone 16 - 2025-09-21 at 12.37.53.png",
      icon: Camera
    },
    {
      id: 5,
      title: "Profil & Ayarlar",
      description: "Hesabınızı yönetin ve kişiselleştirin",
      image: "/Simulator Screenshot - iPhone 16 - 2025-09-21 at 12.38.22.png",
      icon: Users
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Camera size={16} />
            <span>Uygulama Ekran Görüntüleri</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            MyLove'u
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Keşfedin
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uygulamamızın güçlü özelliklerini ve kullanıcı dostu arayüzünü keşfedin. 
            Her ekran, aşk hikayenizi güzelleştirmek için tasarlandı.
          </motion.p>
        </motion.div>

        {/* Screenshots Carousel */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Screenshot Display */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto">
            <div className="aspect-[9/19.5] relative">
              <Image
                src={screenshots[currentSlide].image}
                alt={screenshots[currentSlide].title}
                fill
                className="object-contain"
                priority
              />
              
              {/* Overlay with app info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = screenshots[currentSlide].icon;
                      return <IconComponent size={16} className="text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {screenshots[currentSlide].title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {screenshots[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} className="text-gray-700" />
          </motion.button>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {screenshots.map((screenshot, index) => (
              <motion.button
                key={screenshot.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative w-12 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  currentSlide === index
                    ? 'ring-2 ring-pink-500 scale-110'
                    : 'opacity-60 hover:opacity-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  className="object-cover"
                />
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="text-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Kişiselleştirilmiş Deneyim</h3>
            <p className="text-gray-600 leading-relaxed">
              Her çiftin kendine özel arayüzü ve özelleştirilebilir temaları ile 
              aşk hikayenizi benzersiz kılın.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Brain size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Destekli Özellikler</h3>
            <p className="text-gray-600 leading-relaxed">
              8 farklı AI asistanı ile ilişkinizi güçlendirin, özel öneriler alın 
              ve aşk hikayenizi daha da güzelleştirin.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Camera size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Güvenli Anı Saklama</h3>
            <p className="text-gray-600 leading-relaxed">
              Fotoğraflarınızı ve anılarınızı end-to-end şifreleme ile güvenle saklayın. 
              Sadece siz ve partneriniz erişebilirsiniz.
            </p>
          </motion.div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const downloadSection = document.getElementById('download')
              if (downloadSection) {
                downloadSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Play size={24} />
            <span>Hemen İndirin</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ScreenshotsSection