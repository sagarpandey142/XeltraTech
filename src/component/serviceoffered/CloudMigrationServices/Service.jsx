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
                      <p><span>Cloud Migration Services</span></p>
                    </div>
                    <div className='service-box1-heading2'>We offer a full range of Cloud Migration Services designed to securely transfer, optimize, and scale your infrastructure. From seamless data migration to performance-driven cloud optimization, our expert team ensures a smooth, secure, and efficient transition to the cloud for enhanced flexibility and business growth.</div>
                </div>


                <div className='WordPress-service-box1-content1'>
                <div className='content1-image'>
                    <img src={service1}/>
                  </div>
                  <div className='content1-head'>
                    <p>Cloud Strategy &
                    Assessment</p>
                  </div>
                </div>

                 <div className='WordPress-service-box1-content1'>
                 <div className='content1-image'>
                    <img src={service2}/>
                  </div>
                  <div className='content1-head'>
                    <p>Application & 
                    Data Migration</p>
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
                    <p>Infrastructure
                    Migration</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service4}/>
                  </div>
                  <div className='content1-head'>
                    <p>Hybrid & Multi-Cloud
                    Migration</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service5}/>
                  </div>
                  <div className='content1-head'>
                    <p>Security & 
                    Compliance</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service6}/>
                  </div>
                  <div className='content1-head'>
                    <p>Performance
                    Optimization</p>
                  </div>
                </div>
            </div>
            </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Service
