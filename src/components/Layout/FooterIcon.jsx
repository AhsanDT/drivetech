import React from "react";

const FooterIcon = ({icon, className}) => {
  return (
    <div className={`${className && className} text-[white] w-[32px] h-[32px] rounded-full flex justify-center items-center`}>
      <i className={icon}></i>
    </div>
  );
};

export default FooterIcon;
