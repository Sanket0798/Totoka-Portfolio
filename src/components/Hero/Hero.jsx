import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full">
        <img
          src="/Hero_Banner.png"
          alt="Hero Banner"
          className="w-full h-auto object-contain"
        />
        
        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-start justify-center pt-20">
          <div ref={ref} className="container-max relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-start pt-8 section-padding">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-[56px] font-bold text-official-text tracking-snug leading-none mb-4 max-w-[790px] w-full font-grotesk">
              A smarter way to buy appliances is here.
            </h1>

            <p className="text-base font-medium text-official-text text-center max-w-[412px] mb-8 leading-130 w-full mx-auto">
              Personalised recommendations, better deals, and personal assistance  all from home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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