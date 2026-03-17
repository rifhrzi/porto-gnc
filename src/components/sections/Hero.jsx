import { useState, useEffect, useRef, Fragment } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Dither from '../common/Dither'
import { fadeUpVariants, fadeInLeftVariants, fadeInRightVariants, buttonTapVariants, isMobileViewport } from '../../utils/animations'
import styles from './Hero.module.css'

const Hero = () => {
  const { content } = useLanguage()
  const { heroContent } = content
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const heroRef = useRef(null)
  const words = heroContent?.rotatingWords?.length
    ? heroContent.rotatingWords
    : ['Innovation', 'Growth', 'Impact', 'Scale']

  // Typing effect
  useEffect(() => {
    const word = words[currentWord]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < word.length) {
          setDisplayText(word.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(word.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWord((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentWord, displayText, isDeleting, words])

  useEffect(() => {
    setCurrentWord(0)
    setDisplayText('')
    setIsDeleting(false)
  }, [words])


  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      {/* Animated Background */}
      <div className={styles.background}>
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          <Dither
            waveColor={[0.32, 0.15, 1]}
            disableAnimation={false}
            enableMouseInteraction
            mouseRadius={0.4}
            colorNum={4}
            pixelSize={2}
            waveAmplitude={0.25}
            waveFrequency={3}
            waveSpeed={0.11}
          />
        </div>
      </div>

      {/* Content */}
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.badgeDot} />
            <span>{heroContent?.badge || 'Driving Digital Transformation'}</span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className={styles.titleLine}>{heroContent.titleLeading}</span>
            <span className={styles.titleLine}>
              <span className={styles.highlight}>
                {displayText}
                <span className={styles.cursor}>|</span>
              </span>
            </span>
            <span className={styles.titleLine}>{heroContent.titleTrailing}</span>
          </motion.h1>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="#portfolio"
              className={styles.primaryButton}
              onClick={(e) => handleNavClick(e, '#portfolio')}
              whileHover={isMobileViewport() ? {} : { scale: 1.05, y: -2 }}
              whileTap={buttonTapVariants.tap}
            >
              {heroContent.primaryActionLabel}
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.secondaryButton}
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={isMobileViewport() ? {} : { scale: 1.05 }}
              whileTap={buttonTapVariants.tap}
            >
              {heroContent.secondaryActionLabel}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className={styles.statsPreview}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {heroContent.statsPreview.map((stat, index, array) => (
            <Fragment key={stat.label}>
              <motion.div
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
              {index < array.length - 1 && <div className={styles.statDivider} />}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
