import React from 'react'
import "./PPCValues.css"
import PPCValuesCard from "../../cards/PPCCard/PPCValuesCard"
import data from "../../../arraydata/PPCArray/PPCValuesArray"

function PPCValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our </span> Values</div>
                <div className='PHPValues-para'>Our values focus on quality, innovation, transparency, efficiency, security, customer satisfaction, and long-term success.</div>
            </div>


            <div className='PPCValues-content'>
            {data.map((data,index)=>(<PPCValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default PPCValues
