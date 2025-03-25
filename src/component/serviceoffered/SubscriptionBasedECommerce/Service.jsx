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
                    <div className='service-box1-heading1'>
                      <p><span>Subscription Based E-Commerce Services</span></p>
                    </div>
                    <div className='service-box1-heading2'>We offer full Subscription-Based E-Commerce solutions, ensuring seamless, scalable, and engaging recurring shopping experiences for businesses and customers.</div>
                </div>


                <div className='WordPress-service-box1-content1'>
                <div className='content1-image'>
                    <img src={service1}/>
                  </div>
                  <div className='content1-head'>
                    <p>Custom Subscription 
                    Platform Development</p>
                  </div>
                </div>

                 <div className='WordPress-service-box1-content1'>
                 <div className='content1-image'>
                    <img src={service2}/>
                  </div>
                  <div className='content1-head'>
                    <p>Flexible Subscription 
                    Models</p>
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
                    <p>Secure Payment
                    Integration</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service4}/>
                  </div>
                  <div className='content1-head'>
                    <p>Personalized User 
                    Experience</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service5}/>
                  </div>
                  <div className='content1-head'>
                    <p>Subscription Analytics 
                    & Reporting</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service6}/>
                  </div>
                  <div className='content1-head'>
                    <p>Scalability & Performance
                    Optimization –</p>
                  </div>
                </div>
            </div>
            </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Service
