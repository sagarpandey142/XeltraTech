import React from 'react'
import "./Maintenance.css"
import MaintenanceCard from "../../cards/MaintenanceCard"
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/MaintenanceArray'

function Maintenance() {
  return (
    <>
    <div className='aspect-body'>
        <div className='aspect-box'>

            <div className='box-heading'>
                <div className='header'>Comprehensive <span> Application Maintenance </span> Services 
                to Elevate Your Business</div>
            </div>
            <AnimatedContent>
            <div className='box-content'>
            {data.map((data,index)=>(<MaintenanceCard key={index} head={data.head} para={data.para}/>))}
            </div>
            </AnimatedContent>
        </div>
       
      
    </div>
    </>
  )
}

export default Maintenance
