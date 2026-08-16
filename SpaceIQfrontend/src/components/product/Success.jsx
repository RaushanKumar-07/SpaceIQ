import React from "react";
import {
  FaClock,
  FaWarehouse,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";

const Rate = [
  {
    icon: <FaClock />,
    value: "35%",
    title: "Faster Picking",
    description:
      "Reduce product search time and improve warehouse productivity."
  },
  {
    icon: <FaWarehouse />,
    value: "28%",
    title: "Better Space Utilization",
    description:
      "Make the most of every square foot with AI-driven storage optimization."
  },
  {
    icon: <FaDollarSign />,
    value: "40%",
    title: "Lower Operating Costs",
    description:
      "Reduce labor costs and eliminate inefficient warehouse operations."
  },
  {
    icon: <FaCheckCircle />,
    value: "99%",
    title: "Inventory Accuracy",
    description:
      "Maintain accurate inventory records with intelligent tracking."
  },
]

const Success = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Results
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Proven Results That Matter
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-7">
            Businesses using SpaceIQ experience measurable improvements
            in warehouse efficiency, storage utilization, and operational
            performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {metrics.map((Rate, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue-600">
                  {Rate.icon}
                </span>
              </div>

              <h3 className="text-5xl font-bold text-blue-600 mb-3">
                {Rate.value}
              </h3>

              <h4 className="text-xl font-semibold mb-3">
                {Rate.title}
              </h4>

              <p className="text-gray-600 leading-7">
                {Rate.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Success