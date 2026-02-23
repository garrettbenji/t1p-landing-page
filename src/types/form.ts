import { z } from 'zod'

export const stepOneSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Enter a valid email address'),
  address1: z.string().min(1, 'Address is required'),
  address2: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z
    .string()
    .min(1, 'Zip code is required')
    .regex(/^\d{5}(-\d{4})?$/, 'Enter a valid zip code'),
})

export const stepTwoSchema = z.object({
  bestDay: z.string().min(1, 'Please select a preferred day'),
  bestTime: z.string().min(1, 'Please select a preferred time'),
  services: z
    .array(z.string())
    .min(1, 'Please select at least one service'),
  howHeard: z.string().min(1, 'Please let us know how you heard about us'),
})

export const leadFormSchema = stepOneSchema.merge(stepTwoSchema)

export type StepOneData = z.infer<typeof stepOneSchema>
export type StepTwoData = z.infer<typeof stepTwoSchema>
export type LeadFormData = z.infer<typeof leadFormSchema>
