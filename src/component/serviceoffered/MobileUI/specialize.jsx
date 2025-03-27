import React from 'react'
import "./specialize.css"

import specialize1 from "./images/specialize1.svg"
import specialize2 from "./images/specialize2.svg"
import specialize3 from "./images/specialize3.svg"
import specialize4 from "./images/specialize4.svg"
import specialize5 from "./images/specialize5.svg"
import specialize6 from "./images/specialize6.svg"

function specialize() {
  return (
    <div className='specialize-body '>
        <div className='specialize-box'>
            <div className='specialize-box1'>
                <div className='specialize-box1-heading'>
                    <div className='specialize-box1-heading1'>FIELDS <span>WE SPECIALIZE</span> IN</div>
                    <div className='specialize-box1-heading2'>Crafting seamless, user-friendly mobile experiences with intuitive UI/UX designs that enhance engagement and elevate usability.</div>
                </div>

                <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize1}/></div>
                  </div>
                  <div className='content1-head'>Healthcare</div>
                </div>

                 <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize2}/></div>
                  </div>
                  <div className='content1-head'>B2B</div>
                </div>
            </div>

            <div className='specialize-box2'>

              <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize3}/></div>
                  </div>
                  <div className='content1-head'>Association</div>
                </div>

              <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize4}/></div>
                  </div>
                  <div className='content1-head'>Financial</div>
                </div>

              <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize5}/></div>
                  </div>
                  <div className='content1-head'>Telecom Tech</div>
                </div>

              <div className='specialize-box1-content1'>
                  <div className='content1-image'>
                    <div className='content1-logo'><img src={specialize6}/></div>
                  </div>
                  <div className='content1-head'>Travel</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default specialize
