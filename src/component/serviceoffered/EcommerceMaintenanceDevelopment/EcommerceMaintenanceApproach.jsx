import React from 'react'
import "./EcommerceMaintenanceapproach.css"
import EcommerceMaintenanceApproachCard from '../../cards/EcommerceMaintenanceCard/EcommerceMaintenanceApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/EcommerceMaintenanceArray/EcommerceMaintenanceApproachArray';

function EcommerceMaintenanceApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> E-Commerce Maintenance </span> Services </div>
                <SplitText text="We provide secure, seamless, and scalable payment gateway integration, supporting multiple payment methods, fraud prevention, and real-time transaction processing." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<EcommerceMaintenanceApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default EcommerceMaintenanceApproach
