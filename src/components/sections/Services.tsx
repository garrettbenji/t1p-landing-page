import { services } from '../../constants/services'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimateIn } from '../ui/AnimateIn'

export function Services() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="ambient-orb w-[400px] h-[400px] bg-cobalt top-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <SectionHeading
            title="Our Painting Services"
            subtitle="Comprehensive solutions for every surface in your home"
          />
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.id} delay={i * 0.05}>
              <GlassCard hover className="h-full text-center">
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h3 className="text-base md:text-lg font-heading font-bold text-white mb-1">
                  {service.name}
                </h3>
                <p className="text-xs md:text-sm text-stone">
                  {service.description}
                </p>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
