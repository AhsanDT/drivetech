import Image from "next/image";
import OurWorkItem from "./OurWorkItem";
import bgImage from "../../assets/ourwork/design.png"
import img1 from "../../assets/ourwork/img1.png"
import img2 from "../../assets/ourwork/img2.png"
import img3 from "../../assets/ourwork/img3.png"
import img4 from "../../assets/ourwork/img4.png"
import img5 from "../../assets/ourwork/img5.png"
import img6 from "../../assets/ourwork/img6.png"

const DATA = [
    {id: 'd1',img:img1, title: 'The Project Title', type: 'SaaS Solutions'},
    {id: 'd2',img:img2, title: 'The Project Title', type: 'AI & ML'},
    {id: 'd3',img:img3, title: 'The Project Title', type: 'EdTech'},
    {id: 'd4',img:img4, title: 'The Project Title', type: 'Heallth Tech'},
    {id: 'd5',img:img5, title: 'The Project Title', type: 'Ecommerce'},
    {id: 'd6',img:img6, title: 'The Project Title', type: 'Crypto'},
]

const OurWorks = () => {
  return (
    <section className={`w-full bg-[#424248] px-[80px] `}>
      <div className={` img-container w-full relative `}>
        <Image src={bgImage} alt="img" />
        <div className="absolute top-0 z-[11]  w-full  flex flex-col gap-y-[32px] items-cen ter justify-center ">
          <h1 className="text-[48px] font-oswald font-bold text-white text-center">
            Our Works
          </h1>
          <div className="relative flex items-center justify-center">
          <i class="fa-solid fa-magnifying-glass absolute left-[220px] top-3 text-[16px]"></i>
            <input type="text" placeholder="Search industry or name" className="w-[70%] h-[40px] outline-none text-[14px] font-jakarta text-[#000000] text-opacity-[50%] px-[56px] py-[11px]" />
          </div>
          <div>
            <ul className="text-[16px] font-oswald font-bold flex gap-x-[86px] justify-center items-center">
                <li className="text-black bg-white px-[16px] py-[8px] cursor-pointer">ALL CATEGORIES</li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">HEALTH TECH</li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">FINTECH</li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">E-COMMERCE</li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">EDTECH</li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">AI/BIG DATA</li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">CRYPTO</li>
            </ul>
          </div>
          <div className="flex gap-x-[80px] flex-wrap justify-center  gap-y-[40px]">
          {DATA.map((data) => {
            return (
              <div className=" flex flex-col  gap-y-[21px]">
                <OurWorkItem data={data} />
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
