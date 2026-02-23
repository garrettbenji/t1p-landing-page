import { stats } from '../../constants/stats'
import { useCountUp } from '../../hooks/useCountUp'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimateIn } from '../ui/AnimateIn'

function StatCard({ value, suffix, prefix, label, icon, sublabel }: { value: number; suffix: string; prefix?: string; label: string; icon: string; sublabel?: string }) {
  const { count, ref } = useCountUp(value)

  return (
    <div ref={ref}>
      <GlassCard gradientBorder className="text-center">
        <span className="text-2xl mb-2 block">{icon}</span>
        <p className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-1">
          {prefix}{count.toLocaleString()}{suffix}
        </p>
        <p className="text-sm text-azure font-medium uppercase tracking-wider">
          {label}
        </p>
        {sublabel && (
          <p className="text-xs text-stone mt-1">
            {sublabel}
          </p>
        )}
      </GlassCard>
    </div>
  )
}

const valueProps = [
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    description: 'Every location is fully licensed and insured, giving you complete peace of mind on every project.',
  },
  {
    icon: '🧹',
    title: 'Clean & Respectful Crews',
    description: 'Our professionally trained painters treat your home with the same care as their own.',
  },
  {
    icon: '🎨',
    title: 'Free Color Consultations',
    description: 'Not sure on colors? We\'ll help you pick the perfect palette — absolutely free.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="ambient-orb w-[350px] h-[350px] bg-teal bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <SectionHeading
            title="Why Choose That 1 Painter"
            subtitle="Backed by thousands of 5-star reviews and over a decade of experience"
          />
        </AnimateIn>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <StatCard {...stat} />
            </AnimateIn>
          ))}
        </div>

        {/* Value props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, i) => (
            <AnimateIn key={prop.title} delay={i * 0.15}>
              <GlassCard hover className="text-center h-full">
                <span className="text-3xl mb-3 block">{prop.icon}</span>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-stone">
                  {prop.description}
                </p>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
