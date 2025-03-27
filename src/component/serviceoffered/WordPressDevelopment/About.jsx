import React from 'react'
import "./about.css"
import Aboutlogo from "./images/wordpress-abt.jpg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='wp-about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About WordPress Development</div>
                        <AnimatedContent>
                        <div className='about-content-para1'><p>XeltraTech is a leading web development company specializing in custom WordPress solutions tailored to businesses of all sizes. Whether you need a simple website, a complex eCommerce platform, or a fully customized business portal, we provide high-quality development, responsive design, and seamless functionality to elevate your online presence.</p>
                                                               <p>Our expert team ensures that your WordPress website is fast, secure, and SEO-friendly, helping you attract more visitors and improve engagement. We offer custom theme development, plugin integration, and scalable solutions that align perfectly with your brand’s identity. From performance optimization to mobile responsiveness, we take care of every detail.</p>
                                                              <p>Beyond development, XeltraTech provides digital marketing, SEO consulting, and mobile app development, ensuring that your website not only looks great but also drives business growth. Our commitment to innovation and quality makes us a trusted partner for businesses looking to maximize their digital impact.</p>
                            </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
