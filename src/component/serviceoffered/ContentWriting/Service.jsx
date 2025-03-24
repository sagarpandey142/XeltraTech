import React from 'react'
import "./service.css"
import service1 from "../WordPressDevelopment/images/js-developer.svg"
import service2 from "../WordPressDevelopment/images/js-mig.svg"
import service3 from "../WordPressDevelopment/images/js-custom.svg"
import service4 from "../WordPressDevelopment/images/js-enterprise.svg"
import service5 from "../WordPressDevelopment/images/js-support.svg"
import service6 from "../WordPressDevelopment/images/js-appdevelopment.svg"

import AnimatedContent from "../../SingleComponents/AnimatedContent"

function Service() {
  return (
    <div className='service-body'>
        <div className='service-box'>
                <AnimatedContent>
            <div className='service-box1'>
                <div className='service-box1-heading'>
                    <div className='service-box1-heading1'><p>Our<span> Content Writing </span></p>
                    <p>Services</p></div>
                    <div className='service-box1-heading2'>Boost Your Brand with Our Professional, SEO-Optimized, and Engaging Content Writing Services Tailored to Your Business Needs.</div>
                </div>


                <div className='WordPress-service-box1-content1'>
                <div className='content1-image'>
                    <img src={service1}/>
                  </div>
                  <div className='content1-head'>
                    <p>SEO Content Writing</p>
                  </div>
                </div>

                 <div className='WordPress-service-box1-content1'>
                 <div className='content1-image'>
                    <img src={service2}/>
                  </div>
                  <div className='content1-head'>
                    <p>Website Content Writing</p>
                  </div>
                </div>
                
            </div>
            </AnimatedContent>
            <AnimatedContent>

            <div className='service-box2'>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service3}/>
                  </div>
                  <div className='content1-head'>
                    <p> Blog & Article Writing</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service4}/>
                  </div>
                  <div className='content1-head'>
                    <p>Product Descriptions</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service5}/>
                  </div>
                  <div className='content1-head'>
                    <p>Social Media Content</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service6}/>
                  </div>
                  <div className='content1-head'>
                    <p>Technical & Industry-
                    Specific Writing</p>
                  </div>
                </div>
            </div>
            </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Service
