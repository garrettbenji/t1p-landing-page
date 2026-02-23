import { cn } from '../../lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradientBorder?: boolean
}

export function GlassCard({ children, className, hover = false, gradientBorder = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6',
        hover && 'glass-card-hover cursor-pointer',
        gradientBorder && 'gradient-border',
        className
      )}
    >
      {children}
    </div>
  )
}
