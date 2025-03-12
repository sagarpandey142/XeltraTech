import React from 'react'
import { Link } from 'react-router-dom';


import PPCBasicPricingCard from '../../cards/PackagesCard/PPCCard/PPCBasicCard/PPCPricingCard';
import PPCBasicPricing from '../../../arraydata/PackagesArray/PPCArray/PPCBasic/PPCPricingArray';

import PPCBasicReportCards from '../../cards/PackagesCard/PPCCard/PPCBasicCard/PPCReportCards';
import PPCBasicReports from "../../../arraydata/PackagesArray/PPCArray/PPCBasic/PPCReportArray";

import PPCBasicAttentionCard from '../../cards/PackagesCard/PPCCard/PPCBasicCard/PPCAttentionCard';
import PPCBasicAttention from '../../../arraydata/PackagesArray/PPCArray/PPCBasic/PPCAttentionArray';

import PPCBasicReviewCard from '../../cards/PackagesCard/PPCCard/PPCBasicCard/PPCReviewCard';
import PPCBasicReview from '../../../arraydata/PackagesArray/PPCArray/PPCBasic/PPCReviewArray';

import PPCBasicOnSiteCard from '../../cards/PackagesCard/PPCCard/PPCBasicCard/PPCOnSiteCard';
import PPCBasicOnSite from '../../../arraydata/PackagesArray/PPCArray/PPCBasic/PPCOnSiteArray';

// standard package start
import PPCStandardPricingCard from '../../cards/PackagesCard/PPCCard/PPCStandardCard/PPCPricingCard';
import PPCStandardPricing from '../../../arraydata/PackagesArray/PPCArray/PPCStandard/PPCPricingArray';

import PPCStandardReportCards from '../../cards/PackagesCard/PPCCard/PPCStandardCard/PPCReportCards';
import PPCStandardReports from "../../../arraydata/PackagesArray/PPCArray/PPCStandard/PPCReportArray";

import PPCStandardAttentionCard from '../../cards/PackagesCard/PPCCard/PPCStandardCard/PPCAttentionCard';
import PPCStandardAttention from '../../../arraydata/PackagesArray/PPCArray/PPCStandard/PPCAttentionArray';

import PPCStandardReviewCard from '../../cards/PackagesCard/PPCCard/PPCStandardCard/PPCReviewCard';
import PPCStandardReview from '../../../arraydata/PackagesArray/PPCArray/PPCStandard/PPCReviewArray';

import PPCStandardOnSiteCard from '../../cards/PackagesCard/PPCCard/PPCStandardCard/PPCOnSiteCard';
import PPCStandardOnSite from '../../../arraydata/PackagesArray/PPCArray/PPCStandard/PPCOnSiteArray';
// standard package end

// premium package start
import PPCPremiumPricingCard from '../../cards/PackagesCard/PPCCard/PPCPremiumCard/PPCPricingCard';
import PPCPremiumPricing from '../../../arraydata/PackagesArray/PPCArray/PPCPremium/PPCPricingArray';

import PPCPremiumReportCards from '../../cards/PackagesCard/PPCCard/PPCPremiumCard/PPCReportCards';
import PPCPremiumReports from "../../../arraydata/PackagesArray/PPCArray/PPCPremium/PPCReportArray";

import PPCPremiumAttentionCard from '../../cards/PackagesCard/PPCCard/PPCPremiumCard/PPCAttentionCard';
import PPCPremiumAttention from '../../../arraydata/PackagesArray/PPCArray/PPCPremium/PPCAttentionArray';

import PPCPremiumReviewCard from '../../cards/PackagesCard/PPCCard/PPCPremiumCard/PPCReviewCard';
import PPCPremiumReview from '../../../arraydata/PackagesArray/PPCArray/PPCPremium/PPCReviewArray';

import PPCPremiumOnSiteCard from '../../cards/PackagesCard/PPCCard/PPCPremiumCard/PPCOnSiteCard';
import PPCPremiumOnSite from '../../../arraydata/PackagesArray/PPCArray/PPCPremium/PPCOnSiteArray';
// premium package end

const PPCPackage = () => {

 
  return (
    <>
      <div className='w-screen h-auto py-5 flex justify-center items-center !ml-[5px] '>
        <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 overflow-hidden '>
          <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>
          
          <div className="w-full h-auto p-5 flex items-center gap-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-PPCoth flex-nowrap scroll-snap-x-mandatory ">

            {/* basic plan start */}
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>BASIC</div>
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[10px]">
                {PPCBasicPricing.map((data,index)=>(<PPCBasicPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>ACTIVITIES</div>
                {PPCBasicReports.map((data,index)=>(<PPCBasicReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>CAMPAIGN SETUP/AD OPTIMIZATION</div>
                {PPCBasicAttention.map((data,index)=>(<PPCBasicAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>REPORTING TECHNIQUES</div>
                 {PPCBasicReview.map((data,index)=>(<PPCBasicReviewCard key={index} feature={data.feature} plan={data.plan}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>CUSTOMER SUPPORT</div>
                {PPCBasicOnSite.map((data,index)=>(<PPCBasicOnSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>

            {/* basic plan end */}

            {/* standard package start */}

            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>STANDARD</div>
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {PPCStandardPricing.map((data,index)=>(<PPCStandardPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>ACTIVITIES</div>
                {PPCStandardReports.map((data,index)=>(<PPCStandardReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>CAMPAIGN SETUP/AD OPTIMIZATION</div>
                {PPCStandardAttention.map((data,index)=>(<PPCStandardAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>REPORTING TECHNIQUES</div>
                 {PPCStandardReview.map((data,index)=>(<PPCStandardReviewCard key={index} feature={data.feature} plan={data.plan}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>CUSTOMER SUPPORT</div>
                {PPCStandardOnSite.map((data,index)=>(<PPCStandardOnSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>

            {/* standard package end */}

            {/* premium package start */}
            
            
                  <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Premium</div>
                    <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
                  </div>

                  <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                    {PPCPremiumPricing.map((data,index)=>(<PPCPremiumPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>ACTIVITIES</div>
                    {PPCPremiumReports.map((data,index)=>(<PPCPremiumReportCards key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>CAMPAIGN SETUP/AD OPTIMIZATION</div>
                    {PPCPremiumAttention.map((data,index)=>(<PPCPremiumAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>REPORTING TECHNIQUES</div>
                    {PPCPremiumReview.map((data,index)=>(<PPCPremiumReviewCard key={index} feature={data.feature} plan={data.plan}/>))}

                  </div>

                  <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>CUSTOMER SUPPORT</div>
                    {PPCPremiumOnSite.map((data,index)=>(<PPCPremiumOnSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>


                  <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

                  </div>

            {/* premium package end */}
          </div>

        </div>
      </div>
      </>
  )
}

export default PPCPackage