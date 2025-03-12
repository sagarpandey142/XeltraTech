import React from 'react'
import { Link } from 'react-router-dom';


import SmoBasicPricingCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoPricingCard';
import SmoBasicPricing from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoPricingArray';

import SmoBasicReportCards from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoReportCards';
import SmoBasicReports from "../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoReportArray";

import SmoBasicAttentionCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoAttentionCard';
import SmoBasicAttention from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoAttentionArray';

import SmoBasicReviewCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoReviewCard';
import SmoBasicReview from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoReviewArray';

import SmoBasicOnSiteCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoOnSiteCard';
import SmoBasicOnSite from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoOnSiteArray';

import SmoBasicContentCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoContentCard';
import SmoBasicContent from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoContentArray';

import SmoBasicOffSiteCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoOffSiteCard';
import SmoBasicOffSite from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoOffSiteArray';

import SmoBasicSocialCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoSocialCard';
import SmoBasicSocial from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoSocialArray';

import SmoBasicLocalCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoLocalCard';
import SmoBasicLocal from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoLocalArray';

import SmoBasicWebCard from '../../cards/PackagesCard/SmoCard/SmoBasicCard/SmoWebCard';
import SmoBasicWeb from '../../../arraydata/PackagesArray/SmoArray/SmoBasic/SmoWebArray';


// standard package start
import SmoStandardPricingCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoPricingCard';
import SmoStandardPricing from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoPricingArray';

import SmoStandardReportCards from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoReportCards';
import SmoStandardReports from "../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoReportArray";

import SmoStandardAttentionCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoAttentionCard';
import SmoStandardAttention from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoAttentionArray';

import SmoStandardReviewCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoReviewCard';
import SmoStandardReview from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoReviewArray';

import SmoStandardOnSiteCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoOnSiteCard';
import SmoStandardOnSite from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoOnSiteArray';

import SmoStandardContentCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoContentCard';
import SmoStandardContent from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoContentArray';

import SmoStandardOffSiteCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoOffSiteCard';
import SmoStandardOffSite from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoOffSiteArray';

import SmoStandardSocialCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoSocialCard';
import SmoStandardSocial from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoSocialArray';

import SmoStandardLocalCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoLocalCard';
import SmoStandardLocal from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoLocalArray';

import SmoStandardWebCard from '../../cards/PackagesCard/SmoCard/SmoStandardCard/SmoWebCard';
import SmoStandardWeb from '../../../arraydata/PackagesArray/SmoArray/SmoStandard/SmoWebArray';
// standard package end

// premium package start
import SmoPremiumPricingCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoPricingCard';
import SmoPremiumPricing from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoPricingArray';

import SmoPremiumReportCards from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoReportCards';
import SmoPremiumReports from "../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoReportArray";

import SmoPremiumAttentionCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoAttentionCard';
import SmoPremiumAttention from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoAttentionArray';

import SmoPremiumReviewCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoReviewCard';
import SmoPremiumReview from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoReviewArray';

import SmoPremiumOnSiteCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoOnSiteCard';
import SmoPremiumOnSite from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoOnSiteArray';

import SmoPremiumContentCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoContentCard';
import SmoPremiumContent from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoContentArray';

import SmoPremiumOffSiteCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoOffSiteCard';
import SmoPremiumOffSite from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoOffSiteArray';

import SmoPremiumSocialCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoSocialCard';
import SmoPremiumSocial from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoSocialArray';

import SmoPremiumLocalCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoLocalCard';
import SmoPremiumLocal from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoLocalArray';

import SmoPremiumWebCard from '../../cards/PackagesCard/SmoCard/SmoPremiumCard/SmoWebCard';
import SmoPremiumWeb from '../../../arraydata/PackagesArray/SmoArray/SmoPremium/SmoWebArray';
// premium package end

const SmoPackage = () => {

 
  return (
    <>
      <div className='w-screen h-auto py-5 flex justify-center items-center !ml-[5px] '>
        <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 overflow-hidden '>
          <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>
          
          <div className="w-full h-auto p-5 flex items-center gap-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth flex-nowrap scroll-snap-x-mandatory ">

            {/* basic plan start */}
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>BASIC</div>
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 350 / Month</div>
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {SmoBasicPricing.map((data,index)=>(<SmoBasicPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Twitter Promotion</div>
                {SmoBasicReports.map((data,index)=>(<SmoBasicReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Instagram Promotion</div>
                {SmoBasicAttention.map((data,index)=>(<SmoBasicAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Linkedin Promotion</div>
                 {SmoBasicReview.map((data,index)=>(<SmoBasicReviewCard key={index} feature={data.feature} plan={data.plan}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Google+ Promotion</div>
                {SmoBasicOnSite.map((data,index)=>(<SmoBasicOnSiteCard key={index} feature={data.feature} img1={data.img1}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>YouTube Promotion</div>
                {SmoBasicContent.map((data,index)=>(<SmoBasicContentCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Pinterest Promotion</div>
                {SmoBasicOffSite.map((data,index)=>(<SmoBasicOffSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              {/* <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Social Media Optimization</div>
                {SmoBasicSocial.map((data,index)=>(<SmoBasicSocialCard key={index} feature={data.feature} plan={data.plan}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Local Search Optimization</div>
                {SmoBasicLocal.map((data,index)=>(<SmoBasicLocalCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Web Usability Analysis</div>
                {SmoBasicWeb.map((data,index)=>(<SmoBasicWebCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div> */}

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>

            {/* basic plan end */}

            {/* standard package start */}

            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>STANDARD</div>
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 550 / Month</div>
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {SmoStandardPricing.map((data,index)=>(<SmoStandardPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Twitter Promotion</div>
                {SmoStandardReports.map((data,index)=>(<SmoStandardReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Instagram Promotion</div>
                {SmoStandardAttention.map((data,index)=>(<SmoStandardAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Linkedin Promotion</div>
                 {SmoStandardReview.map((data,index)=>(<SmoStandardReviewCard key={index} feature={data.feature} plan={data.plan}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Google+ Promotion</div>
                {SmoStandardOnSite.map((data,index)=>(<SmoStandardOnSiteCard key={index} feature={data.feature} img1={data.img1}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>YouTube Promotion</div>
                {SmoStandardContent.map((data,index)=>(<SmoStandardContentCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Pinterest Promotion</div>
                {SmoStandardOffSite.map((data,index)=>(<SmoStandardOffSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              {/* <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Social Media Optimization</div>
                {SmoStandardSocial.map((data,index)=>(<SmoStandardSocialCard key={index} feature={data.feature} plan={data.plan}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Local Search Optimization</div>
                {SmoStandardLocal.map((data,index)=>(<SmoStandardLocalCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Web Usability Analysis</div>
                {SmoStandardWeb.map((data,index)=>(<SmoStandardWebCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div> */}

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>

            {/* standard package end */}

            {/* premium package start */}
            
            
                  <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Premium</div>
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 1050 / Month</div>
                    <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
                  </div>

                  <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                    {SmoPremiumPricing.map((data,index)=>(<SmoPremiumPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Twitter Promotion</div>
                    {SmoPremiumReports.map((data,index)=>(<SmoPremiumReportCards key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Instagram Promotion</div>
                    {SmoPremiumAttention.map((data,index)=>(<SmoPremiumAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Linkedin Promotion</div>
                    {SmoPremiumReview.map((data,index)=>(<SmoPremiumReviewCard key={index} feature={data.feature} plan={data.plan}/>))}

                  </div>

                  <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Google+ Promotion</div>
                    {SmoPremiumOnSite.map((data,index)=>(<SmoPremiumOnSiteCard key={index} feature={data.feature} img1={data.img1}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>YouTube Promotion</div>
                    {SmoPremiumContent.map((data,index)=>(<SmoPremiumContentCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Pinterest Promotion</div>
                    {SmoPremiumOffSite.map((data,index)=>(<SmoPremiumOffSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  {/* <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Social Media Optimization</div>
                    {SmoPremiumSocial.map((data,index)=>(<SmoPremiumSocialCard key={index} feature={data.feature} plan={data.plan}/>))}

                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Local Search Optimization</div>
                    {SmoPremiumLocal.map((data,index)=>(<SmoPremiumLocalCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Web Usability Analysis</div>
                    {SmoPremiumWeb.map((data,index)=>(<SmoPremiumWebCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div> */}

                  <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

                  </div>

            {/* premium package end */}
          </div>

        </div>
      </div>
      </>
  )
}

export default SmoPackage