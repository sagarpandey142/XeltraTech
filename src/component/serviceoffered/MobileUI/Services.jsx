import React from 'react'
import "./services.css"

import MobileUIServices from '../../cards/MobileUIServices'
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/MobileUIServicesArray'

function Services() {
    
  return (
    <>
    <div className='services-body '>
        <div className='services-box'>
        <div className='services-heading'>SERVICES <span>WE’RE</span> PROVIDING</div>
        <div className='services-content'>
            <AnimatedContent>
            <div className='services-content-box'>

            {data.map((data,index)=>(<MobileUIServices key={index} logo={data.logo} heading={data.heading} para={data.para}/>))}
            </div>
            </AnimatedContent>
        </div>
        </div>
    </div>
    </>
  )
}

export default Services
