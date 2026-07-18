import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const links = ['Portfolio', 'About', 'Services', 'Technologies', 'Hire me']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border" style={{ background: 'hsl(0 0% 4% / 0.92)', backdropFilter: 'blur(12px)' }}>
      <div className="flex items-center justify-between px-6 md:px-16 h-16">
        <a href="#" className="font-bold text-base text-foreground">Naufal Alvis Samputra</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-sm text-muted hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>
        <a href="#hire-me" className="hidden md:inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white font-semibold text-xs px-4 py-2 rounded-md transition-colors">
          Hire me <ArrowRight size={13} />
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-background flex flex-col items-center justify-center gap-8 z-40">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)} className="text-2xl font-bold text-foreground">{l}</a>
          ))}
          <a href="#hire-me" onClick={() => setOpen(false)} className="bg-primary text-white font-semibold text-sm px-6 py-3 rounded-md">Hire me →</a>
        </div>
      )}
    </nav>
  )
}
