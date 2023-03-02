import Link from 'next/link'
import React from 'react'

const Button = ({children, className}) => {
  return (
    <Link href={"/startproject"}>
    <button className={`border bg-[#ffffff] px-[20px] py-[10px] text-black font-bold ${className && className} `}>
       {children}
      </button>
      </Link>
  )
}

export default Button