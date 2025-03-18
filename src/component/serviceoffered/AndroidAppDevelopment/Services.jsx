import React from 'react'
import "./AppMaintenanceservices.css"

import AppMaintenanceServices from '../../cards/AppMaintenanceServiceCard'
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/AppMaintenanceServicesArray'

function Services() {
    
  return (
    <>
    <div className='services-body'>
        <div className='services-box'>
        <div className='services-heading'>Why <span> Androids </span> Application ?</div>
        <div className='services-content'>
            <AnimatedContent>
            <div className='services-content-box'>

            {data.map((data,index)=>(<AppMaintenanceServices key={index} logo={data.logo} heading={data.heading} para={data.para}/>))}
            </div>
            </AnimatedContent>
        </div>
        </div>
    </div>
    </>
  )
}

export default Services
