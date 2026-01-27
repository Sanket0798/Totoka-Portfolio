import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Mobile version - simple scroll animation without pinning
const BuyingAppliancesSectionMobile = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const textRef = useRef(null)

  useEffect(() => {
    if (textRef.current) {
      // Kill any existing animations on this element
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === textRef.current) {
          trigger.kill()
        }
      })

      // Set initial position
      gsap.set(textRef.current, {
        x: '100vw', // Start completely off-screen to the right
      })

      // Create horizontal scroll animation for mobile
      gsap.to(textRef.current, {
        x: '-50%', // Move to center-left
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%', // Start when section is 80% in viewport
          end: 'bottom 20%', // End when section is 20% in viewport
          scrub: 2, // Smooth scrub
          invalidateOnRefresh: true,
        }
      })
    }

    return () => {
      // Cleanup on unmount
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === textRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section className="bg-white pb-28 overflow-hidden block md:hidden">
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

// Desktop version - full scroll hijacking with pinning
const BuyingAppliancesSectionDesktop = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      // Set initial position for desktop
      gsap.set(textRef.current, {
        x: '50vw', // Start from right side
      })

      // Create the desktop scroll animation with pinning
      gsap.to(textRef.current, {
        x: '-50%', // Move to center-left
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1600', // Scroll distance for animation
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white overflow-hidden hidden md:block"
      style={{ height: '100svh' }}
    >
      <div className="flex items-center h-full">
        <div
          className="relative"
          style={{
            width: '5378px',
            height: '224px',
            left: '-165px',
          }}
        >
          <h2
            ref={textRef}
            className="font-grotesk text-official-text whitespace-nowrap"
            style={{
              fontWeight: 400,
              fontSize: '216px',
              lineHeight: '224px',
              letterSpacing: '-0.5px',
            }}
          >
            Buying appliances
          </h2>
        </div>
      </div>
    </section>
  )
}

// Main component that combines both versions
const BuyingAppliancesSection = () => {
  return (
    <>
      <BuyingAppliancesSectionDesktop />
      <BuyingAppliancesSectionMobile />
    </>
  )
}

export default BuyingAppliancesSection