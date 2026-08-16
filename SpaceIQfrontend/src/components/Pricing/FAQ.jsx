import React from "react"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:"Yes. You can upgrade or downgrade your subscription at any time from your account settings."
  },
  {
    question: "Do you offer a free trial?",
    answer:"Yes. We offer a 14-day free trial for the Professional plan with no credit card required."
  },
  {
    question: "What payment methods do you accept?",
    answer:"We accept all major credit cards, debit cards,UPI, and bank transfers for Enterprise customers."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:"Absolutely. You can cancel your subscription whenever you want without any hidden charges."
  },
  {
    question: "Do you provide support for Enterprise customers?",
    answer:"Yes. Enterprise customers receive 24/7 priority support along with a dedicated account manager."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-6">
            Everything you need to know before choosing a plan.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ