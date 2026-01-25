import { createContext, useContext, useState } from 'react'

const ContactFormContext = createContext()

export const useContactForm = () => {
  const context = useContext(ContactFormContext)
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider')
  }
  return context
}

export const ContactFormProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <ContactFormContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </ContactFormContext.Provider>
  )
}