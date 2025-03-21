import React from 'react'
import "./WhychooseDrupal.css"
import WhychooseWebCard from '../../cards/WhychooseDrupalCard'
import {leftdata} from "../../../arraydata/WhychooseDrupalArray"
import {rightdata} from "../../../arraydata/WhychooseDrupalArray"
import whychoosebg from "../WebDesign/images/whychoosebg.png"

function WhychooseWeb() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose <span>Xeltratech</span> for <span>Drupal</span> Website 
            Development?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseWebCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseWebCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhychooseWeb
