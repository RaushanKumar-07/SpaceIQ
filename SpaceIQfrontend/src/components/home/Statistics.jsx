import React from 'react'

const Statistics = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

   
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600">35%</h2>
      <p className="mt-2 text-gray-700 font-medium">Faster Picking</p>
    </div>
     <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600">28%</h2>
      <p className="mt-2 text-gray-700 font-medium">Better Space Utilization</p>
    </div>
     <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600">40%</h2>
      <p className="mt-2 text-gray-700 font-medium">Lower Storage Cost</p>
    </div>
     <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600">99%</h2>
      <p className="mt-2 text-gray-700 font-medium">Inventory Accuracy </p>
    </div>
  </div>
</section>
  )
}

export default Statistics
