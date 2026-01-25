"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactForm } from '../../contexts/ContactFormContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { openPopup } = useContactForm();

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle navigation clicks
  const handleNavClick = (e, link, hasDropdown = false) => {
    e.preventDefault();
    
    if (hasDropdown) return; // Don't scroll for dropdown items
    
    if (link === '#contact') {
      openPopup();
    } else {
      const sectionId = link.replace('#', '');
      scrollToSection(sectionId);
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // Categories dropdown items
  const categoryItems = [
    { name: 'Air Conditioners', link: '#air-conditioners' },
    { name: 'Refrigerators', link: '#refrigerators' },
    { name: 'Washing Machines', link: '#washing-machines' },
    { name: 'Televisions', link: '#televisions' },
    { name: 'Microwaves', link: '#microwaves' },
    { name: 'Dishwashers', link: '#dishwashers' },
    { name: 'Water Purifiers', link: '#water-purifiers' },
    { name: 'Kitchen Appliances', link: '#kitchen-appliances' },
  ];

  // Left side navigation items
  const leftNavItems = [
    { name: 'Categories', link: '#categories', hasDropdown: true },
    { name: 'About Us', link: '#about' },
    { name: 'Process', link: '#process' }
  ];

  // Right side navigation items
  const rightNavItems = [
    { name: 'Journey', link: '#journey' },
    { name: 'Testimonial', link: '#testimonials' },
    { name: 'Contact Us', link: '#contact' }
  ];

  // All items for mobile
  const allNavItems = [...leftNavItems, ...rightNavItems];

  // Custom Logo Component for Totoko
  const TotokoLogo = () => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center cursor-pointer"
      onClick={() => scrollToSection('home')}
    >
      <span className="text-2xl font-magnetik-bold text-gray-900 dark:text-white">
        totoko
      </span>
    </motion.div>
  );

  // Custom NavItems component for split layout
  const SplitNavItems = () => (
    <div className="hidden lg:flex items-center justify-between w-full max-w-4xl mx-auto">
      {/* Left Navigation */}
      <div className="flex items-center space-x-2">
        {leftNavItems.map((item, idx) => (
          <div key={`left-nav-${idx}`} className="relative">
            {item.hasDropdown ? (
              // Categories dropdown
              <div
                className="relative"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <button className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100/25 transition-all duration-200 font-magnetik-medium px-3 py-2 rounded-lg flex items-center">
                  <span className="block">{item.name}</span>
                  <motion.svg 
                    className="inline-block w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                    >
                      {categoryItems.map((category, categoryIdx) => (
                        <a
                          key={`category-${categoryIdx}`}
                          href={category.link}
                          className="block px-4 py-2 text-sm font-magnetik text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                        >
                          {category.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Regular nav item
              <a
                href={item.link}
                onClick={(e) => handleNavClick(e, item.link)}
                className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100/25 transition-all duration-200 font-magnetik-medium px-3 py-2 rounded-lg flex items-center"
              >
                <span className="block">{item.name}</span>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Center Logo */}
      <div className="flex-shrink-0">
        <TotokoLogo />
      </div>

      {/* Right Navigation */}
      <div className="flex items-center space-x-2">
        {rightNavItems.map((item, idx) => (
          <a
            key={`right-nav-${idx}`}
            href={item.link}
            onClick={(e) => handleNavClick(e, item.link)}
            className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100/25 transition-all duration-200 font-magnetik-medium px-3 py-2 rounded-lg"
          >
            <span className="block">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <SplitNavItems />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <TotokoLogo />
            </NavbarLogo>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {allNavItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`}>
                {item.hasDropdown ? (
                  // Categories with submenu in mobile
                  <div>
                    <button
                      onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                      className="relative text-neutral-600 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 font-magnetik-medium flex items-center justify-between w-full px-3 py-2 rounded-lg"
                    >
                      <span className="block">{item.name}</span>
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    
                    <AnimatePresence>
                      {isCategoriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-1 space-y-1"
                        >
                          {categoryItems.map((category, categoryIdx) => (
                            <a
                              key={`mobile-category-${categoryIdx}`}
                              href={category.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-3 py-2 text-sm font-magnetik text-neutral-500 hover:text-primary-600 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-150 rounded-lg"
                            >
                              {category.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular nav item
                  <a
                    href={item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className="relative text-neutral-600 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 font-magnetik-medium flex items-center px-3 py-2 rounded-lg"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                )}
              </div>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;