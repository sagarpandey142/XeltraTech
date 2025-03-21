import React from 'react'
import "./eCommerceapproach.css"
import ECommerceApproachCard from '../../cards/eCommerceApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/eCommerceApproachArray';

function eCommerceApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> eCommerce </span> Development Services </div>
                <SplitText text="Custom eCommerce development with secure payments, fast performance, third-party integrations, and ongoing support for scalable, high-converting online stores." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<ECommerceApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default eCommerceApproach
