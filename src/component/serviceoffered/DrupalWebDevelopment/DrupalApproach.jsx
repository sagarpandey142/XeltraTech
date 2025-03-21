import React from 'react'
import "./drupalapproach.css"
import DrupalApproachCard from '../../cards/DrupalApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/DrupalApproachArray';

function DrupalApproach() {
  
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our <span>Drupal Website</span> Development Services </div>
                <SplitText text="Cutting-edge Drupal website development solutions that deliver robust performance, seamless user experiences, faster development, cost-effective scalability, and optimal functionality across various devices." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<DrupalApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>
      
    </div>
    </>
  )
}

export default DrupalApproach
