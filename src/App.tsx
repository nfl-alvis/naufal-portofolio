import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="relative">
      <div ref={glowRef} className="cursor-glow" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Services />
        <Technologies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
