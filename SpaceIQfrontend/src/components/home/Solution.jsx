import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import WarehouseDashboard from '../../assets/WarehouseDashboard.jpeg'

const Solution = () => {
  
    const features = [
        "AI analyzes your warehouse layout",
        "Optimizes storage utilization",
        "Recommends the fastest picking routes",
        "Reduce inventory errors",
        "Cuts operational Costs"
    ]
    return (
        <section className ='py-20 bg-white' >
            <div className='max-w-7xl mx-auto px-6'>

                <div className='grid lg:grid-cols-2 gap-14 items-center'>
                    <div>
                        <p className='text-blue-600 font-semibold '> OUR SOLUTION</p>
                        <h2 className='text-4xl font-bold mt-3 leading-tight'>AI-Powered Warehouse Optimization</h2>
                        <p className='text-gray-600 mt-6 leading-7'> SpaceIQ continiously analyzes your warehouse operations,identifies inefficiencies and provides intelligent recommendations to maximize storage,improve picking speed,and reduce operational costs.</p>
                        <div className='mt-8 space-y-4 '>   {features.map((item,index)=>(
                               <div key={index}    className='flex  items-center gap-3'>
                                <FaCheckCircle className='text-green-500 text-xl'/>
                                <span className='text-gray-700'>{item}</span>
                            </div>
                           )
                              )
                                }
                        </div>
                        <div className='mt-10 flex gap-4'>
                            <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>Book Demo</button>
                            <button className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition'>Learn More</button>

                        </div>
                    </div>
                    <div>
                        <img
                        src={WarehouseDashboard}
                        alt='Warehouse Dashboard'
                        className='rounded-2xl shadow-xl' w-full
                        />
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Solution
