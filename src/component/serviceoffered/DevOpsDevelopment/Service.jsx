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
                      <p><span>Devops Development Services</span></p>
                    </div>
                    <div className='service-box1-heading2'>Our DevOps Development Services streamline CI/CD, automate infrastructure, and optimize cloud deployments, ensuring secure, efficient, and scalable software delivery with improved collaboration, faster releases, and operational excellence for business growth.</div>
                </div>


                <div className='WordPress-service-box1-content1'>
                <div className='content1-image'>
                    <img src={service1}/>
                  </div>
                  <div className='content1-head'>
                    <p>CI/CD Automation</p>
                  </div>
                </div>

                 <div className='WordPress-service-box1-content1'>
                 <div className='content1-image'>
                    <img src={service2}/>
                  </div>
                  <div className='content1-head'>
                    <p>Infrastructure as 
                    Code</p>
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
                    <p>Cloud Integration</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service4}/>
                  </div>
                  <div className='content1-head'>
                    <p>Security & Compliance</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service5}/>
                  </div>
                  <div className='content1-head'>
                    <p>Monitoring & Logging</p>
                  </div>
                </div>

              <div className='WordPress-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service6}/>
                  </div>
                  <div className='content1-head'>
                    <p>Containerization & 
                    Orchestration</p>
                  </div>
                </div>
            </div>
            </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Service
