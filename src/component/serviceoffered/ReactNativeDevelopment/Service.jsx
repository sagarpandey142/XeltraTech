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
                    <div className='service-box1-heading1'><p>Expertise of <span>Our</span></p>
                    <p> <span>React JS</span> Developers</p></div>
                    <div className='service-box1-heading2'>Our React JS developers excel in building scalable, high-performance applications with expertise in state management, UI/UX, and modern frameworks.</div>
                </div>


                <div className='react-service-box1-content1'>
                <div className='content1-image'>
                    <img src={service1}/>
                  </div>
                  <div className='content1-head'>
                    <p>Dedicated React 
                    JS Developers</p>
                  </div>
                </div>

                 <div className='react-service-box1-content1'>
                 <div className='content1-image'>
                    <img src={service2}/>
                  </div>
                  <div className='content1-head'>
                    <p>React JS Migration & 
                    Integration Services</p>
                  </div>
                </div>
                
            </div>
            </AnimatedContent>
            <AnimatedContent>

            <div className='service-box2'>

              <div className='react-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service3}/>
                  </div>
                  <div className='content1-head'>
                    <p>React JS Custom 
                    Web App Development</p>
                  </div>
                </div>

              <div className='react-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service4}/>
                  </div>
                  <div className='content1-head'>
                    <p>Enterprise React
                    Web Apps</p>
                  </div>
                </div>

              <div className='react-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service5}/>
                  </div>
                  <div className='content1-head'>
                    <p> React JS Support
                    & Maintenance</p>
                  </div>
                </div>

              <div className='react-service-box1-content1'>
              <div className='content1-image'>
                    <img src={service6}/>
                  </div>
                  <div className='content1-head'>
                    <p>Native React JS 
                    App Development
                    </p>
                  </div>
                </div>
            </div>
            </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Service
