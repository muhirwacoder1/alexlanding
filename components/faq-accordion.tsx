"use client"

import { useState } from "react"
import { AnimatedCard } from "@/components/animated-card"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { ModernButton } from "@/components/modern-button"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
  featured?: boolean
}

const faqData: FAQItem[] = [
  {
    question: "How does the smart insole work?",
    answer:
      "It uses built-in sensors to monitor foot pressure, temperature, and heart rate. Data is sent to the cloud and alerts you before a problem starts.",
    featured: true,
  },
  {
    question: "Is it painful to wear or use?",
    answer:
      "Not at all! It's designed for comfort, flexibility, and daily use. The insole is lightweight and fits in most shoes.",
  },
  {
    question: "How much does it cost?",
    answer:
      "$150 per pair, with flexible payment plans. Monthly monitoring subscription is $15. We also offer insurance coverage options.",
  },
  {
    question: "Can I use it without a doctor?",
    answer:
      "Yes, but it's even more effective when shared with your healthcare provider. We provide easy sharing tools for medical professionals.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "The smart insole battery lasts up to 7 days with normal use. It charges wirelessly and takes only 2 hours for a full charge.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Absolutely. We use bank-level encryption and comply with international healthcare data protection standards. Your data is never shared without permission.",
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3

  const featuredFAQ = faqData.find((item) => item.featured)
  const regularFAQs = faqData.filter((item) => !item.featured)
  const totalPages = Math.ceil(regularFAQs.length / itemsPerPage)
  const currentFAQs = regularFAQs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Left side - Regular FAQs */}
      <div className="lg:col-span-1 space-y-4">
        {currentFAQs.map((faq, index) => (
          <AnimatedCard
            key={currentPage * itemsPerPage + index}
            className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
            delay={index * 0.1}
          >
            <button
              className="w-full text-left"
              onClick={() =>
                setOpenIndex(
                  openIndex === currentPage * itemsPerPage + index ? null : currentPage * itemsPerPage + index,
                )
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-blue-600 transition-transform duration-200",
                    openIndex === currentPage * itemsPerPage + index && "rotate-180",
                  )}
                />
              </div>
              {openIndex === currentPage * itemsPerPage + index && (
                <div className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</div>
              )}
            </button>
          </AnimatedCard>
        ))}
      </div>

      {/* Center - Featured FAQ */}
      <div className="lg:col-span-1">
        {featuredFAQ && (
          <AnimatedCard
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 h-full flex flex-col justify-center"
            delay={0.2}
          >
            <h3 className="text-2xl font-bold mb-6 leading-tight">{featuredFAQ.question}</h3>
            <p className="text-blue-100 leading-relaxed text-lg">{featuredFAQ.answer}</p>
          </AnimatedCard>
        )}
      </div>

      {/* Right side - Navigation and info */}
      <div className="lg:col-span-1 space-y-6">
        <div className="text-right">
          <p className="text-gray-600 leading-relaxed">
            Find answers to common questions about our smart insole technology, pricing, and healthcare integration.
          </p>
        </div>

        <div className="flex justify-end space-x-2">
          <ModernButton
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            className={cn("rounded-full w-10 h-10 p-0", currentPage === 0 && "opacity-50 cursor-not-allowed")}
          >
            <ChevronLeft className="h-4 w-4" />
          </ModernButton>
          <ModernButton
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            className={cn(
              "rounded-full w-10 h-10 p-0",
              currentPage === totalPages - 1 && "opacity-50 cursor-not-allowed",
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </ModernButton>
        </div>
      </div>
    </div>
  )
}
