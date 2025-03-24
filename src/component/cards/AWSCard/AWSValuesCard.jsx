import React from 'react'
import "../../serviceoffered/AWSDevelopment/AWSValues.css"

function AWSValuesCard({icon, para}) {
  return (
    <div className='AWSValues-content-box'>
                        <div className='AWSValue-content-box-image'>{icon}</div>
                        <div className='AWSValue-content-box-para'>{para}</div>
    </div>
  )
}

export default AWSValuesCard
