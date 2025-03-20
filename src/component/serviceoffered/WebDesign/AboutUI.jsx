import React from 'react'
import "./AboutUI.css"
import AboutUIimg from "./images/AboutUI.svg"

function AboutUI() {
  return (
    <div className='About-body'>
        <div className='About-box'>
                    <div className='About-img'><img src={AboutUIimg}/></div>
                    <div className='About-content'>
                        <div className='About-content-heading-UI'> Tailored Solutions  <span> for Your Unique </span>  Needs </div>
                        <div className='About-content-para1'>Custom website designing involves creating unique, tailor-made websites that align with a brand’s identity and business goals. Unlike template-based designs, custom websites offer complete flexibility in layout, functionality, and user experience.</div>

                          <div className='About-content-para2'>A well-designed custom website ensures better performance, responsiveness, and SEO optimization. Businesses can integrate specific features like e-commerce, interactive elements, or custom animations to enhance user engagement. The design process typically involves research, wireframing, prototyping, and development to deliver a seamless digital experience.</div>


                        <div className='About-content-para3'>Custom websites also help establish brand credibility and uniqueness, making a lasting impression on visitors. With a focus on user-centric design, they improve navigation, readability, and conversion rates. Though custom designs require more time and investment, they provide long-term benefits by offering scalability and security</div>
                    </div>
        </div>
    </div>
  )
}

export default AboutUI
