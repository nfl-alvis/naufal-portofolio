import { motion } from 'motion/react'

export default function CTA() {
  return (
    <section id="hire-me" className="px-6 md:px-16 py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(270 80% 68% / 0.08), transparent)' }} />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h2 className="font-black text-white" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em' }}>Let's build something.</h2>
        <p className="mt-4 text-muted font-light max-w-md mx-auto">Have a project in mind? I take on a small number of clients each quarter.</p>
        <div className="mt-8 flex items-center justify-center gap-5">
          <a href="mailto:hello@naufal.dev" className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-8 py-4 rounded-lg transition-colors">Start a project →</a>
          <a href="mailto:hello@naufal.dev" className="text-sm text-primary hover:underline">Or email me</a>
        </div>
        <p className="mt-8 font-mono text-[11px] text-muted">avg. response time: &lt; 24 hours</p>
      </motion.div>
    </section>
  )
}
