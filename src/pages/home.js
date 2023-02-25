import Layout from "@/components/Layout/Layout";
import Button from "@/components/UI/Button";
import Image from "next/image";
import React from "react";
import heroImage from "../assets/bg-images/about-bg.png";
import styles from "../styles/Home.module.css"

const HomePage = () => {
  return (
    <Layout>
            <section className="w-full">
      <div className={` img-container w-full h-screen xl:h-[800px] relative`}>
        <Image src={heroImage} alt="img"/>
        <div className="absolute top-[60px] xl:top-[149px] left-[20px] md:left-[100px] xl:left-[184px] flex flex-col gap-y-[15px] md:gap-y-[27px] w-[80%] lg:w-[70%] xl:w-[39%] z-[11]">
          <span className="font-bold text-[48px] md:text-[64px] tracki ng-[1px] leading-[55px] md:leading-[73px]"> 
            We help you drive your business to <span className="text-[#136C2C]">success</span>
          </span>
          <p className="text-[rgba(0,0,0,0.7)] text-[16px] font-medium font-jakarta hidden lg:block">
            We construct comprehensive customer experience by fusing technology
            and innovation together. We create a fully-integrated customer
            experience by incorporating the latest technology and innovative
            thinking
          </p>
          <p className="text-[rgba(0,0,0,0.7)] text-[15px] lg:hidden font-medium font-jakarta">
          Driving innovation, one solution at a time. The drive to succeed is powered by its people and advanced technology.
          </p>
          <button className="border-[2px] border-black bg-[transparent]  text-[20px] px-[40px] py-[10px] w-fit text-black font-bold hidden lg:block ">
          Achieve Your Goals Faster With Us 
          </button>
          <button className="border-black border-[2px] bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold lg:hidden font-oswald">
         Start a Project
          </button>
        </div>
       <div className={`${styles.box}`}></div>
      </div>
      </section>
    </Layout>
  );
};

export default HomePage;
