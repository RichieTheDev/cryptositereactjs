import React from 'react'
import Choose from '../assets/Choose.png'

const Bugg = () => {
  return (
    <div className='md:grid md:grid-cols-2 p-8 max-h-screen text-white bg-[#0D0D2B] font-Oxanium'>
        <div>
            <img className='w-fit md:w-[95%] object-scale-down md:ml-8 ' src={Choose} alt="/" />
        </div>
        <div className=' mt-20 ml-8 mr-8' >
            <h1 className='text-5xl'>why you should choose</h1>
            <h1 className='text-5xl'>CHAPPO</h1>
            <p className='text-xl md:text-base text-gray-400 mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda rerum eaque impedit quaerat, voluptates aliquam sed rem hic pariatur!</p>
            <button className='pt-1 rounded-3xl mr-10 bg-blue-500 px-5 md:px-4 py-4 md:py-2 mt-5 text-xl mb-3'>learn more</button>
  
        </div>
    </div>
    
  )
}

export default Bugg