import { testimonials } from '../../constants/testimonials'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimateIn } from '../ui/AnimateIn'

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="ambient-orb w-[400px] h-[400px] bg-azure top-1/4 -right-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <SectionHeading
            title="What Homeowners Are Saying"
            subtitle="Join thousands of satisfied customers across the country"
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimateIn key={testimonial.name} delay={i * 0.15}>
              <GlassCard className="h-full flex flex-col">
                {/* Quote icon */}
                <span className="text-5xl text-azure/20 font-serif leading-none mb-2">"</span>

                <p className="text-pearl text-base italic flex-1 mb-6">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-azure to-teal flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-stone text-xs">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-amber-400 text-sm">
                      {'★'.repeat(testimonial.rating)}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
