import React from 'react'
import "./WhychooseWeb.css"
import WhychooseWebCard from '../../cards/WhychooseWebCard'
import {leftdata} from "../../../arraydata/WhychooseWebArray"
import {rightdata} from "../../../arraydata/WhychooseWebArray"
import whychoosebg from "./images/whychoosebg.png"

function WhychooseWeb() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Should You Choose Custom Web Designing ?</div>
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
