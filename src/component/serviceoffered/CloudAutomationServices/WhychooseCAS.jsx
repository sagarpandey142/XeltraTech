import React from 'react'
import "./WhychooseCAS.css"
import WhychooseCASCard from '../../cards/CASCard/WhychooseCASCard'
import {leftdata} from "../../../arraydata/CASArray/WhychooseCASArray"
import {rightdata} from "../../../arraydata/CASArray/WhychooseCASArray"
import whychoosebg from "./images/whychoosebg.png"

function WhyCAS() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for Cloud
            Automation? </div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseCASCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseCASCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhyCAS
