import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bgImage from "../../assets/blogs/blogs-bg.png"
import styles from "../../styles/Blogs.module.css"
import Idea from '../Home/Idea'

const Blogs = ({BLOGS}) => {
  return (
    <section className='w-full linear-grad bottom-[80 px] top-[70px] lg:top-[100px]  relative '>
        <div className='w-full'>
        <div className='img-container min-h-[890px] lg:min-h-[910px]'>
            <Image src={bgImage} alt="img" />
        </div>
        <div className="absolute top-[40px] md:top-[86px] z-[11]  w-full  flex flex-col gap-y-[40px] md:gap-y-[70px] items-cen ter justify-center px-[30px]  lg:px-[80px] ">
          <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white lg:text-center">
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
        <div className='relative bottom-[80px] md:bottom-[100px] pt-[22%]'>
        <div
        className={`${styles.box} linear-grad  hidden md:block`}
      ></div>
      <Idea title="Achieve Your Goals Faster With Us" />
      </div>
    </section>
  )
}

export default Blogs