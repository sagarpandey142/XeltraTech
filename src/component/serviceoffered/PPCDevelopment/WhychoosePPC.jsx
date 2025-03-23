import React from 'react'
import "./WhychoosePPC.css"
import WhychoosePPCCard from '../../cards/PPCCard/WhychoosePPCCard'
import {leftdata} from "../../../arraydata/PPCArray/WhychoosePPCArray"
import {rightdata} from "../../../arraydata/PPCArray/WhychoosePPCArray"
import whychoosebg from "./images/whychoosebg.png"

function WhyPPC() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for PPC Advertise 
            Service ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychoosePPCCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychoosePPCCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhyPPC
