import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import SpinningText from '../ui/spinning-text'
import TextRevealCustom from '../ui/TextRevealCustom'
import BrandMarquee from '../ui/BrandMarquee'

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
    { name: 'Samsung', logo: '/src/assets/Brand_Logos/Samsung.png' },
    { name: 'Voltas', logo: '/src/assets/Brand_Logos/Voltas_logo.png' },
    { name: 'Sony', logo: '/src/assets/Brand_Logos/Sony.png' },
    { name: 'Dyson', logo: '/src/assets/Brand_Logos/Dyson_logo.png' },
    { name: 'Haier', logo: '/src/assets/Brand_Logos/Haier_logo.png' },
    { name: 'Daikin', logo: '/src/assets/Brand_Logos/Daikin.png' }
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
    <section className="bg-white relative overflow-hidden py-8">
      <div ref={ref} className="container-max">
        <div className="section-padding">
          {/* Top Stats Row */}
          <div ref={statsRef} className="flex font-grotesk text-official-text justify-start items-center gap-6 mb-[52px]">
            {topStats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-x-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-start"
                >
                  <div className="stat-number text-4xl font-bold mb-2 leading-140">
                    {stat.prefix || ''}0{stat.suffix || ''}
                  </div>
                  <div className="text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </motion.div>

                {/* Divider line - show after each stat except the last one */}
                {index < topStats.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={isIntersecting ? { opacity: 1, scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="h-11 border border-divider opacity-20"
                    style={{ transform: 'rotate(-90deg)' }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Main Content Section */}
          <div className="flex items-center justify-between mb-8">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TextRevealCustom
                text="totoko is a personalised appliance buying experience designed around your needs, not endless product listings. Instead of leaving you to compare dozens of options or guess if a deal is right, we help you choose confidently with expert assistance and better pricing."
              />
            </motion.div>

            {/* Right Content - Circular Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative sm:hidden md:block md:w-[152px] md:h-[152px]">
                {/* Spinning Text */}
                <SpinningText
                  duration={20}
                  radius={8}
                  className="w-full h-full text-sm font-medium text-gray-800"
                >
                  CHOOSE BETTER + PAY SMARTER + EXPERT SUPPORT
                </SpinningText>

                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#BAAB96]/10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full">
                    <span className="text-sm md:text-base font-bold tracking-snug text-[#2F5D50]">totoko</span>
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
            className="mb-[60px]"
          >
            <p className="text-sm font-magnetik font-medium leading-130 text-official-text w-[536px] h-[54px]">
              Appliances are high-value decisions. Instead of pushing instant checkout, we slow down and give you time, choice, and expert guidance. Totoko is built for people who value peace of mind over impulse.
            </p>
          </motion.div>

          {/* Brand Logos */}
          {/* Brand Logos Marquee */}
          <BrandMarquee brands={brandLogos} />
        </div>
      </div>
    </section>
  )
}

export default Stats