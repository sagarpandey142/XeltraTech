import React from 'react'
import "../serviceoffered/MobileUI/services.css"

function MobileUIServices({logo, heading, para}) {
  return (
    <div className='services-content-box1'>
                    <div className='box1-logo'><img src={logo}/></div>
                    <div className='box1-heading'>{heading}</div>
                    <div className='box1-paraa'>{para}</div>
                </div>
  )
}

export default MobileUIServices
