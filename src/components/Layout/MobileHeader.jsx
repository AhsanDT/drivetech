import React from 'react'

const MobileHeader = () => {
  return (
    <div className='fixed top-[88px] z-40 bg-[#1F1F22ED] w-full h-[100vh] backdrop-blur-[5px] pt-[20px]'>
    <div className=' '>
        <ul className='flex flex-col gap-y-[24px] justify-center items-center text-[36px] font-oswald font-bold text-white'>
            <li>Home</li>
            <li className='text-[#808080]'>Services</li>
            <li className='text-[#808080]'>Development</li>
            <li className='text-[#808080]'>Portfolio</li>
            <li className='text-[#808080]'>Partnership</li>
            <li className='text-[#808080]'>Blog</li>
        </ul>
    </div>
    </div>
  )
}

export default MobileHeader