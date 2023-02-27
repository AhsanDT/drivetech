import Image from "next/image";
import React from "react";
import image from "../../assets/partnership/img.png";
import styles from "../../styles/Hero.module.css";
import Button from "../UI/Button";


const DATA = [
  { id: "d1", img: image, name: "Core Partner Name" },
  { id: "d2", img: image, name: "Core Partner Name" },
  { id: "d3", img: image, name: "The Project Title" },
];

const Partnership = () => {
  return (
    <section className={`w-full  py-[100px]`}>
      <div className="flex flex-col gap-y-[16px] items-center px-[80px]">
        <h1 className="text-[48px] font-oswald font-bold text-[#282829] text-center">
          Partnership
        </h1>

        <p className="text-[16px] font-jakarta text-[#000000] text-opacity-[70%] text-center w-[669px] ">
          The best thing about DriveTech is it values its partnership with the
          intention of making everyone succeed.
        </p>
        <div className="mt-[30px]">
          <ul className="text-[16px] font-oswald font-bold flex gap-x-[40px] justify-center items-center">
            <li className="text-white bg-black px-[16px] py-[8px] cursor-pointer border">
              CORE PARTNERS
            </li>
            <li className="text-black hover:bg-black hover:text-white border border-black px-[16px] py-[8px] cursor-pointer">
              ECOLOGICAL PARTNERS
            </li>
          </ul>
        </div>
        <div className="flex gap-x-[80px] flex-wrap justify-center  gap-y-[40px] mt-[30px]">
          {DATA.map((data) => {
            return (
              <div className=" flex flex-col justify-center items-center ">
                <div className="img-container ">
                  <Image src={data.img} alt="img" />
                </div>
                <span className="font-oswald font-bold text-[#3C3C3C] text-[24px]">
                  {data.name}
                </span>
                <div className="flex items-center mt-[21px]">
                  <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                  <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#ffffff] bg-opacity-[10%] h-[168px] mt-[150px] flex flex-col gap-y-[24px] justify-center items-center">
            <p className="font-oswald text-[20px] font-bold text-[#ffffff] text-opacity-[60%]">ACCELERATE YOUR BUSINESS BY LEVERAGING EXCEPTIONAL DIGITAL MARKETING SERVICES </p>
          <Button>BOOK A FREE CONSULTATION</Button>
          </div>
      </div>
   
      {/* <div className={`${styles.box}`}></div> */}
    </section>
  );
};

export default Partnership;
