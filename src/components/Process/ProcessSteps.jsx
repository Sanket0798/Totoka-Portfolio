import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const ProcessSteps = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [expandedCard, setExpandedCard] = useState(0) // First card expanded by default

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Tell us about your requirement',
      description: 'Share what you need, what matters to you, or the product you already have in mind. It can be as detailed or as simple as you like.',
      illustration: '/api/placeholder/200/200',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      number: '02',
      title: 'We personalise the options for you',
      description: 'Based on your requirements, we shortlist appliances that truly fit your usage, space, and preferences not just what\'s popular.',
      illustration: '/api/placeholder/200/200',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      number: '03',
      title: 'We negotiate the best deal for you',
      description: 'Our team speaks to sellers directly to secure the best possible price and availability for your chosen options.',
      illustration: '/api/placeholder/200/200',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      number: '04',
      title: 'A Totoko expert connects with you',
      description: 'We walk you through the recommendations, answer questions, and help you decide comfortably with no pressure.',
      illustration: '/api/placeholder/200/200',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ]

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? -1 : index)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div ref={ref} className="container-max">
        <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How can we help you
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              From understanding your needs to helping you decide, Totoko offers a calm, personalised experience with expert support throughout.
            </p>

            {/* Circular Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative w-48 h-48">
                {/* Circular Text */}
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circle-process"
                      d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text className="text-xs fill-gray-400 font-medium">
                    <textPath href="#circle-process">
                      CHOOSE BETTER • PAY SMARTER • LIVE BETTER • EXPERT GUIDANCE • 
                    </textPath>
                  </text>
                </svg>
                
                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-900 text-white px-6 py-3 rounded-full">
                    <span className="text-lg font-bold">totoko</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg"
            >
              GET STARTED
            </motion.button>
          </motion.div>

          {/* Right Content - Expandable Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {steps.map((step, index) => {
              const isExpanded = expandedCard === index
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 ${
                    isExpanded ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Card Header */}
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-gray-400 min-w-[2rem]">
                        {step.number}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Expand/Collapse Icon */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="grid md:grid-cols-2 gap-6 items-center">
                            {/* Illustration */}
                            <div className={`${step.color} rounded-xl p-6 flex items-center justify-center`}>
                              <img
                                src={step.illustration}
                                alt={step.title}
                                className="w-32 h-32 object-contain"
                              />
                            </div>
                            
                            {/* Description */}
                            <div>
                              <p className="text-gray-600 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps