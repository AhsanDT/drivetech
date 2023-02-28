import Link from 'next/link'
import React from 'react'

const MobileHeader = () => {
  return (
    <div className='fixed top-[88px] z-40 bg-[#1F1F22ED] w-full h-[100vh] backdrop-blur-[5px] pt-[20px] '>
    <div className=' '>
        <ul className='flex flex-col gap-y-[24px] justify-center items-center text-[36px] font-oswald font-bold text-white'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/services"}><li className='text-[#808080]'>Services</li></Link>
            <Link href={"/development"}><li className='text-[#808080]'>Development</li></Link>
            <Link href={"/portfolio"}><li className='text-[#808080]'>Portfolio</li></Link>
            <Link href={"#"}><li className='text-[#808080]'>Partnership</li></Link>
            <Link href={"#"}><li className='text-[#808080]'>Blog</li></Link>
        </ul>
    </div>
    </div>
  )
}

export default MobileHeader