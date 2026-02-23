import { useFormContext, Controller } from 'react-hook-form'
import { Select } from '../ui/Select'
import { Checkbox } from '../ui/Checkbox'
import { Button } from '../ui/Button'
import { serviceOptions } from '../../constants/services'
import type { LeadFormData } from '../../types/form'

const dayOptions = [
  { value: 'monday-friday', label: 'Monday - Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'any-weekday', label: 'Any Weekday' },
  { value: 'any-day', label: 'Any Day' },
]

const timeOptions = [
  { value: 'morning', label: 'Morning (8am - 12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm - 4pm)' },
  { value: 'evening', label: 'Evening (4pm - 7pm)' },
  { value: 'any-time', label: 'Any Time' },
]

const howHeardOptions = [
  { value: 'google', label: 'Google Search' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'referral', label: 'Referral from Friend' },
  { value: 'yard-sign', label: 'Yard Sign' },
  { value: 'nextdoor', label: 'Nextdoor' },
  { value: 'home-advisor', label: 'Home Advisor' },
  { value: 'other', label: 'Other' },
]

interface StepTwoProps {
  onBack: () => void
  isSubmitting: boolean
}

export function StepTwo({ onBack, isSubmitting }: StepTwoProps) {
  const { register, control, formState: { errors } } = useFormContext<LeadFormData>()

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Best Day for an Estimate"
          options={dayOptions}
          placeholder="Select a day..."
          {...register('bestDay')}
          error={errors.bestDay?.message}
        />
        <Select
          label="Best Time of Day"
          options={timeOptions}
          placeholder="Select a time..."
          {...register('bestTime')}
          error={errors.bestTime?.message}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-stone block mb-2">
          What painting services are you interested in?
        </label>
        <Controller
          name="services"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-2">
              {serviceOptions.map(option => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  checked={field.value?.includes(option.value) ?? false}
                  onChange={(checked) => {
                    const current = field.value || []
                    field.onChange(
                      checked
                        ? [...current, option.value]
                        : current.filter((v: string) => v !== option.value)
                    )
                  }}
                />
              ))}
            </div>
          )}
        />
        {errors.services && (
          <p className="text-sm text-error mt-1">{errors.services.message}</p>
        )}
      </div>

      <Select
        label="How did you hear about us?"
        options={howHeardOptions}
        placeholder="Select..."
        {...register('howHeard')}
        error={errors.howHeard?.message}
      />

      <div className="flex gap-3 mt-2">
        <Button
          type="button"
          variant="ghost"
          onClick={onBack}
          className="flex-1"
          size="lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back
        </Button>
        <Button
          type="submit"
          className="flex-[2]"
          size="lg"
          loading={isSubmitting}
        >
          Get My Free Estimate
        </Button>
      </div>
    </div>
  )
}
