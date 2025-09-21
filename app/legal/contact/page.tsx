'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Heart, Users, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const contactMethods = [
    {
      icon: Mail,
      title: "E-posta",
      description: "Genel sorularınız için",
      contact: "info@mylove.app",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Phone,
      title: "Telefon",
      description: "Acil durumlar için",
      contact: "+90 (212) 123 45 67",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Canlı Destek",
      description: "Anlık yardım için",
      contact: "7/24 Hizmet",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Adres",
      description: "Ofisimiz",
      contact: "İstanbul, Türkiye",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const faqs = [
    {
      question: "Uygulamayı nasıl indirebilirim?",
      answer: "App Store veya Google Play Store'dan 'MyLove' araması yaparak ücretsiz indirebilirsiniz."
    },
    {
      question: "Verilerim güvenli mi?",
      answer: "Evet, tüm verileriniz end-to-end şifreleme ile korunur ve sadece siz erişebilirsiniz."
    },
    {
      question: "Partnerimle nasıl bağlanabilirim?",
      answer: "Partner kodunuzu paylaşarak veya e-posta adresi ile davet göndererek bağlanabilirsiniz."
    },
    {
      question: "AI asistanları nasıl çalışır?",
      answer: "8 farklı AI asistanımız ilişkinizi güçlendirmek için özel öneriler ve tavsiyeler sunar."
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <MessageCircle size={40} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          İletişim
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sorularınız, önerileriniz veya destek talepleriniz için bizimle iletişime geçin. 
          Size en kısa sürede dönüş yapacağız.
        </p>
      </motion.div>

      {/* Content */}
      <div className="space-y-8">
        {/* İletişim Yöntemleri */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">İletişim Yöntemleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="text-pink-600 font-medium">{method.contact}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* İletişim Formu */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Send size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Bize Mesaj Gönderin</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                  placeholder="Adınızı girin"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-2xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                placeholder="Mesajınızın konusu"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-2xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 resize-none"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Mesaj Gönder
                </>
              )}
            </motion.button>
          </form>
        </motion.section>

        {/* SSS */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <HelpCircle size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Sık Sorulan Sorular</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Çalışma Saatleri */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Clock size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Çalışma Saatleri</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Müşteri Desteği</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma:</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Acil Destek</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>7/24 Canlı Destek:</span>
                  <span className="text-green-600 font-medium">Aktif</span>
                </div>
                <div className="flex justify-between">
                  <span>Ortalama Yanıt:</span>
                  <span>2 saat</span>
                </div>
                <div className="flex justify-between">
                  <span>E-posta Yanıt:</span>
                  <span>24 saat</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Sosyal Medya */}
        <motion.section variants={itemVariants} className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Heart size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold">Sosyal Medyada Takip Edin</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instagram</h3>
              <p className="text-sm opacity-90">@mylove.app</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Twitter</h3>
              <p className="text-sm opacity-90">@mylove_app</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Facebook</h3>
              <p className="text-sm opacity-90">MyLove App</p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
