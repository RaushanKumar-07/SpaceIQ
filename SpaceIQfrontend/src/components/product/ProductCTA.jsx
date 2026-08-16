import React from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

const ProductCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          See SpaceIQ in Action
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
          Experience how SpaceIQ transforms warehouse operations with
          AI-powered insights, smarter inventory management, and optimized
          storage planning. Schedule a personalized demo today.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            Book a Free Demo
            <FaArrowRight />
          </Link>

          <Link
            to="/pricing"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            View Pricing
          </Link>

        </div>

        <p className="mt-8 text-blue-200 text-sm">
          No setup required • Personalized demo • Expert guidance
        </p>

      </div>
    </section>
  )
}

export default ProductCTA