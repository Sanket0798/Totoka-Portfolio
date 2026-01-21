import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import CircularText from '../shared/CircularText'

const Stats = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const statsRef = useRef(null)

  const topStats = [
    {
      number: 4.9,
      label: 'Google Reviews',
      isDecimal: true
    },
    {
      number: 10,
      suffix: 'K+',
      label: 'Happy Customers'
    },
    {
      number: 8500,
      prefix: '₹',
      label: 'Avg. Savings'
    }
  ]

  const brandLogos = [
    'Samsung', 'VOLTAS', 'SONY', 'dyson', 'Haier'
  ]

  useEffect(() => {
    if (isIntersecting && statsRef.current) {
      const statNumbers = statsRef.current.querySelectorAll('.stat-number')

      statNumbers.forEach((element, index) => {
        const stat = topStats[index]
        const obj = { value: 0 }

        gsap.to(obj, {
          value: stat.number,
          duration: 2,
          delay: index * 0.3,
          ease: "power2.out",
          onUpdate: () => {
            let displayValue = ''
            if (stat.prefix) displayValue += stat.prefix

            if (stat.isDecimal) {
              displayValue += obj.value.toFixed(1)
            } else {
              displayValue += Math.floor(obj.value).toLocaleString()
            }

            if (stat.suffix) displayValue += stat.suffix

            element.textContent = displayValue
          }
        })
      })
    }
  }, [isIntersecting])

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div ref={ref} className="container-max">
        <div className="section-padding">
        {/* Top Stats Row */}
        <div ref={statsRef} className="flex font-grotesk text-official-text justify-center items-center gap-8 md:gap-16 lg:gap-24 mb-16 md:mb-20">
          {topStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="stat-number text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {stat.prefix || ''}0{stat.suffix || ''}
              </div>
              <div className="text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-400 leading-relaxed mb-8">
              totoko is a personalised appliance buying experience designed around your needs, not endless product listings. Instead of{' '}
              <span className="text-gray-300">forcing you to compare dozens of options or guess if a deal is right, we help you choose confidently with expert assistance and better pricing.</span>
            </h2>
          </motion.div>

          {/* Right Content - Circular Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Circular Text */}
              <CircularText 
                text="CHOOSE BETTER • PAY SMARTER • LIVE BETTER • "
                onHover="speedUp"
                spinDuration={20}
                className="w-full h-full"
              />

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#BAAB96] text-[#2F5D50] w-[100px] h-[100px] flex items-center justify-center rounded-full">
                  <span className="text-lg md:text-xl font-bold">totoko</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-sm md:text-base text-gray-700 max-w-2xl leading-relaxed">
            Appliances are high-value decisions. Instead of pushing instant checkout, we slow down and give you time, choice, and expert guidance. Totoko is built for people who value peace of mind over impulse.
          </p>
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {brandLogos.map((brand, index) => (
            <div
              key={brand}
              className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 hover:text-gray-500 transition-colors duration-300"
            >
              {brand}
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Stats