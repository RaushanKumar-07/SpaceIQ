import React from 'react'
import { FaShoppingCart,FaTruck,FaIndustry,FaShippingFast,FaHospital,FaSnowflake } from 'react-icons/fa'

const industries = [
    {
        icon : <FaShoppingCart/>,
        title  : "Retail",
        description : "optimizes stock organization,reduce replenishment time, and improve inventory management."
    },
    {
     icon: <FaTruck/>,
     title : "E-commerce",
     description : "Speed up Order fulfillment with AI-powered picking routes and smarter storage allocation."
    },
    {
        icon:<FaIndustry/>,
        title : "Manufacturing",
        description : "Efficiency manage raw materials, production inventory, and finished goods storage."
    },
    {
        icon : <FaShippingFast/>,
        title : "Logistics" , 
        description : "Improve shipment flow, reduce warehouse congestion, and maximize operational efficiency."
    },
    {
        icon: <FaHospital/>,
        title : "Healthcare",
        description : "Maintain accurate medical inventory tracking while ensuring compliance and safety."
    },
    {
        icon: <FaSnowflake/>,
        title: "Cold Storage",
        description : "Optimize refrigerated storage capacity while minimizing waste and energy consumption. "
    },

];

const Industries = () => {
  return (
    <section className='py-20 bg-white'>
        <div>
            <div className='text-center mb-16'>
              <p className='text-blue-600 font-semibold '>
                INDUSTRIES
              </p>
              <h2 className='text-4xl font-bold mt-2'>
                Industries We Serve
              </h2>
              <p className='text-gray-600 mt-5 max-w-2xl mx-auto'>
                SpaceIQ helps warehouse across multiple industries improve effeciency with AI-powered optimization, helping improve storage utilization, inventory accuracy, and operational efficiency.
              </p>
           </div>

           <div className='grid gap-8 md:grid-cols-2  lg:grid-cols-3'> 
              { industries.map((industry,index) => (
                 <div key={index} className='bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 transition-all duration-300'>
                      <div className='w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6'>
                        <span className='text-3xl text-blue-600'>
                            {industry.icon}
                        </span>
                       </div>
                       <h3 className='text-2xl font-semibold mb-4'>
                        {industry.title}
                       </h3>
                       <p className='text-gray-600 leading-7'>
                        {industry.description}
                       </p>
                       <button className='mt-6 text-blue-600 font-semibold hover:text-blue-800 transition'>
                        Learn More 
                       </button>
                 </div> 
              ))}
              
            </div>
        </div>
    </section>
 )
}

export default Industries
