import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react'
import { companyInfo, socialLinks } from '../../data/content'
import { fadeUpVariants, fadeInLeftVariants, fadeInRightVariants, viewportConfig, staggerContainerVariants } from '../../utils/animations'
import styles from './Contact.module.css'

const iconMap = {
  Linkedin,
  Twitter,
  Github,
  Instagram,
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json().catch(() => ({ ok: false, error: 'Respon tidak valid dari server.' }))

      if (!response.ok || !data.ok) {
        throw new Error(data?.error || 'Gagal mengirim pesan.')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitError('')
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Terjadi kesalahan saat mengirim pesan.')
      setIsSubmitted(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFieldActive = (field) => focusedField === field || formData[field]

  return (
    <section id="contact" className={`section section-dark ${styles.contact}`}>
      {/* Background */}
      <div className={styles.backgroundGrid} />
      <div className={styles.gradientOrb} />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">Hubungi Kami</span>
          <h2 className="section-title">
            Mari Bangun Sesuatu<br />
            <span className="text-gradient">yang Luar Biasa Bersama</span>
          </h2>
          <p className="section-description">
            Siap memulai proyek berikutnya? Hubungi kami dan mari
            diskusikan bagaimana kami dapat membantu mewujudkan visi Anda.
          </p>
        </motion.div>

        <div className={styles.contactWrapper}>
          {/* Contact Info */}
          <motion.div
            className={styles.contactInfo}
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div 
              className={styles.infoCard}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className={styles.infoIcon}>
                <Mail size={24} />
              </div>
              <div className={styles.infoContent}>
                <h4>Email Kami</h4>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className={styles.infoIcon}>
                <Phone size={24} />
              </div>
              <div className={styles.infoContent}>
                <h4>Hubungi Kami</h4>
                <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              </div>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className={styles.infoIcon}>
                <MapPin size={24} />
              </div>
              <div className={styles.infoContent}>
                <h4>Kunjungi Kami</h4>
                <p>{companyInfo.address}</p>
              </div>
            </motion.div>

            <div className={styles.socialSection}>
              <h4>Ikuti Kami</h4>
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.formWrapper}
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={`${styles.inputGroup} ${isFieldActive('name') ? styles.active : ''}`}>
                  <label htmlFor="name" className={styles.floatingLabel}>Nama Anda</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <span className={styles.inputBorder} />
                </div>

                <div className={`${styles.inputGroup} ${isFieldActive('email') ? styles.active : ''}`}>
                  <label htmlFor="email" className={styles.floatingLabel}>Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <span className={styles.inputBorder} />
                </div>
              </div>

              <div className={`${styles.inputGroup} ${isFieldActive('company') ? styles.active : ''}`}>
                <label htmlFor="company" className={styles.floatingLabel}>Nama Perusahaan</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                />
                <span className={styles.inputBorder} />
              </div>

              <div className={`${styles.inputGroup} ${isFieldActive('message') ? styles.active : ''}`}>
                <label htmlFor="message" className={styles.floatingLabel}>Pesan Anda</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <span className={styles.inputBorder} />
              </div>

              {submitError && <p className={styles.formError}>{submitError}</p>}

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className={styles.loadingSpinner} />
                ) : isSubmitted ? (
                  <>
                    <span>Pesan Terkirim!</span>
                    <span className={styles.checkmark}>✓</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Pesan</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
