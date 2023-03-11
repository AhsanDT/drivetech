import Image from "next/image";
import { useRouter } from "next/router";
import OurWorkItem from "./OurWorkItem";
import bgImage from "../../assets/ourwork/design.png";
import img1 from "../../assets/ourwork/img1.png";
import img2 from "../../assets/ourwork/img2.png";
import img3 from "../../assets/ourwork/img3.png";
import img4 from "../../assets/ourwork/img4.png";
import img5 from "../../assets/ourwork/img5.png";
import img6 from "../../assets/ourwork/img6.png";

const DATA = [
  { id: "d1", img: img1, title: "The Project Title", type: "SaaS Solutions" },
  { id: "d2", img: img2, title: "The Project Title", type: "AI & ML" },
  { id: "d3", img: img3, title: "The Project Title", type: "EdTech" },
  { id: "d4", img: img4, title: "The Project Title", type: "Heallth Tech" },
  { id: "d5", img: img5, title: "The Project Title", type: "Ecommerce" },
  { id: "d6", img: img6, title: "The Project Title", type: "Crypto" },
];

const OurWorks = ({ image }) => {
  const { route } = useRouter();
  return (

    <>
      {route == "/" && (
        <div className="w-full border-b-[6vh] lg:border-b-[15vh] xl:border-b-[15vh] border-b-[#424248] relative  left-0  border-t-[white] border-l-[100vw] border-l-[transparent]"></div>
      )}
      <section className={`w-full flex justify-center linear-grad relative  ${route == "/portfolio" ? "top-[7px]" : "top-[-1px]"} pt-[120px]   md:py-[120px]`}>
        <div className={`w-full h-full xl:max-w-[1440px] relative ${route == "/" && "top-[-154px]" } ${route == "/portfolio" && "pb-[200px]"}  `}>
          <div className={`absolute ${route == "/" ? "top-[-270px]" : "top-[-50px]"} `}>
            <Image src={image} alt="image" />
          </div>
          <div className={`relative ${route == "/" ? "top-[80px]": "top-[40px]"}  flex flex-col gap-y-[32px] px-[30px] md:px-[80px]`}>
            <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white xl:text-center">
              Our Works
            </h1>
            <div className="relative flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass absolute left-[20px] xl:left-[30%] 1xl:left-[31%] top-3 text-[18px]"></i>
              <input
                type="text"
                placeholder="Search industry or name"
                className="w-full xl:w-[515px] h-[40px] outline-none text-[14px] font-jakarta text-[#000000] text-opacity-[50%] px-[56px] py-[11px]"
              />
            </div>
            <div>
              <ul className="text-[16px] font-oswald font-bold flex gap-x-[14px] gap-y-[8px] flex-wrap lg:gap-x-[86px] lg:justify-center items-center">
                <li className="text-black bg-white px-[16px] py-[8px] cursor-pointer">
                  ALL CATEGORIES
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  HEALTH TECH
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  FINTECH
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  E-COMMERCE
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  EDTECH
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  AI/BIG DATA
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  CRYPTO
                </li>
              </ul>
            </div>
            <div className="flex gap-x-[80px] flex-wrap justify-center gap-y-[24px] lg:gap-y-[40px] mt-[30px]">
              {DATA.map((data) => {
                return (
                  <div className=" flex flex-col gap-y-[16px]" key={data.id}>
                    <OurWorkItem data={data} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;