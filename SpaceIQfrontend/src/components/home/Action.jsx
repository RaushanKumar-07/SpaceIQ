import React from "react";
import { Link } from "react-router-dom";

const Action = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Optimize Your Warehouse?
        </h2>

        <p className="text-blue-100 mt-6 text-lg max-w-3xl mx-auto leading-8">
          Join businesses that are improving warehouse efficiency with
          AI-powered process optimization. Schedule a free demo and
          experience how SpaceIQ can transform your operations.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Book a Free Demo
          </Link>

          <Link
            to="/product"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Explore Features
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Action