import React from 'react'
import "../../serviceoffered/ORMDevelopment/ORMValues.css"

function ORMValuesCard({icon, para}) {
  return (
    <div className='ORMValues-content-box'>
                        <div className='ORMValue-content-box-image'>{icon}</div>
                        <div className='ORMValue-content-box-para'>{para}</div>
    </div>
  )
}

export default ORMValuesCard
