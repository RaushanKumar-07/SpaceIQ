import React from 'react'
import { Link } from 'react-router-dom'
import Warehouse from '../../assets/warehouse.jpeg'

const AboutHero = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 ">
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
              About US
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
             Empowering Smarter Warehouse with AI
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              At SpaceIQ, we help businesses transform warehouse operations using Artificial Intelligence. Our platform optimizes storage utilization, improves inventory accuracy, and streamlines daily workflows through intelligent automation and real-time insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                to="/Demo"
                className="bg-blue-600 text-white px-7 py-4 rounded-xl hover:bg-blue-700 transition duration-300 text-center font-semibold"
              >
                Book Demo
              </Link>

              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 px-7 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300 text-center font-semibold"
              >
                Contact US
              </Link>
            </div>
          </div>
        </div>
    </section>
  )
}
export default AboutHero
