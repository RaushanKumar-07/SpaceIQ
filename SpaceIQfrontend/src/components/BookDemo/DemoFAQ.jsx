import React from "react"
import { Collapse } from "antd"

const items = [
  {
    key: "1",
    label: "Is the demo free?",
    children: <p>Yes, the demo is completely free with no obligation.</p>,
  },
  {
    key: "2",
    label: "How long does the demo take?",
    children: <p>Most demos last between 30 and 45 minutes.</p>,
  },
  {
    key: "3",
    label: "Can I invite my team?",
    children: <p>Yes, multiple team members can join the live demo.</p>,
  },
  {
    key: "4",
    label: "Will I receive recommendations?",
    children: <p>Yes, our experts will provide tailored recommendations after the session.</p>,
  },
]

const DemoFAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Everything you need to know before booking your demo.
        </p>
        <div className="mt-12">
          <Collapse items={items} bordered={false} />
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?
          </p>
          <a href="/contact"  className="text-blue-600 font-semibold hover:underline" >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  )
}

export default DemoFAQ