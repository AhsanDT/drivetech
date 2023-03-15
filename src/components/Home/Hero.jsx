import Image from "next/image";
import React from "react";
import Link from "next/link";
import heroImage from "../../assets/bg-images/BG3.png";
import styles from "../../styles/Hero.module.css";

const Hero = ({ heroBox }) => {
  return (
    <section className="w-full justify-center relative min-h-[100vh]">
      <div className="w-full xl:max-w-[1440px]   ">
        <div className={` img-container w-full h-full absolute z-[-1] `}>
          <div className={`img-container w-full h-[101%]`}>
            <Image src={heroImage} alt="img" />
          </div>
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
          )}{" "}
          <button className="border-black border-[2px] bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold lg:hidden font-oswald mb-[100px] sm:mb-[20px]">
            <Link href={"/startproject"}> Start a Project </Link>
          </button>
        </div>
        <div className={`${styles.box} pt-[270px] `}></div>
      </div>
    </section>
  );
};

export default Hero;
