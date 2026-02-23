import { cn } from '../../lib/utils'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={cn(
        'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border text-left',
        checked
          ? 'bg-azure/20 border-azure text-white'
          : 'bg-white/[0.05] border-white/[0.15] text-stone hover:border-white/30 hover:text-white'
      )}
    >
      {label}
    </button>
  )
}
