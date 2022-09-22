import React from 'react';
import Ellipse from '../assets/Ellipse.png'
import Illustration from '../assets/Illustration.jpg'
import Fade from 'react-reveal/Fade';



const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 p-8 h-screen text-white bg-[#0D0D2B] font-Oxanium' >
        <div className=''>
            <div className='flex justify-between items-center rounded-full ml-0 md:ml-8 mt-0 md:mt-14 text-sm py-1 px-1 text-white bg-gray-600 w-full md:w-1/2'>
                <p className='rounded-2xl text-xs py-1 px-4  bg-white text-gray-600'>70% SAVE</p>
                <p className='mr-0 md:mr-1'>for the best black friday deals</p>
            </div>
            <div className='md:ml-8 mt-4 md:mt-8'>
                <Fade left>
                    <h1 className='text-4xl md:text-5xl font-semibold'>Fastest & Secure</h1>
                <h1 className='text-4xl md:text-5xl font-semibold'>Platform To Invest In</h1>
                <h1 className='text-4xl md:text-5xl font-semibold'>Crypto</h1>
                <p className='text-sm mt-1'>buy and sell cyptocurrencies by trusted 10M wallets, in over 100m transactions</p>
                <button className='bg-blue-700 px-4 py-2 mt-6 rounded-3xl items-center text-center ' type="submit">Try for FREE <span className='rounded-full w-4 py-1 h-4 bg-white'><img className=' hidden md:inline items-center text-center ' src={Ellipse} alt='/'/></span></button>
                </Fade>
                
            </div>
        </div>
        <div className='block md:inline'>
            <Fade right>
                <img className='w-fit md:w-[70%] object-cover' src={Illustration} alt="/" />
            </Fade>
            
        </div>
        

    </div>
  )
}

export default Hero