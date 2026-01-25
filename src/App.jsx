import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import { ContactFormProvider, useContactForm } from './contexts/ContactFormContext'

// Components
import ErrorBoundary from './components/shared/ErrorBoundary'
import Header from './components/shared/Header'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import FeaturesGrid from './components/Features/FeaturesGrid'
import BuyingAppliancesSection from './components/shared/BuyingAppliancesSection'
import TestimonialsCarousel from './components/Testimonials/TestimonialsCarousel'
import TimelineCarousel from './components/shared/TimelineCarousel'
import HoverAccordion from './components/shared/HoverAccordion'
import Footer from './components/shared/Footer'
import ScrollProgress from './components/shared/ScrollProgress'
import TextRevealCustom from './components/ui/TextRevealCustom'
import ContactFormPopup from './components/shared/ContactFormPopup'
import WhatsAppButton from './components/shared/WhatsAppButton'

const AppContent = () => {
  const { isPopupOpen, closePopup } = useContactForm()
  
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
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <Stats />
            </section>
            <section id="features">
              <FeaturesGrid />
            </section>
            <BuyingAppliancesSection />
            <section id="process">
              <HoverAccordion />
            </section>
            
            {/* Text Reveal Section */}
            <section className="bg-white pt-[80px] pb-[40px] px-6 md:px-0 md:py-12">
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
            
            <section id="journey">
              <TimelineCarousel />
            </section>
            <section id="testimonials">
              <TestimonialsCarousel />
            </section>
          </main>

          {/* Footer */}
          <Footer />

          {/* Global Contact Form Popup */}
          <ContactFormPopup isOpen={isPopupOpen} onClose={closePopup} />

          {/* WhatsApp Button */}
          <WhatsAppButton />
        </div>
      </AnimatePresence>
    </ErrorBoundary>
  )
}

function App() {
  return (
    <ContactFormProvider>
      <AppContent />
    </ContactFormProvider>
  )
}

export default App