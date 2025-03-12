import React from 'react'
import { Link } from 'react-router-dom';

import SeoBasicPricingCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoPricingCard';
import SeoBasicPricing from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoPricingArray';

import SeoBasicReportCards from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoReportCards';
import SeoBasicReports from "../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoReportArray";

import SeoBasicAttentionCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoAttentionCard';
import SeoBasicAttention from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoAttentionArray';

import SeoBasicReviewCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoReviewCard';
import SeoBasicReview from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoReviewArray';

import SeoBasicOnSiteCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoOnSiteCard';
import SeoBasicOnSite from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoOnSiteArray';

import SeoBasicContentCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoContentCard';
import SeoBasicContent from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoContentArray';

import SeoBasicOffSiteCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoOffSiteCard';
import SeoBasicOffSite from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoOffSiteArray';

import SeoBasicSocialCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoSocialCard';
import SeoBasicSocial from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoSocialArray';

import SeoBasicLocalCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoLocalCard';
import SeoBasicLocal from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoLocalArray';

import SeoBasicWebCard from '../../cards/PackagesCard/SeoCard/SeoBasicCard/SeoWebCard';
import SeoBasicWeb from '../../../arraydata/PackagesArray/SeoArray/SeoBasic/SeoWebArray';


// standard package start
import SeoStandardPricingCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoPricingCard';
import SeoStandardPricing from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoPricingArray';

import SeoStandardReportCards from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoReportCards';
import SeoStandardReports from "../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoReportArray";

import SeoStandardAttentionCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoAttentionCard';
import SeoStandardAttention from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoAttentionArray';

import SeoStandardReviewCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoReviewCard';
import SeoStandardReview from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoReviewArray';

import SeoStandardOnSiteCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoOnSiteCard';
import SeoStandardOnSite from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoOnSiteArray';

import SeoStandardContentCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoContentCard';
import SeoStandardContent from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoContentArray';

import SeoStandardOffSiteCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoOffSiteCard';
import SeoStandardOffSite from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoOffSiteArray';

import SeoStandardSocialCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoSocialCard';
import SeoStandardSocial from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoSocialArray';

import SeoStandardLocalCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoLocalCard';
import SeoStandardLocal from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoLocalArray';

import SeoStandardWebCard from '../../cards/PackagesCard/SeoCard/SeoStandardCard/SeoWebCard';
import SeoStandardWeb from '../../../arraydata/PackagesArray/SeoArray/SeoStandard/SeoWebArray';
// standard package end

// premium package start
import SeoPremiumPricingCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoPricingCard';
import SeoPremiumPricing from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoPricingArray';

import SeoPremiumReportCards from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoReportCards';
import SeoPremiumReports from "../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoReportArray";

import SeoPremiumAttentionCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoAttentionCard';
import SeoPremiumAttention from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoAttentionArray';

import SeoPremiumReviewCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoReviewCard';
import SeoPremiumReview from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoReviewArray';

import SeoPremiumOnSiteCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoOnSiteCard';
import SeoPremiumOnSite from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoOnSiteArray';

import SeoPremiumContentCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoContentCard';
import SeoPremiumContent from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoContentArray';

import SeoPremiumOffSiteCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoOffSiteCard';
import SeoPremiumOffSite from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoOffSiteArray';

import SeoPremiumSocialCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoSocialCard';
import SeoPremiumSocial from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoSocialArray';

import SeoPremiumLocalCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoLocalCard';
import SeoPremiumLocal from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoLocalArray';

import SeoPremiumWebCard from '../../cards/PackagesCard/SeoCard/SeoPremiumCard/SeoWebCard';
import SeoPremiumWeb from '../../../arraydata/PackagesArray/SeoArray/SeoPremium/SeoWebArray';
// premium package end
import AnimatedContent from '../../SingleComponents/AnimatedContent';

const SeoPackage = () => {

 
  return (
    <>
      <div className='w-screen h-auto py-5 flex justify-center items-center !ml-[5px] '>
        <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 overflow-hidden '>
          <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>
          
          <div className="w-full h-auto p-5 flex items-center gap-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth flex-nowrap scroll-snap-x-mandatory ">

            {/* basic plan start */}
            <AnimatedContent direction='horizontal' reverse={true}>
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>BASIC</div>
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 149 / Month</div>
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {SeoBasicPricing.map((data,index)=>(<SeoBasicPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Reports</div>
                {SeoBasicReports.map((data,index)=>(<SeoBasicReportCards key={index} feature={data.feature} img1={data.img1}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Level of Personalized Attention</div>
                {SeoBasicAttention.map((data,index)=>(<SeoBasicAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Initial Website Review and Analysis</div>
                 {SeoBasicReview.map((data,index)=>(<SeoBasicReviewCard key={index} feature={data.feature} img1={data.img1}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>On Site Optimization for Six Months</div>
                {SeoBasicOnSite.map((data,index)=>(<SeoBasicOnSiteCard key={index} feature={data.feature} img1={data.img1}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Content Optimization for Six Months</div>
                {SeoBasicContent.map((data,index)=>(<SeoBasicContentCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Off Site Optimization</div>
                {SeoBasicOffSite.map((data,index)=>(<SeoBasicOffSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Social Media Optimization</div>
                {SeoBasicSocial.map((data,index)=>(<SeoBasicSocialCard key={index} feature={data.feature} plan={data.plan}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Local Search Optimization</div>
                {SeoBasicLocal.map((data,index)=>(<SeoBasicLocalCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Web Usability Analysis</div>
                {SeoBasicWeb.map((data,index)=>(<SeoBasicWebCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>
            </AnimatedContent>

            {/* basic plan end */}

            {/* standard package start */}

            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>STANDARD</div>
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 249 / Month</div>
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                {SeoStandardPricing.map((data,index)=>(<SeoStandardPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Reports</div>
                {SeoStandardReports.map((data,index)=>(<SeoStandardReportCards key={index} feature={data.feature} img1={data.img1}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Level of Personalized Attention</div>
                {SeoStandardAttention.map((data,index)=>(<SeoStandardAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Initial Website Review and Analysis</div>
                 {SeoStandardReview.map((data,index)=>(<SeoStandardReviewCard key={index} feature={data.feature} img1={data.img1}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>On Site Optimization for Six Months</div>
                {SeoStandardOnSite.map((data,index)=>(<SeoStandardOnSiteCard key={index} feature={data.feature} img1={data.img1}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Content Optimization for Six Months</div>
                {SeoStandardContent.map((data,index)=>(<SeoStandardContentCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Off Site Optimization</div>
                {SeoStandardOffSite.map((data,index)=>(<SeoStandardOffSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Social Media Optimization</div>
                {SeoStandardSocial.map((data,index)=>(<SeoStandardSocialCard key={index} feature={data.feature} plan={data.plan}/>))}

              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Local Search Optimization</div>
                {SeoStandardLocal.map((data,index)=>(<SeoStandardLocalCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Web Usability Analysis</div>
                {SeoStandardWeb.map((data,index)=>(<SeoStandardWebCard key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>

            {/* standard package end */}

            {/* premium package start */}
            
                  <AnimatedContent direction="horizontal">
                  <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Premium</div>
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>$ 349 / Month</div>
                    <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
                  </div>

                  <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                    {SeoPremiumPricing.map((data,index)=>(<SeoPremiumPricingCard key={index} plan={data.plan} pricing={data.pricing}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                    <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Reports</div>
                    {SeoPremiumReports.map((data,index)=>(<SeoPremiumReportCards key={index} feature={data.feature} img1={data.img1}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Level of Personalized Attention</div>
                    {SeoPremiumAttention.map((data,index)=>(<SeoPremiumAttentionCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Initial Website Review and Analysis</div>
                    {SeoPremiumReview.map((data,index)=>(<SeoPremiumReviewCard key={index} feature={data.feature} img1={data.img1}/>))}

                  </div>

                  <div className="w-full h-auto flex flex-col justify-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>On Site Optimization for Six Months</div>
                    {SeoPremiumOnSite.map((data,index)=>(<SeoPremiumOnSiteCard key={index} feature={data.feature} img1={data.img1}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Content Optimization for Six Months</div>
                    {SeoPremiumContent.map((data,index)=>(<SeoPremiumContentCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Off Site Optimization</div>
                    {SeoPremiumOffSite.map((data,index)=>(<SeoPremiumOffSiteCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Social Media Optimization</div>
                    {SeoPremiumSocial.map((data,index)=>(<SeoPremiumSocialCard key={index} feature={data.feature} plan={data.plan}/>))}

                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Local Search Optimization</div>
                    {SeoPremiumLocal.map((data,index)=>(<SeoPremiumLocalCard key={index} feature={data.feature} plan={data.plan}/>))}
                  </div>

                  <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px]">
                    <div className='w-[300px] text-wrap h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Web Usability Analysis</div>
                    {SeoPremiumWeb.map((data,index)=>(<SeoPremiumWebCard key={index} feature={data.feature} plan={data.plan}/>))}
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

export default SeoPackage