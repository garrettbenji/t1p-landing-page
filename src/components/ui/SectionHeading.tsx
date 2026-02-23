import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <div className={cn('w-12 h-1 bg-gradient-to-r from-azure to-teal rounded-full mb-4', centered && 'mx-auto')} />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-stone max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
