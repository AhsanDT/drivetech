import Layout from "@/components/Layout/Layout";
import Button from "@/components/UI/Button";
import Image from "next/image";
import React from "react";
import heroImage from "../assets/bg-images/about-bg.png";

const HomePage = () => {
  return (
    <Layout>
      <div className={` img-container w-full h-full relative `}>
        <Image src={heroImage} />
        <div className="absolute top-[149px] left-[184px] flex flex-col gap-y-[27px]  w-[23%] ">
          <span className="font-bold text-[50px] tracking-[1px]">About Us</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet,
            consectetur adipiscing elit. Ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <button className="border border-black bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold ">Start a Project</button>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
