import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const FeaturesGrid = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  const features = [
    {
      title: 'Personalised Recommendations',
      description: 'We understand your requirements and shortlist appliances that actually fit, no unnecessary options.',
      image: '/src/assets/FeatureGrid/Frame_1.png',
      alt: 'Woman cooking in modern kitchen'
    },
    {
      title: 'Expert-Assisted Decisions',
      description: 'A Totoko expert reviews the options with you, answers questions, and helps you decide comfortably.',
      image: '/src/assets/FeatureGrid/Frame_2.png',
      alt: 'Expert consultation'
    },
    {
      title: 'Better Deals, Negotiated For You',
      description: 'We negotiate directly with sellers so you don\'t have to, you only proceed if it makes sense.',
      image: '/src/assets/FeatureGrid/Frame_3.png',
      alt: 'Handshake deal',
      hasButton: true
    }
  ]

  return (
    <section className="py-8 bg-white">
      <div ref={ref} className="container-max">
        <div className="section-padding">
          <div className="flex gap-1">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white overflow-hidden"
                style={{ width: '362px' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ width: '362px', height: '366px' }}>
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className={`py-[25px] font-medium ${feature.hasButton ? 'flex flex-row justify-between min-h-[120px] gap-1 items-end' : ''}`}>
                  <div>
                    <h3 className="text-xl w-48 font-magnetik text-official-text mb-2">
                      {feature.title}
                    </h3>
                    <p className={`text-sm font-magnetik text-official-text ${feature.hasButton ? 'w-[216px]' : ''}`}>
                      {feature.description}
                    </p>
                  </div>

                  {feature.hasButton && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="hover:bg-gray-800 text-white font-bold font-magnetik transition-colors duration-300 text-xs py-4 px-8 leading-140 flex items-center justify-center h-[49px] rounded-[8px] bg-[#2F5D50] shadow-green-pill tracking-snug"
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
    </section>
  )
}

export default FeaturesGrid