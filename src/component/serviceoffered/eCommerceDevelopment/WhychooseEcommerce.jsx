import React from 'react'
import "./WhychooseEcommerce.css"
import WhychooseEcommerceCard from '../../cards/WhychooseEcommerceCard'
import {leftdata} from "../../../arraydata/WhychooseEcommerceArray"
import {rightdata} from "../../../arraydata/WhychooseEcommerceArray"
import whychoosebg from "./images/whychoosebg.png"

function WhychooseWeb() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Should You Choose Custom Web Designing ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseEcommerceCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseEcommerceCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhychooseWeb
