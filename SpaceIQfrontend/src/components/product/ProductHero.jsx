import React from 'react'
import { Link } from 'react-router-dom'
import Warehouse from '../../assets/warehouse.jpeg'

const ProductHero = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
              AI Warehouse Solutions
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
              Smart Solutions for
              <span className="text-blue-600"> Every Warehouse</span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              Whether you manage a retail warehouse, logistics hub,
              manufacturing facility, or distribution center, SpaceIQ helps
              optimize storage, streamline operations, and reduce costs using
              AI-powered insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                to="/contact"
                className="bg-blue-600 text-white px-7 py-4 rounded-xl hover:bg-blue-700 transition duration-300 text-center font-semibold"
              >
                Book Demo
              </Link>

              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 px-7 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300 text-center font-semibold"
              >
                Contact Sales
              </Link>

            </div>

          </div>
          <div>
            <img
              src={Warehouse}
              alt="Warehouse"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
export default ProductHero
