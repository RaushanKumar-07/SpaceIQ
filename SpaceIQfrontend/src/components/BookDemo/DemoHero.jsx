import React from "react"
import { Link } from "react-router-dom"

const DemoHero = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-indigo-600 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold tracking-wide">
          BOOK A FREE DEMO
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          See SpaceIQ in Action
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
          Discover how AI can optimize your warehouse operations with a
          personalized live demonstration tailored to your business.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <Link to='/Demo'>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
            Schedule Demo
          </button> </Link>
          <Link to='/About'>
          <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Learn More
          </button> </Link>
        </div>
      </div>
    </section>
  )
}

export default DemoHero