import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const FeaturesGrid = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  const features = [
    {
      title: 'Personalised Recommendations',
      description: 'We understand your requirements and shortlist appliances that actually fit, no unnecessary options.',
      image: '/api/placeholder/400/300',
      alt: 'Woman cooking in modern kitchen'
    },
    {
      title: 'Expert-Assisted Decisions',
      description: 'A Totoko expert reviews the options with you, answers questions, and helps you decide comfortably.',
      image: '/api/placeholder/400/300',
      alt: 'Expert consultation'
    },
    {
      title: 'Better Deals, Negotiated For You',
      description: 'We negotiate directly with sellers so you don\'t have to, you only proceed if it makes sense.',
      image: '/api/placeholder/400/300',
      alt: 'Handshake deal',
      hasButton: true
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div ref={ref} className="container-max">
        <div className="section-padding">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {feature.hasButton && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gray-800 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors duration-200"
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