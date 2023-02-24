import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import Button from "../UI/Button";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <footer className="min-w-[1440px] h-[298px] bg-[#36373A] flex justify-between gap-x-[64px] px-[80px] py-[10px]">
      <div className="flex flex-col gap-y-[16px] justify-center">
        <div className="flex gap-x-2 items-center">
          <div>
            <Image src={logo} width={55} height={48} />
          </div>
          <span className="text-[20px]  text-white font-bold">
            Drive Technology
          </span>
        </div>
        <div className="flex gap-x-[16px]">
          <FooterIcon icon="fa-brands fa-facebook-f" className="bg-[#3B5998]" />
          <FooterIcon icon="fa-brands fa-twitter" className="bg-[#2DAAE1]" />
          <FooterIcon icon="fa-brands fa-linkedin-in" className="bg-[#007BB6]" />
          <FooterIcon icon="fa-brands fa-instagram" className="bg-[#C1328C]" />
          <FooterIcon icon="fa-brands fa-pinterest" className="bg-[#CD1E25]" />
        </div>
      </div>
      <div className="flex flex-col gap-y-[24px] text-white justify-center text-[14px]">
        <span>
          Email: <span className="text-[#4169E1]">info@drivetechnology.co</span>
        </span>
        <span>
          Phone: <span>+1 (888) 910 8298 92188 </span>
        </span>
        <Button>Start a Project</Button>
      </div>
      <div className="flex gap-x-[64px] pt-[70px] text-white text-[14px] ">
        <div>
          <ul className="flex flex-col gap-y-[24px]">
            <li className="font-bold">Services</li>
            <li className="text-color">Digital Marketing Services</li>
            <li className="text-color">Back office Services</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-y-[24px]">
            <li className="font-bold">Development</li>
            <li className="text-color">Mobile & Web Development</li>
            <li className="text-color">AI & Machine Learning</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-y-[24px]">
            <li className="font-bold">Resources</li>
            <li className="text-color">Careers</li>
            <li className="text-color">Blogs</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-y-[24px]">
            <li className="font-bold" >Legal</li>
            <li className="text-color">Privacy Policy</li>
            <li className="text-color">Terms & Condition</li>
            <li className="text-color">Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
