import React from 'react'
import "./Tools.css"
import photoshop from "./images/photoshop.svg"
import figma from "./images/figma.svg"
import illustrator from "./images/illustrator.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function Tools() {
  return (
    <div className='tools-body '>
        <div className='tools-box'>
            <div className='tools-header'>Mobile App  <span> UI Design </span> Tools</div>
              <AnimatedContent>
            <div className='tools-content'>
                <div className='content-box'><div className='box-image'><img src={photoshop}/></div><div className='image-name'>Photoshop</div></div>
                <div className='content-box'><div className='box-image'><img className='image2' src={figma}/></div><div className='image-name'>Figma</div></div>
                <div className='content-box'><div className='box-image'><img className='image3' src={illustrator}/></div><div className='image-name'>Illustrator</div></div>
            </div>
                </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Tools
