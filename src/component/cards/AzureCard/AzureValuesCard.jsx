import React from 'react'
import "../../serviceoffered/AzureDevelopment/AzureValues.css"

function AzureValuesCard({icon, para}) {
  return (
    <div className='AzureValues-content-box'>
                        <div className='AzureValue-content-box-image'>{icon}</div>
                        <div className='AzureValue-content-box-para'>{para}</div>
    </div>
  )
}

export default AzureValuesCard
