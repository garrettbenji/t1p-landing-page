import { motion } from 'motion/react'

export function SuccessMessage() {
  return (
    <div className="text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-azure to-teal flex items-center justify-center"
      >
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <h3 className="text-2xl font-heading font-bold text-white mb-3">
        Thank You!
      </h3>
      <p className="text-stone text-lg mb-6 max-w-sm mx-auto">
        We've received your request. A member of our team will contact you within 24 hours to schedule your free estimate.
      </p>
      <a
        href="tel:+15551234567"
        className="inline-flex items-center gap-2 text-azure hover:text-teal transition-colors font-medium"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Or call us now
      </a>
    </div>
  )
}
