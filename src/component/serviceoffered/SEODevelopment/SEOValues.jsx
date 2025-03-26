import React from 'react'
import "./SEOValues.css"
import SEOValuesCard from "../../cards/SEOValuesCard"
import data from "../../../arraydata/SEOValuesArray"

function SEOValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our </span> Values</div>
                <div className='PHPValues-para'>Our SEO experts specialize in optimizing websites for higher search rankings, increased organic traffic, and improved user engagement through data-driven strategies and modern SEO techniques.</div>
            </div>


            <div className='SEOValues-content'>
            {data.map((data,index)=>(<SEOValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default SEOValues
