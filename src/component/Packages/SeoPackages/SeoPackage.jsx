import React from 'react'
import "./SeoPackage.css"
import { Link } from 'react-router-dom';
import tick from "./images/tick.svg"
const SeoPackage = () => {
  return (
      <div className='w-screen h-auto py-5 flex justify-center items-center fixing1 '>
        <div className='!border border-red-500 w-auto h-auto flex flex-col justify-center items-center gap-2 overflow-hidden '>
          <div className="w-full h-auto flex justify-center items-center "><Link to="/ContactUs" className="text-white no-underline"><div className='bg-[#ED1C24] rounded-[15px] h-[50px] font-raleway font-medium text-[16px] leading-[100%] text-white flex justify-center items-center px-[20px] transition duration-300 ease-in-out cursor-pointer hover:bg-[#c41e24] '>GET FREE CONSULTTION</div></Link></div>
          
          <div className="w-full h-auto p-5 !border border-red-500 flex items-center gap-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth flex-nowrap scroll-snap-x-mandatory ">
            <div className='min-w-[360px] h-[auto] !border border-[#3030307A] rounded-[20px] flex-shrink-0 scroll-snap-center px-[20px] py-[10px] flex flex-col justify-center items-center gap-4 '>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[10px] ">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>BASIC</div>
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>$ 149 / Month</div>
                <div className='w-full h-auto flex justify-start items-center '><Link to="/ContactUs" className="text-white no-underline"><div className='font-raleway font-semibold text-[20px] leading-[100%] tracking-[0px] bg-[#ED1C24] px-[60px] py-[10px] rounded-[5px] hover:bg-[#c41e24] '>Get Started</div></Link></div>
              </div>

              <div className="w-full h-auto  flex flex-col justify-start items-center gap-[20px]">
                <div className='w-full h-auto flex justify-between items-center'><div className='w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Campaign Setup Charge</div><div className='w-[75px] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>FREE</div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className='w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Price Per Month (USA)</div><div className='w-[75px] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>$ 149</div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className='w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Price Per Month (UK)</div><div className='w-[75px] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>$ 119</div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className='w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Number of Keywords</div><div className='w-[75px] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>10</div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className='w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Man Hours Per Month</div><div className='w-[75px] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>28 hrs</div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className='w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Minimum Contract Period*</div><div className='w-[75px] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>6 months</div></div>
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-center gap-[20px] !border border-red-500">
                <div className='w-full h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Reports</div>
                <div className='w-full h-auto flex justify-between items-center '><div className='w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030] '>Google Analytics</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030] '><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className='text-wrap w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Monthly SEO Performance Reports</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className=' text-wrap w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Customer Support (Email, Chats & Telephone)</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px] !border border-red-500">
                <div className='w-[300px] text-wrap !border border-red-500 h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Level of Personalized Attention</div>
                <div className='w-full h-auto flex justify-between items-center '><div className=' !border border-red-500 text-wrap w-[160px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Account Manager : No. of Projects</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030] '>1 :05</div></div>
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px] !border border-red-500">
                <div className='w-[300px] text-wrap !border border-red-500 h-auto font-raleway font-bold text-[24px] leading-[100%] tracking-[1px] text-start '>Initial Website Review and Analysis</div>
                <div className='w-full h-auto flex justify-between items-center '><div className='w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030] '>Intensive Website Analysis</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030] '><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className='text-wrap w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Backlinks Analysis</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className=' text-wrap w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Competitor Analysis</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className=' text-wrap w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Website Modification Consulting</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className=' text-wrap w-[180px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Duplicate Content Check</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className=' text-wrap w-[220px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Google Panda/Penguin Penalty Check</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className=' text-wrap w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Website Banned Check</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
                <div className='w-full h-auto flex justify-between items-center'><div className=' text-wrap w-[240px] h-auto text-start font-raleway font-light text-[16px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>Initial Rank Report</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'><img src={tick}/></div></div>
              </div>
              <div className="seo-content"></div>
              <div className="seo-content"></div>
              <div className="seo-content"></div>
              <div className="seo-content"></div>
              <div className="seo-content"></div>
              <div className="seo-content"></div>
            </div>

            <div className='seo-content-box'></div>
            <div className='seo-content-box'></div>
          </div>

        </div>
      </div>
  )
}

export default SeoPackage