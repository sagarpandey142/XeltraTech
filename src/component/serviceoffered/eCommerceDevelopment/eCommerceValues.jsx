import React from 'react'
import "./eCommerceValues.css"
import ECommerceValuesCard from "../../cards/eCommerceValuesCard"
import data from "../../../arraydata/eCommerceValuesArray"

function eCommerceValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our </span> Values</div>
                <div className='PHPValues-para'>Our eCommerce developers specialize in creating scalable, high-performance online stores with expertise in secure payment integration, user-friendly UI/UX, and modern frameworks.








</div>
            </div>


            <div className='eCommerceValues-content'>
            {data.map((data,index)=>(<ECommerceValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default eCommerceValues
