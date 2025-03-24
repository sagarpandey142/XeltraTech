import React from 'react'
import "./ORMValues.css"
import ORMValuesCard from "../../cards/ORMCard/ORMValuesCard"
import data from "../../../arraydata/ORMArray/ORMValuesArray"

function ORMValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our </span> Values</div>
                <div className='PHPValues-para'>We uphold transparency, integrity, security, and proactive strategies to protect and enhance your brand’s online reputation.</div>
            </div>


            <div className='ORMValues-content'>
            {data.map((data,index)=>(<ORMValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default ORMValues
