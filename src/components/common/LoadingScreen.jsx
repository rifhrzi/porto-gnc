import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
  // #region agent log
  useEffect(() => {
    const loadingMountTime = performance.now();
    fetch('http://127.0.0.1:7245/ingest/6147d4bf-38cf-4813-a7cf-c17b416a0e57',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LoadingScreen.jsx:mount',message:'LoadingScreen mounted',data:{loadingMountTime},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
    return () => {
      fetch('http://127.0.0.1:7245/ingest/6147d4bf-38cf-4813-a7cf-c17b416a0e57',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LoadingScreen.jsx:unmount',message:'LoadingScreen unmounting',data:{loadingUnmountTime:performance.now()},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
    };
  }, []);
  // #endregion

  return (
    <div className={styles.loading}>
      <motion.div 
        className={styles.logoContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className={styles.logo}
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={styles.diamond} />
          <div className={styles.diamond} />
          <div className={styles.diamond} />
          <div className={styles.diamond} />
        </motion.div>
        <motion.span 
          className={styles.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          GNC Tech
        </motion.span>
      </motion.div>
      <motion.div 
        className={styles.progressBar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  )
}

export default LoadingScreen

