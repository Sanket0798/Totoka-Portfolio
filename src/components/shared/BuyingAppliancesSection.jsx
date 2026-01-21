import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const BuyingAppliancesSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <section className="bg-white py-8">
      <div ref={ref} className="container-max">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{
              width: '5378px',
              height: '224px',
              left: '-165px'
            }}
          >
            <h2 
              className="font-grotesk text-official-text"
              style={{
                fontWeight: 400,
                fontSize: '216px',
                lineHeight: '224px',
                letterSpacing: '-0.5px'
              }}
            >
              Buying appliances
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BuyingAppliancesSection