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
          className="fixed inset-0 bg-[#BAAB96] bg-opacity-90 flex items-center justify-center z-50 p-4 sm:p-6"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-[40px] w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[578px] relative max-h-[90vh] overflow-y-auto scrollbar-hide md:modal-scrollbar-hide"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 transition-colors"
            >
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-10 sm:h-10">
                <rect width="40" height="40" fill="white" fill-opacity="0.2" />
                <path d="M26 14L14 26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 14L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-4 sm:mb-6">
              <h2 className="font-grotesk font-bold text-2xl sm:text-3xl md:text-4xl text-official-text tracking-snug leading-none max-w-[423px] w-full">
                Let's help you choose better.
              </h2>
              <p className="text-xs sm:text-sm max-w-[423px] w-full font-medium leading-130 tracking-snug mt-3 sm:mt-4 font-magnetik text-official-text opacity-80">
                Share a few details and a Totoko expert will reach out to understand
                your needs, personalise recommendations, and help you decide
                comfortably and without pressure.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="ENTER YOUR NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full min-h-12 sm:min-h-14 md:min-h-16 px-4 sm:px-5 py-4 sm:py-5 md:py-5 border border-gray-200 rounded-xl font-magnetik text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all placeholder:text-xs sm:placeholder:text-sm placeholder:font-semibold placeholder:leading-none placeholder:text-official-text/40 placeholder:uppercase placeholder:font-magnetik"
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
                  className="w-full min-h-12 sm:min-h-14 md:min-h-16 px-4 sm:px-5 py-4 sm:py-5 md:py-5 border border-gray-200 rounded-xl font-magnetik text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all placeholder:text-xs sm:placeholder:text-sm placeholder:font-semibold placeholder:leading-none placeholder:text-official-text/40 placeholder:uppercase placeholder:font-magnetik"
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
                  className="w-full min-h-12 sm:min-h-14 md:min-h-16 px-4 sm:px-5 py-4 sm:py-5 md:py-5 border border-gray-200 rounded-xl font-magnetik text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all placeholder:text-xs sm:placeholder:text-sm placeholder:font-semibold placeholder:leading-none placeholder:text-official-text/40 placeholder:uppercase placeholder:font-magnetik"
                />
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full min-h-12 sm:min-h-14 md:min-h-16 px-4 sm:px-5 py-4 sm:py-5 md:py-5 pr-12 sm:pr-16 border border-gray-200 rounded-xl font-magnetik text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all placeholder:text-xs sm:placeholder:text-sm placeholder:font-semibold placeholder:leading-none placeholder:text-official-text/40 placeholder:uppercase placeholder:font-magnetik appearance-none bg-white text-official-text"
                >
                  <option value="" disabled className="text-official-text/40 uppercase font-semibold">APPLIANCE CATEGORY</option>
                  {applianceCategories.map((category) => (
                    <option key={category} value={category} className="text-official-text">
                      {category}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown arrow with background */}
                <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <div className="bg-[#BAB996]/30 rounded-[6px] p-1.5 sm:p-2 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
                    <svg width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[18px] sm:h-[17px]">
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
                className="w-full sm:max-w-[172px] bg-[#2F5D50] hover:bg-[#1e4a3d] text-white font-bold font-magnetik transition-all duration-300 text-xs sm:text-sm py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-green-pill tracking-snug mt-4 sm:mt-6"
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