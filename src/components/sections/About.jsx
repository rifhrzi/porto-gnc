import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUpVariants, viewportConfig } from '../../utils/animations'
import styles from './About.module.css'

const TestimonialCard = ({ item }) => (
  <div className={styles.testimonialCard}>
    {/* Chat Bubble */}
    <div className={styles.bubbleContent}>
      <Quote className={styles.quoteIcon} size={28} />
      <p className={styles.testimonialText}>{item.text}</p>
    </div>

    {/* Speech Bubble Tail */}
    <div className={styles.bubbleTail} />

    {/* Profile */}
    <div className={styles.profileInfo}>
      <div className={styles.avatarWrapper}>
        <img
          src={item.avatar}
          alt={item.name}
          className={styles.avatar}
          loading="lazy"
        />
      </div>
      <div className={styles.profileText}>
        <span className={styles.clientName}>{item.name}</span>
        <span className={styles.clientRole}>
          {item.role}, {item.company}
        </span>
      </div>
    </div>
  </div>
)

const About = () => {
  const { content } = useLanguage()
  const { testimonials, audienceSegments, uiText } = content
  const { aboutSection } = uiText
  const safeAudienceSegments = audienceSegments?.length
    ? audienceSegments
    : [
        { title: 'SME/UMKM' },
        { title: 'Scale-up Startups' },
        { title: 'Established Enterprises' },
      ]

  return (
    <section id="testimonials" className={`section section-light ${styles.about}`}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">{aboutSection.label}</span>
          <h2 className="section-title">
            {aboutSection.title}<br />
            <span className="text-gradient">{aboutSection.highlight}</span>
          </h2>
          <div className={styles.audiencePills}>
            <span className={styles.audienceLabel}>{aboutSection.audienceLabel}</span>
            {safeAudienceSegments.map((segment) => (
              <span key={segment.id || segment.title} className={styles.audiencePill}>
                {segment.title}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Infinite Marquee — full width, overflows container */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {/* First set */}
          {testimonials.map((item) => (
            <TestimonialCard key={`a-${item.id}`} item={item} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((item) => (
            <TestimonialCard key={`b-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
