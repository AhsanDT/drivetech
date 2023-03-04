import Image from "next/image";
import heroImage from "../../assets/bg-images/about.png";
import design from "../../assets/bg-images/design.png";
import design2 from "../../assets/bg-images/design2.png";
import heromobImage from "../../assets/bg-images/mobile-bg.png";
import styles from "../../styles/Hero.module.css";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full  h-sc reen relative">
        <div className="w-full  ">
      <div className={` img-container w-full h-full xl:max-h-[600px] absolute z-[-1] `}>
        <Image src={heroImage} alt="img" className=" hidden sm:block " />
        <Image src={heromobImage} alt="img" className="sm:hidden min-h-[640px]" />
      </div>
      <div className={` img-container w-full h-[] absolute top-[5%] xl:top-[14%] 1xl:top-[12%] 2xl:top-[10%]   3xl:top-[-4%] 4xl:top-[-10%] 5xl:top-[-15%] 6xl:top-[-20%] 7xl:top-[-36%] 8xl:top-[-44%] z-[-1]`}>
        <Image src={design2} alt="img" className=" hidden xl:block" />
      </div>
      <div className={` img-container w-full h-[] absolute top-[146px] xl:top-[280px] 1xl:top-[180px] 2xl:top-[140px] 3xl:top-[55px] 6xl:top-[-150px] 7xl:top-[-380px] z-[-1] ${styles.wave}`}>
        <Image src={design} alt="img" className=" hidden xl:block" />
      </div>
      <div className=" pt-[160px] lg:pt-[220px] flex flex-col justify-center gap-y-[24px] lg:gap-y-[15px] md:gap-y-[27px] w-[81%] lg:w-[70%] xl:w-[57%] z-[11] px-[30px] md:px-[100px] xl:px-[140px]">
        <span className="font-bold text-[48px] md:text-[64px] tracki ng-[1px] leading-[55px] md:leading-[73px]">
          We help you drive your business to{" "}
          <span className="text-[#136C2C]">success</span>
        </span>
        <p className="text-[rgba(0,0,0,0.7)] text-[16px] font-medium font-jakarta hidden lg:block">
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
      </div>
      <div className={`${styles.box} pt-[210px] sm:pt-[460px]`}></div>
    </section>
  );
};

export default Hero;