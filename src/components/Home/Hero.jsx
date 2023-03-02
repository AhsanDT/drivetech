import Image from "next/image";
import heroImage from "../../assets/bg-images/about-bg.png";
import design from "../../assets/bg-images/design.png";
import heromobImage from "../../assets/bg-images/mobile-bg.png";
import styles from "../../styles/Hero.module.css";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full relative">
        <div className="w-full h-sc reen  ">
      <div className={` img-container w-full h-full absolute z-[-2] `}>
        <Image src={heroImage} alt="img" className=" hidden sm:block " />
        <Image src={heromobImage} alt="img" className="sm:hidden min-h-[640px]" />
      </div>
      {/* <div className={` img-container w-full h-[] absolute top-[150px] z-[-1]`}>
        <Image src={design} alt="img" className=" hidden sm:block" />
      </div> */}
      <div className=" pt-[160px] lg:pt-[220px] flex flex-col justify-center gap-y-[24px] lg:gap-y-[15px] md:gap-y-[27px] w-[81%] lg:w-[70%] xl:w-[57%] z-[11] px-[30px] md:px-[140px]">
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
        <Link href={"/startproject"}><button className="border-[2px] border-black bg-[transparent]  text-[20px] px-[40px] py-[10px] w-fit text-black font-bold hidden lg:block ">
          Achieve Your Goals Faster With Us
        </button>
        </Link>
       <Link href={"/startproject"}> <button className="border-black border-[2px] bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold lg:hidden font-oswald mb-[100px] sm:mb-[20px]">
          Start a Project
        </button>
        </Link>
      </div>
      </div>
      <div className={`${styles.box} pt-[210px] sm:pt-[360px]`}></div>
    </section>
  );
};

export default Hero;