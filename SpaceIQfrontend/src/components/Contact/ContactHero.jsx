import React from "react"
import { Link } from "react-router-dom"

const ContactHero = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-indigo-600 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          CONTACT US
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Let's Start a
          <span className="block">Conversation</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-8">
          Whether you're looking to optimize your warehouse, request a
          personalized demo, or simply learn more about SpaceIQ, our team is
          here to help you every step of the way.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/Demo"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
            Book a Demo
          </Link>
          <Link
            to="/pricing"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition duration-300" >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
