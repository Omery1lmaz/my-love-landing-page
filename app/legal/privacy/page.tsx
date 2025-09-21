'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, Users, Globe, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function PrivacyPolicy() {
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
          Gizlilik Politikası
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          MyLove uygulamasında gizliliğiniz bizim için çok önemlidir. Bu politika, kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
        </p>
      </motion.div>

      {/* Content */}
      <div className="space-y-8">
        {/* Veri Toplama */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Database size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Veri Toplama</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>MyLove uygulaması aşağıdaki verileri toplar:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Hesap Bilgileri:</strong> E-posta adresi, isim, profil fotoğrafı</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>İletişim Verileri:</strong> Partnerinizle paylaştığınız mesajlar ve fotoğraflar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Kullanım Verileri:</strong> Uygulama içi aktiviteler ve tercihler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Teknik Veriler:</strong> Cihaz bilgileri ve uygulama performansı</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Veri Kullanımı */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Eye size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Veri Kullanımı</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Toplanan veriler aşağıdaki amaçlarla kullanılır:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Uygulama hizmetlerinin sağlanması ve geliştirilmesi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Partnerinizle güvenli iletişim kurmanızın sağlanması</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Kişiselleştirilmiş deneyim sunulması</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Güvenlik ve dolandırıcılık önleme</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Müşteri desteği sağlanması</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Veri Güvenliği */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Lock size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Veri Güvenliği</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Verilerinizin güvenliği için aşağıdaki önlemleri alıyoruz:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Şifreleme:</strong> Tüm veriler end-to-end şifreleme ile korunur</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Güvenli Sunucular:</strong> Veriler güvenli bulut sunucularında saklanır</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Erişim Kontrolü:</strong> Sadece yetkili personel verilere erişebilir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Düzenli Güvenlik Güncellemeleri:</strong> Sistem sürekli güncellenir</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Veri Paylaşımı */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Veri Paylaşımı</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Kişisel verileriniz aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Yasal zorunluluklar gereği</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Güvenlik tehditlerinin önlenmesi için</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Açık rızanız ile</span>
              </li>
            </ul>
            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 mt-4">
              <p className="text-pink-800 font-medium">
                💝 Önemli: Partnerinizle paylaştığınız mesajlar ve fotoğraflar sadece ikiniz arasında kalır ve hiçbir üçüncü taraf tarafından görülemez.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Çerezler */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <Globe size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Çerezler ve Takip</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Uygulamamız aşağıdaki çerez türlerini kullanır:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Gerekli Çerezler:</strong> Uygulamanın çalışması için zorunlu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Performans Çerezleri:</strong> Uygulama performansını analiz etmek için</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Fonksiyonel Çerezler:</strong> Kullanıcı tercihlerini hatırlamak için</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Haklarınız */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
              <Shield size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Haklarınız</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Kişisel verilerinize erişim hakkı</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Yanlış verilerin düzeltilmesi hakkı</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Verilerin silinmesi hakkı</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Veri işlemeye itiraz etme hakkı</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Veri taşınabilirliği hakkı</span>
              </li>
            </ul>
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
            <p>Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>privacy@mylove.app</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+90 (212) 123 45 67</span>
              </div>
            </div>
            <p className="text-sm opacity-90 mt-4">
              Bu gizlilik politikası gerektiğinde güncellenebilir. Önemli değişiklikler uygulama içi bildirim ile duyurulur.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
