import React from 'react'
import "../serviceoffered/SEODevelopment/SEOValues.css"

function SEOValuesCard({icon, para}) {
  return (
    <div className='PHPValues-content-box'>
                        <div className='PHPValue-content-box-image'>{icon}</div>
                        <div className='PHPValue-content-box-para'>{para}</div>
    </div>
  )
}

export default SEOValuesCard
