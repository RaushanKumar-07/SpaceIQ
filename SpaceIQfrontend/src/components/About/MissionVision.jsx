import React from 'react'
import {FaBullseye,FaRocket} from 'react-icons/fa'

const missionvision = [
    {
        icon:<FaBullseye/>,
        title:"Our Mission",
        description:"To empower businesses with AI-driven warehouse optimization that improves efficiency, reduces costs, and enables smarter operational decisions."
    },
     {
        icon:<FaRocket/>,
        title:"Our Vision",
        description:"To become the leading intelligent warehouse optimization platform trusted by businesses worldwide for transforming logistics and inventory management."
    },
     
]
const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mt-2">
            Our Mission & Vision
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Driving Innovation in Warehouse Optimization through AI_powered solutions and a commitment to customer success.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">

          {missionvision.map((item, index) => (
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

export default  MissionVision

