import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useContactForm } from '../../contexts/ContactFormContext'
import SpinningText from '../ui/spinning-text'

const HoverAccordion = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [hoveredIndex, setHoveredIndex] = useState(0) // Default to first item expanded
  const { openPopup } = useContactForm()

  const accordionItems = [
    {
      number: '01',
      title: 'Tell us about your requirement',
      description: 'Share what you need, what matters to you, or the product you already have in mind. It can be as detailed or as simple as you like.',
      image: '/accordion/1.png',
      buttonText: 'GET STARTED'
    },
    {
      number: '02',
      title: 'We personalise the options for you',
      description: 'Based on your requirements, we shortlist appliances that truly fit your usage, space, and preferences not just what\'s popular.',
      image: '/accordion/2.png',
      buttonText: 'GET STARTED'
    },
    {
      number: '03',
      title: 'We negotiate the best deal for you',
      description: 'Our team speaks to sellers directly to secure the best possible price and availability for your chosen options.',
      image: '/accordion/3.png',
      buttonText: 'GET STARTED'
    },
    {
      number: '04',
      title: 'A Totoko expert connects with you',
      description: 'We walk you through the recommendations, answer questions, and help you decide comfortably with no pressure.',
      image: '/accordion/4.png',
      buttonText: 'GET STARTED'
    }
  ]

  return (
    <div className="bg-[#EDE9E3] my-8" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <div ref={ref} className="w-full h-full">
        {/* Mobile Layout */}
        <div className="md:hidden px-6 py-12">
          {/* Mobile Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-end justify-between mb-[55px]">
              <div className="flex-1">
                <h2 className="text-4xl font-grotesk font-bold leading-none tracking-snug text-official-text mb-4">
                  How can we help you
                </h2>
                <p className="text-sm pr-4 leading-140 font-medium font-magnetik text-official-text tracking-normal">
                  From understanding your needs to helping you decide, Totoko offers a calm, personalised experience with expert support throughout.
                </p>
              </div>

              {/* Mobile Spinning Badge */}
              <div className="flex-shrink-0 ml-4">
                <div className="relative w-[89px] h-[89px]">
                  <div className="w-full h-full text-xs font-medium relative">
                    <SpinningText
                      duration={20}
                      radius={8}
                      className="w-full h-full text-black [&>span:nth-child(15)]:text-[#FF5B04] [&>span:nth-child(15)]:font-bold [&>span:nth-child(29)]:text-[#FF5B04] [&>span:nth-child(29)]:font-bold [&>span:nth-child(46)]:text-[#FF5B04] [&>span:nth-child(46)]:font-bold"
                    >
                      CHOOSE BETTER + PAY SMARTER + EXPERT SUPPORT +
                    </SpinningText>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#BAAB96]/10 w-20 h-20 flex items-center justify-center rounded-full">
                      <span className="text-base font-bold tracking-snug text-[#2F5D50]">totoko</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <div className="space-y-8">
            {accordionItems.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={isIntersecting ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3, // Card 01: 0ms, Card 02: 300ms, Card 03: 600ms, Card 04: 900ms
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="relative border-t border-[#BAB996]/20 pt-8"
              >
                <div className="flex justify-between items-end">
                  {/* Left Content */}
                  <div className="">
                    {/* Process Number with fade-in */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.3 + 0.2, // Appears after card starts animating
                        ease: "easeOut"
                      }}
                      className="font-grotesk font-medium text-sm leading-none tracking-snug text-official-text/60 mb-2"
                    >
                      {item.number}
                    </motion.div>

                    {/* Title with slide-in animation */}
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.3 + 0.4, // Appears after number
                        ease: [0.23, 1, 0.32, 1]
                      }}
                      className="font-grotesk font-bold text-2xl leading-tight tracking-snug text-official-text mb-4 max-w-[200px] w-full"
                    >
                      {item.title}
                    </motion.h3>

                    {/* Description with fade-in */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.3 + 0.6, // Appears after title
                        ease: "easeOut"
                      }}
                      className="font-magnetik font-medium text-sm leading-140 tracking-snug text-official-text/60 max-w-[240px] w-full"
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* Right Image with scale and rotate animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                    animate={isIntersecting ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3 + 0.8, // Appears after description
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="flex-shrink-0 relative"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[116px] h-[116px] object-cover rounded-xl shadow-lg"
                      onError={(e) => {
                        e.target.src = '/placeholder.svg'
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Desktop Layout - Unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="hidden md:flex h-[600px] w-full"
        >
          {/* Left Static Banner */}
          <div className="w-[400px] p-12 flex flex-col justify-between items-start flex-shrink-0">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-[56px] max-w-[308px] w-full text-start font-grotesk font-bold leading-none tracking-snug text-official-text mb-[42px]">
                  How can we help you
                </h2>
                <p className="text-sm leading-140 font-medium font-magnetik text-official-text text-start tracking-normal">
                  From understanding your needs to helping you decide, Totoko offers a calm, personalised experience with expert support throughout.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative sm:hidden md:block md:w-[152px] md:h-[152px]">
                {/* Spinning Text */}
                <div className="w-full h-full text-sm font-medium relative">
                  <SpinningText
                    duration={20}
                    radius={10}
                    className="w-full h-full text-black [&>span:nth-child(15)]:text-[#FF5B04] [&>span:nth-child(15)]:font-bold [&>span:nth-child(29)]:text-[#FF5B04] [&>span:nth-child(29)]:font-bold [&>span:nth-child(46)]:text-[#FF5B04] [&>span:nth-child(46)]:font-bold"
                  >
                    CHOOSE BETTER + PAY SMARTER + EXPERT SUPPORT +
                  </SpinningText>
                </div>

                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#BAAB96]/10 w-16 h-16 md:w-28 md:h-28 flex items-center justify-center rounded-full">
                    <span className="text-sm md:text-lg font-bold tracking-snug text-[#2F5D50]">totoko</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Accordion */}
          <div className="flex-1 flex min-w-0">
            {accordionItems.map((item, index) => (
              <motion.div
                key={item.number}
                className="relative cursor-pointer overflow-hidden flex-1 border-l border-[#BAB996] border-opacity-50"
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{
                  flex: hoveredIndex === index ? '1.5' : '0.5',
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for smooth drawer effect
                }}
              >
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col text-official-text">
                  {/* Number */}
                  <motion.div
                    className="font-grotesk font-medium text-sm leading-none tracking-snug"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.7,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: hoveredIndex === index ? 0.2 : 0
                    }}
                  >
                    {item.number}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="font-grotesk font-bold leading-none tracking-snug mt-[30px]"
                    animate={{
                      fontSize: hoveredIndex === index ? '32px' : '18px',
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.23, 1, 0.32, 1],
                      delay: hoveredIndex === index ? 0.1 : 0
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Expanded Content */}
                  <motion.div
                    className="flex-1 flex flex-col justify-between overflow-hidden"
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -30,
                      scale: hoveredIndex === index ? 1 : 0.95,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: hoveredIndex === index ? 0.4 : 0,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                  >
                    {/* Illustration */}
                    <motion.div
                      className="flex-1 flex items-end justify-start mb-6"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 20,
                        scale: hoveredIndex === index ? 1 : 0.9,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: hoveredIndex === index ? 0.6 : 0,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-32 h-32 object-cover rounded-2xl"
                        onError={(e) => {
                          e.target.src = '/placeholder.svg'
                        }}
                      />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="font-magnetik font-medium text-sm leading-140 tracking-snug max-w-[316px] w-full mb-9"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 15,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: hoveredIndex === index ? 0.7 : 0,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Button (for all items) */}
                    {item.buttonText && (
                      <motion.button
                        // initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 20,
                          scale: hoveredIndex === index ? 1 : 0.9,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: hoveredIndex === index ? 0.8 : 0,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                        whileHover={{
                          // scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openPopup()}
                        className="hover:bg-gray-800 text-white font-bold font-magnetik transition-colors duration-300 text-sm leading-140 flex items-center justify-center gap-[10px] w-[172px] px-6 py-4 rounded-[8px] bg-[#2F5D50] shadow-green-pill"
                      >
                        {item.buttonText}
                      </motion.button>
                    )}
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HoverAccordion