import Image from "next/image";
import React from "react";
import styles from "../../styles/Hero.module.css";
import image from "../../assets/ourwork/design.png";
import img1 from "../../assets/blogs/img1.png"
import img2 from "../../assets/blogs/img2.png"
import img3 from "../../assets/blogs/img3.png"
import img4 from "../../assets/blogs/img4.png"

const BLOGS = [
  {
    id: "b1",
    img: img1,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim... Read More",
  },
  {
    id: "b2",
    img: img2,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim... Read More",
  },
  {
    id: "b3",
    img: img3,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim... Read More",
  },
  {
    id: "b4",
    img: img4,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim... Read More",
  },
  {
    id: "b5",
    img: img4,
    title: "Technology Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna sollicitudin, laoreet arcu dapibus, auctor enim... Read More",
  },
];

const Blogs = () => {
  return (
    <section className={`w-full bg-[#424248] px-[80px] `}>
      <div className={` img-container w-full relative `}>
        <Image src={image} alt="img" />
        <div className="absolute top-0 z-[11]  w-full  flex flex-col gap-y-[32px] items-cen ter justify-center ">
          <h1 className="text-[48px] font-oswald font-bold text-white text-center">
            Our Works
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
