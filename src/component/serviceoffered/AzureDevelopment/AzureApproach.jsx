import React from 'react'
import "./Azureapproach.css"
import AzureApproachCard from '../../cards/AzureCard/AzureApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/AzureArray/AzureApproachArray';

function AzureApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> Azure Development </span> Services </div>
                <SplitText text="We provide scalable, secure, and efficient Azure solutions, including cloud migration, app development, DevOps automation, AI integration, and infrastructure management." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<AzureApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default AzureApproach
