import React from 'react'
import "../../serviceoffered/SeoDigitalDevelopment/SeoDigitalValues.css"

function SeoDigitalValuesCard({icon, para}) {
  return (
    <div className='SeoDigitalValues-content-box'>
                        <div className='SeoDigitalValue-content-box-image'>{icon}</div>
                        <div className='SeoDigitalValue-content-box-para'>{para}</div>
    </div>
  )
}

export default SeoDigitalValuesCard
