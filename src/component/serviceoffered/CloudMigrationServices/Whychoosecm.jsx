import React from 'react'
import "./Whychoosecm.css"
import WhychoosecmCard from '../../cards/CMSCard/WhychoosecmCard'
import {leftdata} from "../../../arraydata/CMSArray/WhychoosecmArray"
import {rightdata} from "../../../arraydata/CMSArray/WhychoosecmArray"
import whychoosebg from "./images/cms-choose.jpg"

function Whychoosecm() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose <span>Xeltratech</span> for <span>Cloud Migration?</span></div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychoosecmCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychoosecmCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Whychoosecm
