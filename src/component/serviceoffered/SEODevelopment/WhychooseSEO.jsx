import React from 'react'
import "./WhychooseSEO.css"
import WhychooseSEOCard from '../../cards/WhychooseSEOCard'
import {leftdata} from "../../../arraydata/WhychooseSEOArray"
import {rightdata} from "../../../arraydata/WhychooseSEOArray"
import whychoosebg from "./images/whychoosebg.png"

function WhySEO() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for Search Engine Optimization?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseSEOCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseSEOCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhySEO
