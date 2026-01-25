import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const ContactFormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
    category: ''
  })

  const applianceCategories = [
    'Air Conditioner',
    'Refrigerator',
    'Washing Machine',
    'Television',
    'Microwave',
    'Dishwasher',
    'Water Purifier',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add API call or other logic here
    onClose()
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#BAAB96] bg-opacity-90 flex items-center justify-center z-50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-[40px] w-full max-w-[578px] relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-10 right-10 transition-colors"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" fill="white" fill-opacity="0.2" />
                <path d="M26 14L14 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 14L26 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="font-grotesk font-bold text-4xl text-official-text tracking-snug leading-none max-w-[423px] w-full">
                Let's help you choose better.
              </h2>
              <p className="text-sm max-w-[423px] w-full font-medium leading-130 tracking-snug mt-4 font-magnetik text-official-text opacity-80">
                Share a few details and a Totoko expert will reach out to understand
                your needs, personalise recommendations, and help you decide
                comfortably and without pressure.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="ENTER YOUR NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full min-h-16 px-5 py-6 border border-gray-200 rounded-xl font-magnetik text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all placeholder:text-sm placeholder:font-semibold placeholder:leading-none placeholder:text-official-text/40 placeholder:uppercase placeholder:font-magnetik"
                />
              </div>

              {/* Mobile Input */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="ENTER YOUR MOBILE NUMBER"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full min-h-16 px-5 py-6 border border-gray-200 rounded-xl font-magnetik text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all placeholder:text-sm placeholder:font-semibold placeholder:leading-none placeholder:text-official-text/40 placeholder:uppercase placeholder:font-magnetik"
                />
              </div>

              {/* Pincode Input */}
              <div>
                <input
                  type="text"
                  name="pincode"
                  placeholder="PINCODE"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  className="w-full min-h-16 px-5 py-6 border border-gray-200 rounded-xl font-magnetik text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all placeholder:text-sm placeholder:font-semibold placeholder:leading-none placeholder:text-official-text/40 placeholder:uppercase placeholder:font-magnetik"
                />
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full min-h-16 px-5 py-6 pr-16 border border-gray-200 rounded-xl font-magnetik text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all placeholder:text-sm placeholder:font-semibold placeholder:leading-none placeholder:text-official-text/40 placeholder:uppercase placeholder:font-magnetik appearance-none bg-white text-official-text"
                >
                  <option value="" disabled className="text-official-text/40 uppercase font-semibold">APPLIANCE CATEGORY</option>
                  {applianceCategories.map((category) => (
                    <option key={category} value={category} className="text-official-text">
                      {category}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown arrow with background */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <div className="bg-[#BAB996]/30 rounded-[6px] p-2 flex items-center justify-center w-8 h-8">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#211A37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: 'inset 0 6px 7px rgba(255,255,255,0.35), 0 16px 24px rgba(47,93,80,0.5)',
                }}
                whileTap={{ scale: 0.98 }}
                className="max-w-[172px] w-full bg-[#2F5D50] hover:bg-[#1e4a3d] text-white font-bold font-magnetik transition-all duration-300 text-sm py-4 px-8 rounded-lg shadow-green-pill tracking-snug mt-6"
              >
                SUBMIT
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactFormPopup