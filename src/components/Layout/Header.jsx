import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../UI/Button";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { route } = useRouter();
  console.log(route);
  return (
    <>
      <header className="w-full bg-[#36373A] px-[30px] md:px-[80px] py-[4px] md:py-[10px] fixed top-0 z-[100]">
        <div className="w-full xl:max-w-[14 40px] h-[64px] lg:h-[80px]  flex items-center justify-between  gap-x-[64px]">
          <div className="flex items-center gap-x-[64px] ">
            <div className="flex gap-x-2 items-center">
              <Link href={"/"}>
                <Image src={logo} width={55} height={48} />
              </Link>
              <Link href={"/"}>
                {" "}
                <span className="text-[13px] sm:text-[20px] text-white font-bold  md:hidden lg:block">
                  Drive Technology
                </span>
              </Link>
            </div>

            <div>
              <ul className="gap-x-[32px] xl:gap-x-[64px] items-center hidden md:flex">
                <Link href={"/"}>
                  <li
                    className={`${
                      route == "/"
                        ? "text-[#ffffff] border-b-[4px] border-b-[#136C2C]"
                        : "text-[#808080] border-b-[4px] border-b-transparent hover:border-b-[#136C2C]"
                    } text-[14px] font-bold    p-[2]`}
                  >
                    Home
                  </li>{" "}
                </Link>
                <div className="flex gap-x-2 items-center cursor-pointer group relative h-[90px]">
                  {" "}
                  <li
                    className={`${
                      route == "/services"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    } text-[14px] font-bold border-b-[4px] border-transparent  group-hover:border-b-[#136C2C] group-hover:text-white`}
                  >
                    Services
                  </li>
                  <i
                    class={`${
                      route == "/services" && "rotate-[180deg] text-white"
                    } fa-solid fa-chevron-down text-[#808080] text-[12px] group-hover:rotate-[180deg] group-hover:text-white font-bold`}
                  ></i>
                  <div className="w-[205px] absolute top-[82px] font-jakarta p-[16px] z-10 bg-[#36373A] hidden group-hover:block">
                    <ul className="flex flex-col gap-y-[17px]">
                      <Link href="/services">
                        <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C]">
                          Digital Marketing Services
                        </li>
                      </Link>
                      <Link href="/services">
                        <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C]">
                          Back Office Services
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-x-2 items-center cursor-pointer group relative h-[90px]">
                  <li
                    className={`${
                      route == "/development"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    } text-[14px] font-bold border-b-[4px] border-transparent group-hover:border-b-[#136C2C] group-hover:text-white`}
                  >
                    Development
                  </li>

                  <i
                    class={`${
                      route == "/development" && "rotate-[180deg] text-white"
                    } fa-solid fa-chevron-down text-[#808080] text-[12px] group-hover:rotate-[180deg] group-hover:text-white font-bold`}
                  ></i>
                  <div className="w-[212px] absolute top-[82px] font-jakarta p-[16px] z-10 bg-[#36373A] hidden group-hover:block">
                    <ul className="flex flex-col gap-y-[17px]">
                      <Link href={"/development"}>
                        {" "}
                        <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C]">
                          Mobile & Web Applications
                        </li>
                      </Link>
                      <Link href="/development">
                        <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C]">
                          AI & Machine Learning
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <Link href={"/portfolio"}>
                  {" "}
                  <li
                    className={`${
                      route == "/portfolio"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : route == "/portfolio/[projectId]"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    }  text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white`}
                  >
                    Portfolio
                  </li>
                </Link>
                <Link href={"/partnership/core"}>
                <li
                    className={`${
                      route == "/partnership/core"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : route == "/partnership/ecological"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    }  text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white`}
                  >
                    Partnership
                  </li>
                </Link>
                <Link href={"/blogs"}>
                  {" "}
                  <li
                    className={`${
                      route == "/blogs"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : route == "/blogs/[blogId]"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    }  text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white`}
                  >
                    Blog
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {openMobileMenu || (
            <i
              class="fa-solid fa-bars md:hidden text-[#E2E2E2] text-[20px]"
              onClick={() => setOpenMobileMenu(true)}
            ></i>
          )}
          {openMobileMenu && (
            <i
              class="fa-solid fa-xmark md:hidden text-[#E2E2E2] text-[20px]"
              onClick={() => setOpenMobileMenu(false)}
            ></i>
          )}
          <Button className="hidden xl:block">Start a Project</Button>
        </div>
      </header>

      {openMobileMenu && <MobileHeader />}
    </>
  );
};

export default Header;
