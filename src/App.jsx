import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useScrollAnimations } from './hooks/useScrollAnimations'

// Components
import ErrorBoundary from './components/shared/ErrorBoundary'
import Header from './components/shared/Header'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import FeaturesGrid from './components/Features/FeaturesGrid'
import BuyingAppliancesSection from './components/shared/BuyingAppliancesSection'
import Timeline from './components/Timeline/Timeline'
import TestimonialsCarousel from './components/Testimonials/TestimonialsCarousel'
import TestimonialThumbnailCarousel from './components/shared/TestimonialThumbnailCarousel'
import TimelineCarousel from './components/shared/TimelineCarousel'
import HoverAccordion from './components/shared/HoverAccordion'
import Footer from './components/shared/Footer'
import ScrollProgress from './components/shared/ScrollProgress'
import TextRevealCustom from './components/ui/TextRevealCustom'

function App() {
  useSmoothScroll()

  useScrollAnimations()

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <div className="relative overflow-hidden">
          {/* Scroll progress indicator */}
          <ScrollProgress />

          {/* Header */}
          <Header />

          {/* Main content */}
          <main>
            <Hero />
            <Stats />
            <FeaturesGrid />
            <BuyingAppliancesSection />
            <HoverAccordion />
            
            {/* Text Reveal Section */}
            <section className="bg-white py-12">
              <div className="container-max">
                <div className="section-padding">
                  <div className="flex justify-center">
                    <TextRevealCustom
                      text="totoko is a personalised appliance buying experience designed around your needs, not endless product listings. Instead of leaving you to compare dozens of options or guess if a deal is right, we help you choose confidently with expert assistance and better pricing."
                    />
                  </div>
                </div>
              </div>
            </section>
            
            <TimelineCarousel />
            {/* <Timeline /> */}
            {/* <TestimonialsCarousel /> */}
            <TestimonialThumbnailCarousel />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </AnimatePresence>
    </ErrorBoundary>
  )
}

export default App