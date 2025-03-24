import React from 'react'
import "./WhychooseEcommerceMaintenance.css"
import WhychooseEcommerceMaintenanceCard from '../../cards/EcommerceMaintenanceCard/WhychooseEcommerceMaintenanceCard'
import {leftdata} from "../../../arraydata/EcommerceMaintenanceArray/WhychooseEcommerceMaintenanceArray"
import {rightdata} from "../../../arraydata/EcommerceMaintenanceArray/WhychooseEcommerceMaintenanceArray"
import whychoosebg from "./images/whychoosebg.png"

function WhyEcommerceMaintenance() {
    
  return (
    <>
    <div className='whychooseaws-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for EcommerceMaintenance Gateway Service?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseEcommerceMaintenanceCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseEcommerceMaintenanceCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhyEcommerceMaintenance
