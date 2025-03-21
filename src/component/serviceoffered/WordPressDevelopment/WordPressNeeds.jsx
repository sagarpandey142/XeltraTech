import React from 'react'
import "./wordpressNeeds.css"
import bodyimage from "./images/Wordpressneed.svg"

function WordPressNeeds() {
  return (
    <div className='needs-body'>
        <div className='needs-box'>
            <div className="needs-heading"><span className='text-[64px] text-red-500'>W</span>ordPress Customization Tailored to Your Business Needs</div>
            <div className="needs-content">
                <div className='needs-para'>
                    <div className="needs-para1">Your business is unique, and your website should reflect that. At XeltraTech, we provide custom WordPress development services designed to create a fully tailored digital experience. Whether you need a custom theme, feature-rich plugins, or performance optimization, we ensure your website is both visually appealing and functionally powerful.</div>
                    <div className="needs-para1"> Our expert team focuses on delivering seamless WooCommerce solutions, API integrations, and security enhancements to make your website fast, secure, and scalable. With a focus on user experience and business growth, we ensure your WordPress site meets your specific needs while maintaining high performance and reliability.</div>
                    <div className="needs-para1"> From design to development and ongoing support, XeltraTech is your trusted partner in crafting a WordPress solution that truly represents your brand and drives success. Let’s build a website that works exactly the way you envision it!</div>
                </div>
                <img src={bodyimage}/>
                </div>
        </div>
      
    </div>
  )
}

export default WordPressNeeds
