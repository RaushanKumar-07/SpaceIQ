import React from "react";
import { Collapse, Button } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: "How do I request a demo?",
    children: (
      <p>
        Click the "Book Demo" button or fill out the contact form, and our team
        will schedule a personalized walkthrough of SpaceIQ.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is SpaceIQ suitable for small businesses?",
    children: (
      <p>
        Yes. SpaceIQ is designed to support warehouses of all sizes, from small
        businesses to large enterprises.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is my warehouse data secure?",
    children: (
      <p>
        Absolutely. We follow industry best practices to ensure your data
        remains secure and protected.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I customize the platform?",
    children: (
      <p>
        Yes. SpaceIQ can be tailored to suit different warehouse layouts and
        operational requirements.
      </p>
    )
  }
]

const FAQPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            FAQ
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Find quick answers to the most common questions about SpaceIQ. If
            you need more information, feel free to contact our team.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <Collapse
            items={items}
            accordion
            ghost
            className="text-lg"
          />
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Still have questions?
          </h3>

          <p className="text-gray-600 mt-3">
            Our team is here to help you with any questions about SpaceIQ.
          </p>

          <Link to="/contact">
            <Button
              type="primary"
              className="mt-6 bg-blue-600 hover:bg-blue-700 border-blue-600 rounded-xl h-12 px-8 font-semibold"
            >
              Contact Us
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default FAQPreview