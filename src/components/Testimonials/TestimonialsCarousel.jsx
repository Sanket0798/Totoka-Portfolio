import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const TestimonialsCarousel = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      names: 'MEERA & VIKRAM',
      date: '1/08',
      image: '/api/placeholder/400/300',
      testimonial: "I was overwhelmed with options for air conditioners. The Totoko expert understood my room size, budget, and usage patterns. They recommended the perfect AC and negotiated a deal that was ₹8,000 less than the online price. No regrets!",
      bgColor: 'bg-gray-100'
    },
    {
      id: 2,
      names: 'PRIYA SHARMA',
      date: '15/07',
      image: '/api/placeholder/400/300',
      testimonial: "Buying a washing machine seemed daunting with so many brands and features. Totoko's expert helped me understand what I actually needed for my family of four. The personalized recommendation was spot-on, and I saved ₹12,000!",
      bgColor: 'bg-green-100'
    },
    {
      id: 3,
      names: 'RAJESH KUMAR',
      date: '22/06',
      image: '/api/placeholder/400/300',
      testimonial: "The refrigerator buying process was made so simple. Instead of comparing dozens of models online, the Totoko expert understood my kitchen space and food habits. Got the perfect fridge with a better warranty deal.",
      bgColor: 'bg-blue-100'
    },
    {
      id: 4,
      names: 'ANITA & SURESH',
      date: '8/06',
      image: '/api/placeholder/400/300',
      testimonial: "We needed a complete kitchen setup - microwave, dishwasher, and chimney. Totoko coordinated everything, ensured compatibility, and negotiated bundle pricing. Saved us weeks of research and thousands of rupees.",
      bgColor: 'bg-purple-100'
    },
    {
      id: 5,
      names: 'DAVID WILSON',
      date: '30/05',
      image: '/api/placeholder/400/300',
      testimonial: "As someone who's not tech-savvy, I was confused about smart home appliances. The Totoko expert explained everything in simple terms and helped me choose appliances that actually work together seamlessly.",
      bgColor: 'bg-orange-100'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentSlide + i + testimonials.length) % testimonials.length
      visible.push({
        ...testimonials[index],
        position: i
      })
    }
    return visible
  }

  return (
    <section className="py-[104px] bg-white relative overflow-hidden">
      <div ref={ref} className="container-max">
        <div className="section-padding">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:mb-12 text-official-text flex flex-col items-center"
          >
            <h2 className="text-[56px] leading-none font-bold tracking-snug font-grotesk w-full text-center mb-6">
              Hear from our customers
            </h2>
            <p className="text-sm font-medium font-magnetik max-w-[440px] text-center mx-auto">
              Stories from customers who valued personalised guidance, honest advice, and the reassurance of making the right appliance choice without pressure or rushed decisions.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16 md:mb-20"
          >
            <div className="flex items-center justify-center relative h-96 md:h-[500px]">
              {getVisibleTestimonials().map((testimonial) => {
                const { position } = testimonial
                const isCenter = position === 0
                const isAdjacent = Math.abs(position) === 1
                const isVisible = Math.abs(position) <= 2

                if (!isVisible) return null

                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0.4,
                      scale: isCenter ? 1 : isAdjacent ? 0.85 : 0.7,
                      x: position * (isCenter ? 0 : isAdjacent ? 280 : 400),
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`absolute w-80 md:w-96 ${testimonial.bgColor} rounded-2xl p-6 md:p-8 shadow-lg`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base tracking-wide">
                        {testimonial.names}
                      </h3>
                      <span className="text-gray-600 text-sm">
                        {testimonial.date}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.names}
                        className="w-full h-48 md:h-56 object-cover rounded-lg"
                      />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {testimonial.testimonial}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-20"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-20"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gray-900 w-8' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-6"
          >
            <p className="max-w-[450px] leading-140 font-magnetik text-official-text font-medium text-2xl text-center mx-auto">
              Ready to begin? Share your requirement and let expert guidance bring clarity.
            </p>

           <div className='flex items-center justify-center'>
             <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-gray-800 text-white font-bold font-magnetik transition-colors duration-300 text-sm leading-140 flex items-center justify-center gap-[10px] max-w-[192px] px-6 py-4 rounded-[8px] bg-[#2F5D50] shadow-green-pill"
            >
              GET STARTED
            </motion.button>
           </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel