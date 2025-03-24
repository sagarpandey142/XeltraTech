import React from 'react'
import "./casapproach.css"
import CASApproachCard from '../../cards/CASCard/CASApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/CASArray/CASApproachArray';

function CASApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span>Cloud</span> Automation Service </div>
                <SplitText text="We provide end-to-end cloud automation solutions, optimizing infrastructure, enhancing scalability, improving security, and streamlining workflows for efficiency." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<CASApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default CASApproach
