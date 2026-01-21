import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const Timeline = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const timelineData = [
    {
      year: 2011,
      title: 'BORN OF TOTOKO',
      heading: "Totoko didn't begin as an appliance marketplace.",
      description: "Totoko didn't begin as an appliance marketplace. It began by protecting appliances. While working as an appliance insurance provider, we saw the same problem repeat itself: appliances failed not because they were faulty, but because they were wrong choices to begin with. Too big, too small. Overused. Underpowered. Poorly matched to the home.",
      image: '/api/placeholder/600/400',
      alt: 'Mother and child in modern kitchen'
    },
    {
      year: 2014,
      title: 'UNDERSTANDING NEEDS',
      heading: "We realized the real problem was mismatched expectations.",
      description: "Through thousands of insurance claims, we discovered that most appliance failures weren't due to manufacturing defects. They were due to poor purchasing decisions. Customers were buying appliances that didn't fit their actual needs, usage patterns, or home environments.",
      image: '/api/placeholder/600/400',
      alt: 'Appliance consultation'
    },
    {
      year: 2018,
      title: 'EXPERT GUIDANCE',
      heading: "We started helping customers choose better.",
      description: "Instead of just insuring appliances after purchase, we began offering pre-purchase consultation. Our experts would understand customer needs, evaluate their space, and recommend the right appliances. The results were remarkable - customer satisfaction increased dramatically.",
      image: '/api/placeholder/600/400',
      alt: 'Expert consultation session'
    },
    {
      year: 2020,
      title: 'DIGITAL TRANSFORMATION',
      heading: "We brought our expertise online.",
      description: "The pandemic accelerated our digital transformation. We developed our online platform to provide personalized recommendations at scale, while maintaining the human touch through virtual consultations and expert guidance.",
      image: '/api/placeholder/600/400',
      alt: 'Digital consultation'
    },
    {
      year: 2022,
      title: 'NEGOTIATED DEALS',
      heading: "We started negotiating better prices for our customers.",
      description: "Leveraging our industry relationships and bulk purchasing power, we began negotiating directly with manufacturers and retailers. This allowed us to offer our customers better deals while maintaining our commitment to quality and service.",
      image: '/api/placeholder/600/400',
      alt: 'Business negotiation'
    },
    {
      year: 2025,
      title: 'THE FUTURE',
      heading: "Today, we're the trusted appliance buying partner.",
      description: "Today, Totoko has evolved into a comprehensive appliance buying experience. We combine personalized recommendations, expert guidance, and negotiated deals to ensure every customer gets the perfect appliance for their needs at the best possible price.",
      image: '/api/placeholder/600/400',
      alt: 'Modern smart home'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % timelineData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + timelineData.length) % timelineData.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentData = timelineData[currentSlide]

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div ref={ref} className="container-max">
        <div className="section-padding">
        {/* Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-8 md:gap-12 mb-12 md:mb-16"
        >
          {timelineData.map((item, index) => (
            <button
              key={item.year}
              onClick={() => goToSlide(index)}
              className={`text-sm md:text-base font-medium transition-all duration-300 relative ${
                index === currentSlide
                  ? 'text-gray-900 scale-110'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {item.year}
              {index === currentSlide && (
                <motion.div
                  layoutId="timeline-indicator"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-sm text-gray-500 font-medium mb-4 tracking-wider">
                  {currentData.title}
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {currentData.heading}
                </h2>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {currentData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={currentData.image}
                  alt={currentData.alt}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Totoko Overlay */}
              <div className="absolute bottom-6 right-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 tracking-wider"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  totoko
                </motion.div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-2 mt-8 lg:hidden"
        >
          {timelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gray-900 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Timeline