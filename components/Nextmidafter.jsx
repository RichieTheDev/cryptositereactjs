import React from 'react'
import Btc from '../assets/Btc.png'
import Ltc from '../assets/Ltc.png'
import Eth from '../assets/Eth.png'
import Chart from '../assets/Chart.png'
import Base from '../assets/Base.png'
import Table from '../assets/Table.png'
import Start from '../assets/Start.png'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';



const Nextmidafter = () => {
  return (
    <div className='font-Oxanium bg-white text-black'>
        <div className='mx-auto text-center p-12'>
            <Slide bottom>
                <p className='text-2xl font-semibold'>Trade Securely And Market The High Growth Cryptocurrencies.</p>
            </Slide>
            
        </div>
        <div className=''>
            <div className='flex md:flex-row flex-col items-center mx-auto mb-8'>
                <Slide bottom>
                    <div className='hover:scale-100 cursor-pointer flex md:ml-12 ml-1'><img src={Btc} alt="/" /></div>
                </Slide>
                <Slide bottom>
                    <div className='hover:scale-100 cursor-pointer flex '><img src={Ltc} alt="/" /></div>
                </Slide>    
                <Slide bottom>
                    <div className='hover:scale-100 cursor-pointer flex '><img src={Eth} alt="/" /></div>
                </Slide>
                
                
                
            </div>
        </div>
        <div className='bg-[#0D0D2B] text-white'>
                <div className='text-center text-3xl'>
                    <p className='pt-8'>Market Sentiments, Portfolio, And Run The</p>
                    <p>Infrastructure Of Your Choice</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between mt-24 w-10/12 container mx-auto'>
                    <div>
                        <Fade left>
                            <h1 className='text-2xl mb-5 font-semibold'>Invest Smart</h1>
                        <p className='text-sm md:text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                        <button className='pt-1 rounded-3xl mb-4 mr-10 bg-blue-500 px-4 py-1 mt-5'>learn more</button>
                        </Fade>
                        
                    </div>
                    <div>
                        <Fade right>
                            <img className='w-fit object-scale-dowm' src={Chart} alt="/" />
                        </Fade>
                        
                    </div>
                    
                </div>
                <div className='flex flex-col-reverse md:flex-row justify-between mt-10 w-10/12 container mx-auto'>
                    <div>
                        <Fade left>
                            <img className='w-fit object-scale-down' src={Base} alt="/" />
                        </Fade>
                        
                    </div>
                    <div>
                        <Slide left>
                            <h1 className='text-2xl mb-5 font-semibold ml-8 mt-24'>Detailed Statistics</h1>
                        <p className='text-sm md:text-xs text-gray-400 ml-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                        <button className='pt-1 rounded-3xl mr-10 bg-blue-500 px-4 py-1 mb-4 mt-5 ml-8'>learn more</button>
                        </Slide>
                        
                    </div>    
                </div>
                <div className='flex flex-col md:flex-row justify-between mt-24 w-10/12 container mx-auto'>
                    <div>
                        <Fade left>
                            <h1 className='text-2xl font-semibold mt-1  md:mt-16'>Grow Your Profit And Track Your</h1>
                            <h1 className='text-2xl mb-2 md:mb-5 font-semibold'>Investments</h1>
                            <p className='text-sm md:text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                            <button className='pt-1 rounded-3xl mr-10 bg-blue-500 px-4 mb-3 py-1 mt-2 md:mt-5'>learn more</button>
                        </Fade>
                        
                    </div>
                    <div>
                        <Fade right>
                            <img className='w-fit object-scale-down mb-4' src={Table} alt="/" />
                        </Fade>
                        
                    </div>
                </div>    
                
                <div className='mt-16 hidden md:inline'>
                    <Slide bottom>
                        <img src={Start} alt="" />
                    </Slide>
                    
                </div>
        </div>
    </div>
  )
}

export default Nextmidafter