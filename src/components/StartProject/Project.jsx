import React from "react";
import { InlineWidget } from "react-calendly";

const Project = ({ BLOGS }) => {
  return (
    <section className="w-full h-full top-[120px] flex justify-center  relative pb-[120px] overflow-hidden">
      <div className="w-full xl:max-w-[1540px] h-full px-[30px] lg:px-[130px]">
        <div className="flex flex-col gap-y-[20px] lg:flex-row justify-center items-center">
          <h1 className="text-[24px] font-oswald font-bold xl:w-[320px]">
            Book a call with us by selecting any of the dates that your are
            available on.
          </h1>
          <div className="w-full overflow-hidden pb-[50px]">
          <InlineWidget url="https://calendly.com/kumaladevelopment/60min"  styles={{height:'750px'}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
