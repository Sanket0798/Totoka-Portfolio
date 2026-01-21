import { useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const links = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' }
  ]

  const socialLinks = [
    { name: 'Instagram', href: '#instagram' },
    { name: 'LinkedIn', href: '#linkedin' },
    { name: 'Youtube', href: '#youtube' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container-max">
        <div className="section-padding py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Join Totoko as we build a calmer, smarter way to choose appliances one personalised decision, expert insight, and better deal at a time.
            </p>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-200"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-600 hover:bg-gray-500 px-6 py-3 rounded-r-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </form>

            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm mb-4"
              >
                Thank you for subscribing!
              </motion.p>
            )}

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy-consent"
                className="mt-1 w-4 h-4 text-gray-600 bg-gray-800 border-gray-600 rounded focus:ring-gray-500"
                required
              />
              <label htmlFor="privacy-consent" className="text-sm text-gray-400 leading-relaxed">
                I agree to receive communications and updates from Totoko. I confirm that I have reviewed, and accepted our{' '}
                <a href="#privacy" className="text-gray-300 hover:text-white underline transition-colors duration-200">
                  Privacy Policy
                </a>
              </label>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-gray-400 text-sm font-medium tracking-wider mb-6 uppercase">
              Links
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-gray-400 text-sm font-medium tracking-wider mb-6 uppercase">
              Follow Us
            </h3>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-lg"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Large Totoko Branding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center justify-center relative">
            {/* Large totoko text */}
            <h2 className="text-[370px] font-grotesk font-bold text-white tracking-snug">
              totoko
            </h2>
            
            {/* Circular element */}
            {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-teal-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-800">
        <div className="container-max">
          <div className="section-padding py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Totoko. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms
                </a>
                <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer