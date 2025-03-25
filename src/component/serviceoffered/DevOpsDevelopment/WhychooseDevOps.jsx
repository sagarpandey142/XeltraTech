import React from 'react'
import "./WhychooseDevOps.css"
import WhychooseDevOpsCard from '../../cards/DevOpsCard/WhychooseDevOpsCard'
import {leftdata} from "../../../arraydata/DevOpsArray/WhychooseDevOpsArray"
import {rightdata} from "../../../arraydata/DevOpsArray/WhychooseDevOpsArray"
import whychoosebg from "./images/cms-choose.jpg"

function WhychooseDevOps() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose <span>Xeltratech</span> for <span>Devops</span> Development?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseDevOpsCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseDevOpsCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default WhychooseDevOps
