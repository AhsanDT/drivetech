import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Partnership.module.css";
import Idea from "./Idea";



const Partnership = ({DATA,className}) => {
    const {route} = useRouter();
  return (
    <section className={`w-full ${route == '/' && "py-[50px] pb-[100px]"} lg:py- [50px] relative ${className}  `}>
      <div className="flex flex-col gap-y-[16px] lg:items-center px-[30px]  md:px-[80px]">
        <h1 className="lg:text-[32px] text-[48px] font-oswald font-bold text-[#282829] lg:text-center">
          Partnership
        </h1>

        <p className="text-[16px] font-jakarta text-[#000000] text-opacity-[70%] lg:text-center lg:w-[669px] ">
          The best thing about DriveTech is it values its partnership with the
          intention of making everyone succeed.
        </p>    
        <div className="mt-[30px] w-full">
          <ul className="text-[14px] md:text-[16px] font-oswald font-bold gap-x-[8px] flex lg:gap-x-[40px] lg:justify-center items-center">
            <Link href={"/partnership/core"}><li className={`${route== "/partnership/core" ? "text-white bg-black" : "text-black bg-white hover:text-white  hover:bg-black"} w-full md:w-[208px]  text-center px-[20px] lg:px-[16px] py-[8px] cursor-pointer border border-black`}>
              CORE PARTNERS
            </li>
            </Link>
            <Link href={"/partnership/ecological"}><li className={`${route== "/partnership/ecological" ? "text-white bg-black" : "text-black bg-white hover:text-white  hover:bg-black"}  w-full md:w-[208px] text-center  px-[8px] lg:px-[16px] py-[8px] cursor-pointer border border-black`}>
              ECOLOGICAL PARTNERS
            </li>
            </Link>
          </ul>
        </div>
        <div className={`flex gap-x-[80px] flex-wrap justify-center gap-y-[21px] lg:gap-y-[40px] mt-[30px] ${className}`}>
          {DATA.map((data) => {
            return (
              <div className="flex flex-col justify-center lg:items-center " key={data.id}>
                <div className="img-container">
                  <Image src={data.img} alt="img" />
                </div>
                <div>
                <span className="font-oswald font-bold text-[#3C3C3C] text-[24px]">
                  {data.name}
                </span>
                <div className="flex items-center mt-[21px]">
                  <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                  <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
                </div>
                </div>
              </div>
            );
          })}
          
        </div>
        
      </div>
      
      {route == "/partnership/core" ? (
          <div className="relative pt-[210px] lg:pt-[230px] bg-[#37373B]">
            <div
              className={`${styles.box}  linear-grad  hidden md:block `}
            ></div>
            <Idea title="Start a Project" />
          </div>
        ) : route == "/partnership/ecological" ? (
            <div className="relative pt-[210px] lg:pt-[230px] bg-[#37373B]">
            <div
              className={`${styles.box}  linear-grad  hidden md:block `}
            ></div>
            <Idea title="Start a Project" />
          </div>
        ) : (
          ""
        )}
   
      {route == "/" && <div className={`${styles.box2} linear-grad `}></div>}

    </section>
  );
};

export default Partnership;
