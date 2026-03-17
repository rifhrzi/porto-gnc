import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { content, language, setLanguage, languages } = useLanguage()
  const { companyInfo, navLinks, uiText } = content
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const languageMenuRef = useRef(null)

  const activeLanguage = languages.find((item) => item.code === language) || languages[0]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsLanguageMenuOpen(false)
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage)
    setIsLanguageMenuOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={`container ${styles.container}`}>
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          <span className={styles.logoFrame}>
            <img
              src={companyInfo.logo}
              alt=""
              aria-hidden="true"
              className={styles.logoImage}
            />
          </span>
          <span className={styles.logoText}>{companyInfo.name}</span>
        </a>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
              {activeSection === link.href.replace('#', '') && (
                <motion.span
                  className={styles.activeIndicator}
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className={styles.languageSwitch} ref={languageMenuRef}>
          <button
            type="button"
            className={styles.languageButton}
            onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
            aria-haspopup="menu"
            aria-expanded={isLanguageMenuOpen}
          >
            <span className={styles.languageButtonText}>{uiText.navbar.languageButtonLabel}</span>
            <span className={styles.languageCurrent}>{activeLanguage.label}</span>
            <ChevronDown
              size={16}
              className={`${styles.languageChevron} ${isLanguageMenuOpen ? styles.languageChevronOpen : ''}`}
            />
          </button>

          <AnimatePresence>
            {isLanguageMenuOpen && (
              <motion.div
                className={styles.languageMenu}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18 }}
                role="menu"
              >
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    className={`${styles.languageOption} ${language === item.code ? styles.languageOptionActive : ''}`}
                    onClick={() => handleLanguageChange(item.code)}
                    role="menuitemradio"
                    aria-checked={language === item.code}
                  >
                    <span>{item.label}</span>
                    {language === item.code && <span className={styles.languageCheck}>{uiText.navbar.activeLabel}</span>}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className={styles.mobileLanguageGroup}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <span className={styles.mobileLanguageLabel}>{uiText.navbar.languageButtonLabel}</span>
                <div className={styles.mobileLanguageOptions}>
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      className={`${styles.mobileLanguageOption} ${language === item.code ? styles.mobileLanguageOptionActive : ''}`}
                      onClick={() => handleLanguageChange(item.code)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
