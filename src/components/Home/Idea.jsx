import React from 'react'
import Button from '../UI/Button'

const Idea = () => {
  return (
    <div className="absolute bottom-0 w-full bg-[black] bg-opacity-[10%] lg:mt-[120px] flex flex-col gap-y-[14px] lg:flex-row justify-between lg:items-center px-[30px] lg:px-[120px] py-[38px]">
      <div className="flex flex-col ">
        <span className="font-oswald text-[24px] lg:text-[50px] font-bold text-[#ffffff] uppercase">
        Have an idea?
        </span>
        <span className="font-oswald text-[24px] lg:text-[50px] font-light text-[#ffffff] uppercase">Tell us about it.</span>
      </div>
      <Button className="hidden md:block w-fit">Achieve Your Goals Faster With Us</Button>
      <Button className=" md:hidden w-fit">Start a Project</Button>
    </div>
  )
}

export default Idea