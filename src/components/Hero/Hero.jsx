import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import appliancesImage from '../../assets/123456789.png'

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-amber-100 via-orange-200 to-white">
      <div ref={ref} className="container-max">
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-screen py-20 section-padding">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-4xl"
          >
            <h1 className="text-[56px] font-bold text-official-text tracking-snug leading-none mb-4 max-w-[790px] w-full font-grotesk">
              A smarter way to buy appliances is here.
            </h1>

            <p className="text-base text-official-text text-center max-w-[412px] mb-8 leading-130 w-full mx-auto">
              Personalised recommendations, better deals, and personal assistance  all from home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg text-lg"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Appliances Image */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={isIntersecting ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-5xl"
          >
            <div className="relative">
              {/* Main appliances image */}
              <img
                src={appliancesImage}
                alt="Collection of modern home appliances including TV, refrigerator, washing machine, microwave, air conditioner, and air purifier"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />

              {/* Floating elements for visual enhancement */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full blur-sm"
              />

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-20 right-20 w-6 h-6 bg-white/20 rounded-full blur-sm"
              />

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-20 left-1/4 w-3 h-3 bg-white/25 rounded-full blur-sm"
              />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-gray-600 text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
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