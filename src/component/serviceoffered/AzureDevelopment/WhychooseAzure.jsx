import React from 'react'
import "./WhychooseAzure.css"
import WhychooseAzureCard from '../../cards/AzureCard/WhychooseAzureCard'
import {leftdata} from "../../../arraydata/AzureArray/WhychooseAzureArray"
import {rightdata} from "../../../arraydata/AzureArray/WhychooseAzureArray"
import whychoosebg from "./images/whychoosebg.png"

function WhyAzure() {
    
  return (
    <>
    <div className='whychooseazure-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for Azure Advertise 
            Service ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseAzureCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseAzureCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhyAzure
