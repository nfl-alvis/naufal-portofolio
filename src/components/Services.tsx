import { motion } from 'motion/react'

const services = [
  { tag: '01 / FRONTEND', name: 'Frontend Development', desc: 'React & Next.js apps with obsessive attention to performance, accessibility, and motion.', price: 'from $2,400' },
  { tag: '02 / FULL-STACK', name: 'Full-Stack Builds', desc: 'End-to-end product builds — API design, database, auth, deployment. Ship-ready.', price: 'from $3,800' },
  { tag: '03 / DESIGN ENG', name: 'Design Engineering', desc: 'Design systems, component libraries, and pixel-perfect Figma-to-code translation.', price: 'from $2,000' },
]

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-24" style={{ background: 'var(--color-surface)' }}>
      <h2 className="font-extrabold text-white mb-12" style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.04em' }}>What I do.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="glow-card rounded-xl border border-border p-7 flex flex-col"
            style={{ background: 'var(--color-background)' }}
          >
            <span className="font-mono text-[10px] text-primary mb-4">{s.tag}</span>
            <h3 className="font-bold text-lg text-white mb-2">{s.name}</h3>
            <p className="text-sm font-light text-muted leading-relaxed flex-1">{s.desc}</p>
            <span className="mt-6 font-mono text-xs text-foreground">{s.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
