import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Marquee = ({ 
  children, 
  className = "", 
  speed = 50, 
  pauseOnHover = true,
  direction = "left" 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      
      {/* Marquee content */}
      <div className="flex">
        <motion.div
          className="flex shrink-0 gap-8 md:gap-12 lg:gap-16"
          animate={{
            x: direction === "left" ? "-50%" : "50%"
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          style={{
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
        >
          {children}
          {children} {/* Duplicate for seamless loop */}
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee