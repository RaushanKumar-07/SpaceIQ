import React from "react"
import {FaEnvelope,FaPhoneAlt,FaMapMarkerAlt,FaClock} from "react-icons/fa"

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            We're Here to Help
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Have questions about SpaceIQ or want to see how our AI-powered
            platform can optimize your warehouse? Reach out to us, we'd love
            to hear from you.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-6">
              <FaEnvelope />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Email Us
            </h3>

            <p className="mt-3 text-gray-600">
              support@spaceiq.com
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-6">
              <FaPhoneAlt />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Call Us
            </h3>
            <p className="mt-3 text-gray-600">
              +91 60000 59595
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl mb-6">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Visit Us
            </h3>

            <p className="mt-3 text-gray-600">
              Bathinda, Punjab, India
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl mb-6">
              <FaClock />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Business Hours
            </h3>

            <p className="mt-3 text-gray-600">
              Monday to Friday <br />
              9:00 AM to 6:00 PM
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactInfo