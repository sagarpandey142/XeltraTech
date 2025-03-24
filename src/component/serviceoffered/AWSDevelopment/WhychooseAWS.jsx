import React from 'react'
import "./WhychooseAWS.css"
import WhychooseAWSCard from '../../cards/AWSCard/WhychooseAWSCard'
import {leftdata} from "../../../arraydata/AWSArray/WhychooseAWSArray"
import {rightdata} from "../../../arraydata/AWSArray/WhychooseAWSArray"
import whychoosebg from "./images/whychoosebg.png"

function WhyAWS() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for AWS Development 
            Service ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseAWSCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseAWSCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhyAWS
