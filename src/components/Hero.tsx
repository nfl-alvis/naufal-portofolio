import { motion } from 'motion/react'
import HeroObject from './HeroObject'

const lines = ['Web developer crafting', 'clean & modern experiences.']

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative px-6 pt-24">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-mono text-primary" style={{ background: 'hsl(270 80% 68% / 0.1)', border: '1px solid hsl(270 80% 68% / 0.25)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Available for hire
      </div>
      <h1 className="font-extrabold text-white" style={{ fontSize: 'clamp(40px, 12vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.04em' }}>
        {lines.map((line, i) => (
          <motion.span
            key={i}
            className="block"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.15 + i * 0.1 }}
          >
            {line}
          </motion.span>
        ))}
      </h1>
      <p className="mt-5 text-base font-light text-muted max-w-[460px]">
        Turning complex problems into clean, performant interfaces. 5 years · 40+ projects.
      </p>
      <div className="flex items-center gap-4 mt-8">
        <a href="#portfolio" className="bg-primary hover:bg-primary-dark text-white font-semibold text-[13px] px-6 py-3 rounded-lg transition-colors">Explore →</a>
        <a href="#" className="border border-border hover:border-muted text-foreground font-semibold text-[13px] px-6 py-3 rounded-lg transition-colors">Download CV</a>
      </div>
      <div className="mt-4 md:-mt-8">
        <HeroObject />
      </div>
      <div className="flex items-center gap-10 pb-10 opacity-30">
        {['React', 'Next.js', 'TypeScript', 'Node.js'].map(t => (
          <span key={t} className="font-mono text-sm text-foreground">{t}</span>
        ))}
      </div>
    </section>
  )
}
