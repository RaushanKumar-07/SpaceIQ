import React from "react"
import { FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Raushan Kumar",
    role: "Warehouse Manager",
    company: "Problematic Solutions",
    review:
      "SpaceIQ helped us increase storage utilization by 32% while reducing picking time significantly.",
  },
  {
    name: "Sachin Sachdeva",
    role: "Operations Head",
    company: "Eagle Logistics",
    review:
      "The AI recommendations transformed our warehouse workflow. Implementation was simple and the results were immediate.",
  },
  {
    name: "Suraj",
    role: "Supply Chain Director",
    company: "Secondary Storage",
    review:
      "We reduced operational costs and improved inventory accuracy within weeks of using SpaceIQ.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase">
            Customer Success
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Reviews by Warehouse Teams
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Businesses use SpaceIQ to improve warehouse efficiency,
            reduce costs, and make smarter operational decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex text-yellow-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 italic leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>

                <p className="text-blue-600 font-medium">
                  {item.company}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonial