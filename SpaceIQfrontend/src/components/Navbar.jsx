import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/SpaceIQlogo.png'
const Navbar = () => {
  return (
    <nav className='bg-white flex items-center justify-between px-10 py-4 shadow-md'>
        <NavLink to='/'>
        <div className='flex items-center gap-2 cursor-pointer'>
        <img src={logo} alt='SpaceIQ Logo' className='w-10 h-10 object-contain' />
         <h1 className='text-2xl font-bold text-blue-600'> SpaceIQ </h1>         
         </div>
         </NavLink>
        <ul className='flex gap-35 font-semibold'>
            <li>
                <NavLink to ="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
                <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
            <li>
                <NavLink to="/Contact">Contact</NavLink>
            </li>
        </ul>
        <div className='flex gap-15'>
            <NavLink to='/Login'>
            <button className='border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition' >
                Login </button>
                </NavLink>
            <NavLink to="/Demo">
            <button className='bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition' >Book Demo</button>
            </NavLink>
        </div>

    </nav>
  )
}

export default Navbar
