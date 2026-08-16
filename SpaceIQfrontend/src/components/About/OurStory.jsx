
import React from 'react'
import Aboutus from '../../assets/Aboutus.jpeg'

const OurStory = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 lg:px-4 py-8  flex items-center '>
        <div className='grid lg:grid-cols-2 gap-16 items-center w-full'>
             <div className='flex justify-center lg:justify-end'>
                <img src={Aboutus} alt='warehouse Illustration' className='w-full max-w-2xl  object-cover rounded-2xl shadow-2xl h-110 lg:h-100'/>
            </div> 
            <div>
                <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight-slate-900'>
                    Our Story
                </h2>
                <p className='mt-8 text-lg text-gray-600 leading-8 max-w-xl'>
                    SpaceIQ was born from the idea that warehouses should be smarter, faster, and more efficient.Traditional warehouse management often relies on manual planning and outdated processes, resulting in wasted storage space, inventory inaccuracies, and increased operational costs.We created SpaceIQ to solve these challenges by combining Artificial Intelligence, process optimization, and real-time analytics into one intelligent platform.
                </p>
            </div>
        </div>
    </section>
  )
} 

export default OurStory
