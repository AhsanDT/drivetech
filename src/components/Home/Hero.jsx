import Image from "next/image";
import heroImage from "../../assets/bg-images/BG.png";
import design2 from "../../assets/bg-images/design2.png";
import design from "../../assets/bg-images/design.png";
import heromobImage from "../../assets/bg-images/mobile-bg.png";
import styles from "../../styles/Hero.module.css";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {" "}
      <section className="w-full  xl:min-h-[100vh] flex justify-center ">
        <div className="w-full relative overflow-hidden top-[12px]">
          <div className="img-container absolute hidden lg:block top-[-140px] z-[1] w-full h-full ">
            <Image src={heroImage} alt="img" />
          </div>
          <div className="img-container absolute block lg:hidden  w-full h-full ">
            <Image src={heromobImage} alt="img" />
          </div>
          <div
            className={`img-container hidden lg:block absolute top-[100px]  3xl:top-[-40px] 5xl:top-[-100px] 7xl:top-[-200px] left-[440px] z-[3] w-full h-[full]  overflow-hidden ${styles.wave} `}
          >
            <Image src={design} alt="img" />
          </div>
          <div className="img-container absolute hidden lg:block xl:top-[60px] 7xl:top-[10px] z-[2]  w-full h-full ">
            <Image src={design2} alt="img" />
          </div>

          <div className="w-full max-w-[1440px] mx-auto">
            <div className="relative pt-[160px] lg:pt-[220px] w-full lg:w-[937px] xl:max-w-[1440px] flex flex-col justify-center gap-y-[24px] lg:gap-y-[15px] md:gap-y-[27px] pb-[150px]  z-[11] px-[30px] md:px-[100px] xl:px-[140px]">
              <span className="font-bold text-[48px] md:text-[64px] tracki ng-[1px] leading-[55px] md:leading-[73px]">
                We help you drive your business to{" "}
                <span className="text-[#136C2C]">success</span>
              </span>
              <p className="text-[rgba(0,0,0,0.7)] text-[16px] font-medium font-jakarta hidden lg:block">
                We construct comprehensive customer experience by fusing
                technology and innovation together. We create a fully-integrated
                customer experience by incorporating the latest technology and
                innovative thinking
              </p>
              <p className="text-[rgba(0,0,0,0.7)] text-[15px] lg:hidden font-medium font-jakarta">
                Driving innovation, one solution at a time. The drive to succeed
                is powered by its people and advanced technology.
              </p>
              <button className="border-[2px] border-black bg-[transparent]  text-[20px] px-[40px] py-[10px] w-fit text-black font-bold hidden lg:block ">
                <Link href={"/startproject"}>
                  {" "}
                  Achieve Your Goals Faster With Us{" "}
                </Link>
              </button>
              <button className="border-black border-[2px] bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold lg:hidden font-oswald mb-[100px] sm:mb-[20px]">
                <Link href={"/startproject"}> Start a Project </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
