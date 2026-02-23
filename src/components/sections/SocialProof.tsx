import { AnimateIn } from '../ui/AnimateIn'

const badges = [
  'Franchise 500 Recognized',
  'IFA Member',
  'BBB Accredited',
  '134+ Locations',
  '4,479+ 5-Star Reviews',
]

export function SocialProof() {
  return (
    <section className="relative border-y border-white/5 bg-navy-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AnimateIn>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-xs uppercase tracking-widest text-granite font-semibold">
              Trusted By Homeowners Nationwide
            </span>
            {badges.map((badge, i) => (
              <span
                key={i}
                className="text-sm text-stone font-medium flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-azure" />
                {badge}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
