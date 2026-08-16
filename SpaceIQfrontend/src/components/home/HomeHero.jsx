import React from 'react'
import Warehouse from '../../assets/Warehouseillustration.jpeg'
import { NavLink, Link } from 'react-router-dom'
const HomeHero = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 lg:px-12 py-24 min-h-[90vh] flex items-center'>
        <div className='grid lg:grid-cols-2 gap-16 items-center w-full'>
            <div>
                <span className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-5'>
                    AI Powered Warehouse Intelligence 
                </span>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight-slate-900'>
                    Stop Wasting<br/>
                    Warehouse Space.
                </h1>
                <p className='mt-8 text-lg text-gray-600 leading-8 max-w-xl'>
                    AI-powered warehouse intelligence that optimzes storage layouts, improves picking efficiency and maximizes warehouse utilization.
                </p>
                
                <div className='flex gap-5 mt-10'>
                    <Link to='/Demo'>  <button className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition'> Book Demo </button> </Link>
                    <Link to= '/contact'> <button className='border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transiton'> Try SpaceIQ </button> </Link>
                </div>
            </div>
            <div className='flex justify-center lg:justify-end'>
                <img src={Warehouse} alt='warehouse Illustration' className='w-full max-w-2xl  object-cover rounded-2xl shadow-2xl h-[450px] lg:h-[500px]'/>
            </div> 

        </div>
    </section>
  )
} 

export default HomeHero
