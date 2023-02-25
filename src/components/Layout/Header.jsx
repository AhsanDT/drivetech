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
          <Link href={"/"}>
            <Image src={logo} width={55} height={48} />
          </Link>
          <span className="text-[20px]  text-white font-bold">
            Drive Technology
          </span>
        </div>

        <div>
          <ul className="flex gap-x-[64px] items-center ">
            <Link href={"/"}><li className="text-[#ffffff] text-[14px] font-bold border-b-[4px] border-b-[#136C2C] p-[2]">
              Home
            </li> </Link>
            <div className="flex gap-x-2 items-center cursor-pointer group relative h-[90px]">
             <Link href={"#"}> <li className="text-[#808080] text-[14px] font-bold border-b-[4px] border-transparent  group-hover:border-b-[#136C2C] group-hover:text-white">Services</li></Link>
              <i class="fa-solid fa-chevron-down text-[#808080] text-[12px] group-hover:rotate-[180deg] group-hover:text-white font-bold"></i>
              <div className="w-[205px] absolute top-[82px] font-jakarta p-[16px] z-10 bg-[#36373A] hidden group-hover:block">
                <ul className="flex flex-col gap-y-[17px]">
                    <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C]">Digital Marketing Services</li>
                    <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C]">Back Office Services</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-2 items-center cursor-pointer group relative h-[90px]">
             <Link href={"#"}> <li className="text-[#808080] text-[14px] font-bold border-b-[4px] border-transparent group-hover:border-b-[#136C2C] group-hover:text-white">Deployment</li></Link>
              <i class="fa-solid fa-chevron-down text-[#808080] text-[12px] group-hover:rotate-[180deg] group-hover:text-white font-bold"></i>
              <div className="w-[212px] absolute top-[82px] font-jakarta p-[16px] z-10 bg-[#36373A] hidden group-hover:block">
                <ul className="flex flex-col gap-y-[17px]">
                    <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C]">Mobile & Web Applications</li>
                    <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C]">AI & Machine Learning</li>
                </ul>
              </div>
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
