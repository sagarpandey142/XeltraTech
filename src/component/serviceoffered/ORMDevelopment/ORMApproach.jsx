import React from 'react'
import "./ORMapproach.css"
import ORMApproachCard from '../../cards/ORMCard/ORMApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/ORMArray/ORMApproachArray';

function ORMApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> Online Reputation </span> Management Service </div>
                <SplitText text="We protect, enhance, and monitor your brand’s online presence with strategic reputation management, review handling, and crisis response solutions" className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<ORMApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default ORMApproach
