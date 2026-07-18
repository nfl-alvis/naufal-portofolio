import { Code2, Briefcase, Palette, Globe } from 'lucide-react'

// ponytail: lucide-react removed brand icons (Github/Linkedin/Dribbble) — using generic stand-ins; swap to react-icons when socials go live
const socials = [
  { icon: Palette, label: 'Dribbble' },
  { icon: Globe, label: 'Behance' },
  { icon: Briefcase, label: 'LinkedIn' },
  { icon: Code2, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 pt-10 pb-6" style={{ background: 'hsl(0 0% 3%)' }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-foreground">Naufal Alvis Samputra</div>
          <div className="text-xs text-muted mt-1">Web Developer</div>
        </div>
        <div className="flex items-center gap-5 text-muted">
          {socials.map(s => (
            <a key={s.label} href="#" className="hover:text-foreground transition-colors" aria-label={s.label}><s.icon size={18} /></a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center font-mono text-[10px] text-muted">
        © 2026 Naufal Alvis Samputra — Built with React, TypeScript & too much coffee.
      </div>
    </footer>
  )
}
