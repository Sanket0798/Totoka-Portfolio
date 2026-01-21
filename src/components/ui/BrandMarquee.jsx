import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const BrandMarquee = ({ brands, className = "" }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1 }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 md:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 z-10 h-full w-16 md:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      
      {/* Marquee content */}
      <div className="flex">
        <motion.div
          className="flex shrink-0 items-center gap-12 md:gap-16 lg:gap-20 py-4"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`first-${brand.name}-${index}`}
              className="flex-shrink-0 h-8 md:h-10 lg:h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain max-w-[120px] md:max-w-[140px] lg:max-w-[160px]"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${brand.name}-${index}`}
              className="flex-shrink-0 h-8 md:h-10 lg:h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain max-w-[120px] md:max-w-[140px] lg:max-w-[160px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BrandMarquee