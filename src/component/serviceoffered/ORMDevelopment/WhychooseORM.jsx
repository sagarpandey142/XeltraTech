import React from 'react'
import "./WhychooseORM.css"
import WhychooseORMCard from '../../cards/ORMCard/WhychooseORMCard'
import {leftdata} from "../../../arraydata/ORMArray/WhychooseORMArray"
import {rightdata} from "../../../arraydata/ORMArray/WhychooseORMArray"
import whychoosebg from "./images/whychoosebg.png"

function WhyORM() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for ORM Advertise 
            Service ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseORMCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseORMCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhyORM
