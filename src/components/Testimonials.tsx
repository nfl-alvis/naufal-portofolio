import { motion } from 'motion/react'

const items = [
  { quote: 'Naufal rebuilt our dashboard in six weeks. Load time dropped 60% and our users noticed immediately. Rare mix of taste and rigor.', name: 'Sarah Chen', role: 'CPO · LUMEN' },
  { quote: 'He asks the right questions before writing a single line. The final product felt considered in a way agency work never did.', name: 'Dimas Prakoso', role: 'FOUNDER · ARKA' },
  { quote: 'Delivered ahead of schedule, communicated clearly every day, and the code quality made our internal team better. Hire him.', name: 'Emily Rodriguez', role: 'ENG LEAD · NARA' },
]

export default function Testimonials() {
  return (
    <section className="px-6 md:px-16 py-24">
      <h2 className="font-extrabold text-white mb-12" style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.04em' }}>From clients.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="rounded-xl border border-border p-7"
            style={{ background: 'var(--color-surface)', borderTop: '2px solid var(--color-primary)' }}
          >
            <p className="text-sm font-light italic text-foreground leading-relaxed">"{t.quote}"</p>
            <footer className="mt-6">
              <div className="font-semibold text-sm text-white">{t.name}</div>
              <div className="font-mono text-[10px] text-muted mt-1">{t.role}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
