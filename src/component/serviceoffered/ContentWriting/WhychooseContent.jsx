import React from 'react'
import "./WhychooseContent.css"
import WhychooseContentCard from '../../cards/ContentCard/WhychooseContentCard'
import {leftdata} from "../../../arraydata/ContentArray/WhychooseContentArray"
import {rightdata} from "../../../arraydata/ContentArray/WhychooseContentArray"
import whychoosebg from "./images/whychoosebg.png"

function WhyContent() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for Content Advertise 
            Service ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseContentCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseContentCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhyContent
