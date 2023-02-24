import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";
import Button from "../UI/Button";

const Header = () => {
  return (
    <header className="min-w-[1440px] h-[80px] bg-[#36373A] flex items-center justify-between  gap-x-[64px] px-[80px] py-[10px]">
      <div className="flex items-center gap-x-[64px] ">
        <div className="flex gap-x-2 items-center">
          <div>
            <Image src={logo} width={55} height={48} />
          </div>
          <span className="text-[20px]  text-white font-bold">
            Drive Technology
          </span>
        </div>

        <div>
          <ul className="flex gap-x-[64px] items-center ">
            <Link href={"/"}><li className="text-[#ffffff] text-[14px] font-bold border-b-[4px] border-b-[#136C2C] p-[2]">
              Home
            </li> </Link>
            <div className="flex gap-x-2 items-center">
             <Link href={"#"}> <li className="text-[#808080] text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white">Services</li></Link>
              <i class="fa-solid fa-chevron-down text-[#808080] text-[12px]"></i>
            </div>
            <div className="flex gap-x-2 items-center">
             <Link href={"#"}> <li className="text-[#808080] text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white">Deployment</li></Link>
              <i class="fa-solid fa-chevron-down text-[#808080] text-[12px]"></i>
            </div>
           <Link href={"#"}> <li className="text-[#808080] text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white">Portfolio</li></Link>
           <Link href={"#"}> <li className="text-[#808080] text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white">Partnership</li></Link>
           <Link href={"#"}> <li className="text-[#808080] text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white">Blog</li></Link>
          </ul>
        </div>
      </div>
      <Button>Start a Project</Button>
    </header>
  );
};

export default Header;
