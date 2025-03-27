import React from 'react'
import "./InterspireValues.css"
import InterspireValuesCard from "../../cards/InterspireValuesCard"
import data from "../../../arraydata/InterspireValuesArray"

function InterspireValues() {
  return (
    <>
    <div className='is-Values-body'>
        <div className='is-Values-box'>
            <div className='is-Values-header'>
                <div className='is-Values-heading'><span className='text-[#ED1C24]'> Our </span> Values</div>
                <div className='is-Values-para'>Our PHP developers excel in building scalable, high-performance web applications with expertise in database management, security, and modern frameworks like Laravel and CodeIgniter.</div>
            </div>


            <div className='InterspireValues-content'>
            {data.map((data,index)=>(<InterspireValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default InterspireValues
