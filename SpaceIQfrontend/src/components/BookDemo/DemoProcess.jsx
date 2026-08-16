import React from "react"

const steps = [
  {
    number: "1",
    title: "Submit Request",
    description: "Fill out the demo request form."
  },
  {
    number: "2",
    title: "Schedule Meeting",
    description: "We'll contact you to confirm the date and time."
  },
  {
    number: "3",
    title: "Live Demonstration",
    description: "Watch SpaceIQ optimize warehouse operations."
  },
  {
    number: "4",
    title: "Get Recommendations",
    description: "Receive AI-powered suggestions for your business."
  }
]

const DemoProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          How It Works
        </h2>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div  key={step.number}  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300" >

              <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-7">
                {step.description}
              </p>
           </div>
          ))}
        </div>
      </div>
 </section>
  )
}

export default DemoProcess