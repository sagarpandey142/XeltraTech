import React from 'react'
import "./InterspireValues.css"
import InterspireValuesCard from "../../cards/InterspireValuesCard"
import data from "../../../arraydata/InterspireValuesArray"

function InterspireValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our </span> Values</div>
                <div className='PHPValues-para'>Our PHP developers excel in building scalable, high-performance web applications with expertise in database management, security, and modern frameworks like Laravel and CodeIgniter.</div>
            </div>


            <div className='PHPValues-content'>
            {data.map((data,index)=>(<InterspireValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default InterspireValues
