import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Button from "../UI/Button";

const ProjectDetail = ({ id, DATA }) => {
  return (
    <Layout>
      <section className="py-[50px] relative top-[50px]">
        {DATA.map((data) => {
          return (
            <div>
              <span className="text-[rgb(140,140,140)] text-[14px]">
                Portfolio /{" "}
              </span>
              <span className="text-[#1D356A] text-[14px] font-bold">
                {data.title}
              </span>
              <div className="pt-[77px]">
                <div className="flex items-center mt-[21px]">
                  <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                  <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
                </div>
                <h1 className="text-[32px] font-oswald font-bold text-[#3F3F3F] lg:text-[48px]">
                  {data.title}
                </h1>
                <div className="font-jakarta text-[15px]">
                  <span>{data.type}</span>
                  <span>Founder: {data.founder}</span>
                </div>
                <Button>View Website</Button>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default ProjectDetail;
