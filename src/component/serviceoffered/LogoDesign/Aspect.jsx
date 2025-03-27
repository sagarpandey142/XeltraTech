import React from 'react'
import "./aspect.css"
import AspectCard from "../../cards/AspectCard"
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/AspectArray'


function Aspect() {
    
  return (
    <>
    <div className='ld-aspect-body'>
        <div className='ld-aspect-box'>

            <div className='ld-box-heading'>
                <div className='ld-header'><span>Important Aspect</span> Of Logo Desigining</div>
                <div className='ld-para'>Mastering Logo Design: Essential Elements for Creating a Powerful, Memorable, and Timeless Brand Identity</div>
            </div>
            <AnimatedContent>
            <div className='ld-box-content'>
            {data.map((data,index)=>(<AspectCard key={index} head={data.head} para={data.para}/>))}
            </div>
            </AnimatedContent>
        </div>
       
      
    </div>
    </>
  )
}

export default Aspect
