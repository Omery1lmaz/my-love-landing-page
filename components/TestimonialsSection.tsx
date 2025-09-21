'use client'

import { motion, useInView } from 'framer-motion'
import { Heart, Quote, Star } from 'lucide-react'
import { useRef } from 'react'

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Ahmet & Elif",
      location: "İstanbul",
      duration: "2 yıl",
      rating: 5,
      text: "MyLove sayesinde ilişkimiz çok daha güçlendi. AI asistanları gerçekten yardımcı oluyor ve anılarımızı saklamak harika!",
      avatar: "AE",
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 2,
      name: "Mehmet & Ayşe",
      location: "Ankara",
      duration: "1.5 yıl",
      rating: 5,
      text: "Chat sistemi çok güvenli ve kullanışlı. Partnerimle her gün bu uygulamada konuşuyoruz. Kesinlikle tavsiye ederim!",
      avatar: "MA",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      name: "Can & Zeynep",
      location: "İzmir",
      duration: "3 yıl",
      rating: 5,
      text: "Yıldönümü takibi özelliği sayesinde hiçbir özel günü kaçırmıyoruz. AI asistanları sürpriz fikirleri için mükemmel!",
      avatar: "CZ",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      name: "Emre & Seda",
      location: "Bursa",
      duration: "6 ay",
      rating: 5,
      text: "Fotoğraf galerisi özelliği harika! Birlikte çektiğimiz tüm anıları organize etmek çok kolay. Teşekkürler MyLove!",
      avatar: "ES",
      color: "from-green-400 to-green-600"
    },
    {
      id: 5,
      name: "Oğuz & Deniz",
      location: "Antalya",
      duration: "4 yıl",
      rating: 5,
      text: "Spotify entegrasyonu sayesinde müzik zevkimizi paylaşıyoruz. Bu uygulama ilişkimizi gerçekten güçlendirdi.",
      avatar: "OD",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      id: 6,
      name: "Burak & Cansu",
      location: "Adana",
      duration: "2.5 yıl",
      rating: 5,
      text: "Güvenlik konusunda hiç endişemiz yok. Verilerimiz güvende ve sadece biz erişebiliyoruz. Mükemmel bir uygulama!",
      avatar: "BC",
      color: "from-indigo-400 to-indigo-600"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart size={16} />
            <span>Kullanıcı Yorumları</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mutlu Çiftlerden <span className="gradient-text">Yorumlar</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            MyLove uygulamasını kullanan çiftlerin deneyimlerini okuyun
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote size={24} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Mutlu Çift</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">50K+</div>
              <div className="text-gray-600">Paylaşılan Anı</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 mb-2">4.9★</div>
              <div className="text-gray-600">Uygulama Puanı</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Memnuniyet Oranı</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
