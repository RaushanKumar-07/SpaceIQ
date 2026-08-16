import React from "react"
import {
  FaDatabase,
  FaBrain,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa"

const steps = [
  {
    icon: <FaDatabase />,
    title: "Connect Your Data",
    description:
      "Integrate warehouse data from ERP, WMS, or spreadsheets into SpaceIQ.",
  },
  {
    icon: <FaBrain />,
    title: "AI Analysis",
    description:
      "Our AI analyzes storage patterns, workflows, and warehouse utilization.",
  },
  {
    icon: <FaLightbulb />,
    title: "Smart Recommendations",
    description:
      "Receive AI-powered suggestions for storage allocation and picking routes.",
  },
  {
    icon: <FaChartLine />,
    title: "Improve Performance",
    description:
      "Increase storage capacity, reduce costs, and improve operational efficiency.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            How It Works
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Optimize Your Warehouse in Four Simple Steps
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Getting started with SpaceIQ is quick and easy. Connect your
            warehouse data and let AI uncover opportunities for better
            efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl mb-6">
                {step.icon}
              </div>

              <span className="absolute top-4 right-4 text-sm font-bold text-blue-600">
                0{index + 1}
              </span>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks