import React from 'react'
import "./SocialMediaValues.css"
import SocialMediaValuesCard from "../../cards/SocialMediaCard/SocialMediaValuesCard"
import data from "../../../arraydata/SocialMediaArray/SocialMediaValuesArray"

function SocialMediaValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our </span> Values</div>
                <div className='PHPValues-para'>We believe in integrity, innovation, transparency, and quality, ensuring efficient, reliable, and scalable solutions for lasting success.</div>
            </div>


            <div className='SocialMediaValues-content'>
            {data.map((data,index)=>(<SocialMediaValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default SocialMediaValues
