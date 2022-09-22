import React from 'react'
import Icon from '../assets/Icon.png'
import Person from '../assets/Person.png'
import World from '../assets/world.png'
import Typed from 'react-typed';
import Slide from 'react-reveal/Slide';


const Heromid = () => {
  return (
    <div className='font-Oxanium bg-[#0D0D2B] flex space-y-6 md:space-y-0 flex-wrap md:justify-between items-center pt-24 p-8'>
        <Slide top>
            <div className='flex  flex-wrap items-center md:justify-between'>
            <img className='ml-0 md:ml-8 w-[29%] md:w-1/6 flex flex-wrap md:inline' src={Icon} alt="/" />
            <p className='text-gray-100  md:text-2xl text-3xl'><Typed
                    strings={['$30B','$40B','$60B','$80B']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            <span className='block  text-base leading-none text-gray-500'>Digital Currency Exchange</span>
            </p>
        </div>
        </Slide>
            
        <Slide bottom>
            <div  className='flex flex-wrap items-center md:justify-between'>
                <img className='ml-0 md:ml-8 w-[26%] md:w-1/6 flex flex-wrap md:inline' src={Person} alt="/" />
                <p className='text-gray-100 md:text-2xl text-3xl'><Typed
                    strings={['150','160','180','190']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                />
                <span className='block text-base leading-none text-gray-500'>Countries Around The World</span>
                </p>
                
            </div>
        </Slide>
            
        <Slide top>
            <div className='flex flex-wrap items-center md:justify-between'>
            <img className='ml-0 md:ml-8 w-[29%] md:w-1/6 flex-wrap md:inline' src={World} alt="/" />
            <p className='text-gray-100 md:text-2xl text-3xl animate-none md:animate-bounce'>$10M
            <span className='block text-base leading-none text-gray-500'>Trusted Wallet Investors</span>
            </p>
        
        </div>
        </Slide>    
        
        
    </div>

  )
}

export default Heromid
