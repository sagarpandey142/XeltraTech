import React from 'react'
import "./PHPapproach.css"
import PHPApproachCard from '../../cards/PHPApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/PHPApproachArray';

function PHPApproach() {
  
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> PHP </span> Development Services </div>
                <SplitText text="Cutting-edge PHP Website development solutions that combine native performance with seamless user experiences, ensuring faster development, cost-effective scalability, and optimal performance on various devices." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<PHPApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>
      
    </div>
    </>
  )
}

export default PHPApproach
