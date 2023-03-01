import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Button from "../UI/Button";
import styles from "../../styles/Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({ id, DATA }) => {
  return (
    <Layout>
      <section className="py-[50px] px-[30px] md:px-[130px]  relative top-[50px]">
        {DATA.map((data) => {
          return (
            <div className="pt-[50px] pb-[92px]">
              <div className=" font-jakarta">
                <Link href="/blogs">
                  <span className="text-[rgb(140,140,140)] text-[14px] cursor-pointer">
                    Blog /      
                  </span>
                </Link>
                <span className="text-[#1D356A] text-[14px] font-bold">
                  {data.content}
                </span>
              </div>
              <div>
                <div className="pt-[20px] md:pt-[77px] flex flex-col gap-y-[21px] justify-center md:items-center">
                  <div className="flex items-center  mt-[21px]">
                    <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                    <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
                  </div>
                  <h1 className="text-[32px] font-oswald font-bold text-[#00000S0] lg:text-[48px]  md:text-center">
                    {data.content}
                  </h1>
                
                </div>
                <div className="img-container py-[48px]">
                  <Image src={data.blogImage} alt="img" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default BlogDetails;
