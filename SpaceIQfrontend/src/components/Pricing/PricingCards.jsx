import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const plans = [
  {
    name: "Starter",
    price: "$19",
    duration: "/month",
    description: "Perfect for small warehouses starting their digital journey.",
    features: [
      "AI Dashboard",
      "Basic Analytics",
      "Inventory Tracking",
      "Email Support",
      "1 Warehouse"
    ],
    button: "Get Started",
    featured: false
  },
  {
    name: "Professional",
    price: "$49",
    duration: "/month",
    description: "Best choice for growing businesses that need AI optimization.",
    features: [
      "Everything in Starter",
      "AI Space Optimization",
      "Smart Inventory",
      "Route Optimization",
      "Priority Support",
      "Up to 10 Warehouses"
    ],
    button: "Start Free Trial",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "",
    description: "Tailored solutions for large enterprises and logistics networks.",
    features: [
      "Unlimited Warehouses",
      "Custom AI Models",
      "API Access",
      "Dedicated Account Manager",
      "24/7 Premium Support",
      "Custom Integrations"
    ],
    button: "Contact Sales",
    featured: false
  },
];

const PricingCards = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Pricing Plans
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Choose the Perfect Plan
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-7">
            Flexible pricing designed for warehouses of every size.
            Upgrade anytime as your business grows.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-3xl p-8 transition-all duration-300
              ${
                plan.featured
                  ? "bg-blue-600 text-white shadow-2xl scale-105"
                  : "bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2"
              }`}
            >

              

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p
                className={`mt-3 ${
                  plan.featured ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8 flex items-end">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span
                  className={`ml-2 ${
                    plan.featured ? "text-blue-200" : "text-gray-500"
                  }`}
                >
                  {plan.duration}
                </span>
              </div>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle
                      className={
                        plan.featured
                          ? "text-green-300"
                          : "text-green-500"
                      }
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className={`block text-center mt-10 py-4 rounded-xl font-semibold transition
                ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.button}
              </Link>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default PricingCards