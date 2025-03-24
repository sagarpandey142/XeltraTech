import React from 'react'
import "./aboutSeoDigital.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-imgp'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Seo & Digital Marketing</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>SEO (Search Engine Optimization) and Digital Marketing are essential strategies for boosting online visibility, driving traffic, and increasing conversions. While SEO focuses on organic search rankings, digital marketing encompasses paid advertising, social media, content marketing, and more to reach a broader audience. SEO involves keyword research, on-page and off-page optimization, technical SEO, and link building to improve website rankings on Google and other search engines. It ensures long-term visibility and higher organic traffic. Digital marketing includes PPC (Pay-Per-Click) ads, social media marketing, email marketing, and influencer collaborations to target the right audience effectively. It offers instant visibility, brand awareness, and lead generation through multiple online channels. Combining SEO and digital marketing ensures a holistic growth strategy,</div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
