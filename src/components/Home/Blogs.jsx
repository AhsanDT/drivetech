import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { richTextReducer } from "helpers/utils";

import image from "../../assets/ourwork/design.png";

const Blogs = ({ blogs }) => {
  const { route } = useRouter();
  return (
    <>
      {route == "/" && (
        <div className="w-full border-b-[6vh] lg:border-b-[15vh] border-b-[#424248]  border-t-[white] relative top-[6px] left-0 border-l-[100vw] border-l-[transparent]"></div>
      )}
      <section className="w-full flex justify-center linear-grad relative top-[5px] py-[120px] overflow-hidden">
        <div className="w-full h-full xl:max-w-[1440px] relati ve top-[-154px] overflow-hidden">
          <div className="absolute top-[-270px] overflow-hidden">
            <Image src={image} alt="image" />
          </div>
          <div className="relative top-[40px] flex flex-col gap-y-[70px] px-[30px] md:px-[80px]">
            <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white xl:text-center pt-[50px] md:pt-0 ">
              Blogs
            </h1>

            <div className="flex gap-x-[32px] xl:justify-center overflow-scroll xl:overflow-hidden">
              {blogs.map((blog, ind) => {
                return (
                  <div
                    className="w-full md:w-[210px] md:h-[385px] bg-white flex flex-col gap-y-[18px]"
                    key={ind}
                  >
                    <div className="img-container w-[210px] h-[210px]">
                      {blog?.attributes && (
                        <Image
                          src={
                            blog?.attributes?.thumbnail?.data?.attributes?.url
                          }
                          alt="img"
                          width={100}
                          height={100}
                        />
                      )}
                    </div>
                    <div className="px-[18px] pb-[25px]">
                      <span className="text-[16px] font-oswald font-bold">
                        {blog?.attributes?.title}
                      </span>
                      <br />
                      <span
                        className="text-[12px] font-jakarta text-[#000000] text-opacity-[50%] pt-[18px]"
                        dangerouslySetInnerHTML={{
                          __html: richTextReducer(
                            blog?.attributes?.description.slice(0, 60)
                          ),
                        }}
                      ></span>
                      <Link href={`/blogs/${blog?.attributes?.slug}`}>
                        <span className="text-[#F28E1C] cursor-pointer text-[12px] font-jakarta text-opacity-[50%] pt-[18px]">
                          Read More
                        </span>
                      </Link>
                    </div>
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

export default Blogs;
