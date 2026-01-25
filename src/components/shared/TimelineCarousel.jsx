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
      heading: "Totoko didn't begin as an marketplace.",
      description: "Totoko didn't begin as an appliance marketplace. It began by protecting appliances. While working as an appliance insurance provider, we saw the same problem repeat itself: appliances failed not because they were faulty, but because they were wrong choices to begin with. Too big, too small. Overused. Underpowered. Poorly matched to the home.",
      image: "/TimeLine/4.png",
      isActive: true
    },
    {
      year: 2014,
      title: "UNDERSTANDING THE PROBLEM",
      heading: "We realized the real issue wasn't the appliances.",
      description: "Through thousands of insurance claims, we discovered that most appliance failures weren't due to manufacturing defects. They were due to poor purchasing decisions. People were buying appliances that didn't match their actual needs, usage patterns, or home specifications.",
      image: "/TimeLine/2.png"
    },
    {
      year: 2018,
      title: "THE SOLUTION EMERGES",
      heading: "What if we helped people choose better from the start?",
      description: "Instead of just insuring appliances after purchase, we decided to help people make better choices before buying. We began developing a personalized consultation service that would match appliances to actual needs, not just popular trends.",
      image: "/TimeLine/3.png"
    },
    {
      year: 2020,
      title: "BUILDING THE PLATFORM",
      heading: "Creating a new way to buy appliances.",
      description: "We built a platform that combines expert consultation with personalized recommendations. No endless product listings, no pressure sales. Just honest guidance to help people find appliances that truly fit their lives.",
      image: "/TimeLine/1.png"
    },
    {
      year: 2022,
      title: "LAUNCH AND GROWTH",
      heading: "Helping thousands make confident choices.",
      description: "Totoko officially launched as a personalized appliance buying service. We've helped thousands of customers find the right appliances with confidence, backed by expert guidance and better deals negotiated on their behalf.",
      image: "/TimeLine/5.png"
    },
    {
      year: 2025,
      title: "THE FUTURE",
      heading: "Expanding our mission of thoughtful purchasing.",
      description: "Today, Totoko continues to grow, helping more people make thoughtful appliance decisions. We're expanding our services while staying true to our core mission: helping people choose better, not just buy faster.",
      image: "/TimeLine/6.png"
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
            {/* Bottom border line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#BAAB96]" />

            <div className="flex items-center justify-end relative pb-2">
              {timelineData.map((item, index) => (
                <div key={item.year} className="flex items-center">
                  {/* Year Button */}
                  <div className="relative">
                    <button
                      onClick={() => goToSlide(index)}
                      className={`text-sm tracking-snug font-medium font-grotesk transition-colors duration-300 px-2 py-1 ${currentSlide === index
                        ? 'text-official-text font-bold'
                        : 'text-gray-400 hover:text-official-text'
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
                        className="absolute bottom-[-8px] left-0 h-0.5 bg-official-text"
                      />
                    )}
                  </div>

                  {/* Plus sign separator (except for last item) */}
                  {index < timelineData.length - 1 && (
                    <div className="text-gray-300 text-sm font-light mx-4">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4.8H5.13333L4.8 5.13333V8H3.2V5.46667C3.2 5.21525 3.20002 5.08956 3.27813 5.01146C3.35623 4.93335 3.48192 4.93333 3.73333 4.93333H4.66667L4.93333 4.66667V3.73333C4.93333 3.48192 4.93335 3.35623 5.01146 3.27813C5.08956 3.20002 5.21525 3.2 5.46667 3.2H8V4.8Z" fill="#BAAB96" />
                        <path d="M4.8 2.53333C4.8 2.78475 4.79998 2.91044 4.72188 2.98854C4.64377 3.06665 4.51808 3.06667 4.26667 3.06667H3.33333L3.06667 3.33333V4.26667C3.06667 4.51808 3.06665 4.64377 2.98854 4.72188C2.91044 4.79998 2.78475 4.8 2.53333 4.8H0V3.2H2.86667L3.2 2.86667V0H4.8V2.53333Z" fill="#BAAB96" />
                      </svg>

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
            className="relative h-[400px] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.320, 1] }}
                className="absolute inset-0 flex space-x-8"
              >
                {/* Left Content */}
                <div className="flex-1 space-y-6 flex flex-col justify-center text-official-text">
                  <div className="text-sm font-grotesk font-medium tracking-snug">
                    {timelineData[currentSlide].title}
                  </div>

                  <h2 className="text-[56px] font-grotesk font-bold leading-none tracking-snug">
                    {timelineData[currentSlide].heading}
                  </h2>

                  <p className="text-gray-600 font-magnetik leading-relaxed text-sm">
                    {timelineData[currentSlide].description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="w-[662px] relative">
                  <div className="absolute inset-0" />
                  <img
                    src={timelineData[currentSlide].image}
                    alt={`Timeline ${timelineData[currentSlide].year}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder.svg'
                    }}
                  />

                  {/* Large Year Overlay */}
                  <div className="absolute bottom-6 right-6">
                    <div className="text-[120px] font-bold text-white font-grotesk relative top-[75px] left-[-275px]">
                      totoko
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-[992px] top-[375px] transform -translate-y-1/2 w-[52px] h-[52px] bg-white hover:bg-white flex items-center justify-center transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#211A37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-[375px] transform -translate-y-1/2 w-[52px] h-[52px] bg-white hover:bg-white flex items-center justify-center transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#211A37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </button>
          </motion.div>

          {/* Pagination Dots */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mt-6 gap-2"
          >
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-[#2F5D50] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}

export default TimelineCarousel