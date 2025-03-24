import React from 'react'
import "./AzureValues.css"
import AzureValuesCard from "../../cards/AzureCard/AzureValuesCard"
import data from "../../../arraydata/AzureArray/AzureValuesArray"

function AzureValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our  </span> Values </div>
                <div className='PHPValues-para'>At Xeltratech, we prioritize innovation, scalability, security, and efficiency to deliver reliable, automated, and customer-focused Azure solutions that drive business growth and digital transformation.</div>
            </div>


            <div className='AzureValues-content'>
            {data.map((data,index)=>(<AzureValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default AzureValues
