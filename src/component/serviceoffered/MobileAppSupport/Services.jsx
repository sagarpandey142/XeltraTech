import React from 'react'
import "./Appservices.css"

import MaintenanceServices from '../../cards/MaintenanceServiceCard'
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/MaintenanceServicesArray'

function Services() {
    
  return (
    <>
    <div className='services-body'>
        <div className='services-box'>
        <div className='services-heading'>Transform <span>Your Business</span> with Our Android Application Development Services</div>
        <div className='services-content'>
            <AnimatedContent>
            <div className='services-content-box'>

            {data.map((data,index)=>(<MaintenanceServices key={index} logo={data.logo} heading={data.heading} para={data.para}/>))}
            </div>
            </AnimatedContent>
        </div>
        </div>
    </div>
    </>
  )
}

export default Services
