import React from 'react'
import "./DrupalValues.css"
import DrupalValuesCard from "../../cards/DrupalValuesCard"
import data from "../../../arraydata/DrupalValuesArray"

function DrupalValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our </span> Values</div>
                <div className='PHPValues-para'>Our Drupal developers excel in building scalable, high-performance websites with expertise in content management, custom module development, UI/UX, and modern web frameworks.</div>
            </div>


            <div className='DrupalValues-content'>
            {data.map((data,index)=>(<DrupalValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default DrupalValues
