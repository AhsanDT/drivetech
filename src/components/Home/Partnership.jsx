import React from "react";

const Partnership = () => {
  return (
    <section className={`w-full px-[80px] `}>
      <div>
        <h1 className="text-[48px] font-oswald font-bold text-[#282829] text-center">
          Partnership
        </h1>

        <p className="text-[16px] font-jakarta text-[#000000] text-opacity-[70%]">
          The best thing about DriveTech is it values its partnership with the
          intention of making everyone succeed.
        </p>
        <div>
          <ul className="text-[16px] font-oswald font-bold flex gap-x-[86px] justify-center items-center">
            <li className="text-white bg-black px-[16px] py-[8px] cursor-pointer border">
              CORE PARTNERS
            </li>
            <li className="text-black hover:bg-black hover:text-white border border-black px-[16px] py-[8px] cursor-pointer">
              ECOLOGICAL PARTNERS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
