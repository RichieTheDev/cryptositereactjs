import React from 'react'
import {AiOutlineFacebook,AiOutlineYoutube,AiOutlineGoogle,AiOutlineTwitter} from 'react-icons/ai'

const Foot = () => {
  return (
    <div className='font-Oxanium bg-[#0D0D2B]  flex p-6 md:p-10 text-white'>
            <p className='mt:ml-8 mr-auto '>© 2022 <span className='hidden md:inline'>CRAPPO.</span> All rights reserved. </p>
            <div className='flex justify-center items-center md:space-x-5 '>
                <AiOutlineFacebook size={35} />
                <AiOutlineYoutube size={35} />
                <AiOutlineGoogle size={35} />
                <AiOutlineTwitter size={35} />
            </div>
        </div>
  )
}

export default Foot