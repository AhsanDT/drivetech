import Image from "next/image";
import React from "react";
import image from "../../assets/ourwork/design.png";
import img1 from "../../assets/blogs/img1.png";
import img2 from "../../assets/blogs/img2.png";
import img3 from "../../assets/blogs/img3.png";
import img4 from "../../assets/blogs/img4.png";
import { useRouter } from "next/router";

const BLOGS = [
  {
    id: "b1",
    img: img1,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
  {
    id: "b2",
    img: img2,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
  {
    id: "b3",
    img: img3,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
  {
    id: "b4",
    img: img4,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
  {
    id: "b5",
    img: img4,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim...",
  },
];

const Blogs = () => {
  const { route } = useRouter();
  return (
    <>
      {route == "/" && (
        <div className="w-full border-b-[6vh] lg:border-b-[15vh] border-b-[#424248]  border-t-[white] relative top-[6px] left-0 border-l-[100vw] border-l-[transparent]"></div>
      )}
      <section className="w-full flex justify-center linear-grad relative top-[5px]  py-[120px]">
        <div className="w-full h-full xl:max-w-[1440px] relative top-[-154px]">
          <div className="absolute top-[-270px]">
            <Image src={image} alt="image" />
          </div>
          <div className="relative top-[40px] flex flex-col gap-y-[70px] px-[30px] md:px-[80px]">
            <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white xl:text-center pt-[50px] md:pt-0 ">
              Blogs
            </h1>

            <div className="flex gap-x-[32px] xl:justify-center overflow-scroll xl:overflow-hidden">
              {BLOGS.map((data) => {
                return (
                  <div
                    className="w-full md:w-[210px] md:h-[385px] bg-white flex flex-col gap-y-[18px]"
                    key={data.id}
                  >
                    <div className="img-container w-[210px] h-[210px]">
                      <Image src={data.img} alt="img" />
                    </div>
                    <div className="px-[18px] pb-[25px]">
                      <span className="text-[16px] font-oswald font-bold">
                        {data.title}
                      </span>
                      <p className="text-[12px] font-jakarta text-[#000000] text-opacity-[50%] pt-[18px]">
                        {data.content}
                        <span className="text-[#F28E1C] cursor-pointer">
                          Read More
                        </span>
                      </p>
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
