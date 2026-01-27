import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useContactForm } from '../../contexts/ContactFormContext'

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const { openPopup } = useContactForm()

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full">
        {/* Desktop Hero Banner - Hidden on mobile */}
        <img
          src="/Hero_Banner.png"
          alt="Hero Banner Desktop"
          className="hidden md:block w-full h-auto object-contain"
        />
        
        {/* Mobile Hero Banner - Only visible on mobile */}
        <img
          src="/Mobile_Hero-Banner.png"
          alt="Hero Banner Mobile"
          className="block md:hidden w-full h-auto object-contain"
        />
        
        {/* Bottom fade overlay - Different for mobile and desktop */}
        {/* Desktop fade overlay */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
        
        {/* Mobile fade overlay - Adjusted for mobile banner */}
        <div className="block md:hidden absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-start justify-center pt-8 md:pt-20">
          <div ref={ref} className="container-max relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-start pt-20 sm:pt-20 md:pt-8 section-padding px-6 md:px-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-[56px] font-bold text-official-text tracking-snug leading-none mb-4 max-w-[790px] w-full font-grotesk">
              A smarter way to buy appliances is here.
            </h1>

            <p className="text-sm md:text-base font-medium text-official-text text-center max-w-[412px] mb-8 leading-130 w-full mx-auto px-4 md:px-0">
              Personalised recommendations, better deals, and personal assistance  all from home.
            </p>

            <div className="flex sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openPopup()}
                className="hover:bg-gray-800 text-white font-bold font-magnetik transition-colors duration-300 text-sm leading-140 flex items-center justify-center gap-[10px] w-[172px] px-6 py-4 rounded-[8px] bg-[#2F5D50] shadow-green-pill"
              >
                GET STARTED
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}

export default Hero