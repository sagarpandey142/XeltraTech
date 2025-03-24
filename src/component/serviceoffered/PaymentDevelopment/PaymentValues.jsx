import React from 'react'
import "./PaymentValues.css"
import PaymentValuesCard from "../../cards/PaymentCard/PaymentValuesCard"
import data from "../../../arraydata/PaymentArray/PaymentValuesArray"

function PaymentValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our  </span> Values </div>
                <div className='PHPValues-para'>At Xeltratech, we prioritize innovation, scalability, security, and efficiency to deliver reliable, automated, and customer-focused Payment solutions that drive business growth and digital transformation.</div>
            </div>


            <div className='PaymentValues-content'>
            {data.map((data,index)=>(<PaymentValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default PaymentValues
