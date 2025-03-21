import React from 'react'
import "../serviceoffered/DrupalWebDevelopment/DrupalValues.css"

function DrupalValuesCard({icon, para}) {
  return (
    <div className='PHPValues-content-box'>
                        <div className='PHPValue-content-box-image'>{icon}</div>
                        <div className='PHPValue-content-box-para'>{para}</div>
    </div>
  )
}

export default DrupalValuesCard
