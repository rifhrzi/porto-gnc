import { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects, categories } from '../../data/content'
import { fadeUpVariants, scaleUpVariants, viewportConfig, isMobileViewport } from '../../utils/animations'
import styles from './Portfolio.module.css'

const ProjectCard = forwardRef(({ project, index }, ref) => {
  const isMobile = isMobileViewport()
  const isCenteredCard = (project.title || "").trim().toLowerCase() === "and many more"
  
  return (
    <motion.div
      ref={ref}
      className={`${styles.projectCard} ${isCenteredCard ? styles.centeredProjectCard : ''}`}
      layout
      variants={scaleUpVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ 
        duration: isMobile ? 0.3 : 0.4, 
        delay: index * (isMobile ? 0.03 : 0.05),
        layout: { duration: 0.3 }
      }}
      whileHover={isMobile ? {} : { y: -5, transition: { duration: 0.2 } }}
    >
      <div className={styles.cardAccent} />
      <div
        className={`${styles.projectContent} ${isCenteredCard ? styles.projectContentCentered : ''}`}
        style={isCenteredCard ? { textAlign: 'center' } : undefined}
      >
        {project.category && (
          <span className={styles.projectCategory}>
            {categories.find(c => c.id === project.category)?.label || project.category}
          </span>
        )}
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        {(project.tech?.length > 0 || project.website) && (
          <div className={styles.cardFooter}>
            {project.tech?.length > 0 && (
              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            )}
            {project.website && (
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitLink}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Kunjungi</span>
                <ExternalLink size={14} />
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
})

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className={`section section-light ${styles.portfolio}`}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">Portofolio Kami</span>
          <h2 className="section-title">
            Menampilkan<br />
            <span className="text-gradient">Karya Terbaik Kami</span>
          </h2>
          <p className="section-description">
            Jelajahi portofolio kami yang beragam dari proyek-proyek sukses yang telah
            diselesaikan di berbagai industri dan teknologi.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className={styles.filterTabs}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`${styles.filterTab} ${activeFilter === category.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(category.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={isMobileViewport() ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              {activeFilter === category.id && (
                <motion.span
                  className={styles.activeIndicator}
                  layoutId="portfolioActiveIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className={styles.projectsGrid} layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
