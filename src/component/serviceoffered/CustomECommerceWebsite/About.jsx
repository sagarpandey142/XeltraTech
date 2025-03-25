import React from 'react'
import "./about.css"
import Aboutlogo from "./images/CustomECommerceWebsite-abt.png"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='CustomECommerceWebsite-about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About <span>Custom E-Commerce</span> Website</div>
                        <AnimatedContent>
                        <div className='about-content-para1'><p>A custom e-commerce website is a tailored online store designed to meet unique business needs. Unlike pre-built platforms, a custom solution offers full control over design, features, and scalability to create a seamless shopping experience.</p>
                                                               <p>With a custom e-commerce website, businesses can integrate advanced functionalities like AI-driven recommendations, custom checkout flows, and personalized user experiences. It ensures better performance, security, and branding, making it ideal for businesses looking to stand out.</p>
                                                              <p>Key benefits include scalability, faster loading speeds, enhanced security, and full customization of UI/UX. A custom e-commerce site can be built using frameworks like Magento, Shopify Plus, WooCommerce, or headless commerce solutions.</p>
                                                              <p>This approach is best for businesses needing unique features, third-party integrations, and long-term growth flexibility.</p>
                            </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
