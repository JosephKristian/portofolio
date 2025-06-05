import { useState, useEffect, useRef } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useDarkMode } from '../../context/DarkModeContext'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Logo from './Logo'
import CustomNavLink from './CustomNavLink'

// === Constants ===
const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/projects', text: 'Services' },
  { to: '/#contact', text: 'Contact', isScroll: true },
]

const linkVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
}

// === Helpers ===
const animateNavbar = (scrolled, isDark, navRef) => {
  if (!navRef.current) return
  gsap.to(navRef.current, {
    backgroundColor: scrolled
      ? isDark
        ? 'rgba(31,41,55,0.7)'
        : 'rgba(255,255,255,0.7)'
      : 'transparent',
    boxShadow: scrolled ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
    duration: 0.4,
    ease: 'power3.out',
    backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
  })
}

const animateMobileMenu = (menuRef, isOpen) => {
  if (!menuRef.current) return
  gsap.to(menuRef.current, {
    opacity: isOpen ? 1 : 0,
    y: isOpen ? 0 : -20,
    pointerEvents: isOpen ? 'auto' : 'none',
    duration: 0.4,
    ease: isOpen ? 'power3.out' : 'power3.in',
  })
}

export default function Navigation() {
  const { isDark, toggleDarkMode } = useDarkMode()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      animateNavbar(scrolled, isDark, navRef)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDark])

  useEffect(() => {
    animateMobileMenu(mobileMenuRef, isMenuOpen)
  }, [isMenuOpen])

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link, index) => (
      <motion.div
        key={link.to}
        variants={linkVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: index * 0.05 }}
        whileHover={isMobile ? { x: 5 } : undefined}
      >
        <CustomNavLink
          to={link.to}
          onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
          className={`${
            isMobile
              ? 'py-2 border-b border-gray-200 dark:border-gray-700 text-lg'
              : 'relative text-base font-medium group transition-colors duration-200'
          }`}
        >
          {link.text}
          {!isMobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
          )}
        </CustomNavLink>
      </motion.div>
    ))

  return (
    <nav
      ref={navRef}
      className="fixed w-full top-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring' }}>
          <Logo isDark={isDark} />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {renderNavLinks()}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            <motion.div key={isDark ? 'sun' : 'moon'} initial={{ rotate: 180 }} animate={{ rotate: 0 }}>
              {isDark ? (
                <SunIcon className="w-6 h-6 text-yellow-400" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div className="relative w-6 h-6" initial={false} animate={isMenuOpen ? 'open' : 'closed'}>
            <motion.span
              className="absolute h-0.5 w-6 bg-current"
              variants={{
                open: { rotate: 45, y: 6 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute h-0.5 w-6 bg-current"
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1, y: 6 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute h-0.5 w-6 bg-current"
              variants={{
                open: { rotate: -45, y: -6 },
                closed: { rotate: 0, y: 12 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-xl backdrop-blur-md pointer-events-none opacity-0"
      >
        <div className="flex flex-col gap-2 py-4 px-6">
          {renderNavLinks(true)}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 py-2 mt-2 text-gray-700 dark:text-gray-300"
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
            {isDark ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
