import React from 'react'
import team1 from '../../assets/team1.jpeg'
import team2 from '../../assets/team2.jpeg'
import team3 from '../../assets/team3.jpeg'
import team4 from '../../assets/team4.jpeg'
import { FaLinkedin,FaGithub } from 'react-icons/fa6'

const team = [
  {
    image: team1,
    name: "Kyle Mayers",
    role: "CEO & Founder",
    description: "Leads the vision and strategy behind SpaceIQ, driving innovation to build smarter, AI-powered warehouse solutions that help businesses improve efficiency and growth.",
    linkdin:"https://in.linkedin.com",
    github:"https://github.com"
  },
  {
    image: team3,
    name: "Emily Blunt",
    role: "AI-Engineer",
    description:"Designs and develops intelligent algorithms that analyze warehouse data, optimize storage utilization, and deliver actionable insights for better decision-making.",
    linkdin:"https://in.linkedin.com",
    github:"https://github.com"
  },
  {
    image: team2,
    name: "Rakesh Sharma",
    role: "Frontend Developer",
    description:"Creates intuitive and responsive user interfaces that transform complex warehouse data into a seamless, user-friendly experience across all devices.",
    linkdin:"https://in.linkedin.com",
    github:"https://github.com"
  },
  {
    image: team4,
    name: "Emilia Clark",
    role: "Backend Developer",
    description:"Builds secure and scalable server-side systems, APIs, and databases that power SpaceIQ's core functionality and ensure reliable data management.",
    linkdin:"https://in.linkedin.com",
    github:"https://github.com"
  },
]

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase">
            Our Team
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Meet the Team Behind SpaceIQ
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Our passionate team combines expertise in AI, logistics, and software engineering to build smarter warehouse management solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-5"
              />

              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-blue-600 font-medium mb-3">
                {item.role}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
              <div className="flex justify-center gap-4 mt-5">
  <a
    href={item.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 text-2xl hover:text-blue-800 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href={item.github}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 text-2xl hover:text-black transition"
  >
    <FaGithub />
  </a>
</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team