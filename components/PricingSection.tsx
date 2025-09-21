'use client'

import { motion, useInView } from 'framer-motion'
import {
    ArrowRight,
    Check,
    Crown,
    Gift,
    Heart,
    Sparkles,
    Star,
    Zap
} from 'lucide-react'
import { useRef, useState } from 'react'

const PricingSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

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

  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      description: 'Başlangıç için mükemmel',
      price: 0,
      originalPrice: null,
      currency: 'USD',
      period: 'Süresiz',
      icon: Heart,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      popular: false,
      features: [
        '100MB depolama alanı',
        '50 fotoğraf yükleme',
        'Temel fotoğraf yönetimi',
        'Standart destek',
        'Temel chat özellikleri',
        '1 AI asistanı'
      ],
      limitations: [
        'Sınırlı depolama alanı',
        'Sınırlı fotoğraf sayısı',
        'Öncelikli destek yok'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      description: 'Çoğu çift için ideal',
      price: billingCycle === 'monthly' ? 9.99 : 99.99,
      originalPrice: billingCycle === 'yearly' ? 119.88 : null,
      currency: 'USD',
      period: billingCycle === 'monthly' ? 'ay' : 'yıl',
      icon: Star,
      color: 'from-primary-400 to-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      popular: true,
      features: [
        '5GB depolama alanı',
        '1000 fotoğraf yükleme',
        'Gelişmiş fotoğraf yönetimi',
        'Öncelikli destek',
        'Yüksek kaliteli küçük resimler',
        'Fotoğraf organizasyon araçları',
        'Sınırsız chat',
        '4 AI asistanı',
        'Spotify entegrasyonu',
        'Özel temalar'
      ],
      limitations: [
        'Aylık abonelik gerekli',
        '1000 fotoğraf sınırı'
      ]
    },
    {
      id: 'premium_plus',
      name: 'Premium Plus',
      description: 'En gelişmiş özellikler',
      price: billingCycle === 'monthly' ? 19.99 : 199.99,
      originalPrice: billingCycle === 'yearly' ? 239.88 : null,
      currency: 'USD',
      period: billingCycle === 'monthly' ? 'ay' : 'yıl',
      icon: Crown,
      color: 'from-secondary-400 to-secondary-600',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
      popular: false,
      features: [
        '50GB depolama alanı',
        '10,000 fotoğraf yükleme',
        'Gelişmiş fotoğraf yönetimi',
        'Öncelikli destek',
        'Yüksek kaliteli küçük resimler',
        'Fotoğraf organizasyon araçları',
        'Toplu işlemler',
        'Gelişmiş analitikler',
        'API erişimi',
        'Sınırsız chat',
        '8 AI asistanı',
        'Spotify entegrasyonu',
        'Özel temalar',
        'Öncelikli özellik erişimi'
      ],
      limitations: [
        'Aylık abonelik gerekli'
      ]
    }
  ]

  const handlePlanSelect = (planId: string) => {
    // Bu fonksiyon gerçek uygulamada plan seçimi için kullanılacak
    console.log('Selected plan:', planId)
  }

  return (
    <section id="pricing" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            <Gift size={16} />
            <span>Fiyatlandırma</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Size Uygun <span className="gradient-text">Planı Seçin</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            İlişkinizi güçlendiren özelliklerle dolu planlarımız arasından seçim yapın
          </motion.p>

          {/* Billing Toggle */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-800' : 'text-gray-500'}`}>
              Aylık
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-primary-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-800' : 'text-gray-500'}`}>
              Yıllık
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                %17 İndirim
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`relative rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-white shadow-2xl border-2 border-primary-200 scale-105' 
                  : 'bg-white shadow-lg border border-gray-200 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star size={16} className="fill-current" />
                    <span>En Popüler</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-gray-800">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600">
                      /{plan.period}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <p className="text-sm text-green-600 font-medium mt-1">
                      ${(plan.originalPrice - plan.price).toFixed(2)} tasarruf
                    </p>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg'
                    : plan.id === 'free'
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.id === 'free' ? (
                  <>
                    <span>Ücretsiz Başla</span>
                    <Heart size={20} />
                  </>
                ) : (
                  <>
                    <span>Planı Seç</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>

              {/* Limitations */}
              {plan.limitations.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center">
                    {plan.limitations.join(' • ')}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Plan Comparison Table */}
        <motion.div
          className="mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Plan Karşılaştırması
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-800">Özellikler</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-800">Free</th>
                    <th className="text-center py-4 px-4 font-semibold text-primary-600">Premium</th>
                    <th className="text-center py-4 px-4 font-semibold text-secondary-600">Premium Plus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Depolama Alanı', free: '100MB', premium: '5GB', premiumPlus: '50GB' },
                    { feature: 'Fotoğraf Sayısı', free: '50', premium: '1,000', premiumPlus: '10,000' },
                    { feature: 'AI Asistanları', free: '1', premium: '4', premiumPlus: '8' },
                    { feature: 'Chat Özellikleri', free: 'Temel', premium: 'Sınırsız', premiumPlus: 'Sınırsız' },
                    { feature: 'Spotify Entegrasyonu', free: '❌', premium: '✅', premiumPlus: '✅' },
                    { feature: 'Özel Temalar', free: '❌', premium: '✅', premiumPlus: '✅' },
                    { feature: 'Öncelikli Destek', free: '❌', premium: '✅', premiumPlus: '✅' },
                    { feature: 'Gelişmiş Analitikler', free: '❌', premium: '❌', premiumPlus: '✅' },
                    { feature: 'API Erişimi', free: '❌', premium: '❌', premiumPlus: '✅' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4 font-medium text-gray-800">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.free}</td>
                      <td className="py-4 px-4 text-center text-primary-600 font-medium">{row.premium}</td>
                      <td className="py-4 px-4 text-center text-secondary-600 font-medium">{row.premiumPlus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Check size={24} className="text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">30 Gün Garanti</h4>
                <p className="text-sm text-gray-600">Memnun kalmazsanız paranızı iade ediyoruz</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap size={24} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Anında Aktivasyon</h4>
                <p className="text-sm text-gray-600">Ödeme sonrası hemen kullanmaya başlayın</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={24} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Sürekli Güncellemeler</h4>
                <p className="text-sm text-gray-600">Yeni özellikler ve iyileştirmeler</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
