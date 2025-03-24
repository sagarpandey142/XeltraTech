import React from 'react'
import "./SocialMediaapproach.css"
import SocialMediaApproachCard from '../../cards/SocialMediaCard/SocialMediaApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/SocialMediaArray/SocialMediaApproachArray';

function SocialMediaApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> Social Media </span> Marketing Services </div>
                <SplitText text="Our Social Media Marketing Services help businesses grow through strategic content, audience engagement, paid advertising, and data-driven campaign optimization." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<SocialMediaApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default SocialMediaApproach
