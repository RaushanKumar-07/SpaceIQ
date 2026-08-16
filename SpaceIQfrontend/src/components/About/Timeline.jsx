import React from "react"
import {FaLightbulb,FaRocket,FaRobot,FaGlobe,} from "react-icons/fa";

const timeline = [
  {
    year: "2024",
    icon: <FaLightbulb/>,
    title: "Idea Born",
    description:
      "SpaceIQ started as an idea to solve warehouse inefficiencies using AI-powered optimization and intelligent data analysis."
  },
  {
    year: "2025",
    icon: <FaRocket/>,
    title: "Prototype Development",
    description:
      "The first prototype was built to demonstrate AI-based warehouse layout optimization and inventory management."
  },
  {
    year: "2026",
    icon: <FaRobot/>,
    title: "Platform Launch",
    description:
      "SpaceIQ evolved into a scalable SaaS platform with analytics, smart recommendations, and real-time warehouse insights."
  },
  {
    year: "Future",
    icon: <FaGlobe/>,
    title: "Looking Ahead",
    description:
      "Our vision is to help businesses worldwide build smarter and more efficient warehouses through intelligent automation."
  },
];

const Timeline= () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Journey
          </p>
          <h2 className="text-4xl font-bold mt-3">
            The Journey of SpaceIQ
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            From an innovative idea to an AI-powered warehouse optimization
            platform, every milestone reflects our commitment to building
            smarter logistics solutions.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-5 top-0 w-1 h-full bg-blue-200"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-8">

                <div className="z-10 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 w-full">
                  <span className="text-sm font-semibold text-blue-600">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Timeline