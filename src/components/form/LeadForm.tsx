import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'motion/react'
import { leadFormSchema } from '../../types/form'
import type { LeadFormData, StepOneData } from '../../types/form'
import { useFormSubmit } from '../../hooks/useFormSubmit'
import { ProgressBar } from '../ui/ProgressBar'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { SuccessMessage } from './SuccessMessage'

export function LeadForm() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 'success'>(1)
  const { submitLead, isSubmitting } = useFormSubmit()

  const methods = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    mode: 'onTouched',
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      bestDay: '',
      bestTime: '',
      services: [],
      howHeard: '',
    },
  })

  const stepOneFields: (keyof StepOneData)[] = [
    'firstName', 'lastName', 'phone', 'email',
    'address1', 'city', 'state', 'zip',
  ]

  const handleNext = async () => {
    const isValid = await methods.trigger(stepOneFields)
    if (isValid) setCurrentStep(2)
  }

  const handleBack = () => setCurrentStep(1)

  const handleSubmit = methods.handleSubmit(async (data) => {
    try {
      await submitLead(data)
      setCurrentStep('success')
    } catch {
      // error is handled in useFormSubmit
    }
  })

  return (
    <div className="glass-card gradient-border p-5 md:p-6">
      <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-1">
        Get Your Free Estimate
      </h3>
      <p className="text-stone text-xs mb-3">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      {currentStep !== 'success' && (
        <ProgressBar
          currentStep={currentStep}
          totalSteps={2}
        />
      )}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepOne onNext={handleNext} />
              </motion.div>
            )}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <StepTwo onBack={handleBack} isSubmitting={isSubmitting} />
              </motion.div>
            )}
            {currentStep === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <SuccessMessage />
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </FormProvider>
    </div>
  )
}
