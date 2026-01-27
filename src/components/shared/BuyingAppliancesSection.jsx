// import { useEffect, useRef } from 'react'
// import { motion } from 'framer-motion'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger)

// const BuyingAppliancesSection = () => {
//   const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
//   const textRef = useRef(null)

//   useEffect(() => {
//     const createAnimation = () => {
//       if (textRef.current) {
//         // Kill existing animations
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill())

//         const isMobile = window.innerWidth <= 768

//         // Create horizontal scroll animation with mobile-specific settings
//         gsap.fromTo(textRef.current, 
//           {
//             x: isMobile ? '100vw' : '50vw', // Mobile: start completely off-screen to the right
//           },
//           {
//             x: '-50%', // Move to left
//             ease: 'none',
//             scrollTrigger: {
//               trigger: textRef.current,
//               start: isMobile ? 'top 50%' : 'top bottom', // Mobile: start only when section is centered in viewport
//               end: isMobile ? 'bottom+=50% top' : 'bottom+=200% top', // Mobile: much shorter animation duration
//               scrub: isMobile ? 2 : 3, // Mobile: slower, more controlled scrub
//               invalidateOnRefresh: true,
//             }
//           }
//         )
//       }
//     }

//     // Create initial animation
//     createAnimation()

//     // Handle window resize
//     const handleResize = () => {
//       createAnimation()
//     }

//     window.addEventListener('resize', handleResize)

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize)
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   return (
//     <section className="bg-white py-8 overflow-hidden">
//       <div ref={ref} className="container-max">
//         <div className="section-padding">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={isIntersecting ? { opacity: 1 } : {}}
//             transition={{ duration: 0.8 }}
//             className="relative"
//             style={{
//               width: '5378px',
//               height: '224px',
//               left: '-165px'
//             }}
//           >
//             <h2 
//               ref={textRef}
//               className="font-grotesk text-official-text whitespace-nowrap"
//               style={{
//                 fontWeight: 400,
//                 fontSize: '216px',
//                 lineHeight: '224px',
//                 letterSpacing: '-0.5px'
//               }}
//             >
//               Buying appliances
//             </h2>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BuyingAppliancesSection


import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BuyingAppliancesSection = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768

      gsap.set(textRef.current, {
        x: isMobile ? '100vw' : '50vw',
      })

      gsap.to(textRef.current, {
        x: '-50%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: isMobile ? '+=800' : '+=1600',
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
      className="bg-white overflow-hidden"
      style={{ height: '100vh' }}
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

export default BuyingAppliancesSection
