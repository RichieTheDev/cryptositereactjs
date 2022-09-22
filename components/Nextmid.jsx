import React from 'react'
import Fade from 'react-reveal/Fade';

const Nextmid = () => {
  return (
    <div className='font-Oxanium h-1/2 -mt-36 w-[68%] grid grid-cols-1 mx-auto items-center pt-16 pb-44 border-2 shadow-2xl rounded-2xl text-black text-xl bg-white'>
      <Fade>
        <div className='w-full'>
        
        <input type="text" placeholder='Enter your Hash Rate' className='border-b items-center ml-4 border-gray-400  w-fit md:w-[41%] mr-10' />
        <select name="dog-names" id="dog-names" className='mr-16 w-fit ml-7 mt-3 md:w-[20%]'>
            <option value="rigatoniT">TH/s</option>
            <option value="dave">Dave</option>
            <option value="pumpernickel">Pumpernickel</option>
            <option value="reeses">Reeses</option>
        </select>
        <button className='  rounded-3xl text-white font-normal bg-blue-600 px-8 py-2 text-center items-center mt-3 ml-6'>Calculate</button>
      </div>
      <div>
        <p className='mt-8 ml-7 text-blue-600'>ESTIMATED 24 HOUR REVENUE:</p>
      </div>
      <div>
        <p className='mt-8 ml-7 text-3xl font-semibold'>0.055 130 59 ETH <span className='text-blue-500'>($1275)</span></p>
      </div>
      <div>
        <p className='ml-7 mt-5 text-sm font-semibold'>Revenue will change based on mining difficulty and Ethereum price.</p>
      </div>
      </Fade>
      
      
    </div>
  )
}

export default Nextmid