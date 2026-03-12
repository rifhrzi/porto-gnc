import { motion } from 'framer-motion'
import styles from './Button.module.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
  ].filter(Boolean).join(' ')

  const buttonContent = (
    <>
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classNames}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

export default Button



