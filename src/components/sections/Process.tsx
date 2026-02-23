import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimateIn } from '../ui/AnimateIn'

const steps = [
  {
    number: '01',
    title: 'Request Your Free Estimate',
    description: 'Fill out the form or give us a call. We\'ll schedule a convenient time to assess your project — no pressure, no obligation.',
  },
  {
    number: '02',
    title: 'Meet Your Painting Crew',
    description: 'Our expert team will visit your home, discuss your vision, finalize colors, and provide a transparent quote.',
  },
  {
    number: '03',
    title: 'Enjoy Your Transformed Space',
    description: 'Sit back while we deliver a flawless finish. We handle everything from prep to cleanup, leaving you with a space you love.',
  },
]

export function Process() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <SectionHeading
            title="How It Works"
            subtitle="Three simple steps to your dream space"
          />
        </AnimateIn>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-azure via-cobalt to-teal -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.2}>
                <GlassCard className="text-center h-full">
                  <span className="text-5xl md:text-6xl font-heading font-extrabold gradient-text mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone">
                    {step.description}
                  </p>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
