import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";
import Button from "../UI/Button";
import FooterIcon from "./FooterIcon";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <footer className="w-full   bg-[#36373A] md:px-[80px] px-[30px] lg:px-[80px] py-[40px] lg:py-[10px]  2xl:flex justify-center relative z-[1] ">
      <div className="w-full xl:max-w-[1440px] ">
        <div className="pt-[83px] justify-between gap-x-[32px]  xl:gap-x-[64px] hidden lg:flex h-[298px]  border-b border-b-[#6F6F6F]">
          <div className="flex flex-col gap-y-[16px]">
            <div className="flex gap-x-[16px]">
              <FooterIcon
                icon="fa-brands fa-facebook-f"
                className="bg-[#3B5998] text-[18px] "
              />
              <FooterIcon
                icon="fa-brands fa-twitter"
                className="bg-[#2DAAE1] text1814]"
              />
              <FooterIcon
                icon="fa-brands fa-linkedin-in"
                className="bg-[#007BB6] text-[18px] "
              />
              <FooterIcon icon="fa-brands fa-instagram" className="icon-grad" />
              <FooterIcon
                icon="fa-brands fa-pinterest"
                className="bg-[#CD1E25] text-[18px]  text-[#37373B]"
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <div>
                <Image src={logo} width={55} height={48} alt="img" />
              </div>
              <span className="text-[16px]  text-white font-bold">
                Drive Technology
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-[24px] text-white text-[14px] font-jakarta">
            <span>
              Email:{" "}
              <span className="text-[#4169E1] hover:underline">
                <a href="mailto:info@drivetechnology.co">
                  info@drivetechnology.co
                </a>
              </span>
            </span>
            <span>
              Phone:{" "}
              <span>
                <a
                  href="tel:+1 (888) 910 8298 92188"
                  className="hover:underline"
                >
                  +1 (888) 910 8298 92188{" "}
                </a>
              </span>
            </span>
            <Link href={"/startproject"}>
              <Button className="w-fit">Start a Project</Button>
            </Link>
          </div>
          <div className="flex gap-x-[32px]  xl:gap-x-[64px] text-white text-[12px] font-jakarta  ">
            <div>
              <ul className="flex flex-col gap-y-[24px]">
                <Link href={"/services"}>
                  {" "}
                  <li className="font-bold font-oswald text-[14px]">
                    Services
                  </li>
                </Link>
                <Link href={"/services"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Digital Marketing Services
                  </li>
                </Link>
                <Link href={"/services"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Back office Services
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-y-[24px]">
                <Link href={"/development"}>
                  {" "}
                  <li className="font-bold font-oswald text-[14px]">
                    Development
                  </li>
                </Link>
                <Link href={"/development"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Mobile & Web Development
                  </li>
                </Link>
                <Link href={"/development"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    AI & Machine Learning
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-y-[24px]">
                <Link href={"/blogs"}>
                  {" "}
                  <li className="font-bold font-oswald text-[14px]">
                    Resources
                  </li>
                </Link>

                <Link href={"/blogs"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline font-normal">
                    Blogs
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-y-[24px]">
                <Link href={"#"}>
                  {" "}
                  <li className="font-bold font-oswald text-[14px]">Legal</li>
                </Link>
                <Link href={"/privacypolicy"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Privacy Policy
                  </li>
                </Link>
                <Link href={"/termsandconditions"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Terms & Condition
                  </li>
                </Link>
                <Link href={"/cookiepolicy"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Cookie Policy
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[12px] text-[#6F6F6F] font-jakarta font-medium hidden lg:flex justify-end gap-x-[160px] py-[30px]">
          <Link href={"/privacypolicy"} className="hover:underline">
            <span> Privacy Policy</span>
          </Link>
          <Link href={"/termsandconditions"} className="hover:underline">
            <span>Terms of Use</span>
          </Link>
          <span>Copyright 2023 DriveTech. All Rights Reserved.</span>
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
