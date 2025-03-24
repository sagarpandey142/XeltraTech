import React from 'react'
import "../../serviceoffered/EcommerceMaintenanceDevelopment/EcommerceMaintenanceValues.css"

function EcommerceMaintenanceValuesCard({icon, para}) {
  return (
    <div className='EcommerceMaintenanceValues-content-box'>
                        <div className='EcommerceMaintenanceValue-content-box-image'>{icon}</div>
                        <div className='EcommerceMaintenanceValue-content-box-para'>{para}</div>
    </div>
  )
}

export default EcommerceMaintenanceValuesCard
