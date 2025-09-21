'use client'

import DownloadSection from '@/components/DownloadSection'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import PricingSection from '@/components/PricingSection'
import ScreenshotsSection from '@/components/ScreenshotsSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Screenshots Section */}
      <ScreenshotsSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Download Section */}
      <DownloadSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
