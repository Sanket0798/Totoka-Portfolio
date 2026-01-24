import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const TimelineCarousel = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const timelineData = [
    {
      year: 2011,
      title: "BORN OF TOTOKO",
      heading: "Totoko didn't begin as an appliance marketplace.",
      description: "Totoko didn't begin as an appliance marketplace. It began by protecting appliances. While working as an appliance insurance provider, we saw the same problem repeat itself: appliances failed not because they were faulty, but because they were wrong choices to begin with. Too big, too small. Overused. Underpowered. Poorly matched to the home.",
      image: "/src/assets/timeline/2011.jpg",
      isActive: true
    },
    {
      year: 2014,
      title: "UNDERSTANDING THE PROBLEM",
      heading: "We realized the real issue wasn't the appliances.",
      description: "Through thousands of insurance claims, we discovered that most appliance failures weren't due to manufacturing defects. They were due to poor purchasing decisions. People were buying appliances that didn't match their actual needs, usage patterns, or home specifications.",
      image: "/src/assets/timeline/2014.jpg"
    },
    {
      year: 2018,
      title: "THE SOLUTION EMERGES",
      heading: "What if we helped people choose better from the start?",
      description: "Instead of just insuring appliances after purchase, we decided to help people make better choices before buying. We began developing a personalized consultation service that would match appliances to actual needs, not just popular trends.",
      image: "/src/assets/timeline/2018.jpg"
    },
    {
      year: 2020,
      title: "BUILDING THE PLATFORM",
      heading: "Creating a new way to buy appliances.",
      description: "We built a platform that combines expert consultation with personalized recommendations. No endless product listings, no pressure sales. Just honest guidance to help people find appliances that truly fit their lives.",
      image: "/src/assets/timeline/2020.jpg"
    },
    {
      year: 2022,
      title: "LAUNCH AND GROWTH",
      heading: "Helping thousands make confident choices.",
      description: "Totoko officially launched as a personalized appliance buying service. We've helped thousands of customers find the right appliances with confidence, backed by expert guidance and better deals negotiated on their behalf.",
      image: "/src/assets/timeline/2022.jpg"
    },
    {
      year: 2025,
      title: "THE FUTURE",
      heading: "Expanding our mission of thoughtful purchasing.",
      description: "Today, Totoko continues to grow, helping more people make thoughtful appliance decisions. We're expanding our services while staying true to our core mission: helping people choose better, not just buy faster.",
      image: "/src/assets/timeline/2025.jpg"
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

  return (
    <section className="bg-white py-12">
      <div ref={ref} className="container-max">
        <div className="section-padding">
          {/* Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="flex items-center justify-center gap-4">
              {timelineData.map((item, index) => (
                <div key={item.year} className="flex items-center">
                  {/* Year Button */}
                  <div className="relative">
                    <button
                      onClick={() => goToSlide(index)}
                      className={`text-lg font-medium font-magnetik transition-colors duration-300 px-2 py-1 ${
                        currentSlide === index 
                          ? 'text-official-text font-bold' 
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {item.year}
                    </button>
                    
                    {/* Underline for active year */}
                    {currentSlide === index && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.320, 1] }}
                        className="absolute -bottom-1 left-0 h-0.5 bg-official-text"
                      />
                    )}
                  </div>
                  
                  {/* Plus sign separator (except for last item) */}
                  {index < timelineData.length - 1 && (
                    <div className="text-gray-300 text-sm font-light mx-3">
                      +
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Carousel Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] bg-gray-50 rounded-xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.320, 1] }}
                className="absolute inset-0 flex"
              >
                {/* Left Content */}
                <div className="w-1/2 p-8 flex flex-col justify-center">
                  <div className="text-gray-400 text-xs font-medium mb-3 tracking-wider font-magnetik">
                    {timelineData[currentSlide].title}
                  </div>
                  
                  <h2 className="text-2xl font-bold font-magnetik text-official-text mb-4 leading-tight">
                    {timelineData[currentSlide].heading}
                  </h2>
                  
                  <p className="text-gray-600 font-magnetik leading-relaxed text-sm">
                    {timelineData[currentSlide].description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-50/50" />
                  <img
                    src={timelineData[currentSlide].image}
                    alt={`Timeline ${timelineData[currentSlide].year}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Large Year Overlay */}
                  <div className="absolute bottom-6 right-6">
                    <div className="text-4xl font-bold text-white/20 font-magnetik">
                      totoko
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mt-6 gap-2"
          >
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#2F5D50] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimelineCarousel