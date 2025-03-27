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
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Seach Engine Optimization</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Search Engine Optimization (SEO) is the process of improving a website’s ranking on search engines like Google, increasing its visibility and attracting organic traffic. A well-optimized website ensures better reach, higher engagement, and increased conversions. Effective SEO involves keyword research, content optimization, technical SEO, and link building to enhance search engine rankings. Mobile-friendliness, fast loading speeds, and structured data also play a crucial role in improving user experience and search performance. With on-page and off-page SEO strategies, businesses can target the right audience and stay ahead of competitors. By consistently optimizing and adapting to search engine algorithms, SEO helps businesses establish a strong online presence, drive sustainable growth, and maximize their digital potential. </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
