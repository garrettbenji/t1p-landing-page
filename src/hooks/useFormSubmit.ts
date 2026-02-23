import { useState } from 'react'
import type { LeadFormData } from '../types/form'

export function useFormSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitLead = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setError(null)
    try {
      // In production, replace with your CRM/webhook endpoint
      console.log('Lead submitted:', data)
      // Simulate network delay for demo
      await new Promise(resolve => setTimeout(resolve, 1500))
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
      throw new Error('Submission failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submitLead, isSubmitting, error }
}
