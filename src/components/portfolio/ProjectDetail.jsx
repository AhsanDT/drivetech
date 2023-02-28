import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Button from "../UI/Button";
import styles from "../../styles/Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({ id, DATA }) => {
  return (
    <Layout>
      <section className="py-[50px]  relative top-[50px]">
        {DATA.map((data) => {
          return (
            <div className="pt-[50px] pb-[92px]">
              <div className="px-[130px]">
                <Link href="/portfolio">
                  <span className="text-[rgb(140,140,140)] text-[14px] cursor-pointer">
                    Portfolio /
                  </span>
                </Link>
                <span className="text-[#1D356A] text-[14px] font-bold">
                  {data.title}
                </span>
              </div>
              <div>
                <div className="pt-[77px] flex flex-col gap-y-[21px] justify-center items-center">
                  <div className="flex items-center px-[130px] mt-[21px]">
                    <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                    <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
                  </div>
                  <h1 className="text-[32px] font-oswald font-bold text-[#3F3F3F] lg:text-[48px] px-[130px]">
                    {data.title}
                  </h1>
                  <div className="font-jakarta text-[15px] px-[130px] flex gap-x-[40px]">
                    <span>{data.type}</span>
                    <span className="text-[black]  w-[2px]">|</span>

                    <span>Founder: {data.founder}</span>
                  </div>
                  <Button className="mx-[130px] px-[16px] border-black py-[8px] font-jakarta text-[14px]">
                    View Website
                  </Button>
                </div>
                <div className="img-container py-[48px]">
                  <div className={`${styles.parallax}`}></div>
                </div>
                <div className="px-[300px] flex flex-col gap-y-[32px]">
                  <h3 className="text-[32px] text-[#3F3F3F] font-oswald font-bold">
                    The Project Sub Title
                  </h3>
                  <span>{data.subTitle.substring(0, 244)}</span>
                  <span>{data.subTitle.substring(244, 600)}</span>
                  <span>{data.subTitle.substring(600, 1000)}</span>
                  <span>{data.subTitle.substring(1000, 1600)}</span>
                </div>
              </div>
              <div className="flex justify-center gap-x-[180px] px-[130px] py-[40px]">
                <div className="img-container w-[366px] h-[261px]">
                  <Image src={data.img} alt="img" />
                </div>
                <div className="img-container w-[366px] h-[261px]">
                  <Image src={data.img} alt="img" />
                </div>
              </div>
              <div className="px-[300px] flex flex-col gap-y-[32px]">
                <h3 className="text-[32px] text-[#3F3F3F] font-oswald font-bold">
                  The Project Sub Title
                </h3>
                <span>{data.subTitle.substring(0, 244)}</span>
                <span>{data.subTitle.substring(244, 600)}</span>
                <span>{data.subTitle.substring(600, 1000)}</span>
                <span>{data.subTitle.substring(1000, 1600)}</span>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default ProjectDetail;
