import React from 'react'
import "./PPCapproach.css"
import PPCApproachCard from '../../cards/PPCCard/PPCApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/PPCArray/PPCApproachArray';

function PPCApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> PPC </span> Advertise Service </div>
                <SplitText text="Maximize your ROI with targeted PPC campaigns, optimized ads, and data-driven strategies for higher traffic, leads, and conversions." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<PPCApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default PPCApproach
