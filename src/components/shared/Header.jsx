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
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Left side navigation items
  const leftNavItems = [
    { name: 'Categories', link: '#categories' },
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
      className="flex items-center justify-center"
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
          <a
            key={`left-nav-${idx}`}
            href={item.link}
            className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 font-magnetik-medium px-3 py-2 rounded-lg flex items-center"
          >
            <span className="block">{item.name}</span>
            {/* {item.name === 'Categories' && (
              <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )} */}
          </a>
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
            className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 font-magnetik-medium px-3 py-2 rounded-lg"
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
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 font-magnetik-medium flex items-center px-3 py-2 rounded-lg"
              >
                <span className="block">{item.name}</span>
                {item.name === 'Categories' && (
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;