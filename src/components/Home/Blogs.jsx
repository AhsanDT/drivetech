import Image from "next/image";
import React from "react";
import styles from "../../styles/Blogs.module.css";
import image from "../../assets/blogs/blogs-bg.png";
import img1 from "../../assets/blogs/img1.png";
import img2 from "../../assets/blogs/img2.png";
import img3 from "../../assets/blogs/img3.png";
import img4 from "../../assets/blogs/img4.png";
import Button from "../UI/Button";
import Idea from "./Idea";

const BLOGS = [
  {
    id: "b1",
    img: img1,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
  {
    id: "b2",
    img: img2,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
  {
    id: "b3",
    img: img3,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
  {
    id: "b4",
    img: img4,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
  {
    id: "b5",
    img: img4,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
];

const Blogs = () => {
  return (
    <section
      className={`w-full linear-grad pt-[80px] border-b border-b-[#747474] pb-[210px] md:pb-[unset]  relative `}
    >
      <div className="w-full">
        <div className={` img-container h-[500px] abso lute top-0`}>
          <Image src={image} alt="img" />
        </div>
        <div className="absolute top-0 z-[11]  w-full  flex flex-col gap-y-[32px] items-cen ter justify-center px-[30px]  lg:px-[80px] p-[100px]">
          <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white lg:text-center">
            Blogs
          </h1>

          <div className="flex gap-x-[32px] justify-center overflow-scroll xl:overflow-hidden">
            {BLOGS.map((data) => {
              return (
                <div className="w-full md:w-[210px] md:h-[385px] bg-white flex flex-col gap-y-[18px]">
                  <div className="img-container w-[210px] h-[210px]">
                    <Image src={data.img} alt="img" />
                  </div>
                  <div className="px-[18px]">
                    <span className="text-[16px] font-oswald font-bold">
                      {data.title}
                    </span>
                    <p className="text-[12px] font-jakarta text-[#000000] text-opacity-[50%] pt-[18px]">
                      {data.content}
                      <span className="text-[#F28E1C] cursor-pointer">
                        Read More
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>'
      <div
        className={`${styles.box} linear-grad mt-[260px] hidden md:block`}
      ></div>
      <Idea title="Achieve Your Goals Faster With Us" />
    </section>
  );
};

export default Blogs;
