import { motion } from 'framer-motion'
import { ArrowUp, Linkedin, Twitter, Github, Instagram } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Footer.module.css'

const iconMap = {
  Linkedin,
  Twitter,
  Github,
  Instagram,
}

const Footer = () => {
  const { content } = useLanguage()
  const { companyInfo, navLinks, socialLinks, uiText } = content
  const currentYear = new Date().getFullYear()
  const { footerSection } = uiText

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundGrid} />

      <div className={`container ${styles.container}`}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
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
            <p className={styles.tagline}>{companyInfo.description}</p>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{footerSection.navTitle}</h4>
              <nav className={styles.navLinks}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{footerSection.contactTitle}</h4>
              <div className={styles.contactInfo}>
                <a href={`mailto:${companyInfo.email}`} className={styles.link}>
                  {companyInfo.email}
                </a>
                <a href={`tel:${companyInfo.phone}`} className={styles.link}>
                  {companyInfo.phone}
                </a>
                <p className={styles.address}>{companyInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            {footerSection.copyrightPrefix} {currentYear} {companyInfo.name}. {footerSection.copyrightSuffix}
          </p>

          <div className={styles.socialLinks}>
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon]
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>

          <motion.button
            className={styles.scrollTop}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer



