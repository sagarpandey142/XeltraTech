import React from 'react'
import "./About.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body '>
        <div className='about-box'>
                    <div className='about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About PHP Website Development</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>PHP website development is a powerful and flexible solution for building dynamic, feature-rich web applications. PHP (Hypertext Preprocessor) is a widely used server-side scripting language known for its speed, security, and scalability. With PHP, businesses can develop custom websites, e-commerce platforms, content management systems (CMS), and web applications tailored to their specific needs. It seamlessly integrates with databases like MySQL, PostgreSQL, and MongoDB, ensuring efficient data handling and storage. PHP supports various frameworks, such as Laravel, CodeIgniter, and Symfony, which accelerate development and enhance security. Its compatibility with different platforms and hosting environments makes it a preferred choice for developers worldwide. PHP websites are fast-loading, SEO-friendly, and easily scalable, making them ideal for businesses aiming for a strong online presence. </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
