import React from 'react'
import "./approach.css"
import ApproachCard from '../../cards/ApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/ApproachArray';

function Approach() {
  
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our Approach <span>to iOS</span> App Development</div>
                {/* <div className='solution-box-header2'>Cutting-edge hybrid app solutions that blend native performance with cross-platform flexibility, ensuring seamless user experiences, faster development, and cost-effective scalability. </div> */}
                <SplitText text="Cutting-edge iOS app development solutions that combine native performance with seamless user experiences, ensuring faster development, cost-effective scalability, and optimal performance on Apple devices." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">

            {data.map((data,index)=>(<ApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}
                
            </div>
            </AnimatedContent>
        </div>
      
    </div>
    </>
  )
}

export default Approach
