import React from 'react'
import { Link } from 'react-router-dom';

import EcommerceBasicReportCards from '../../cards/PackagesCard/EcommerceCard/EcommerceBasicCard/EcommerceReportCards';
import EcommerceBasicReports from "../../../arraydata/PackagesArray/EcommerceArray/EcommerceBasic/EcommerceReportArray";

// standard package start
import EcommerceStandardReportCards from '../../cards/PackagesCard/EcommerceCard/EcommerceStandardCard/EcommerceReportCards';
import EcommerceStandardReports from "../../../arraydata/PackagesArray/EcommerceArray/EcommerceStandard/EcommerceReportArray";
// standard package end

// premium package start
import EcommercePremiumReportCards from '../../cards/PackagesCard/EcommerceCard/EcommercePremiumCard/EcommerceReportCards';
import EcommercePremiumReports from "../../../arraydata/PackagesArray/EcommerceArray/EcommercePremium/EcommerceReportArray";
// premium package end

// magento start
import EcommerceMagentoReportCards from '../../cards/PackagesCard/EcommerceCard/EcommerceMagentoCard/EcommerceReportCards';
import EcommerceMagentoReports from "../../../arraydata/PackagesArray/EcommerceArray/EcommerceMagento/EcommerceReportArray";
// mageento end


import AnimatedContent from '../../SingleComponents/AnimatedContent';

const EcommercePackage = () => {

 
  return (
    <>
      <div className='w-screen h-auto py-5 flex justify-center items-center !ml-[5px] '>
        <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 overflow-hidden '>
          <AnimatedContent><div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div></AnimatedContent>
          
          <div className="w-full h-auto p-5 flex items-center gap-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-Ecommerceoth flex-nowrap scroll-snap-x-mandatory ">

            {/* basic plan start */}
            
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Core PHP</div>
                {EcommerceBasicReports.map((data,index)=>(<EcommerceBasicReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>
            

            {/* basic plan end */}

            {/* standard package start */}
            
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>osCommerce</div>
                {EcommerceStandardReports.map((data,index)=>(<EcommerceStandardReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>
            

            {/* standard package end */}

            {/* premium package start */}

                  <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

                      <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                        <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Open Cart</div>
                        {EcommercePremiumReports.map((data,index)=>(<EcommercePremiumReportCards key={index} feature={data.feature} plan={data.plan}/>))}
                      </div>

                      <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

                    </div>

              {/* premium package end */}

              {/* magento package start */}

              <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Magento</div>
                    {EcommerceMagentoReports.map((data,index)=>(<EcommerceMagentoReportCards key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

                  </div>

              {/* magento package end */}


           
          </div>

        </div>
      </div>
      </>
  )
}

export default EcommercePackage