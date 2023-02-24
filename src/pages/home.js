import Layout from "@/components/Layout/Layout";
import Button from "@/components/UI/Button";
import Image from "next/image";
import React from "react";
import heroImage from "../assets/bg-images/about-bg.png";
import styles from "../styles/Home.module.css"

const HomePage = () => {
  return (
    <Layout>
      <div className={` img-container w-full h-[800px] relative`}>
        <Image src={heroImage} />
        <div className="absolute top-[149px] left-[184px] flex flex-col gap-y-[27px]  w-[39%] z-[11]">
          <span className="font-bold text-[64px] tracki ng-[1px] leading-[73px]">
            We help you drive your business to <span className="text-[#136C2C]">success</span>
          </span>
          <p className="text-[rgba(0,0,0,0.7)] text-[16px] font-medium font-jakarta">
            We construct comprehensive customer experience by fusing technology
            and innovation together. We create a fully-integrated customer
            experience by incorporating the latest technology and innovative
            thinking
          </p>
          <button className="border border-black bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold ">
          Achieve Your Goals Faster With Us 
          </button>
        </div>
       <div className={styles.box}></div>
      </div>
    </Layout>
  );
};

export default HomePage;
