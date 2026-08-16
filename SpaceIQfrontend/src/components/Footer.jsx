import React from 'react'
import { Link } from 'react-router-dom'
import {FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
const footer = () => {
  return (
   <footer className='bg-slate-900 text-gray-300'>
    <div className='max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-6 gap-8'>
        <div className='md:col-span-2'>
            <h2 className='text-3xl font-bold text-white'> SpaceIQ</h2>
            <p className='mt-4 text-gray-400 leading-7'> AI-powered warehouse optimization platfrom helping buisnesses maximize storage,improve effeciency and reduce operational cost</p>
        </div>

        <div>
            <h3 className='font-semibold text-white mb-4'>Product</h3>
            <ul className='space-y-2'>
                <li> <Link to = "/Features">Features</Link></li>
            </ul>
            <ul>
                <li> <Link to = "/Product">Product</Link></li>
            </ul>
            <ul>
                <li> <Link to = "/Pricing">Pricing</Link></li>
            </ul>
            <ul>
                <li> <Link to = "/Integrations">Integrations</Link></li>
            </ul>
        </div>

        <div>
            <h3 className='font-semibold text-white mb-4'>Solutions</h3>
            <ul className='space-y-2'>
                <li> <Link to = "/Manufacturing"> Manufacturing </Link> </li>
                 <li> <Link to = "/Retails"> Retails </Link> </li>
                  <li> <Link to = "/Logistics"> Logistics </Link> </li>
                   <li> <Link to = "/Ecommerce"> E-Commerce </Link> </li>
            </ul>
        </div>

        <div>
            <h3 className='font-semibold text-white mb-4'>Resources</h3>
            <ul className='space-y-2'>
                <li> <Link to = "/Blog">  Blog  </Link></li>
                 <li> <Link to = "/Documentation">Documentation </Link> </li>
                  <li> <Link to = "/Faq"> FAQs </Link> </li>
                   <li> <Link to = "/Case-studies">Case Studies</Link> </li>
            </ul>
        </div>

        <div>
            <h3 className='font-semibold text-white mb-4'> Company </h3>
            <ul className='space-y-2'>
                <li> <Link to = "/About"> About </Link>  </li>
                 <li> <Link to = "/Contact">Contact</Link> </li>
                  <li> <Link to = "/Privacy"> Privacy Policy </Link> </li>
                   <li> <Link to = "/Terms"> Terms of Services </Link> </li>
            </ul>

        </div>
    </div>
    <hr className='border-slate-700'/>
    <div className='max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center'>
        <p>
            &copy;2026 SpaceIQ. All Rights Reserved
        </p>
        <div className='flex gap-6 mt-4 md:mt-0'>
            <a href="https://in.linkedin.com" target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='hover:text-blue-500' />LinkedIn</a>
                 <a href="https://www.youtube.com/?app=desktop" target='_blank' rel='noopener noreferrer'>
                <FaYoutube className='hover:text-red-500' />YouTube</a>
                 <a href="https://github.com" target='_blank' rel='noopener noreferrer'>
                <FaGithub className='hover:text-gray-400' />GitHub</a>
            
        </div>
    </div>
   </footer>
  )
}

export default footer
