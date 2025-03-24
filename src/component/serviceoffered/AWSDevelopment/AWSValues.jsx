import React from 'react'
import "./AWSValues.css"
import AWSValuesCard from "../../cards/AWSCard/AWSValuesCard"
import data from "../../../arraydata/AWSArray/AWSValuesArray"

function AWSValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our  </span> Values </div>
                <div className='PHPValues-para'>At Xeltratech, we prioritize innovation, scalability, security, and efficiency to deliver reliable, automated, and customer-focused AWS solutions that drive business growth and digital transformation.</div>
            </div>


            <div className='AWSValues-content'>
            {data.map((data,index)=>(<AWSValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default AWSValues
