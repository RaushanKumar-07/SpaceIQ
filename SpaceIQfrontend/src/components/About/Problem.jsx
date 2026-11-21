import React from 'react'
import {FaWarehouse,FaClock,FaBoxes,FaMoneyBillWave} from 'react-icons/fa'

const corevalues = [
    {
        icon:<FaWarehouse/>,
        title:"Wasted Space",
        description:"Poor warehouse layouts leave valuable storage capacity unused."
    },
     {
        icon:<FaClock/>,
        title:"Slow Picking",
        description:"Worker spends too much time searching for products."
    },
     {
        icon:<FaBoxes/>,
        title:"Inventory Errors",
        description:"Manual tracking leads to misplaced items and stock inaccuracies."
    },
     {
        icon:<FaMoneyBillWave/>,
        title:"High Operational Cost",
        description:"Inefficent storage increases labor and operating expenses."
    },
]
const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase">
            Challenges
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Warehouse Management Is More Difficult Than It Should Be
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Many businesses lose time, money, and storage capacity because
            they rely on manual planning instead of data-driven decisions.
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
