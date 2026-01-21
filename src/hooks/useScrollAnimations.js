import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimations = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh()

    // Global scroll animations
    const initGlobalAnimations = () => {
      // Fade in up animation for elements with data-animate="fade-up"
      gsap.utils.toArray('[data-animate="fade-up"]').forEach((element) => {
        gsap.fromTo(element, 
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Stagger animation for elements with data-animate="stagger"
      gsap.utils.toArray('[data-animate="stagger"]').forEach((container) => {
        const children = container.children
        gsap.fromTo(children,
          {
            y: 60,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Scale animation for elements with data-animate="scale"
      gsap.utils.toArray('[data-animate="scale"]').forEach((element) => {
        gsap.fromTo(element,
          {
            scale: 0.8,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Parallax effect for elements with data-animate="parallax"
      gsap.utils.toArray('[data-animate="parallax"]').forEach((element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
      })
    }

    // Initialize animations after a short delay to ensure DOM is ready
    const timer = setTimeout(initGlobalAnimations, 100)

    // Cleanup
    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}