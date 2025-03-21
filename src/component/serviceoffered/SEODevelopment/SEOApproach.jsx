import React from 'react'
import "./SEOapproach.css"
import SEOApproachCard from '../../cards/SEOApproachCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/SEOApproachArray';

function SEOApproach() {
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Our  <span> Search Engine </span> Development Services </div>
                <SplitText text="Expert search engine development with SEO-friendly architecture, fast indexing, custom algorithms, data security, and scalable solutions for optimal search performance." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">
            {data.map((data,index)=>(<SEOApproachCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}     
            </div>
            </AnimatedContent>
        </div>  
    </div>

    </>

  )

}

export default SEOApproach
