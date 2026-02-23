import { AnimateIn } from '../ui/AnimateIn'
import { LeadForm } from '../form/LeadForm'

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy" />
      <div className="ambient-orb w-[500px] h-[500px] bg-azure top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4 text-balance">
              Ready to <span className="gradient-text">Transform</span> Your Space?
            </h2>
            <p className="text-lg text-stone max-w-xl mx-auto">
              Get your free, no-obligation estimate today. Our team is ready to bring your vision to life.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="max-w-xl mx-auto">
            <LeadForm />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="text-center mt-8 text-stone text-sm">
            Or call us directly:{' '}
            <a href="tel:+15551234567" className="text-azure hover:text-teal transition-colors font-semibold">
              (555) 123-4567
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
