'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "How does the automatic backup work?",
    answer: "Once you connect your social media accounts, we automatically detect and backup new posts, stories, and content as they're published. No manual action required."
  },
  {
    question: "Is my content secure?",
    answer: "Yes, we use industry-standard encryption and secure storage practices. Your content is protected with the same level of security used by major financial institutions."
  },
  {
    question: "What happens if I lose access to my social media account?",
    answer: "Your content remains safely stored with us. You can instantly recover all your backed-up content, ensuring you never permanently lose your media."
  },
  {
    question: "How far back can you import my content?",
    answer: "We can import your entire content history from supported platforms, ensuring everything is safely backed up, not just new posts."
  },
  {
    question: "How is the storage calculated?",
    answer: "Storage is based on the actual size of your media files. Our competitive pricing ensures you only pay for what you use, with flexible plans that grow with your needs."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a different question? Contact our support team.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex items-center">
                  <ChevronDown 
                    className={cn(
                      "h-6 w-6 transform transition-transform duration-200",
                      openIndex === index ? 'rotate-180' : ''
                    )}
                  />
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 