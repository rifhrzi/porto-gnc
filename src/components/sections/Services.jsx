import { motion } from 'framer-motion'
import { Code2, Smartphone, Globe, Cloud, Shield, Brain, FileText, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import SpotlightCard from '../common/SpotlightCard'
import { fadeUpVariants, iconHoverVariants, viewportConfig, isMobileViewport } from '../../utils/animations'
import styles from './Services.module.css'

const iconMap = {
  Code2,
  Smartphone,
  Globe,
  Cloud,
  Shield,
  Brain,
  FileText,
}

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon]
  const isMobile = isMobileViewport()

  return (
    <motion.div
      className={styles.serviceCardWrapper}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay: index * (isMobile ? 0.08 : 0.12) }}
      whileHover={isMobile ? {} : { y: -8 }}
    >
      <SpotlightCard className={styles.serviceCard} spotlightColor="rgba(0, 212, 255, 0.15)">
        <div className={styles.cardContent}>
          <motion.div
            className={styles.iconWrapper}
            variants={iconHoverVariants}
            initial="rest"
            whileHover="hover"
          >
            <Icon size={28} />
          </motion.div>
          <motion.h3
            className={styles.serviceTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            viewport={viewportConfig}
          >
            {service.title}
          </motion.h3>
          <p className={styles.serviceDescription}>{service.description}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

const Services = () => {
  const { content } = useLanguage()
  const { services, executiveBrief, valueDrivers, audienceSegments, uiText } = content
  const { servicesSection } = uiText
  const missionText = executiveBrief?.mission ||
    'Accelerating digital transformation through practical, efficient, and cost-competitive solutions without compromising quality.'
  const positioningText = executiveBrief?.positioning ||
    'We act as a growth partner with a sustainable blend of technology, digital marketing, and business strategy.'
  const safeValueDrivers = valueDrivers?.length
    ? valueDrivers
    : [
      { title: 'Scalable Solutions' },
      { title: 'Affordable Excellence' },
      { title: 'Data-Driven Approach' },
    ]
  const safeAudienceSegments = audienceSegments?.length
    ? audienceSegments
    : [
      { title: 'SME/UMKM' },
      { title: 'Scale-up Startups' },
      { title: 'Established Enterprises' },
    ]

  return (
    <section id="services" className={`section section-dark ${styles.services}`}>
      {/* Background Elements */}
      <div className={styles.backgroundPattern} />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={viewportConfig}
          >
            {servicesSection.label}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={viewportConfig}
          >
            {servicesSection.title}<br />
            <span className="text-gradient">{servicesSection.highlight}</span>
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={viewportConfig}
          >
            {missionText}
          </motion.p>
          <div className={styles.valueGrid}>
            {safeValueDrivers.map((item) => (
              <span key={item.title} className={styles.valuePill}>
                {item.title}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>{servicesSection.ctaTitle}</h3>
            <p className={styles.ctaText}>
              {positioningText}
            </p>
            <div className={styles.audiencePills}>
              <span className={styles.audiencePrefix}>{servicesSection.audiencePrefix}</span>
              {safeAudienceSegments.map((segment) => (
                <span key={segment.id || segment.title} className={styles.audiencePill}>
                  {segment.title}
                </span>
              ))}
            </div>
          </div>
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {servicesSection.ctaButtonLabel}
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
