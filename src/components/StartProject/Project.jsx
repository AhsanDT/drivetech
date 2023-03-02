import React from "react";
import { InlineWidget } from "react-calendly";
import Idea from "../Home/Idea";
import styles2 from "../../styles/Partnership.module.css"
const Project = ({ BLOGS }) => {
  return (
    <section className="w-full h-full top-[120px]  relative pb-[120px]">
      <div className="w-full h-full px-[30px] lg:px-[130px]">
        <div className="flex flex-col gap-y-[20px] lg:flex-row justify-center items-center">
          <h1 className="text-[24px] font-oswald font-bold lg:w-[325px]">
            Book a call with us by selecting any of the dates that your are
            available on.
          </h1>
          <div className="w-full lg:w-[803px] h-[702px] overflow-hidden">
          <InlineWidget url="https://calendly.com/startproject"  pageSettings={{hideLandingPageDetails:false}}/>
          </div>
        </div>
      </div>
      
          <div className="relative pt-[210px] lg:pt-[230px] bg-[#37373B]">
            <div
              className={`${styles2.box}  linear-grad  hidden md:block `}
            ></div>
            <Idea title="Start a Project" />
          </div>
    </section>
  );
};

export default Project;
