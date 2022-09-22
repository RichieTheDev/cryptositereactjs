import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState (true)
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center p-5 bg-[#0D0D2B] text-white font-Oxanium ' >
      <div>
        <img className='md:ml-10 cursor-pointer' src={Logo} alt="/" />
      </div>
      <ul className='hidden md:flex items-center'>
        <li className='hover:cursor-pointer hover:text-amber-600 mx-4 pt-1'>Product</li>
        <li className='hover:cursor-pointer hover:text-amber-600 mx-4 pt-1'>Features</li>
        <li className='hover:cursor-pointer hover:text-amber-600 mx-4 pt-1'>About</li>
        <li className='hover:cursor-pointer hover:text-amber-600 mx-4 pt-1'>Contact</li>
        <li className='hover:cursor-pointer hover:text-amber-600 ml-12 pt-1'>Login</li>
        <li className='hover:cursor-pointer hover:text-amber-600 mx-4 pt-1'>|</li>
        <button className='mx-4 pt-1 rounded-3xl mr-10 bg-blue-500 px-4 py-1 hover:text-blue-700'>Register</button>
      </ul>
      
      <div onClick={handleClick} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
          <div className={!nav ? 'fixed top-0 left-0 bg-[#0D0D2B] z-10 text-white w-full h-screen items-center text-center ease-in-out duration-300 ' : 'fixed -left-60'}>
            <AiOutlineClose className='m-5 left-0' size={30}/>
            <ul>
              <li className='hover:text-amber-600 py-4 text-xl mt-8'>Product</li>
              <li className='hover:text-amber-600 py-4 text-xl'>Features</li>
              <li className='hover:text-amber-600 py-4 text-xl'>About</li>
              <li className='hover:text-amber-600 py-4 text-xl'>Contact</li>
              <li className='hover:text-amber-600 py-4 text-xl'>Login</li>
        
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Navbar