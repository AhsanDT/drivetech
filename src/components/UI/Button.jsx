import React from 'react'

const Button = ({children}) => {
  return (
    <button className="border bg-[#ffffff] px-[20px] py-[10px] text-black font-bold ">
       {children}
      </button>
  )
}

export default Button