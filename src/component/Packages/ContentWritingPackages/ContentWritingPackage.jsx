import React from 'react'
import { Link } from 'react-router-dom';


import ContentWritingBasicPricingCard from '../../cards/PackagesCard/ContentWritingCard/ContentWritingBasicCard/ContentWritingPricingCard';
import ContentWritingBasicPricing from '../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingBasic/ContentWritingPricingArray';

import ContentWritingBasicReportCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingBasicCard/ContentWritingReportCards';
import ContentWritingBasicReports from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingBasic/ContentWritingReportArray";


// standard package start
import ContentWritingStandardPricingCard from '../../cards/PackagesCard/ContentWritingCard/ContentWritingStandardCard/ContentWritingPricingCard';
import ContentWritingStandardPricing from '../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingStandard/ContentWritingPricingArray';

import ContentWritingStandardReportCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingStandardCard/ContentWritingReportCards';
import ContentWritingStandardReports from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingStandard/ContentWritingReportArray";
// standard package end


import AnimatedContent from '../../SingleComponents/AnimatedContent';

const ContentWritingPackage = () => {

 
  return (
    <>
      <div className='w-screen h-auto py-5 flex justify-center items-center !ml-[5px] '>
        <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 overflow-hidden '>
          <AnimatedContent><div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div></AnimatedContent>
          
          <div className="w-full h-auto p-5 flex items-center gap-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-ContentWritingoth flex-nowrap scroll-snap-x-mandatory ">

            {/* basic plan start */}
            <AnimatedContent direction="horizontal" reverse={true}>
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>BASIC</div>
                {/* <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>5-10 Pages</div> */}
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {ContentWritingBasicPricing.map((data,index)=>(<ContentWritingBasicPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Features</div>
                {ContentWritingBasicReports.map((data,index)=>(<ContentWritingBasicReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>
            </AnimatedContent>

            {/* basic plan end */}

            {/* standard package start */}
            <AnimatedContent direction='horizontal'>
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>STANDARD</div>
                {/* <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>10-20 Pages</div> */}
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {ContentWritingStandardPricing.map((data,index)=>(<ContentWritingStandardPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Features</div>
                {ContentWritingStandardReports.map((data,index)=>(<ContentWritingStandardReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>
            </AnimatedContent>

            {/* standard package end */}

           
          </div>

        </div>
      </div>
      </>
  )
}

export default ContentWritingPackage