import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-stone">
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            'w-full px-3 py-2 text-sm bg-white/[0.07] border border-white/[0.15] rounded-[var(--radius-input)] text-white placeholder:text-stone/50 outline-none transition-all duration-200',
            'focus:border-azure focus:ring-1 focus:ring-azure/50',
            error && 'border-error focus:border-error focus:ring-error/50',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-error">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
