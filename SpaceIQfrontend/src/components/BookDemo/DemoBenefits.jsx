import React from "react"
import {FaUserTie,FaRobot, FaChartLine} from "react-icons/fa"

const benefits = [
  {
    icon: <FaUserTie />,
    title: "Personalized Consultation",
    description:"Talk directly with our experts and receive solutions designed for your warehouse."
  },
  {
    icon: <FaRobot />,
    title: "AI Optimization",
    description: "Watch how AI improves warehouse layouts and inventory management."
  },
  {
    icon: <FaChartLine />,
    title: "Business Insights",
    description: "Receive recommendations to improve efficiency and reduce costs."
  }
]

const DemoBenefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          What You'll Experience
        </h2>
        <p className="mt-4 text-gray-600 text-lg text-center max-w-3xl mx-auto">
          During the demo you'll discover how SpaceIQ transforms warehouse management.
        </p>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index}  className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300" >
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  )
}

export default DemoBenefits