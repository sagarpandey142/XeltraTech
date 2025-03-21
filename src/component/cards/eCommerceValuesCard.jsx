import React from 'react'
import "../serviceoffered/eCommerceDevelopment/eCommerceValues.css"

function eCommerceValuesCard({icon, para}) {
  return (
    <div className='PHPValues-content-box'>
                        <div className='PHPValue-content-box-image'>{icon}</div>
                        <div className='PHPValue-content-box-para'>{para}</div>
    </div>
  )
}

export default eCommerceValuesCard
