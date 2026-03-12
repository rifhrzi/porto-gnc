import { useState, lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import LoadingScreen from './components/common/LoadingScreen'

// Lazy load below-fold sections to reduce initial bundle size
const About = lazy(() => import('./components/sections/About'))
const Brands = lazy(() => import('./components/sections/Brands'))
const Services = lazy(() => import('./components/sections/Services'))
const Portfolio = lazy(() => import('./components/sections/Portfolio'))
const Contact = lazy(() => import('./components/sections/Contact'))

function App() {
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Services />
          <Portfolio />
          <Brands />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App

