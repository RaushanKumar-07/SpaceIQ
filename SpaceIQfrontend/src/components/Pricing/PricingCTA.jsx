import React from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

const PricingCTA = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Start Optimizing Your Warehouse Today
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
          Choose the plan that fits your business today and scale as your
          warehouse grows. Experience AI-powered warehouse optimization with
          SpaceIQ.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            Start Free Trial
            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Sales
          </Link>

        </div>

        <p className="mt-8 text-blue-200 text-sm">
          No hidden fees • Cancel anytime • Secure payments
        </p>

      </div>
    </section>
  );
};

export default PricingCTA