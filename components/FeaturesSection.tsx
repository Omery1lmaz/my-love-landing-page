'use client'

import { motion, useInView } from 'framer-motion'
import {
    BookOpen,
    Brain,
    Calendar,
    Camera,
    Clock,
    Heart,
    Lightbulb,
    MessageCircle,
    Music,
    PenTool,
    Scale,
    Shield,
    Sparkles,
    Users,
    Zap
} from 'lucide-react'
import { useRef } from 'react'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const mainFeatures = [
    {
      icon: Heart,
      title: "Aşk Hikayenizi Saklayın",
      description: "Fotoğraflar, notlar ve anılarınızı ikiniz için özel bir yerde toplayın.",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: MessageCircle,
      title: "Özel Chat Sistemi",
      description: "Sadece partnerinizle güvenli mesajlaşma, gerçek zamanlı bildirimler.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Camera,
      title: "Anı Galerisi",
      description: "Birlikte çektiğiniz fotoğrafları organize edin ve özel albümler oluşturun.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Calendar,
      title: "Yıldönümü Takibi",
      description: "Özel günleri asla kaçırmayın, hatırlatıcılar ve sürpriz fikirler.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Music,
      title: "Spotify Entegrasyonu",
      description: "Birlikte dinlediğiniz şarkıları paylaşın ve çalma listeleri oluşturun.",
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Shield,
      title: "Güvenli ve Özel",
      description: "Verileriniz şifrelenir, sadece siz ve partneriniz erişebilir.",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ]

  const aiFeatures = [
    {
      icon: Brain,
      title: "İletişim Asistanı",
      description: "Tartışmalar sırasında yapıcı konuşma önerileri",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: Lightbulb,
      title: "Sürpriz Planlayıcı",
      description: "Özel günler için yaratıcı fikirler ve hediye önerileri",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: PenTool,
      title: "Romantik Şair",
      description: "Kişiye özel şiirler ve romantik mesaj önerileri",
      color: "from-rose-400 to-rose-600"
    },
    {
      icon: Heart,
      title: "Duygusal Destek",
      description: "Empatik cevaplar ve stres yönetimi teknikleri",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Clock,
      title: "Günlük Hatırlatıcı",
      description: "İlişkiyi besleyen küçük görevler ve motivasyon mesajları",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Users,
      title: "İlişki Koçu",
      description: "Haftalık ilişki ipuçları ve etkinlik önerileri",
      color: "from-violet-400 to-violet-600"
    },
    {
      icon: BookOpen,
      title: "Anı Hikayecisi",
      description: "Beraber yaşanmış anıları hikayeleştirme",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: Scale,
      title: "Problem Çözücü",
      description: "Sakinleştirici yorumlar ve çatışma çözüm stratejileri",
      color: "from-slate-400 to-slate-600"
    }
  ]

  return (
    <section id="features" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Özellikler</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            İlişkinizi <span className="gradient-text">Güçlendiren</span> Özellikler
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Çiftler için özel olarak tasarlanmış özelliklerle aşk hikayenizi dijital dünyada yaşayın
          </motion.p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card group"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Features Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap size={16} />
                <span>AI Asistanları</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                8 Farklı AI Asistanı ile İlişkinizi Güçlendirin
              </h3>
              
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Her durum için özel olarak eğitilmiş AI asistanları ile ilişkinizdeki her anı daha anlamlı hale getirin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>
                  
                  <p className="text-sm text-white/80">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
