import React from 'react'
import "./WebProcess.css"

import specialize1 from "./images/specialize1.svg"
import specialize2 from "./images/specialize2.svg"
import specialize3 from "./images/specialize3.svg"
import specialize4 from "./images/specialize4.svg"
import specialize5 from "./images/specialize5.svg"
import specialize6 from "./images/specialize6.svg"

function WebProcess() {
  return (
    <div className='specialize-body'>
        <div className='specialize-box'>
            <div className='specialize-box1'>
                <div className='specialize-box1-heading'>
                    <div className='specialize-box1-heading1'>Our <span>Work Process</span> for Custom Website Designing</div>
                    <div className='specialize-box1-heading2'>We follow a structured and efficient process to deliver high-quality, custom-designed websites that align with your business goals.</div>
                </div>

                <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize1}/></div>
                  </div>
                  <div className='content1-head'>Discovery & Research</div>
                </div>

                 <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize2}/></div>
                  </div>
                  <div className='content1-head'>Wireframing & Planning</div>
                </div>
            </div>

            <div className='specialize-box2'>

              <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize3}/></div>
                  </div>
                  <div className='content1-head'>UI/UX Design</div>
                </div>

              <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize4}/></div>
                  </div>
                  <div className='content1-head'>Development & Integration</div>
                </div>

              <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize5}/></div>
                  </div>
                  <div className='content1-head'>Testing & Quality Assurance</div>
                </div>

              <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize6}/></div>
                  </div>
                  <div className='content1-head'>Deployment & Launch</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WebProcess
