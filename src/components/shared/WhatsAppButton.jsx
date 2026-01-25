import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    // Show button after scrolling down a bit
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    // WhatsApp click handler
    const handleWhatsAppClick = () => {
        const phoneNumber = '+919876543210' // Replace with your actual WhatsApp number
        const message = encodeURIComponent('Hi! I\'m interested in your appliance buying service. Can you help me?')
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

        window.open(whatsappUrl, '_blank')
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <motion.button
                        onClick={handleWhatsAppClick}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 8px 25px rgba(47, 93, 80, 0.3)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#2F5D50] hover:bg-[#1e4a3d] text-white rounded-full w-[96px] h-[96px] transition-all duration-300 flex items-center justify-center group relative overflow-hidden shadow-[0px_14px_20px_rgba(47,93,80,0.4),inset_0px_6px_7px_rgba(255,255,255,0.25)]"
                        // style={{
                        //     boxShadow: '0 20px 7px rgba(47, 93, 80, 0.4), inset 0 0px 6px rgba(47, 93, 80, 0.25)'
                        // }}
                        aria-label="Contact us on WhatsApp"
                    >
                        {/* Chat/Message Icon */}
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.48534 29.9606C5.75491 30.6406 5.81493 31.3857 5.65767 32.1001L3.70517 38.1318C3.64226 38.4376 3.65852 38.7545 3.75243 39.0524C3.84633 39.3502 4.01475 39.6191 4.24173 39.8336C4.4687 40.0481 4.7467 40.201 5.04937 40.2779C5.35204 40.3549 5.66933 40.3532 5.97117 40.2731L12.2283 38.4434C12.9025 38.3097 13.6006 38.3681 14.2432 38.6121C18.158 40.4403 22.5928 40.8271 26.7651 39.7042C30.9374 38.5814 34.579 36.021 37.0475 32.4748C39.5159 28.9286 40.6526 24.6245 40.2569 20.3219C39.8612 16.0194 37.9586 11.9948 34.8848 8.95828C31.811 5.92178 27.7635 4.06849 23.4564 3.7254C19.1493 3.3823 14.8594 4.57145 11.3436 7.08304C7.82788 9.59463 5.31214 13.2672 4.24031 17.4529C3.16847 21.6386 3.60941 26.0683 5.48534 29.9606Z" fill="url(#paint0_linear_195_1489)" fill-opacity="0.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_195_1489" x1="22.0006" y1="3.66748" x2="22.0006" y2="40.3344" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="#2F5D50" />
                                </linearGradient>
                            </defs>
                        </svg>


                        {/* Notification dot */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                    </motion.button>

                    {/* Tooltip */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-magnetik"
                    >
                        Need help? Chat with us!
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                    </motion.div> */}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default WhatsAppButton