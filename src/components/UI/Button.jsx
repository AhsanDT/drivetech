import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`border bg-[#ffffff] px-[20px] py-[10px] text-black font-bold ${className && className} `}>
       {children}
      </button>
  )
}

export default Button