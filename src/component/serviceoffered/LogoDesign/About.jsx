import React from 'react'
import "./about.css"
import Aboutlogo from "./images/Aboutlogo.png"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='ld-About-body'>
        <div className='ld-About-box'>
                    <div className='ld-About-img'><img src={Aboutlogo}/></div>
                    <div className='ld-About-content'>
                        <div className='ld-About-content-heading-Logo'>Logo Design That <span>Defines</span> Your Business</div>
                        <AnimatedContent>
                        <div className='ld-About-content-para1'>A logo is the face of a brand, representing its values, mission, and personality. It plays a crucial role in building brand recognition and trust. A well-designed logo should be simple, memorable, versatile, and timeless, ensuring it resonates with the target audience and stands out in a competitive market. The logo design process begins with understanding the brand—its story, industry, and target customers. Designers then brainstorm creative concepts, incorporating colors, typography, and symbols that align with the brand’s identity. A great logo should be adaptable, looking perfect across digital platforms, print media, and merchandise.A successful logo should evoke trust and credibility, making a lasting impression on customers. Whether for startups or established businesses, investing in professional logo design helps create a strong brand presence. A visually appealing, well-thought-out logo is not just a design—it’s a powerful branding tool that drives business growth.The choice depends on the brand’s needs and industry.</div>
                        </AnimatedContent>
                          {/* <div className='About-content-para2'>There is no doubt that a logo plays a crucial role in the success of a brand and its identity. A well-designed logo not only attracts attention but also enhances brand recognition. XeltraTech’s expert team combines creativity with technical expertise to deliver unique and impactful logos tailored to client needs.</div>


                        <div className='About-content-para3'>XeltraTech specializes in creating unique and impactful logos that define a brand’s personality. Our expert designers blend creativity with strategy to ensure every logo resonates with the target audience. A strong and memorable logo builds credibility, fosters trust, and enhances brand recognition, making it a key element of business success. We take the time to understand your business goals, industry trends, and target market to craft logos that leave a lasting impression. Whether you are a startup or an established brand, our custom logo design solutions help you stand out in the competitive market.</div> */}
                    </div>
        </div>
    </div>
  )
}

export default About
