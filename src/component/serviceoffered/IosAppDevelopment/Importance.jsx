import React from 'react'
import "./importance.css"
import ImportanceCard from "../../cards/ImportanceCard"
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/importanceArray'


function Importance() {
    
  return (
    <>
    <div className='aspect-body'>
        <div className='aspect-box'>

            <div className='box-heading'>
                <div className='header'>Importance of <span>iOS App Development</span></div>
                <div className='para'>Mastering iOS App Development: Essential Elements for Building a High-Performance, Engaging, and Scalable Mobile Experience</div>
            </div>
            <AnimatedContent>
            <div className='box-content'>
            {data.map((data,index)=>(<ImportanceCard key={index} head={data.head} para={data.para}/>))}
            </div>
            </AnimatedContent>
        </div>
       
      
    </div>
    </>
  )
}

export default Importance
