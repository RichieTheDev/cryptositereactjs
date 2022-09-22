import React from 'react'
import Logo from '../assets/Logo.png'
import Bitcoin from '../assets/Bitcoin.png'
import Mastercard from '../assets/Mastercard.png'
import Visa from '../assets/Visa.png'



const Footer = () => {
  return (
    <div className='font-Oxanium bg-[#0D0D2B]  text-white md:flex md:justify-between md:items-center'>
        <div className='container mx-auto md:flex md:space-x-36 md:items-start pt-8 md:mt-12'>
            <img className='ml-5 mt-4' src={Logo} alt="" />
        <div className='flex justify-between mt-4 ml-7'>
            <ul>
                <li className='p-2 text-2xl md:text-lg'>Quick Links</li>
                <li className='hover:text-amber-600 p-2 text-lg'>Home</li>
                <li className='hover:text-amber-600 p-2 text-lg'>Product</li>
                <li className='hover:text-amber-600 p-2 text-lg'>Features</li>
                <li className='hover:text-amber-600 p-2 text-lg'>Contact</li>
            </ul>
        </div>
        <div className='flex justify-between mt-4 ml-7'>
            <ul>
                <li className='p-2 text-2xl md:text-lg'>Resources Links</li>
                <li className='hover:text-amber-600 p-2 text-lg'>Download Whitepapper</li>
                <li className='hover:text-amber-600 p-2 text-lg'>Blockchain Explore</li>
                <li className='hover:text-amber-600 p-2 text-lg'>Crypto API</li>
                <li className='hover:text-amber-600 p-2 text-lg'>Interest</li>
            </ul>
        </div>
        <div className='mt-4 ml-2'>
            <p className='text-2xl md:text-lg text-center'>We accept following payment systems</p>
            <div className='flex mt-4 justify-center items-center md:space-x-5 space-x-2 hover:cursor-pointer'>
                <img src={Bitcoin} alt="/" />
                <img src={Mastercard} alt="/" />
                <img src={Visa} alt="/" />
            </div>
        </div>
        
   </div>
    

    </div>
  )
}

export default Footer