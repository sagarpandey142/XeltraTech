import React from 'react'
import "./AboutMUI.css"
import AboutUIimg from "./images/AboutUI.png"

function AboutUI() {
  return (
    <div className='About-body '>
        <div className='About-box'>
                    <div className='About-img'><img src={AboutUIimg}/></div>
                    <div className='About-content'>
                        <div className='About-content-heading-UI'>Mobile App <span>UI/UX Design</span>  development company in India</div>
                        <div className='About-content-para1'>XeltraTech is a reputed mobile UI design company based in Noida, Delhi NCR, India, with a branch office in the USA. The company specializes in crafting visually appealing and highly functional user interfaces for mobile applications. With a strong focus on user experience, XeltraTech ensures seamless navigation, intuitive design, and engaging aesthetics that enhance app performance.</div>

                          <div className='About-content-para2'>There is no doubt that design plays a crucial role in the success of a website and mobile application. A well-structured UI not only attracts users but also improves usability. XeltraTech’s expert team combines creativity with technical expertise to deliver compelling and responsive designs tailored to client needs.</div>


                        <div className='About-content-para3'>By leveraging the latest design trends and technologies, XeltraTech creates captivating UI/UX solutions that align with modern user expectations. Whether for startups or established businesses, the company offers customized design strategies that enhance digital presence and user engagement. We prioritize user-centric designs that ensure smooth interactions and high functionality, leading to better user retention. Our team conducts in-depth research to understand your target audience, ensuring that every design element serves a purpose and adds value.</div>
                    </div>
        </div>
    </div>
  )
}

export default AboutUI
