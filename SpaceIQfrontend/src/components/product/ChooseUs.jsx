import Reac from "react";
import {
  FaRobot,
  FaChartLine,
  FaBolt,
  FaDollarSign,
} from "react-icons/fa"

const reasons = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Optimization",
    description:
      "Our AI continuously analyzes warehouse operations and suggests smarter storage layouts and workflows."
  },
  {
    icon: <FaChartLine />,
    title: "Real-Time Insights",
    description:
      "Monitor inventory, storage utilization, and warehouse performance with interactive dashboards."
  },
  {
    icon: <FaBolt />,
    title: "Boost Productivity",
    description:
      "Reduce picking time, improve order fulfillment, and streamline warehouse operations."
  },
  {
    icon: <FaDollarSign />,
    title: "Lower Operating Costs",
    description:
      "Maximize storage capacity while reducing labor costs and warehouse inefficiencies."
  },
]

const ChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Why Choose SpaceIQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Smarter Warehousing Starts Here
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-7">
            SpaceIQ combines artificial intelligence, real-time analytics,
            and warehouse automation to help businesses make better
            decisions and achieve measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <span className="text-3xl text-blue-600">
                  {reason.icon}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ChooseUs