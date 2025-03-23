import React from 'react'
import "../../serviceoffered/PPCDevelopment/PPCValues.css"

function PPCValuesCard({icon, para}) {
  return (
    <div className='PHPValues-content-box'>
                        <div className='PHPValue-content-box-image'>{icon}</div>
                        <div className='PHPValue-content-box-para'>{para}</div>
    </div>
  )
}

export default PPCValuesCard
