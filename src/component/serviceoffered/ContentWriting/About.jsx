import React from 'react'
import "./About.css"
import Aboutlogo from "./images/aboutcr.jpg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-imgc'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Content Writing Services</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Content writing is the art of creating compelling, informative, and SEO-friendly content that engages audiences and drives business success. Whether it’s website copy, blog posts, social media content, or product descriptions, high-quality content enhances brand credibility and improves search rankings. Effective content writing involves thorough research, audience analysis, and strategic keyword integration to ensure readability and discoverability. Well-structured content not only informs but also persuades, leading to higher engagement and conversions. With the growing digital landscape, businesses need fresh, relevant, and valuable content to stay ahead of competitors. From storytelling to technical writing, each piece must align with brand voice and customer expectations. At XeltraTech, we specialize in SEO-optimized, high-impact content tailored to your industry. Our expert writers craft content that not only attracts visitors but also turns them into loyal customers. Let’s bring your brand’s story to life with powerful content! </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
