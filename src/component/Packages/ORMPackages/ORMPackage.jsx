import React from 'react'
import { Link } from 'react-router-dom';


import ORMBasicPricingCard from '../../cards/PackagesCard/ORMCard/ORMBasicCard/ORMPricingCard';
import ORMBasicPricing from '../../../arraydata/PackagesArray/ORMArray/ORMBasic/ORMPricingArray';

import ORMBasicReportCards from '../../cards/PackagesCard/ORMCard/ORMBasicCard/ORMReportCards';
import ORMBasicReports from "../../../arraydata/PackagesArray/ORMArray/ORMBasic/ORMReportArray";


// standard package start
import ORMStandardPricingCard from '../../cards/PackagesCard/ORMCard/ORMStandardCard/ORMPricingCard';
import ORMStandardPricing from '../../../arraydata/PackagesArray/ORMArray/ORMStandard/ORMPricingArray';

import ORMStandardReportCards from '../../cards/PackagesCard/ORMCard/ORMStandardCard/ORMReportCards';
import ORMStandardReports from "../../../arraydata/PackagesArray/ORMArray/ORMStandard/ORMReportArray";
// standard package end

// premium package start
import ORMPremiumPricingCard from '../../cards/PackagesCard/ORMCard/ORMPremiumCard/ORMPricingCard';
import ORMPremiumPricing from '../../../arraydata/PackagesArray/ORMArray/ORMPremium/ORMPricingArray';

import ORMPremiumReportCards from '../../cards/PackagesCard/ORMCard/ORMPremiumCard/ORMReportCards';
import ORMPremiumReports from "../../../arraydata/PackagesArray/ORMArray/ORMPremium/ORMReportArray";
// premium package end

import AnimatedContent from '../../SingleComponents/AnimatedContent';

const ORMPackage = () => {

 
  return (
    <>
      <div className='w-screen h-auto py-5 flex justify-center items-center !ml-[5px] '>
        <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 overflow-hidden '>
          <AnimatedContent><div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div></AnimatedContent>
          
          <div className="w-full h-auto p-5 flex items-center gap-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-ORMoth flex-nowrap scroll-snap-x-mandatory ">

            {/* basic plan start */}
            <AnimatedContent direction="horizontal" reverse={true}>
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>BASIC</div>
                {/* <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 350 / Month</div> */}
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {ORMBasicPricing.map((data,index)=>(<ORMBasicPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Features</div>
                {ORMBasicReports.map((data,index)=>(<ORMBasicReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>
            </AnimatedContent>

            {/* basic plan end */}

            {/* standard package start */}
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>STANDARD</div>
                {/* <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 550 / Month</div> */}
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {ORMStandardPricing.map((data,index)=>(<ORMStandardPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Features</div>
                {ORMStandardReports.map((data,index)=>(<ORMStandardReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>

            {/* standard package end */}

            {/* premium package start */}
            
            <AnimatedContent direction='horizontal'>
                  <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Premium</div>
                    {/* <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 1050 / Month</div> */}
                    <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
                  </div>

                  <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                    {ORMPremiumPricing.map((data,index)=>(<ORMPremiumPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Features</div>
                    {ORMPremiumReports.map((data,index)=>(<ORMPremiumReportCards key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>
                  <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

                  </div>
                  </AnimatedContent>

            {/* premium package end */}
          </div>

        </div>
      </div>
      </>
  )
}

export default ORMPackage