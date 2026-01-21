import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress