import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterIcon from "./FooterIcon";
import logo from "../../assets/logo.png";

const MobileFooter = () => {
  return (
    <>
      <div className="flex flex-col gap-y-[17px]">
        <h3>Social Media</h3>
        <div className="flex gap-x-[16px]">
          <FooterIcon icon="fa-brands fa-facebook-f" className="bg-[#3B5998]" />
          <FooterIcon icon="fa-brands fa-twitter" className="bg-[#2DAAE1]" />
          <FooterIcon
            icon="fa-brands fa-linkedin-in"
            className="bg-[#007BB6]"
          />
          <FooterIcon icon="fa-brands fa-instagram" className="icon-grad" />
          <FooterIcon icon="fa-brands fa-pinterest" className="bg-[#CD1E25]" />
        </div>
      </div>
      <div className="flex flex-col gap-y-[17px]">
        <h3>Contact us</h3>
        <span className="font-normal text-white text-[14px]">
          Email: <span className="text-[#4169E1]">info@drivetechnology.co</span>
        </span>
        <span className="font-light text-white text-[14px]">
          Phone: <span>+1 (888) 910 8298 92188 </span>
        </span>
      </div>
      <div className="border-b-[2px] border-b-[#A3A3A3]">
        <ul className="flex flex-col gap-y-[25px]">
          <Link href={"/services"}><li>Services</li></Link>
          <Link href={"/development"}><li>Development</li></Link>
          <li>Reesources</li>
          <li className="pb-[25px]">Legal</li>
        </ul>
      </div>
      <div className="flex justify-center gap-x-[40px]">
        <h4>Terms of use</h4>
        <h4>Privacy</h4>
      </div>
      <div className="flex gap-x-2 justify-center items-center">
        <Link href={"/"}>
          <Image src={logo} width={55} height={48} />
        </Link>
        <span className="text-[16px] sm:text-[20px] text-white font-bold  md:hidden lg:block">
          Drive Technology
        </span>
      </div>
      <div>
        {" "}
        <span className="text-[10px] font-normal flex justify-center">
          2023 DriveTech. All Rights Reserved.
        </span>
      </div>
    </>
  );
};

export default MobileFooter;
