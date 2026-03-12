// Animation variants and utilities for responsive animations

// Detect if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Detect mobile viewport
export const isMobileViewport = () => {
  return window.innerWidth <= 768
}

// Get animation duration based on device
export const getAnimationDuration = (desktop = 0.6, mobile = 0.4) => {
  return isMobileViewport() || prefersReducedMotion() ? mobile : desktop
}

// Container animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobileViewport() ? 0.1 : 0.15,
      delayChildren: 0.1,
    },
  },
}

// Fade up animation variants
export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: isMobileViewport() ? 20 : 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: getAnimationDuration(0.6, 0.4),
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Fade in from left
export const fadeInLeftVariants = {
  hidden: {
    opacity: 0,
    x: isMobileViewport() ? -20 : -40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: getAnimationDuration(0.6, 0.4),
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Fade in from right
export const fadeInRightVariants = {
  hidden: {
    opacity: 0,
    x: isMobileViewport() ? 20 : 40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: getAnimationDuration(0.6, 0.4),
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Scale up animation
export const scaleUpVariants = {
  hidden: {
    opacity: 0,
    scale: isMobileViewport() ? 0.95 : 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: getAnimationDuration(0.5, 0.3),
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Stagger children with fade up
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobileViewport() ? 0.08 : 0.12,
      delayChildren: isMobileViewport() ? 0.1 : 0.2,
    },
  },
}

// Card hover animation (disabled on mobile)
export const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: isMobileViewport()
    ? { scale: 1, y: 0 }
    : {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
}

// Icon animation on hover
export const iconHoverVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: isMobileViewport()
    ? { scale: 1, rotate: 0 }
    : {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
}

// Viewport configuration for scroll animations
export const viewportConfig = {
  once: true,
  margin: isMobileViewport() ? "-50px" : "-100px",
  amount: isMobileViewport() ? 0.2 : 0.3,
}

// Spring animation config
export const springConfig = {
  type: "spring",
  stiffness: isMobileViewport() ? 200 : 260,
  damping: isMobileViewport() ? 20 : 20,
}

// Slide in with fade
export const slideInVariants = (direction = 'up') => {
  const distance = isMobileViewport() ? 20 : 30
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  return {
    hidden: {
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: getAnimationDuration(0.6, 0.4),
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }
}

// Button press animation
export const buttonTapVariants = {
  tap: prefersReducedMotion() ? { scale: 1 } : { scale: 0.95 },
}

// Fade variants (simple)
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: getAnimationDuration(0.5, 0.3),
    },
  },
}
