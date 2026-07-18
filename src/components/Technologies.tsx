import { Code2, Atom, Wind, Database, GitBranch, Terminal } from 'lucide-react'

const tech = [
  { icon: Atom, name: 'React' },
  { icon: Code2, name: 'TypeScript' },
  { icon: Wind, name: 'Tailwind' },
  { icon: Terminal, name: 'Node.js' },
  { icon: Database, name: 'PostgreSQL' },
  { icon: GitBranch, name: 'Git' },
]

export default function Technologies() {
  return (
    <section id="technologies" className="px-6 md:px-16 py-16 text-center">
      <h2 className="font-extrabold text-white mb-10" style={{ fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.04em' }}>Technologies.</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-3xl mx-auto">
        {tech.map(t => (
          <div key={t.name} className="group flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors cursor-default">
            <t.icon size={28} strokeWidth={1.5} />
            <span className="font-mono text-[10px]">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
