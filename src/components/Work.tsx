import { motion } from 'motion/react'

const projects = [
  { name: 'Lumen Dashboard', cat: 'Web App · SaaS', large: true, seed: 'lumen' },
  { name: 'Arka Commerce', cat: 'E-Commerce', seed: 'arka' },
  { name: 'Nara Finance', cat: 'Fintech · Mobile Web', seed: 'nara' },
  { name: 'Senja Studio', cat: 'Agency Site', seed: 'senja' },
  { name: 'Pijar Analytics', cat: 'Data Platform', seed: 'pijar' },
]

function MockImage({ seed }: { seed: string }) {
  return (
    <div className="w-full aspect-video relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #141414 0%, #0d0d0d 100%)' }}>
      {/* abstract UI mockup built with divs */}
      <div className="absolute inset-6 rounded-lg border border-border overflow-hidden" style={{ background: '#101010' }}>
        <div className="h-8 border-b border-border flex items-center px-3 gap-1.5">
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-primary/60" />
        </div>
        <div className="flex h-[calc(100%-2rem)]">
          <div className="w-1/4 border-r border-border p-2 space-y-2">
            {[...Array(4)].map((_, i) => <div key={i} className="h-2 rounded bg-surface-raised" />)}
          </div>
          <div className="flex-1 p-3 space-y-3">
            <div className="h-3 w-1/3 rounded bg-surface-raised" />
            <div className="grid grid-cols-3 gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded border border-border p-2" style={{ background: '#161616' }}>
                  <div className="h-1.5 w-2/3 rounded bg-primary/40 mb-1.5" />
                  <div className="h-2.5 w-1/2 rounded bg-surface-raised" />
                </div>
              ))}
            </div>
            <div className="rounded border border-border p-2 flex items-end gap-1 h-20" style={{ background: '#161616' }}>
              {[40, 65, 30, 80, 55, 90, 45, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? '#a855f7' : 'hsl(270 80% 68% / 0.25)' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-4 font-mono text-[10px] text-muted">{seed}.app</span>
    </div>
  )
}

export default function Work() {
  return (
    <section id="portfolio" className="px-6 md:px-16 py-24">
      <h2 className="font-extrabold text-white mb-12" style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.04em' }}>Selected work.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
            className={`glow-card group relative block rounded-xl border border-border overflow-hidden ${p.large ? 'md:col-span-2' : ''}`}
            style={{ background: 'var(--color-surface)' }}
          >
            <MockImage seed={p.seed} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'hsl(0 0% 4% / 0.82)' }}>
              <span className="font-bold text-xl text-white">{p.name}</span>
              <span className="font-mono text-[11px] text-primary">{p.cat}</span>
              <span className="mt-2 text-sm text-foreground">View case study →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
