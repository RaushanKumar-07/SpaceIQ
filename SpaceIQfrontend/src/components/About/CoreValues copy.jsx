import React from 'react'
import { FaLightbulb,FaUsers,FaChartLine,FaShieldAlt,} from 'react-icons/fa'

const corevalues = [
    {
        icon:<FaLightbulb/>,
        title:"Innovation",
        description:"We leverage AI and modern technologies to solve complex warehouse challenges with smarter, data-driven solutions."
    },
     {
        icon:<FaUsers/>,
        title:"Customer First",
        description:"Every feature we build is designed around helping businesses improve efficiency and achieve measurable results."
    },
     {
        icon:<FaChartLine/>,
        title:"Excellence",
        description:"Manual tracking leads to misplaced items and stock inaccuracies."
    },
     {
        icon:<FaShieldAlt/>,
        title:"Trust & Security",
        description:"Protecting business data with secure, reliable, and transparent practices is at the core of everything we do."
    },
]
const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase">
            Our Values
          </p>

          <h2 className="text-4xl font-bold mt-2">
            The Principles That Drive SpaceIQ
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Every decision we make is guided by our commitment to innovation, customer success, and building intelligent solutions that create lasting business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {corevalues.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl text-blue-600 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default  CoreValues
