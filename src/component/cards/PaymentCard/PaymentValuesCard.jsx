import React from 'react'
import "../../serviceoffered/PaymentDevelopment/PaymentValues.css"

function PaymentValuesCard({icon, para}) {
  return (
    <div className='PaymentValues-content-box'>
                        <div className='PaymentValue-content-box-image'>{icon}</div>
                        <div className='PaymentValue-content-box-para'>{para}</div>
    </div>
  )
}

export default PaymentValuesCard
