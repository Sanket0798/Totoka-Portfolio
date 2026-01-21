import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useScrollAnimations } from './hooks/useScrollAnimations'

// Components
import ErrorBoundary from './components/shared/ErrorBoundary'
import Header from './components/shared/Header'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import FeaturesGrid from './components/Features/FeaturesGrid'
import Timeline from './components/Timeline/Timeline'
import TestimonialsCarousel from './components/Testimonials/TestimonialsCarousel'
import ProcessSteps from './components/Process/ProcessSteps'
import Footer from './components/shared/Footer'
import ScrollProgress from './components/shared/ScrollProgress'

function App() {
  // Initialize smooth scrolling
  useSmoothScroll()
  
  // Initialize scroll-triggered animations
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
            <Timeline />
            <TestimonialsCarousel />
            <ProcessSteps />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </AnimatePresence>
    </ErrorBoundary>
  )
}

export default App