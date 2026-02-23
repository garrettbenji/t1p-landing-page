import { motion } from 'motion/react'
import { LeadForm } from '../form/LeadForm'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 pb-12 md:pt-16 md:pb-8">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)', opacity: 0.25 }}
      />
      {/* Dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-navy/60" />

      {/* Ambient orbs */}
      <div className="ambient-orb w-[400px] h-[400px] bg-azure -top-48 -left-48" />
      <div className="ambient-orb w-[300px] h-[300px] bg-teal -bottom-32 -right-32" />
      <div className="ambient-orb w-[250px] h-[250px] bg-cobalt top-1/2 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center">
          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-azure text-xs md:text-sm font-semibold uppercase tracking-widest mb-3"
            >
              The Fastest-Growing Painting Franchise in the Nation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-[1.15] mb-4 text-balance"
            >
              Professional Painting That{' '}
              <span className="gradient-text">Transforms</span>{' '}
              Your Space
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm md:text-base text-stone max-w-md mb-6"
            >
              From interior refreshes to full exterior makeovers, our expert painters deliver flawless results with a commitment to Excellence and Kindness.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-1.5 glass-card px-3 py-2">
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-white text-xs font-semibold">4,479+</span>
                <span className="text-stone text-xs">Google Reviews</span>
              </div>
              <div className="flex items-center gap-1.5 glass-card px-3 py-2">
                <span className="text-azure text-sm">📍</span>
                <span className="text-white text-xs font-semibold">134+</span>
                <span className="text-stone text-xs">Locations</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            id="hero-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
