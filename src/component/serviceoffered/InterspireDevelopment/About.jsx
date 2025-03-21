import React from 'react'
import "./About.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Interspire Development</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>At Xeltratech, we specialize in enterprise development solutions that help businesses streamline operations, improve efficiency, and drive digital transformation. Our custom enterprise software is designed to meet the unique needs of large-scale organizations, ensuring seamless integration, scalability, and security. We develop ERP systems, CRM platforms, cloud-based applications, and workflow automation tools to optimize business processes. Our solutions leverage cutting-edge technologies like AI, machine learning, and blockchain to enhance productivity and decision-making. With expertise in custom web and mobile applications, API integrations, and data management systems, we ensure that enterprises stay competitive in a rapidly evolving digital landscape. Our focus on security, performance, and user experience guarantees robust and future-ready solutions. Partner with Xeltratech for innovative enterprise development that empowers your business with efficiency, flexibility, and growth. </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
