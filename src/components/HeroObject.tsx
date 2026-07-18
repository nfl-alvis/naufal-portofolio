import { motion } from 'motion/react'

export default function HeroObject() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] mx-auto"
      style={{ filter: 'drop-shadow(0 0 60px hsl(270 80% 68% / 0.3))' }}
    >
      <svg viewBox="0 0 500 500" className="w-full h-full">
        <defs>
          <radialGradient id="g1" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="45%" stopColor="#141414" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
          <linearGradient id="iri" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="spec" cx="32%" cy="24%" r="26%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="6" /></filter>
        </defs>
        {/* fluid sculptural blob */}
        <path fill="url(#g1)" d="M250 60 C340 55 425 130 430 225 C435 320 380 405 295 430 C215 452 125 425 88 350 C55 280 70 185 130 130 C165 97 205 63 250 60 Z" />
        <path fill="url(#iri)" opacity="0.7" d="M250 60 C340 55 425 130 430 225 C435 320 380 405 295 430 C215 452 125 425 88 350 C55 280 70 185 130 130 C165 97 205 63 250 60 Z" />
        {/* inner petal forms */}
        <path fill="#0d0d0d" stroke="#a855f7" strokeOpacity="0.35" strokeWidth="1.5" d="M250 120 C310 118 360 165 363 228 C366 295 325 352 268 365 C208 379 148 352 126 300 C106 252 118 195 158 162 C188 136 218 121 250 120 Z" />
        <path fill="url(#iri)" opacity="0.5" d="M250 120 C310 118 360 165 363 228 C366 295 325 352 268 365 C208 379 148 352 126 300 C106 252 118 195 158 162 C188 136 218 121 250 120 Z" />
        <path fill="#111" stroke="#c084fc" strokeOpacity="0.4" strokeWidth="1" d="M252 175 C292 174 326 205 328 248 C330 292 303 330 266 338 C228 346 190 328 176 295 C163 264 171 226 198 205 C216 190 233 176 252 175 Z" />
        <ellipse cx="250" cy="255" rx="42" ry="48" fill="#a855f7" opacity="0.22" filter="url(#blur1)" />
        {/* specular highlight */}
        <ellipse cx="205" cy="150" rx="90" ry="55" fill="url(#spec)" />
        {/* orbit ring */}
        <ellipse cx="250" cy="250" rx="215" ry="78" fill="none" stroke="#a855f7" strokeOpacity="0.25" strokeWidth="1" transform="rotate(-18 250 250)" />
      </svg>
    </motion.div>
  )
}
