import { gsap } from 'gsap'
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "backOut" }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const animateCounter = (
  element, 
  endValue, 
  duration = 2,
  suffix = ''
) => {
  const obj = { value: 0 }
  
  gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      const value = endValue === Math.floor(endValue) 
        ? Math.floor(obj.value) 
        : obj.value.toFixed(1)
      element.textContent = value + suffix
    }
  })
}

export const createParallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
}

export const createMagneticEffect = (element, strength = 0.3) => {
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out"
    })
  }
  
  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    })
  }
  
  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)
  
  return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
  }
}