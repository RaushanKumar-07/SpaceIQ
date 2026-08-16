import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-linear-to-r from-blue-600 to-indigo-600">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-blue-100 uppercase tracking-[3px] font-semibold">
          GET STARTED
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Ready to Transform Your Warehouse?
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
          Schedule a personalized demo and discover how SpaceIQ can help you
          optimize storage, improve inventory management, and boost operational
          efficiency.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition duration-300" >
            Book a Demo
          </Link>

          <Link to="/product" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Explore Product
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA