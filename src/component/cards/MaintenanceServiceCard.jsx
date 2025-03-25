import React from 'react'
import "../serviceoffered/MobileAppSupport/Appservices.css"

function MaintenanceServiceCard({logo, heading, para}) {
  return (
    <div className='services-content-box1'>
                    <div className='box1-logo'><img src={logo}/></div>
                    <div className='box1-heading'>{heading}</div>
                    <div className='box1-para-app'>{para}</div>
                </div>
  )
}

export default MaintenanceServiceCard
