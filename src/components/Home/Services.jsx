import Image from "next/image";
import React from "react";
import bgImage from "../../assets/bg-images/service.png";
import service1 from "../../assets/services/service1.png";
import service2 from "../../assets/services/service2.png";
import service3 from "../../assets/services/service4.png";
import service4 from "../../assets/services/service3.png";
import ServiceItem from "./ServiceItem";
import Button from "../UI/Button";
import styles from "../../styles/Hero.module.css";

const SERVICES = [
  {
    id: "s1",
    serviceName: "Digital Marketing Services",
    content:
      "Digital marketing involves some of the same principles as traditional marketing and is often considered a new way for companies to approach consumers and understand their behavior.",
    img: service1,
  },
  {
    id: "s2",
    serviceName: "Mobile & Web Applications",
    content:
      "In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience. We help you create your dream application that will drive users to using them by intensive research among your target audience and award-winning user interfaces.",
    img: service2,
  },
  {
    id: "s3",
    serviceName: "AI & Machine Learning Development",
    content:
      "Artificial Intelligence(AI) & Machine Learning(ML) Solutions. Build Intelligent Business Empower With Our AI & Machine Learning Services. ai and ml development.",
    img: service3,
  },

  {
    id: "s4",
    serviceName: "Back Office Services",
    content:
      "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products. Whatever it takes to get your brand noticed.",
    img: service4,
  },
];

const Services = () => {
  return (
    <>

      <section className={` w-full h-full bg-[#424248] relative `}>


        <div className="w-full h-full ">
        <div className={` img-container absolute  w-full`}>
          <Image src={bgImage} alt="img" />
          </div>
          <div>
          <div className="px-[30px] sm:px-[120px] xl:px-[200px] w-full py-[40px]">
            <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white lg:text-center">
              Digital Services
            </h1>
            <div className="flex flex-col gap-y-[48px] xl:gap-y-[158px] pt-[45px] xl:pt-[150px]">
              {SERVICES.map((service, index) => {
                return (
                  <div
                    className={`flex flex-col gap-y-[16px] md:flex-row gap-x-[20px] md:justify-between ${
                      index == 1 && "md:flex-row-reverse"
                    } ${index == 3 && "md:flex-row-reverse"} w-full`}
                    key={service.id}
                  >
                    <ServiceItem service={service} />
                  </div>
                );
              })}
            </div>
            </div>
            <div className="bg-[#ffffff] bg-opacity-[10%] lg:h-[168px] w-full mt-[45px] lg:mt-[150px] flex flex-col gap-y-[24px] justify-center items-center px-[80px] py-[20px]">
              <p className="font-oswald text-[20px] font-bold text-[#ffffff] text-opacity-[60%] text-center">
                ACCELERATE YOUR BUSINESS BY LEVERAGING EXCEPTIONAL DIGITAL
                MARKETING SERVICES{" "}
              </p>
              <Button>BOOK A FREE CONSULTATION</Button>
            </div>
          </div>
          </div>
      </section>

    </>
  );
};

export default Services;
