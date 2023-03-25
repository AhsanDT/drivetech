import Image from "next/image";
import { useRouter } from "next/router";

import Loader from "../UI/Loader";
import WhiteLoader from "../UI/WhiteLoader";

const Partnership = ({ partners, className, getPartners, partnerType }) => {
  const { route } = useRouter();
  return (
    <section
      className={`w-full ${
        route == "/" && "py-[50px] pb-[140px]"
      } lg:py- [50px] relative flex justify-center ${className} `}
    >
      <div className="w-full xl:max-w-[1440px] flex flex-col gap-y-[16px] lg:items-center ">
        <h1 className="text-[32px] lg:text-[48px] font-poppins font-bold text-[#282829] lg:text-center px-[30px]  md:px-[80px]">
          Partnership
        </h1>

        <p className="text-[16px] font-poppins text-[#000000] text-opacity-[70%] lg:text-center lg:w-[669px] px-[30px]  md:px-[80px] ">
          The best thing about DriveTech is it values its partnership with the
          intention of making everyone succeed.
        </p>
        <div className="mt-[30px] w-full px-[30px]  md:px-[80px]">
          <ul className="text-[14px] md:text-[16px] font-oswald font-bold gap-x-[8px] flex lg:gap-x-[40px] lg:justify-center items-center">
            <li
              className={`${
                partnerType == "core"
                  ? "text-white bg-black"
                  : "text-black bg-white hover:text-white  hover:bg-black"
              }  w-full md:w-[208px]  text-center px-[2 0px] lg:px-[16px] py-[8px] cursor-pointer border border-black`}
              onClick={() => getPartners("core")}
            >
              CORE PARTNERS
            </li>
            <li
              className={`${
                partnerType == "ecological"
                  ? "text-white bg-black"
                  : "text-black bg-white hover:text-white  hover:bg-black"
              }   w-full md:w-[208px] text-center  px-[8px] lg:px-[16px] py-[8px] cursor-pointer border border-black`}
              onClick={() => getPartners("ecological")}
            >
              ECOLOGICAL PARTNERS
            </li>
          </ul>
        </div>
        <div
          className={`flex gap-x-[80px] flex-wrap justify-center gap-y-[21px] lg:gap-y-[40px] mt-[30px]  ${className}`}
        >
          {partners?.length ? (
            partners.map((partner, ind) => {
              return (
                <div
                  className="flex flex-col justify-center lg:items-center "
                  key={ind}
                >
                  <div className="img-container w-[352px] h-[262px]">
                    <Image
                      src={
                        partner?.attributes?.thumbnail?.data?.attributes?.url
                      }
                      alt="img"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="px-[30px]  md:px-[80px]">
                    <span className="font-poppins font-bold text-[#3C3C3C] text-[24px]">
                      {partner?.attributes?.title}
                    </span>
                    <div className="flex items-center mt-[21px] ">
                      <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                      <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <WhiteLoader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
