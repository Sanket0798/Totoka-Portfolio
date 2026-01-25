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
    <footer className="bg-[#0A0A0A] text-white relative overflow-hidden px-6 md:px-0">
      <div className="container-max">
        <div className="section-padding pt-16 md:pt-[52px] pb-[22px]">
          <div className="flex flex-col md:flex-row lg:flex-nowrap justify-between items-start gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-shrink-0 w-full md:w-[524px]"
            >
              <p className="text-white/60 font-magnetik text-base md:text-lg leading-140 font-normal mb-6 w-full md:w-[524px]">
                Join Totoko as we build a calmer, smarter way to choose appliances one personalised decision, expert insight, and better deal at a time.
              </p>

              <form onSubmit={handleSubmit} className="mb-6 w-full md:w-[524px]">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL ADDRESS"
                    className="bg-white/10 border border-gray-700 rounded-l-lg px-5 py-6 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-200 text-sm font-medium placeholder:font-magnetik placeholder:font-medium placeholder:leading-140 placeholder:text-sm placeholder:uppercase placeholder:text-white w-full md:w-[450px]"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#BAAB96] hover:bg-[#A89B88] px-6 py-3 rounded-r-xl transition-colors duration-200 flex items-center justify-center flex-shrink-0 w-[74px]"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <div className="flex items-center justify-start gap-3 w-full md:w-[524px]">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  className="w-[31px] h-[31px] rounded border-2 border-gray-400 focus:ring-0 focus:ring-offset-0 flex-shrink-0 checkbox-black"
                  required
                />
                <label htmlFor="privacy-consent" className="text-sm text-white/60 leading-140 font-magnetik font-normal">
                  I agree to receive communications and updates from Totoko. I confirm that I have reviewed, and accepted our{' '}
                  <a href="#privacy" className="hover:text-gray-300 transition-colors duration-200 text-sm text-white leading-140 font-magnetik font-normal">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </motion.div>

            <div className="flex gap-12 lg:gap-16 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <h3 className="text-white/60 text-base font-medium mb-[18px] uppercase font-grotesk leading-140">
                  Links
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white hover:text-gray-300 transition-colors duration-200 text-base font-magnetik font-medium mb-[18px] uppercase leading-140"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <h3 className="text-white/60 text-base font-medium mb-[18px] uppercase font-grotesk leading-140">
                  Follow Us
                </h3>
                <ul className="space-y-3">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        className="text-white hover:text-gray-300 transition-colors duration-200 text-base font-magnetik font-medium mb-[18px] uppercase leading-140"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative overflow-visible"
      >
        <div className="relative">
          <h2 className="text-[126px] md:text-[370px] font-magnetik font-bold text-white tracking-tight leading-none absolute -top-7 md:top-0 md:left-52" style={{ width: '1122px', transform: 'translateY(80px)' }}>
            totoko
          </h2>
        </div>
        <div className="h-[150px] md:h-[370px]"></div>
      </motion.div>
    </footer>
  )
}

export default Footer