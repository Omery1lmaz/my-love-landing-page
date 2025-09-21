# MyLove Landing Page

MyLove uygulaması için modern ve animasyonlu Next.js landing page'i.

## 🚀 Özellikler

- **Modern Tasarım**: Gradient renkler, glassmorphism efektleri ve modern UI
- **Animasyonlar**: Framer Motion ile smooth animasyonlar
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **SEO Optimized**: Meta tags ve Open Graph desteği
- **Performance**: Next.js 14 ile optimize edilmiş performans
- **Accessibility**: WCAG standartlarına uygun

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary**: Pink (#ec4899)
- **Secondary**: Purple (#a855f7)
- **Accent**: Blue (#0ea5e9)
- **Background**: Gradient (Pink → Purple → Blue)

### Animasyonlar
- Fade-in ve slide-up animasyonları
- Hover efektleri ve micro-interactions
- Floating elements
- Staggered animations

## 📱 Bölümler

1. **Hero Section**: Ana başlık, CTA butonları ve telefon mockup'ı
2. **Features Section**: Ana özellikler ve AI asistanları
3. **Screenshots Section**: Uygulama ekran görüntüleri carousel'i
4. **Pricing Section**: Abonelik planları ve fiyatlandırma
5. **Testimonials Section**: Kullanıcı yorumları ve istatistikler
6. **Download Section**: İndirme butonları ve özellik özeti
7. **Footer**: Linkler, iletişim ve sosyal medya

## 🛠️ Teknolojiler

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animasyonlar
- **Lucide React**: İkonlar
- **PostCSS**: CSS processing

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd landing-page
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 🚀 Production Build

```bash
# Build oluşturun
npm run build

# Production sunucusunu başlatın
npm start
```

## 📁 Proje Yapısı

```
landing-page/
├── app/
│   ├── globals.css          # Global stiller
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Ana sayfa
├── components/
│   ├── HeroSection.tsx      # Hero bölümü
│   ├── FeaturesSection.tsx  # Özellikler bölümü
│   ├── ScreenshotsSection.tsx # Ekran görüntüleri
│   ├── PricingSection.tsx   # Fiyatlandırma bölümü
│   ├── TestimonialsSection.tsx # Yorumlar
│   ├── DownloadSection.tsx  # İndirme bölümü
│   └── Footer.tsx           # Footer
├── public/                  # Statik dosyalar
├── tailwind.config.js       # Tailwind konfigürasyonu
├── next.config.js          # Next.js konfigürasyonu
└── package.json            # Bağımlılıklar
```

## 🎯 Özelleştirme

### Renkleri Değiştirme
`tailwind.config.js` dosyasındaki `colors` bölümünü düzenleyin:

```javascript
colors: {
  primary: {
    500: '#your-color',
    // ...
  }
}
```

### İçerik Güncelleme
Her component dosyasındaki metinleri ve verileri düzenleyebilirsiniz:

- **HeroSection.tsx**: Ana başlık ve açıklama
- **FeaturesSection.tsx**: Özellik listesi
- **TestimonialsSection.tsx**: Kullanıcı yorumları
- **Footer.tsx**: İletişim bilgileri

### Animasyonları Özelleştirme
`framer-motion` animasyonlarını component dosyalarında düzenleyebilirsiniz.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Geliştirme

### Yeni Bölüm Ekleme
1. `components/` klasöründe yeni component oluşturun
2. `app/page.tsx` dosyasına import edin
3. Gerekli animasyonları ekleyin

### Stil Özelleştirme
- Global stiller: `app/globals.css`
- Component stilleri: Tailwind classes
- Özel stiller: `tailwind.config.js`

## 📈 Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimize edilmiş
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Otomatik

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# dist/ klasörünü Netlify'a yükleyin
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📞 Destek

Herhangi bir sorunuz için:
- **Email**: info@mylove.app
- **GitHub Issues**: Repository issues bölümü

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**MyLove Team** ❤️
# my-love-landing-page
