import { motion } from 'framer-motion'
import styles from './Card.module.css'

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  padding = 'medium',
  className = '',
  ...props 
}) => {
  const classNames = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    className,
  ].filter(Boolean).join(' ')

  return (
    <motion.div
      className={classNames}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {variant === 'glass' && <div className={styles.cardGlow} />}
      <div className={styles.cardContent}>
        {children}
      </div>
      {variant === 'glass' && <div className={styles.cardBorder} />}
    </motion.div>
  )
}

export default Card



