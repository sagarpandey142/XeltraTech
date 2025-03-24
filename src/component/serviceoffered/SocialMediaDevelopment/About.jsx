import React from 'react'
import "./About.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-imgg'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Social Media Marketing</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Social media marketing (SMM) is a powerful strategy for businesses to build brand awareness, engage audiences, and drive sales. It involves creating and sharing content on platforms like Facebook, Instagram, LinkedIn, and Twitter to connect with potential customers. Key elements of SMM include content creation, audience targeting, paid advertising, and analytics tracking. High-quality posts, videos, and infographics help attract followers, while engagement strategies like comments, polls, and live sessions boost interactions. Paid ads enhance reach, targeting specific demographics for better conversions. SEO and analytics play a crucial role in refining strategies. Tracking metrics such as engagement rate, click-through rate, and conversions helps optimize campaigns for better results. Consistency and adaptability are essential for long-term success. </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
