import React from "react";
import packages from "../arraydata/packagearray";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const OurPackage = () => {
  return (
    <div className=" w-9/12 mx-auto p-2 pb-4 flex flex-col gap-3">
      <p className="flex justify-center font-['Plus_Jakarta_Sans'] font-bold text-[32px] leading-[40.32px] tracking-[0]  gap-1">
        <span className="text-[#ED1C24]">Our </span> Packages
      </p>
      <p className="font-['Plus_Jakarta_Sans'] font-medium text-[14px] leading-[21.72px] tracking-[0] text-center text-[#303030CC]">
        Our mobile app packages cater to businesses of all sizes, offering
        tailored solutions for Android, iOS, and hybrid apps. From basic apps
        with essential features to premium, fully customized solutions with
        advanced UI/UX, security, and integrations, we ensure seamless
        performance, user-friendly design, and ongoing support for optimal
        functionality.
      </p>

      <div className=" flex flex-row justify-center gap-[4rem] flex-wrap w-9/12 mx-auto">
        {packages.map((data, index) => (
          <div className=" shadow-md p-2 h-[353px] rounded-[13px] border-[1px] flex flex-col gap-3">
            <div className=" p-4 flex flex-col gap-2">
              <div className="w-[90px] h-[89px] top-[582px] left-[221px] rounded-[7px] bg-[#ED1C240F] flex items-center justify-center">
                <img src={data.image} />
              </div>
              <p className="  font-['Raleway']  mt-2 font-bold text-[16px] leading-[18.78px] tracking-[0] text-[#ED1C24]">
                {data.title}
              </p>
              <p className="w-[235px] text-[#303030]  font-['Raleway'] font-medium text-[14px] leading-[21.7px] tracking-[0]">
                {data.description}
              </p>

              <button
                className=" flex items-center justify-center  gap-3 max-w-[60%]  p-2  rounded-[4px] bg-[#ED1C24] text-white
"
              >
                <div className=" text-center "><Link to={data.link} className="text-white no-underline">View Plan</Link></div>
                
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPackage;
