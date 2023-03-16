import React from "react";
import Image from "next/image";
import Link from "next/link";

import bgImage from "../../assets/blogs/blogs-bg.png";

const Blogs = ({ blogs }) => {
  return (
    <>
      <section className="w-full flex justify-center linear-grad relative top-[5px] py-[100px] lg:pb-[312px]">
        <div className={`w-full h-full xl:max-w-[1440px] relative`}>
          <div className={`absolute top-[-20px]`}>
            <Image src={bgImage} alt="image" />
          </div>
          <div className="relative top-[40px] flex flex-col gap-y-[32px] px-[30px] md:px-[80px]">
            <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white xl:text-center">
              Blogs
            </h1>
            <div className="flex gap-x-[32px] overflow-scroll xl:overflow-hidden xl:flex-wrap">
              {blogs?.map((blog, ind) => {
                return (
                  <Link
                    href={`/blogs/${blog?.attributes?.slug}`}
                    className="w-full md:w-[270px] pb-[20px] bg-white flex flex-col gap-y-[16px]"
                    key={ind}
                  >
                    <div className="img-container w-[270px] h-[210px]">
                      <Image
                        src={
                          blog?.attributes?.thumbnail?.data?.attributes?.url
                        }
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="px-[27px]">
                      <span className="text-[20px] font-oswald font-bold">
                        {blog?.attributes?.title}
                      </span>
                      <p className="text-[12px] font-jakarta text-[#000000] text-opacity-[50%] pt-[18px]">
                        {new Date(blog?.attributes?.createdAt)?.toDateString()}
                      </p>
                    </div>
                  </Link>
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
