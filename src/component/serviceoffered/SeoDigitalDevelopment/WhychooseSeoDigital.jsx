import React from 'react'
import "./WhychooseSeoDigital.css"
import WhychooseSeoDigitalCard from '../../cards/SeoDigitalCard/WhychooseSeoDigitalCard'
import {leftdata} from "../../../arraydata/SeoDigitalArray/WhychooseSeoDigitalArray"
import {rightdata} from "../../../arraydata/SeoDigitalArray/WhychooseSeoDigitalArray"
import whychoosebg from "./images/whychoosebg.png"

function WhySeoDigital() {
    
  return (
    <>
    <div className='whychooseaws-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for Seo & Digital Marketing?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseSeoDigitalCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseSeoDigitalCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhySeoDigital
