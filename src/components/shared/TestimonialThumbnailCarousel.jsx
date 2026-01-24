import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const TestimonialThumbnailCarousel = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [currentTestimonial, setCurrentTestimonial] = useState(2) // Start with middle item focused

  const testimonials = [
    {
      id: 1,
      name: "SARAH JOHNSON",
      image: "/src/assets/testimonials/sarah.jpg",
      testimonial: "Buying a washing machine felt like a maze of features I didn't understand. Totoko's expert explained everything in simple terms and helped me find one that fits my small apartment perfectly.",
      appliance: "Washing Machine",
      savings: "₹5,500"
    },
    {
      id: 2,
      name: "RAJESH KUMAR",
      image: "/src/assets/testimonials/rajesh.jpg",
      testimonial: "I needed a refrigerator for my new home but was confused by all the options. The Totoko team took time to understand my family size and cooking habits.",
      appliance: "Refrigerator",
      savings: "₹12,000"
    },
    {
      id: 3,
      name: "MEERA & VIKRAM",
      image: "/src/assets/testimonials/meera-vikram.jpg",
      testimonial: "I was overwhelmed with options for air conditioners. The Totoko expert understood my room size, budget, and usage patterns. They recommended the perfect AC and negotiated a deal that was ₹8,000 less than the online price. No regrets!",
      appliance: "Air Conditioner",
      savings: "₹8,000"
    },
    {
      id: 4,
      name: "EMILY CHEN",
      image: "/src/assets/testimonials/emily.jpg",
      testimonial: "As a first-time homeowner, I was lost when it came to choosing kitchen appliances. Totoko's expert guided me through every decision, ensuring each appliance fit my cooking style.",
      appliance: "Kitchen Appliances",
      savings: "₹15,000"
    },
    {
      id: 5,
      name: "DAVID WILSON",
      image: "/src/assets/testimonials/david.jpg",
      testimonial: "I was skeptical about personalized appliance buying, but Totoko proved me wrong. Their expert understood my specific needs and found appliances I never would have considered.",
      appliance: "Home Appliances",
      savings: "₹9,500"
    },
    {
      id: 6,
      name: "PRIYA SHARMA",
      image: "/src/assets/testimonials/priya.jpg",
      testimonial: "Moving to a new city meant setting up everything from scratch. Totoko's team helped me choose the right appliances for my lifestyle and budget.",
      appliance: "Complete Setup",
      savings: "₹18,000"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  // Get visible thumbnails (5 total: 2 left + center + 2 right)
  const getVisibleThumbnails = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentTestimonial + i + testimonials.length) % testimonials.length
      visible.push({
        ...testimonials[index],
        originalIndex: index,
        position: i
      })
    }
    return visible
  }

  return (
    <section className="bg-white py-16">
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

          {/* Thumbnail Navigation Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-8"
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 z-10"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 z-10"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Thumbnails */}
            <div className="flex justify-center items-center gap-4 px-16">
              {getVisibleThumbnails().map((testimonial, index) => {
                const isCenter = testimonial.position === 0
                return (
                  <motion.button
                    key={`${testimonial.id}-${testimonial.position}`}
                    onClick={() => goToTestimonial(testimonial.originalIndex)}
                    className={`relative overflow-hidden transition-all duration-500 ${isCenter
                        ? 'w-32 h-32 rounded-2xl'
                        : 'w-20 h-20 rounded-xl opacity-70 hover:opacity-100'
                      }`}
                    animate={{
                      scale: isCenter ? 1 : 0.8,
                      y: isCenter ? 0 : 10
                    }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.320, 1] }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Center highlight */}
                    {isCenter && (
                      <div className="absolute inset-0 ring-4 ring-[#2F5D50] rounded-2xl" />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Main Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold font-magnetik text-official-text">
                {testimonials[currentTestimonial].name}
              </h3>
              <div className="text-gray-400 font-medium">
                {currentTestimonial + 1}/{testimonials.length.toString().padStart(2, '0')}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex gap-8 items-center"
              >
                {/* Main Image */}
                <div className="w-1/2">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="w-1/2">
                  <p className="text-lg font-magnetik text-gray-700 leading-relaxed mb-6">
                    {testimonials[currentTestimonial].testimonial}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-white px-3 py-1 rounded-full">
                      {testimonials[currentTestimonial].appliance}
                    </span>
                    <span className="text-green-600 font-semibold">
                      Saved {testimonials[currentTestimonial].savings}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

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

export default TestimonialThumbnailCarousel