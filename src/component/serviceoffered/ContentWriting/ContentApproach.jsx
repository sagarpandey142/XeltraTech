import React from 'react'
import "./Contentapproach.css"
import ContentApproachCard from '../../cards/ContentCard/ContentApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/ContentArray/ContentApproachArray';

function ContentApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> Content </span> Advertise Service </div>
                <SplitText text="Expert search engine development with Content-friendly architecture, fast indexing, custom algorithms, data security, and scalable solutions for optimal search performance." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<ContentApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default ContentApproach
