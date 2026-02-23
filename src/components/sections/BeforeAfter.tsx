import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimateIn } from '../ui/AnimateIn'

const comparisons = [
  { id: 1, label: 'Living Room Refresh', beforeColor: '#3a3a3a', afterColor: '#178FE5' },
  { id: 2, label: 'Exterior Makeover', beforeColor: '#4a4a3a', afterColor: '#33BBCE' },
  { id: 3, label: 'Cabinet Refinishing', beforeColor: '#5a4a3a', afterColor: '#1A4A9E' },
]

export function BeforeAfter() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <SectionHeading
            title="See the Difference"
            subtitle="Real transformations from real That 1 Painter projects"
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((comp, i) => (
            <AnimateIn key={comp.id} delay={i * 0.15}>
              <GlassCard hover>
                <div className="flex gap-2 mb-3">
                  {/* Before placeholder */}
                  <div className="flex-1 aspect-[4/3] rounded-lg flex items-center justify-center" style={{ backgroundColor: comp.beforeColor }}>
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">Before</span>
                  </div>
                  {/* After placeholder */}
                  <div className="flex-1 aspect-[4/3] rounded-lg flex items-center justify-center" style={{ backgroundColor: comp.afterColor }}>
                    <span className="text-xs uppercase tracking-wider text-white/80 font-semibold">After</span>
                  </div>
                </div>
                <p className="text-sm text-white font-medium text-center">{comp.label}</p>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <p className="text-center text-stone text-sm mt-8">
            Photos coming soon — replace these placeholders with your best before &amp; after project images.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
