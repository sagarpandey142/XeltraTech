import React from 'react'
import "./WhychooseWp.css"
import WhychooseWpCard from '../../cards/WhychooseWpCard'
import {leftdata} from "../../../arraydata/WhychooseWpArray"
import {rightdata} from "../../../arraydata/WhychooseWpArray"
import whychoosebg from "../WebDesign/images/whychoosebg.png"
import whychoosewp from "./images/whychoosewp.png"

function WhychooseWp() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose <span>Xeltratech</span> for <span>WordPress</span> Website 
            Development?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseWpCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseWpCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default WhychooseWp
