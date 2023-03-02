import React from "react";
import { InlineWidget } from "react-calendly";

const Project = ({ BLOGS }) => {
  return (
    <section className="w-full h-full top-[70px] lg:top-[100px]  relative px-[30px] lg:px-[130px] py-[50px] ">
      <div className="w-full h-full">
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
    </section>
  );
};

export default Project;
