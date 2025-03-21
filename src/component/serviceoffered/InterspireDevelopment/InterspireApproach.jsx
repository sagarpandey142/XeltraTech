import React from 'react'
import "./Interspireapproach.css"
import InterspireApproachCard from '../../cards/InterspireApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/InterspireApproachArray';

function InterspireApproach() {
  
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> Interspire </span> Development Services </div>
                <SplitText text="Cutting-edge Interspire Website development solutions that combine native performance with seamless user experiences, ensuring faster development, cost-effective scalability, and optimal performance on various devices." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<InterspireApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>
      
    </div>
    </>
  )
}

export default InterspireApproach
