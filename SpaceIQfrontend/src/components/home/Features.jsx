import React from "react";
import {
  FaRobot,
  FaChartLine,
  FaBoxes,
  FaRoute,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Space Optimization",
    description:
      "Automatically recommends the best storage locations to maximize warehouse capacity.",
  },
  {
    icon: <FaChartLine />,
    title: "Real-Time Analytics",
    description:
      "Track warehouse performance with live dashboards and actionable insights.",
  },
  {
    icon: <FaBoxes />,
    title: "Smart Inventory",
    description:
      "Monitor inventory levels, stock movement, and storage utilization effortlessly.",
  },
  {
    icon: <FaRoute />,
    title: "Optimized Picking Routes",
    description:
      "Reduce travel time by generating efficient picking paths for workers.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Access",
    description:
      "Role-based authentication keeps warehouse data safe and accessible only to authorized users.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Connected",
    description:
      "Access your warehouse data anytime from anywhere with secure cloud integration.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase">
            Features
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Everything You Need to Optimize Your Warehouse
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            SpaceIQ combines AI, analytics, and automation to help businesses
            improve warehouse efficiency and reduce operational costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl text-blue-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;