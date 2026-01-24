import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const HoverAccordion = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [hoveredIndex, setHoveredIndex] = useState(0) // Default to first item expanded

  const accordionItems = [
    {
      number: '01',
      title: 'Tell us about your requirement',
      description: 'Share what you need, what matters to you, or the product you already have in mind. It can be as detailed or as simple as you like.',
      image: '/accordion/step-1.png',
      buttonText: 'GET STARTED'
    },
    {
      number: '02',
      title: 'We personalise the options for you',
      description: 'Based on your requirements, we shortlist appliances that truly fit your usage, space, and preferences not just what\'s popular.',
      image: '/accordion/step-2.png'
    },
    {
      number: '03',
      title: 'We negotiate the best deal for you',
      description: 'Our team speaks to sellers directly to secure the best possible price and availability for your chosen options.',
      image: '/accordion/step-3.png'
    },
    {
      number: '04',
      title: 'A Totoko expert connects with you',
      description: 'We walk you through the recommendations, answer questions, and help you decide comfortably with no pressure.',
      image: '/accordion/step-4.png'
    }
  ]

  return (
    <div className="bg-gray-50 py-16" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <div ref={ref} className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex h-[600px] w-full"
        >
          {/* Left Static Banner */}
          <div className="w-[400px] bg-white p-12 flex flex-col justify-center flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold font-magnetik text-official-text mb-6 leading-tight">
                How can we help you
              </h2>
              <p className="text-sm font-magnetik text-gray-600 leading-relaxed mb-8">
                From understanding your needs to helping you decide, Totoko offers a calm, personalised experience with expert support throughout.
              </p>
              
              {/* Circular Badge */}
              <div className="relative w-24 h-24">
                <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold font-magnetik text-[#2F5D50]">totoko</span>
                </div>
                <div className="absolute -top-2 -right-2 text-xs font-medium text-gray-500 transform rotate-12">
                  CHOOSE BETTER • PAY SMARTER • EXPERT SUPPORT
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Accordion */}
          <div className="flex-1 flex gap-1 min-w-0">
            {accordionItems.map((item, index) => (
              <motion.div
                key={item.number}
                className="relative bg-white cursor-pointer overflow-hidden flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{
                  width: hoveredIndex === index ? '400px' : '120px',
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.23, 1, 0.320, 1],
                }}
              >
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Number */}
                  <motion.div
                    className="text-gray-400 text-sm font-medium mb-4"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.number}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold font-magnetik text-official-text mb-6 leading-tight"
                    animate={{
                      fontSize: hoveredIndex === index ? '20px' : '16px',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Expanded Content */}
                  <motion.div
                    className="flex-1 flex flex-col justify-between"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -20,
                    }}
                    transition={{ duration: 0.4, delay: hoveredIndex === index ? 0.2 : 0 }}
                  >
                    {/* Illustration */}
                    <div className="flex-1 flex items-center justify-center mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm font-magnetik text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Button (only for first item) */}
                    {item.buttonText && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#2F5D50] hover:bg-[#1F4A3A] text-white font-bold font-magnetik transition-colors duration-300 text-sm px-6 py-3 rounded-lg w-fit"
                      >
                        {item.buttonText}
                      </motion.button>
                    )}
                  </motion.div>
                </div>

                {/* Collapsed state indicator */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8"
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-1 bg-gray-200 rounded">
                    <div className="h-full bg-[#2F5D50] rounded" style={{ width: '30%' }} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HoverAccordion