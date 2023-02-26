import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";
import Button from "../UI/Button";
import FooterIcon from "./FooterIcon";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <footer className=" bg-[#36373A]  px-[20px] lg:px-[80px] py-[40px] lg:py-[10px]">
      <div className="w-full xl:max-w-[14 40px] h-[298px] items-center justify-between gap-x-[32px]  xl:gap-x-[64px] hidden lg:flex">
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
            <FooterIcon
              icon="fa-brands fa-facebook-f"
              className="bg-[#3B5998]"
            />
            <FooterIcon icon="fa-brands fa-twitter" className="bg-[#2DAAE1]" />
            <FooterIcon
              icon="fa-brands fa-linkedin-in"
              className="bg-[#007BB6]"
            />
            <FooterIcon
              icon="fa-brands fa-instagram"
              className="bg-[#C1328C]"
            />
            <FooterIcon
              icon="fa-brands fa-pinterest"
              className="bg-[#CD1E25]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[24px] text-white justify-center text-[14px]">
          <span>
            Email:{" "}
            <span className="text-[#4169E1]">info@drivetechnology.co</span>
          </span>
          <span>
            Phone: <span>+1 (888) 910 8298 92188 </span>
          </span>
          <Button>Start a Project</Button>
        </div>
        <div className="flex gap-x-[32px]  xl:gap-x-[64px] pt-[30px] text-white text-[14px] ">
          <div>
            <ul className="flex flex-col gap-y-[24px]">
              <Link href={"#"}>
                {" "}
                <li className="font-bold">Services</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">Digital Marketing Services</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">Back office Services</li>
              </Link>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-y-[24px]">
              <Link href={"#"}>
                {" "}
                <li className="font-bold">Development</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">Mobile & Web Development</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">AI & Machine Learning</li>
              </Link>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-y-[24px]">
              <Link href={"#"}>
                {" "}
                <li className="font-bold">Resources</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">Careers</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">Blogs</li>
              </Link>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-y-[24px]">
              <Link href={"#"}>
                {" "}
                <li className="font-bold">Legal</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">Privacy Policy</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">Terms & Condition</li>
              </Link>
              <Link href={"#"}>
                {" "}
                <li className="text-color">Cookie Policy</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* mobile footer */}
      <div className="lg:hidden text-[16px] flex flex-col gap-y-[20px] text-[#A3A3A3] font-jakarta">
        <MobileFooter />
      </div>
    </footer>
  );
};

export default Footer;
