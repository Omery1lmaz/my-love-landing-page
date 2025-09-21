'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Award, Globe, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "Kurucu & CEO",
      description: "10+ yıl teknoloji deneyimi",
      avatar: "👨‍💼"
    },
    {
      name: "Ayşe Demir",
      role: "CTO",
      description: "Mobil uygulama uzmanı",
      avatar: "👩‍💻"
    },
    {
      name: "Mehmet Kaya",
      role: "UI/UX Tasarımcı",
      description: "Kullanıcı deneyimi odaklı",
      avatar: "👨‍🎨"
    },
    {
      name: "Zeynep Özkan",
      role: "Pazarlama Müdürü",
      description: "Dijital pazarlama uzmanı",
      avatar: "👩‍💼"
    }
  ]

  const stats = [
    { number: "50K+", label: "Aktif Kullanıcı", icon: Users },
    { number: "1M+", label: "Paylaşılan Anı", icon: Heart },
    { number: "99.9%", label: "Uptime", icon: Award },
    { number: "24/7", label: "Destek", icon: Globe }
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <div className="w-20 h-20 relative mx-auto mb-6">
          <Image
            src="/Logo.png"
            alt="MyLove Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Hakkımızda
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          MyLove, çiftlerin aşk hikayelerini dijital dünyada güvenle saklamaları ve paylaşmaları için tasarlanmış özel bir platformdur.
        </p>
      </motion.div>

      {/* Content */}
      <div className="space-y-8">
        {/* Misyonumuz */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Target size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Misyonumuz</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              MyLove olarak, çiftlerin en değerli anılarını güvenli bir şekilde saklamalarını ve 
              ilişkilerini güçlendirmelerini sağlamak için çalışıyoruz. Teknoloji ile aşkı 
              buluşturarak, her çiftin kendine özel dijital dünyasını yaratmasına yardımcı oluyoruz.
            </p>
            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6 mt-6">
              <p className="text-pink-800 font-medium text-center">
                💕 "Aşk, paylaşıldıkça büyür. MyLove ile aşk hikayenizi sonsuza kadar saklayın."
              </p>
            </div>
          </div>
        </motion.section>

        {/* Vizyonumuz */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Globe size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Vizyonumuz</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              Dünya çapında milyonlarca çiftin aşk hikayelerini güvenle sakladığı, 
              teknoloji ile duygusal bağları güçlendiren global bir platform olmak istiyoruz. 
              Her çiftin kendine özel dijital dünyasında mutlu olmasını sağlamak en büyük hedefimiz.
            </p>
          </div>
        </motion.section>

        {/* İstatistikler */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Rakamlarla MyLove</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hikayemiz */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Heart size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Hikayemiz</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              MyLove'un hikayesi, kurucumuzun kendi aşk hikayesinden ilham alınarak başladı. 
              Çiftlerin en değerli anılarını güvenle saklayabilecekleri, AI asistanları ile 
              ilişkilerini güçlendirebilecekleri bir platform hayali ile yola çıktık.
            </p>
            <p className="text-lg leading-relaxed">
              2024 yılında kurulan MyLove, kısa sürede binlerce çiftin güvenini kazandı. 
              Teknoloji ile aşkı buluşturan yenilikçi yaklaşımımız sayesinde, çiftlerin 
              dijital dünyada da mutlu olmalarını sağlıyoruz.
            </p>
          </div>
        </motion.section>

        {/* Takımımız */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Takımımız</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-pink-600 font-medium">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Değerlerimiz */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <Award size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Değerlerimiz</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aşk</h3>
              <p className="text-gray-600">Her şeyin merkezinde aşk var. Çiftlerin mutluluğu bizim önceliğimiz.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Güven</h3>
              <p className="text-gray-600">Verilerinizin güvenliği için en yüksek standartları uyguluyoruz.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">İnovasyon</h3>
              <p className="text-gray-600">Sürekli gelişim ve yenilik ile en iyi deneyimi sunuyoruz.</p>
            </div>
          </div>
        </motion.section>

        {/* İletişim */}
        <motion.section variants={itemVariants} className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Mail size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold">İletişim</h2>
          </div>
          <div className="space-y-4">
            <p>Bizimle iletişime geçmek için:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>info@mylove.app</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>+90 (212) 123 45 67</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <p className="text-sm opacity-90">
                  Sorularınız için 7/24 destek ekibimiz hizmetinizdedir. 
                  Genellikle 2 saat içinde yanıt veriyoruz.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
