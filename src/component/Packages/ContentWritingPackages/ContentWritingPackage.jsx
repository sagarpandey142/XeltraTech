import React from 'react'
import { Link } from 'react-router-dom';

import ContentWritingBasicReportCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingBasicCard/ContentWritingReportCards';
import ContentWritingBasicReports from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingBasic/ContentWritingReportArray";

import ContentWritingBasicArticleCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingBasicCard/ContentWritingArticleCards';
import ContentWritingBasicArticles from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingBasic/ContentWritingArticleArray";

import ContentWritingBasicPressCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingBasicCard/ContentWritingPressCards';
import ContentWritingBasicPress from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingBasic/ContentWritingPressArray";

import ContentWritingBasicBlogCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingBasicCard/ContentWritingBlogCards';
import ContentWritingBasicBlog from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingBasic/ContentWritingBlogArray";


// standard package start
import ContentWritingStandardReportCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingStandardCard/ContentWritingReportCards';
import ContentWritingStandardReports from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingStandard/ContentWritingReportArray";

import ContentWritingStandardArticleCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingStandardCard/ContentWritingArticleCards';
import ContentWritingStandardArticles from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingStandard/ContentWritingArticleArray";

import ContentWritingStandardPressCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingStandardCard/ContentWritingPressCards';
import ContentWritingStandardPress from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingStandard/ContentWritingPressArray";

import ContentWritingStandardBlogCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingStandardCard/ContentWritingBlogCards';
import ContentWritingStandardBlog from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingStandard/ContentWritingBlogArray";
// standard package end

// premium package start
import ContentWritingPremiumReportCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingPremiumCard/ContentWritingReportCards';
import ContentWritingPremiumReports from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingPremium/ContentWritingReportArray";

import ContentWritingPremiumArticleCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingPremiumCard/ContentWritingArticleCards';
import ContentWritingPremiumArticles from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingPremium/ContentWritingArticleArray";

import ContentWritingPremiumPressCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingPremiumCard/ContentWritingPressCards';
import ContentWritingPremiumPress from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingPremium/ContentWritingPressArray";

import ContentWritingPremiumBlogCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingPremiumCard/ContentWritingBlogCards';
import ContentWritingPremiumBlog from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingPremium/ContentWritingBlogArray";

// premium package end

// elite package start

import ContentWritingEliteReportCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingEliteCard/ContentWritingReportCards';
import ContentWritingEliteReports from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingElite/ContentWritingReportArray";

import ContentWritingEliteArticleCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingEliteCard/ContentWritingArticleCards';
import ContentWritingEliteArticles from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingElite/ContentWritingArticleArray";

import ContentWritingElitePressCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingEliteCard/ContentWritingPressCards';
import ContentWritingElitePress from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingElite/ContentWritingPressArray";

import ContentWritingEliteBlogCards from '../../cards/PackagesCard/ContentWritingCard/ContentWritingEliteCard/ContentWritingBlogCards';
import ContentWritingEliteBlog from "../../../arraydata/PackagesArray/ContentWritingArray/ContentWritingElite/ContentWritingBlogArray";

// elite package end


import AnimatedContent from '../../SingleComponents/AnimatedContent';

const ContentWritingPackage = () => {

 
  return (
    <>
      <div className='w-screen h-auto py-5 flex justify-center items-center !ml-[5px] '>
        <div className='w-auto h-auto flex flex-col justify-center items-center gap-2 overflow-hidden '>
          <AnimatedContent><div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div></AnimatedContent>
          
          <div className="w-full h-auto p-5 flex items-center gap-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-ContentWritingoth flex-nowrap scroll-snap-x-mandatory ">

            {/* basic plan start */}
            
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Upto 5 pages</div>
                {ContentWritingBasicReports.map((data,index)=>(<ContentWritingBasicReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>Upto 5 Articles</div>
                {ContentWritingBasicArticles.map((data,index)=>(<ContentWritingBasicArticleCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>5 Press Release</div>
                {ContentWritingBasicPress.map((data,index)=>(<ContentWritingBasicPressCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>5 Blog</div>
                {ContentWritingBasicBlog.map((data,index)=>(<ContentWritingBasicBlogCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>
            

            {/* basic plan end */}

            {/* standard package start */}
            
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>10+ Pages</div>
                {ContentWritingStandardReports.map((data,index)=>(<ContentWritingStandardReportCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>10 Articles</div>
                {ContentWritingStandardArticles.map((data,index)=>(<ContentWritingStandardArticleCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>10 Press Release</div>
                {ContentWritingStandardPress.map((data,index)=>(<ContentWritingStandardPressCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>10 Blog</div>
                {ContentWritingStandardBlog.map((data,index)=>(<ContentWritingStandardBlogCards key={index} feature={data.feature} plan={data.plan}/>))}
              </div>

              <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

            </div>
            

            {/* standard package end */}

            {/* premium package start */}

                  <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

                      <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                        <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>25+ Pages</div>
                        {ContentWritingPremiumReports.map((data,index)=>(<ContentWritingPremiumReportCards key={index} feature={data.feature} plan={data.plan}/>))}
                      </div>

                      <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                        <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>25 Articles</div>
                        {ContentWritingPremiumArticles.map((data,index)=>(<ContentWritingPremiumArticleCards key={index} feature={data.feature} plan={data.plan}/>))}
                      </div>

                      <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                        <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>25 Press Release</div>
                        {ContentWritingPremiumPress.map((data,index)=>(<ContentWritingPremiumPressCards key={index} feature={data.feature} plan={data.plan}/>))}
                      </div>

                      <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                        <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>25 Blog</div>
                        {ContentWritingPremiumBlog.map((data,index)=>(<ContentWritingPremiumBlogCards key={index} feature={data.feature} plan={data.plan}/>))}
                      </div>

                      <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

                    </div>

              {/* premium package end */}

              {/* elite package start */}
              
                    <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[20px] flex flex-col justify-center items-center gap-4 '>

                            <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                              <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>50+ Pages</div>
                              {ContentWritingEliteReports.map((data,index)=>(<ContentWritingEliteReportCards key={index} feature={data.feature} plan={data.plan}/>))}
                            </div>

                            <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                              <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>50 Articles</div>
                              {ContentWritingEliteArticles.map((data,index)=>(<ContentWritingEliteArticleCards key={index} feature={data.feature} plan={data.plan}/>))}
                            </div>

                            <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                              <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>50 Press Release</div>
                              {ContentWritingElitePress.map((data,index)=>(<ContentWritingElitePressCards key={index} feature={data.feature} plan={data.plan}/>))}
                            </div>

                            <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px]">
                              <div className='w-full h-auto font-raleway font-bold text-[24px] leading-snug tracking-[1px] text-start '>50 Blog</div>
                              {ContentWritingEliteBlog.map((data,index)=>(<ContentWritingEliteBlogCards key={index} feature={data.feature} plan={data.plan}/>))}
                            </div>

                            <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>

                    </div>

              {/* elite package end */}

           
          </div>

        </div>
      </div>
      </>
  )
}

export default ContentWritingPackage