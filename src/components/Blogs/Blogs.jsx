import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import bgImage from "../../assets/blogs/blogs-bg.png"


const Blogs = ({BLOGS}) => {
  return (
    <>

    <section className="w-full flex justify-center linear-grad py-[120px] pb-[312px]">
      <div className={`w-full h-full xl:max-w-[1440px] relative`}>
        <div className={`absolute top-[-20px]`}>
          <Image src={bgImage} alt="image" />
        </div>
        <div className="relative top-[40px] flex flex-col gap-y-[32px] px-[30px] md:px-[80px]">
          <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white xl:text-center">
            Blogs
          </h1>
          <div className="flex gap-x-[32px] overflow-scroll xl:overflow-hidden xl:flex-wrap">
            {BLOGS.map((data) => {
              return (
                <Link href={`/blogs/${data.id}`} className="w-full md:w-[255px] md:min-h-[393px] bg-white flex flex-col gap-y-[16px]" key={data.id}>
                  <div className="img-container w-[255px] h-[210px]">
                    <Image src={data.img} alt="img" />
                  </div>
                  <div className="px-[27px]">
                    <span className="text-[20px] font-oswald font-bold">
                      {data.content}
                    </span>
                    <p className="text-[12px] font-jakarta text-[#000000] text-opacity-[50%] pt-[18px]">
                      {data.date}
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
  )
}

export default Blogs