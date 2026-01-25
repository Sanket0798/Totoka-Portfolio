import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useContactForm } from '../../contexts/ContactFormContext'

const FeaturesGrid = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [hoveredCard, setHoveredCard] = useState(null)
  const { openPopup } = useContactForm()

  const features = [
    {
      title: 'Personalised Recommendations',
      description: 'We understand your requirements and shortlist appliances that actually fit.',
      image: "/FeatureGrid/Frame_1.png",
      alt: 'Woman cooking in modern kitchen'
    },
    {
      title: 'Expert-Assisted Decisions',
      description: 'A Totoko expert reviews the options with you, answers questions.',
      image: "/FeatureGrid/Frame_2.png",
      alt: 'Expert consultation'
    },
    {
      title: 'Better Deals, Negotiated For You',
      description: 'We negotiate directly with sellers so you don\'t have to, you only proceed if it makes sense.',
      image: "/FeatureGrid/Frame_3.png",
      alt: 'Handshake deal'
    }
  ]

  return (
    <section className="py-8 bg-white">
      <div ref={ref} className="container-max">
        <div className="section-padding">
          {/* Mobile: Horizontal scroll container */}
          <div className="md:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 pb-4 px-6" style={{ width: 'max-content' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white overflow-hidden cursor-pointer group flex-shrink-0"
                  style={{ width: '362px' }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ width: '362px', height: '366px' }}>
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/placeholder.svg'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className={`py-[25px] px-2 font-medium ${hoveredCard === index ? 'flex flex-row justify-between min-h-[120px] gap-1 items-end' : ''}`}>
                    <div>
                      <h3 className="text-xl w-48 font-magnetik text-official-text mb-2">
                        {feature.title}
                      </h3>
                      <p className={`text-sm font-magnetik text-official-text ${hoveredCard === index ? 'w-[216px]' : ''}`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Show button only on hover for any card */}
                    {hoveredCard === index && (
                      <motion.button
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{
                          boxShadow: 'inset 0 6px 7px rgba(255,255,255,0.35)',
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openPopup()}
                        className="hover:bg-[#1e4a3d] max-w-[120px] w-full text-white font-bold font-magnetik transition-all duration-300 text-xs py-3 px-5 leading-140 flex items-center justify-center h-[49px] rounded-[8px] bg-[#2F5D50] shadow-grid-pill tracking-snug"
                      >
                        GET STARTED
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Normal flex layout */}
          <div className="hidden md:flex gap-1">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white overflow-hidden cursor-pointer group"
                style={{ width: '362px' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ width: '362px', height: '366px' }}>
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/placeholder.svg'
                    }}
                  />
                </div>

                {/* Content */}
                <div className={`py-[25px] px-2 font-medium ${hoveredCard === index ? 'flex flex-row justify-between min-h-[120px] gap-1 items-end' : ''}`}>
                  <div>
                    <h3 className="text-xl w-48 font-magnetik text-official-text mb-2">
                      {feature.title}
                    </h3>
                    <p className={`text-sm font-magnetik text-official-text ${hoveredCard === index ? 'w-[216px]' : ''}`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Show button only on hover for any card */}
                  {hoveredCard === index && (
                    <motion.button
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{
                        boxShadow: 'inset 0 6px 7px rgba(255,255,255,0.35)',
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openPopup()}
                      className="hover:bg-[#1e4a3d] max-w-[120px] w-full text-white font-bold font-magnetik transition-all duration-300 text-xs py-3 px-5 leading-140 flex items-center justify-center h-[49px] rounded-[8px] bg-[#2F5D50] shadow-grid-pill tracking-snug"
                    >
                      GET STARTED
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Popup is now handled globally in App.jsx */}
    </section>
  )
}

export default FeaturesGrid