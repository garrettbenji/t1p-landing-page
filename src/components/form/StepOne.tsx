import { useFormContext } from 'react-hook-form'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Button } from '../ui/Button'
import { US_STATES } from '../../constants/states'
import type { LeadFormData } from '../../types/form'

interface StepOneProps {
  onNext: () => void
}

export function StepOne({ onNext }: StepOneProps) {
  const { register, formState: { errors } } = useFormContext<LeadFormData>()

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="First Name"
          placeholder="John"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name"
          placeholder="Smith"
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="Phone"
          type="tel"
          placeholder="(555) 123-4567"
          {...register('phone')}
          error={errors.phone?.message}
        />
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <Input
        label="Address"
        placeholder="123 Main Street"
        {...register('address1')}
        error={errors.address1?.message}
      />

      <Input
        label="Address Line 2"
        placeholder="Apt, Suite, Unit (optional)"
        {...register('address2')}
        error={errors.address2?.message}
      />

      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-3">
        <Input
          label="City"
          placeholder="Austin"
          {...register('city')}
          error={errors.city?.message}
        />
        <Select
          label="State"
          options={US_STATES}
          placeholder="State"
          {...register('state')}
          error={errors.state?.message}
        />
        <Input
          label="Zip Code"
          placeholder="78701"
          {...register('zip')}
          error={errors.zip?.message}
        />
      </div>

      <Button
        type="button"
        onClick={onNext}
        className="w-full mt-1"
        size="md"
      >
        Next: Project Details
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Button>
    </div>
  )
}
