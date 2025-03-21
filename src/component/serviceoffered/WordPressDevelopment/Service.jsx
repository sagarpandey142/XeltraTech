import React from 'react'
import "./service.css"
import service1 from "./images/js-developer.svg"
import service2 from "./images/js-mig.svg"
import service3 from "./images/js-custom.svg"
import service4 from "./images/js-enterprise.svg"
import service5 from "./images/js-support.svg"
import service6 from "./images/js-appdevelopment.svg"

import AnimatedContent from "../../SingleComponents/AnimatedContent"

function Service() {
  return (
    <div className='service-body'>
        <div className='service-box'>
                <AnimatedContent>
            <div className='service-box1'>
                <div className='service-box1-heading'>
                    <div className='service-box1-heading1'><p>Comprehensive <span>WordPress</span></p>
                    <p><span>Development</span> Solutions</p></div>
                    <div className='service-box1-heading2'>We offer a full range of WordPress development services designed to build, enhance, and optimize your website. From custom themes to advanced functionality, our expert team ensures a seamless and high-performing digital experience.</div>
                </div>


                <div className='WordPress-service-box1-content1'>
                <div className='content1-image'>
                    <img src={service1}/>
                  </div>
                  <div className='content1-head'>
                    <p>Custom WordPress Development</p>
                  </div>
                </div>

                 <div className='WordPress-service-box1-content1'>
                 <div className='content1-image'>
                    <img src={service2}/>
                  </div>
                  <div className='content1-head'>
                    <p>WordPress Theme Development</p>
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
                    <p>WordPress Plugin Development</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service4}/>
                  </div>
                  <div className='content1-head'>
                    <p>WordPress eCommerce Solution</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service5}/>
                  </div>
                  <div className='content1-head'>
                    <p>WordPress API Integration</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service6}/>
                  </div>
                  <div className='content1-head'>
                    <p>WordPress Plugin Development</p>
                  </div>
                </div>
            </div>
            </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Service
