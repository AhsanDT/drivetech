import Image from "next/image";
import React from "react";
import ServiceItem from "./ServiceItem";
import Button from "../UI/Button";
import styles from "../../styles/Hero.module.css";
import styles2 from "../../styles/Blogs.module.css";
import styles3 from "../../styles/Services.module.css";
import Idea from "./Idea";
import { useRouter } from "next/router";

const Services = ({ services, name, padding, className, image }) => {
  const { route } = useRouter();
  return (
    <>
      <section className={` w-full h-full linear-grad relative `}>
        <div
          className={`w-full h-full py-[ 40px]  sm:px-[120px] xl:px-[240px] pb-[10 0px] ${padding}`}
        >
          <div className={` img-container absolute  le ft-0 w-full`}>
            <Image src={image} alt="img" />
          </div>
          <div className={`relative z-[1] ${className}`}>
            <div className="px-[30px]  w-full lg:pb-[40px]">
              <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white lg:text-center">
                {name}
              </h1>
            <div className="flex flex-col gap-y-[48px] xl:gap-y-[158px] pt-[45px] xl:pt-[150px]">
                {services.map((service, index) => {
                  return (
                    <div
                      className={`flex flex-col gap-y-[16px] md:flex-row justify-center gap-x-[95px] ${
                        index == 1 && "md:flex-row-reverse"
                      } ${index == 3 && "md:flex-row-reverse"} w-full`}
                      key={service.id}
                    >
                      <ServiceItem service={service} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-[#ffffff] bg-opacity-[10%] lg:h-[168px] w-full mt-[45px] lg:mt-[150px] flex flex-col gap-y-[24px] justify-center items-center px-[30px] py-[20px]">
              <p className="font-oswald text-[20px] font-bold text-[#ffffff] text-opacity-[60%] lg:text-center">
                ACCELERATE YOUR BUSINESS BY LEVERAGING EXCEPTIONAL DIGITAL
                MARKETING SERVICES{" "}
              </p>
              <Button>BOOK A FREE CONSULTATION</Button>
            </div>
          </div>
        </div>
        {route == "/services" ? (
          <>
            <div
              className={`${styles2.box}  linear-grad  hidden md:block`}
            ></div>
            <Idea title="Start a Project" />
          </>
        ) : route == "/development" ? (
          <>
            <div
              className={`${styles2.box}  linear-grad  hidden md:block`}
            ></div>
            <Idea title="Start a Project" />
          </>
        ) : (
          ""
        )}
     {route =="/" && <div className={`${styles3.box}   linear-grad mt-[20%] 2xl:mt-[20.2%]  relative hidden xl:block`}></div>}
      </section>
      
    </>
  );
};

export default Services;
