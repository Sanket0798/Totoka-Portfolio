import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const BuyingAppliancesSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const textRef = useRef(null)

  useEffect(() => {
    if (textRef.current) {
      // Create horizontal scroll animation
      gsap.fromTo(textRef.current, 
        {
          x: '50vw', // Start from right side (reduced from 100vw)
        },
        {
          x: '-50%', // Move to left (reduced distance)
          ease: 'none',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top bottom', // Start when top of element hits bottom of viewport
            end: 'bottom+=200% top', // Extended end point for slower animation
            scrub: 3, // Increased scrub value for slower, smoother animation
            invalidateOnRefresh: true
          }
        }
      )
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="bg-white py-8 overflow-hidden">
      <div ref={ref} className="container-max">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{
              width: '5378px',
              height: '224px',
              left: '-165px'
            }}
          >
            <h2 
              ref={textRef}
              className="font-grotesk text-official-text whitespace-nowrap"
              style={{
                fontWeight: 400,
                fontSize: '216px',
                lineHeight: '224px',
                letterSpacing: '-0.5px'
              }}
            >
              Buying appliances
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BuyingAppliancesSection