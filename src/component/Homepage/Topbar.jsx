import React from 'react'
import './Topbar.css'
import india from "../images/india.svg"
import mailframe from "../images/mailframe.svg"
import skype from "../images/skype.svg"

function Topbar() {
  return (
    <div className='topbar-body'>
        <div className='topbar-box'>
          <ul>
            <li className='topbar-contact'><img src={india} alt='india'/>+91-9560331179</li>
            <li className='topbar-email'><img src={mailframe} alt='mail'/>enquiry@xeltratech.com</li>
            <li className='topbar-skype'><img src={skype} alt='skype'/>@xeltratech</li>
          </ul>
        </div>
      
    </div>
  )
}

export default Topbar
