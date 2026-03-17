import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Instagram } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUpVariants, scaleUpVariants, viewportConfig, isMobileViewport } from '../../utils/animations'
import styles from './Brands.module.css'

const Brands = () => {
  const { content } = useLanguage()
  const { brands, uiText } = content
  const { brandsSection } = uiText
  const [expandedId, setExpandedId] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleClose = (e) => {
    e.stopPropagation()
    setExpandedId(null)
  }

  return (
    <section id="brands" className={`section section-dark ${styles.brands}`}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">{brandsSection.label}</span>
          <h2 className="section-title">
            {brandsSection.title} <span className="text-gradient">{brandsSection.highlight}</span>
          </h2>
        </motion.div>

        {/* Brands Grid */}
        <div className={styles.brandsGrid}>
          {brands.map((brand, index) => {
            const isExpanded = expandedId === brand.id

            return (
              <motion.div
                key={brand.id}
                className={`${styles.brandCard} ${isExpanded ? styles.expanded : ''}`}
                variants={scaleUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: index * (isMobile ? 0.1 : 0.15) }}
                onClick={() => handleCardClick(brand.id)}
                animate={isMobile ? {} : {
                  width: isExpanded ? 580 : 280,
                }}
                whileHover={!isExpanded && !isMobile ? { y: -8, scale: 1.02 } : {}}
              >
                {/* Close button */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.button
                      className={styles.closeButton}
                      onClick={handleClose}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      aria-label={brandsSection.closeAriaLabel}
                    >
                      <X size={20} />
                    </motion.button>
                  )}
                </AnimatePresence>

                <div className={styles.cardContent}>
                  {/* Left side - Logo */}
                  <motion.div
                    className={styles.logoSection}
                    layout
                  >
                    <div className={styles.logoWrapper}>
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className={styles.brandLogo}
                      />
                    </div>
                    <span className={styles.brandName}>{brand.name}</span>

                    {/* Click hint when collapsed */}
                    <AnimatePresence>
                      {!isExpanded && (
                        <motion.span
                          className={styles.clickToExpand}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {brandsSection.clickToExpand}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Right side - Description (slides in) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className={styles.descriptionSection}
                        initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, width: 0, x: -20 }}
                        animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, width: 'auto', x: 0 }}
                        exit={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, width: 0, x: -20 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <div className={styles.descriptionContent}>
                          <h4 className={styles.descriptionTitle}>{brandsSection.descriptionTitlePrefix} {brand.name}</h4>
                          <p className={styles.description}>{brand.description}</p>
                          <div className={styles.websiteActions}>
                            {brand.website && (
                              <a
                                href={brand.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.websiteButton}
                                onPointerDown={(e) => e.stopPropagation()}
                                onMouseDown={(e) => e.stopPropagation()}
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`${brandsSection.websiteAriaPrefix} ${brand.name}`}
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                            {brand.instagram && (
                              <a
                                href={brand.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.websiteButton}
                                onPointerDown={(e) => e.stopPropagation()}
                                onMouseDown={(e) => e.stopPropagation()}
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`${brandsSection.instagramAriaPrefix} ${brand.name}`}
                              >
                                <Instagram size={16} />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Background decoration */}
      <div className={styles.bgDecoration}>
        <div className={styles.glowOrb1} />
        <div className={styles.glowOrb2} />
      </div>
    </section>
  )
}

export default Brands
