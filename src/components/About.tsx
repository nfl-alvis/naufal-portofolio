import { motion } from 'motion/react'
import { Code2, PenTool, Layers, Globe } from 'lucide-react'

const chips = ['React · TypeScript', 'Next.js', '5 yrs exp', '40+ projects', 'Remote-friendly']
const tools = [
  { icon: Code2, name: 'React' },
  { icon: Layers, name: 'Next.js' },
  { icon: PenTool, name: 'Figma' },
  { icon: Globe, name: 'Node.js' },
]

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-extrabold text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.04em' }}>Building products people love to use.</h2>
        <div className="space-y-4 text-muted font-light text-[15px] leading-relaxed">
          <p>I'm Naufal — a web developer based in Indonesia with 5 years of experience shipping products for startups and studios. I care about the details: performance budgets, accessible markup, and interactions that feel inevitable.</p>
          <p>My process is simple: understand the problem deeply, prototype fast, then obsess over polish. I work across the stack but I'm happiest where design meets engineering.</p>
          <p>Tools I reach for daily: React, Next.js, TypeScript, Tailwind, and Framer Motion — backed by Node.js and PostgreSQL when the backend matters.</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-8">
          {chips.map(c => (
            <span key={c} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border text-foreground" style={{ background: 'var(--color-surface)' }}>{c}</span>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* portrait placeholder — dark desk scene */}
        <div className="rounded-xl border border-border overflow-hidden aspect-[4/5] relative" style={{ background: 'linear-gradient(160deg, #181018 0%, #0d0d0d 60%)' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary/40 flex items-center justify-center" style={{ background: 'hsl(270 80% 68% / 0.08)' }}>
                <span className="font-extrabold text-3xl text-primary">NA</span>
              </div>
              <p className="mt-4 font-mono text-[10px] text-muted">naufal · workspace</p>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-24" style={{ background: 'linear-gradient(transparent, hsl(270 80% 68% / 0.06))' }} />
        </div>
        {/* floating tools card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-6 -left-4 md:-left-8 rounded-xl border border-border p-4 grid grid-cols-2 gap-3"
          style={{ background: 'var(--color-surface-raised)', boxShadow: '0 20px 60px hsl(0 0% 0% / 0.5)' }}
        >
          {tools.map(t => (
            <div key={t.name} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2" style={{ background: 'var(--color-surface)' }}>
              <t.icon size={14} className="text-primary" />
              <span className="font-mono text-[10px] text-foreground">{t.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
