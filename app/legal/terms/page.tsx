'use client'

import { motion } from 'framer-motion'
import { FileText, CheckCircle, XCircle, AlertTriangle, Users, Shield, Heart, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function TermsOfService() {
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
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <FileText size={40} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Kullanım Şartları
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          MyLove uygulamasını kullanarak bu şartları kabul etmiş sayılırsınız. Lütfen dikkatlice okuyun.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
        </p>
      </motion.div>

      {/* Content */}
      <div className="space-y-8">
        {/* Genel Şartlar */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <FileText size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Genel Şartlar</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Bu kullanım şartları MyLove uygulamasının kullanımını düzenler:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Uygulamayı kullanarak bu şartları kabul etmiş sayılırsınız</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>18 yaşından küçük kullanıcılar veli izni ile kullanabilir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Hesabınızın güvenliğinden siz sorumlusunuz</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Bu şartlar gerektiğinde güncellenebilir</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Kullanıcı Sorumlulukları */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Kullanıcı Sorumlulukları</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Uygulamayı kullanırken aşağıdaki kurallara uymalısınız:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* İzin Verilenler */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={20} className="text-green-600" />
                  <h3 className="font-semibold text-green-800">İzin Verilenler</h3>
                </div>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Partnerinizle güvenli iletişim kurmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Anılarınızı ve fotoğraflarınızı paylaşmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>AI asistanlarından yararlanmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Etkinliklerinizi planlamak</span>
                  </li>
                </ul>
              </div>

              {/* Yasaklananlar */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle size={20} className="text-red-600" />
                  <h3 className="font-semibold text-red-800">Yasaklananlar</h3>
                </div>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Zararlı veya uygunsuz içerik paylaşmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Başkalarının haklarını ihlal etmek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Uygulamayı kötüye kullanmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sahte hesap oluşturmak</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* İçerik Politikası */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Shield size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">İçerik Politikası</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Paylaştığınız içerikler aşağıdaki kurallara uymalıdır:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Telif hakkı ihlali yapmamalıdır</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Nefret söylemi veya ayrımcılık içermemelidir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Şiddet veya zararlı içerik barındırmamalıdır</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Spam veya reklam içermemelidir</span>
              </li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mt-4">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-yellow-800 font-medium">Uyarı</p>
                  <p className="text-yellow-700 text-sm mt-1">
                    Kurallara uymayan içerikler otomatik olarak tespit edilir ve hesabınız askıya alınabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Fikri Mülkiyet */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <Heart size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Fikri Mülkiyet</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Fikri mülkiyet hakları ile ilgili önemli bilgiler:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>MyLove uygulaması ve tüm özellikleri telif hakkı ile korunur</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Paylaştığınız içeriklerin hakları size aittir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Uygulamayı kopyalayamaz veya dağıtamazsınız</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Reverse engineering yapamazsınız</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Hizmet Kesintileri */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Hizmet Kesintileri</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Hizmet kesintileri durumunda:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Planlı bakım çalışmaları önceden duyurulur</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Acil durumlar için 7/24 teknik destek</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Veri kaybı durumunda yedekleme sistemi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Hizmet kesintilerinden sorumlu değiliz</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Hesap Sonlandırma */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
              <XCircle size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Hesap Sonlandırma</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>Hesabınız aşağıdaki durumlarda sonlandırılabilir:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Kullanım şartlarını ihlal etmeniz durumunda</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Kendi isteğinizle hesabı kapatmanız</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Uzun süre aktif olmamanız (2 yıl)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Yasal zorunluluklar gereği</span>
              </li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mt-4">
              <p className="text-blue-800 font-medium">
                💡 Bilgi: Hesabınızı kapatmadan önce önemli verilerinizi yedeklemeyi unutmayın.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Sorumluluk Reddi */}
        <motion.section variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center">
              <Shield size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Sorumluluk Reddi</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>MyLove uygulaması aşağıdaki durumlarda sorumlu değildir:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Kullanıcılar arasındaki anlaşmazlıklar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Üçüncü taraf hizmetlerindeki sorunlar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>İnternet bağlantı sorunları</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Kullanıcı hatalarından kaynaklanan veri kayıpları</span>
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
            <p>Kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>legal@mylove.app</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+90 (212) 123 45 67</span>
              </div>
            </div>
            <p className="text-sm opacity-90 mt-4">
              Bu kullanım şartları gerektiğinde güncellenebilir. Önemli değişiklikler uygulama içi bildirim ile duyurulur.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
