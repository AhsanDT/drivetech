import Image from "next/image";
import React from "react";
import Link from "next/link";

import heroImage from "../../assets/bg-images/BG2.jpeg";
import design from "../../assets/bg-images/design.png";
import design2 from "../../assets/bg-images/design2.png";
import heromobImage from "../../assets/bg-images/mobile-bg.png";
import styles from "../../styles/Hero.module.css";

const Hero = ({ heroBox }) => {
  return (
    <section className="w-full justify-center relative min-h-[100vh]">
        <div className="w-full xl:max-w-[1440px]   ">
      <div className={` img-container w-full h-full absolute z-[-1] `}>
        <div className={`${styles.heroImage} hidden md:block`}></div>
        <Image src={heromobImage} alt="img" className="md:hidden min-h-[640px]" />
      </div>
      <div className=" pt-[160px] lg:pt-[220px] flex flex-col justify-center gap-y-[24px] lg:gap-y-[15px] md:gap-y-[27px] w-[81%] lg:w-[70%] 3xl:mx-auto z-[11] px-[30px] md:px-[100px] xl:px-[140px]">
        <span className="font-bold text-[48px] md:text-[64px] tracki ng-[1px] leading-[55px] md:leading-[73px]">
          We help you drive your business to{" "}
          <span className="text-[#136C2C]">success</span>
        </span>
        <p className="text-[rgba(0,0,0,0.7)] text-[16px] font-medium font-jakarta hidden lg:block w-[500px]">
          We construct comprehensive customer experience by fusing technology
          and innovation together. We create a fully-integrated customer
          experience by incorporating the latest technology and innovative
          thinking
        </p>
        <p className="text-[rgba(0,0,0,0.7)] text-[15px] lg:hidden font-medium font-jakarta">
          Driving innovation, one solution at a time. The drive to succeed is
          powered by its people and advanced technology.
        </p>
        <button className="border-[2px] border-black bg-[transparent]  text-[20px] px-[40px] py-[10px] w-fit text-black font-bold hidden lg:block ">
        <Link href={"/startproject"}> Achieve Your Goals Faster With Us        </Link>

        </button>
        <button className="border-black border-[2px] bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold lg:hidden font-oswald mb-[100px] sm:mb-[20px]">
       <Link href={"/startproject"}>  Start a Project </Link>
        </button>
       
      </div>
      <div className={`${styles.box} pt-[270px] `}></div>
    <section className="w-full justify-center  min-h-[100vh] relative">
      <div className="w-full xl:max-w-[1440px]   ">
        <div className={` img-container w-full h-full absolute z-[-1] `}>
          {/* <Image src={heroImage} alt="img" className=" hidden sm:block " /> */}
          <div className={`${styles.heroImage} hidden md:block`}></div>
          {heroBox && (
            <Image
              src={
                "http://localhost:1337" +
                heroBox?.attributes?.image?.data?.attributes?.url
              }
              alt="img"
              className="md:hidden min-h-[640px]"
              height={heroBox?.attributes?.image?.data?.attributes?.height}
              width={heroBox?.attributes?.image?.data?.attributes?.width}
            />
          )}
        </div>
        {/* <div className={` img-container w-full h-[] absolute top-[5%] 3xl:top-[4%] 4xl:top-[-9%] 5xl:top-[-13%] 6xl:top-[-26%] 7xl:top-[-34%] z-[-1]`}>
        <Image src={design2} alt="img" className=" hidden 2xl:block" />
      </div> */}
        <div
          className={` img-container w-full h-[] absolute top-[400px] xl:top-[200px] 1xl:top-[100px] 3xl:top-[10px] 5xl:top-[5px] 6xl:top-[-100px] 7xl:top-[-200px] z-[-1] `}
        >
          <Image src={design} alt="img" className=" hidden lg:block" />
        </div>
        <div className=" pt-[160px] lg:pt-[220px] flex flex-col justify-center gap-y-[24px] lg:gap-y-[15px] md:gap-y-[27px] w-[81%] lg:w-[70%] 3xl:mx-auto z-[11] px-[30px] md:px-[100px] xl:px-[140px]">
          <span className="font-bold text-[48px] md:text-[64px] tracki ng-[1px] leading-[55px] md:leading-[73px]">
            {/* We help you drive your business to{" "} */}
            {heroBox?.attributes?.heading}
            {/* <span className="text-[#136C2C]">success</span> */}
          </span>
          <p className="text-[rgba(0,0,0,0.7)] text-[16px] font-medium font-jakarta hidden lg:block">
            {heroBox?.attributes?.sub_heading}
            {/* We construct comprehensive customer experience by fusing technology
            and innovation together. We create a fully-integrated customer
            experience by incorporating the latest technology and innovative
            thinking */}
          </p>
          <p className="text-[rgba(0,0,0,0.7)] text-[15px] lg:hidden font-medium font-jakarta">
            {heroBox?.attributes?.sub_heading}
            {/* Driving innovation, one solution at a time. The drive to succeed is
            powered by its people and advanced technology. */}
          </p>
          {heroBox?.attributes?.btn_text && (
            <button className="border-[2px] border-black bg-[transparent]  text-[20px] px-[40px] py-[10px] w-fit text-black font-bold hidden lg:block ">
              <Link href={"/startproject"}>
                {" "}
                {heroBox?.attributes?.btn_text}
                {/* Achieve Your Goals Faster With Us{" "} */}
              </Link>
            </button>
          )}
          <button className="border-black border-[2px] bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold lg:hidden font-oswald mb-[100px] sm:mb-[20px]">
            <Link href={"/startproject"}> Start a Project </Link>
          </button>
        </div>
        <div className={`${styles.box} pt-[210px] sm:pt-[460px]`}></div>
      </div>
    </section>
  );
};

export default Hero;
