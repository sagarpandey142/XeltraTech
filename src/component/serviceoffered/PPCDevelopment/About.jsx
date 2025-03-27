import React from 'react'
import "./about.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About PPC Advertise Service</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Pay-Per-Click (PPC) advertising is a powerful digital marketing strategy that allows businesses to instantly reach their target audience and drive high-quality traffic to their websites. Unlike organic SEO, PPC delivers immediate results, placing your ads at the top of search engines, social media platforms, and other online channels. A well-structured PPC campaign involves keyword research, ad copy creation, bid management, and audience targeting to maximize return on investment (ROI). With platforms like Google Ads, Facebook Ads, LinkedIn Ads, and Bing Ads, businesses can target potential customers based on demographics, location, and search intent. PPC campaigns require continuous optimization, including A/B testing, performance tracking, and budget adjustments, to improve click-through rates (CTR) and conversion rates. By analyzing key metrics such as cost-per-click (CPC) and quality score, businesses can refine their strategy for better results. </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
