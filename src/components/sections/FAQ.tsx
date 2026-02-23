import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { faqs } from '../../constants/faq'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimateIn } from '../ui/AnimateIn'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
      >
        <span className="text-base md:text-lg font-heading font-bold text-white pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-azure text-2xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-stone text-sm md:text-base leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="ambient-orb w-[300px] h-[300px] bg-cobalt top-0 left-1/4" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our painting services"
          />
        </AnimateIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <FAQItem {...faq} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
