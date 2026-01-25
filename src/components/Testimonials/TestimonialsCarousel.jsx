import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useContactForm } from '../../contexts/ContactFormContext'

const TestimonialsCarousel = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const { openPopup } = useContactForm()

  const testimonials = [
    {
      id: 1,
      names: 'MEERA & VIKRAM',
      date: '1/08',
      image: '/testimonials/1.jpeg',
      testimonial: "I was overwhelmed with options for air conditioners. The Totoko expert understood my room size, budget, and usage patterns. They recommended the perfect AC and negotiated a deal that was ₹8,000 less than the online price. No regrets!",
      bgColor: 'bg-gray-100'
    },
    {
      id: 2,
      names: 'PRIYA SHARMA',
      date: '15/07',
      image: '/testimonials/2.jpg',
      testimonial: "Buying a washing machine seemed daunting with so many brands and features. Totoko's expert helped me understand what I actually needed for my family of four. The personalized recommendation was spot-on, and I saved ₹12,000!",
      bgColor: 'bg-green-100'
    },
    {
      id: 3,
      names: 'RAJESH KUMAR',
      date: '22/06',
      image: '/testimonials/3.png',
      testimonial: "The refrigerator buying process was made so simple. Instead of comparing dozens of models online, the Totoko expert understood my kitchen space and food habits. Got the perfect fridge with a better warranty deal.",
      bgColor: 'bg-blue-100'
    },
    {
      id: 4,
      names: 'ANITA & SURESH',
      date: '8/06',
      image: '/testimonials/4.jpg',
      testimonial: "We needed a complete kitchen setup - microwave, dishwasher, and chimney. Totoko coordinated everything, ensured compatibility, and negotiated bundle pricing. Saved us weeks of research and thousands of rupees.",
      bgColor: 'bg-purple-100'
    },
    {
      id: 5,
      names: 'DAVID WILSON',
      date: '30/05',
      image: '/testimonials/5.jpg',
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

  const handleCardClick = (testimonial) => {
    // Find the original index of the clicked testimonial
    const targetIndex = testimonials.findIndex(t => t.id === testimonial.id)
    if (targetIndex !== -1) {
      setCurrentSlide(targetIndex)
    }
  }

  return (
    <section className="pt-[56px] pb-16 md:pb-[104px] bg-white relative overflow-hidden">
      <div ref={ref} className="container-max">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-[40px] md:mb-12 text-official-text flex flex-col items-center px-6 md:px-0"
          >
            <h2 className="text-[40px] md:text-[56px] leading-none font-bold tracking-snug font-grotesk w-full text-center mb-4 md:mb-6">
              Hear from our customers
            </h2>
            <p className="text-sm font-medium font-magnetik max-w-[440px] text-center mx-auto">
              Stories from customers who valued personalised guidance, honest advice, and the reassurance of making the right appliance choice without pressure or rushed decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-8 md:mb-[40px] px-6 md:px-0"
          >
            <div className="flex items-center justify-center relative min-h-[411px] h-full md:min-h-[500px] md:h-full">
              <div className="absolute z-5 max-w-[354px] w-full md:max-w-[546px] md:w-full h-full bg-[#BAAB96]/20"></div>

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
                      x: position * (isCenter ? 0 : isAdjacent ? 410 : 380),
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={!isCenter ? {
                      scale: isAdjacent ? 0.9 : 0.75,
                      opacity: isAdjacent ? 0.8 : 0.5,
                      transition: { duration: 0.2 }
                    } : {}}
                    onClick={() => !isCenter && handleCardClick(testimonial)}
                    className={`absolute max-w-[260px] w-full md:max-w-[400px] md:w-full space-y-4 md:space-y-8 ${isCenter ? 'bg-transparent' : testimonial.bgColor} ${isCenter ? '' : 'shadow-lg'} ${!isCenter ? 'cursor-pointer' : ''}`}
                  >
                    {/* Header - Only show on center card */}
                    {isCenter && (
                      <div className="flex justify-between items-center text-official-text">
                        <motion.h3
                          key={`${testimonial.id}-name`}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="font-grotesk font-bold text-base leading-none tracking-snug uppercase"
                        >
                          {testimonial.names}
                        </motion.h3>
                        <motion.span
                          key={`${testimonial.id}-date`}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="font-grotesk text-official-text text-sm leading-none tracking-snug font-medium"
                        >
                          {testimonial.date}
                        </motion.span>
                      </div>
                    )}

                    {/* Image */}
                    <motion.div
                      key={`${testimonial.id}-image`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className=""
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.names}
                        className="w-full h-48 md:h-56 object-cover"
                        onError={(e) => {
                          e.target.src = '/placeholder.svg'
                        }}
                      />
                    </motion.div>

                    {/* Testimonial Text - Only show on center card */}
                    {isCenter && (
                      <motion.p
                        key={`${testimonial.id}-text`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="font-magnetik font-medium text-[15px] text-official-text leading-130 md:leading-140 tracking-normal"
                      >
                        {testimonial.testimonial}
                      </motion.p>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-white flex items-center justify-center transition-all duration-300 z-20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#211A37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-white flex items-center justify-center transition-all duration-300 z-20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#211A37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>

            {/* Slide Indicators */}
            {/* <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gray-900 w-8' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div> */}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-6 max-w-[354px] w-full md:max-w-[450px] md:w-full mx-auto"
          >
            <p className="leading-140 font-magnetik text-official-text font-medium text-base md:text-2xl text-center">
              Ready to begin? Share your requirement and let expert guidance bring clarity.
            </p>

            <div className='hidden md:flex items-center justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openPopup()}
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