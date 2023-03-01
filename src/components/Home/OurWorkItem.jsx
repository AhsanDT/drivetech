import Image from "next/image";
import Link from "next/link";

const OurWorkItem = ({ data }) => {
  return (
    <>
      <Link href={`/portfolio/${data.id}`} className="img-container sm:w-[352px] h-[262px]" >
        <Image src={data.img} alt="img" />
      </Link>
      <p className="text-[24px] font-oswald font-bold text-white">
        {data.title}
      </p>
      <div className="flex items-center">
        <div className=" bg-white w-[68px] h-[2px]"></div>
        <div className=" bg-white w-[12px] h-[12px] rounded-full"></div>
      </div>
      <p className="text-white text-[15px] font-jakarta">{data.type}</p>
    </>
  );
};

export default OurWorkItem;
