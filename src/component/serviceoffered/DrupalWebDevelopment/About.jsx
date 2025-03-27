import React from 'react'
import "./about.css"
import Aboutlogo from "./images/drupal-abt.jpg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Drupal Website Development</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Drupal is a powerful, flexible, and secure content management system (CMS) ideal for building scalable and high-performance websites. Whether you need a corporate site, an e-commerce platform, or a complex web portal, Drupal offers unmatched customization and security.
                          Our Drupal website development services focus on creating responsive, SEO-friendly, and feature-rich websites tailored to your business needs. With its modular architecture, Drupal allows seamless integration with third-party tools, APIs, and databases, ensuring a dynamic user experience.
                          We specialize in custom Drupal themes, module development, performance optimization, and migration services to enhance your website’s functionality. Our expert developers follow best coding practices and conduct rigorous testing to ensure security, speed, and stability.With Drupal’s robust framework, you get a future-ready website that is easy to manage, highly scalable, and optimized for performance.
                        </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
