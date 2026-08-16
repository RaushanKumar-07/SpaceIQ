import React from "react"
import { FaCheck, FaTimes } from "react-icons/fa"

const comparison = [
  {
    feature: "AI Dashboard",
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    feature: "Basic Analytics",
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    feature: "AI Space Optimization",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    feature: "Smart Inventory",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    feature: "Route Optimization",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    feature: "API Access",
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    feature: "24/7 Premium Support",
    starter: false,
    professional: false,
    enterprise: true
  }
];

const Comparison = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Compare Plans
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Find the Right Plan for Your Business
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Compare our plans and choose the one that best matches your warehouse requirements.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full border-collapse">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="text-left px-6 py-5"> Features </th>
                <th className="px-6 py-5"> Starter </th>
                <th className="px-6 py-5"> Professional </th>
                <th className="px-6 py-5"> Enterprise </th>
              </tr>
            </thead>

            <tbody>
              {comparison.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-5 font-medium">
                    {item.feature}
                  </td>

                  <td className="text-center">
                    {item.starter ? (
                      <FaCheck className="mx-auto text-green-500" />
                    ) : (
                      <FaTimes className="mx-auto text-red-500" />
                    )}
                  </td>

                  <td className="text-center">
                    {item.professional ? (
                      <FaCheck className="mx-auto text-green-500" />
                    ) : (
                      <FaTimes className="mx-auto text-red-500" />
                    )}
                  </td>

                  <td className="text-center">
                    {item.enterprise ? (
                      <FaCheck className="mx-auto text-green-500" />
                    ) : (
                      <FaTimes className="mx-auto text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  )
}

export default Comparison