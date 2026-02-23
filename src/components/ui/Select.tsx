import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: readonly SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder = 'Select...', className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-stone">
          {label}
        </label>
        <select
          ref={ref}
          className={cn(
            'w-full px-3 py-2 text-sm bg-white/[0.07] border border-white/[0.15] rounded-[var(--radius-input)] text-white outline-none transition-all duration-200 appearance-none cursor-pointer',
            'focus:border-azure focus:ring-1 focus:ring-azure/50',
            'bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23CED3D9%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E")] bg-no-repeat bg-[center_right_1rem]',
            error && 'border-error focus:border-error focus:ring-error/50',
            className
          )}
          {...props}
        >
          <option value="" className="bg-navy text-stone">{placeholder}</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value} className="bg-navy text-white">
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-sm text-error">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
