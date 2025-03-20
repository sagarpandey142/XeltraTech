import React from 'react'
import "../Homepage/style.css"
import AnimatedContent from '../SingleComponents/AnimatedContent'
function ServicesCards({icon,head,para}) {
  return (
    <AnimatedContent>
                            <div className='box-bottom-content'>
                                <div className='box-bottom-content-logo'>{icon}</div>
                                <div className='box-bottom-content-heading'>{head}</div>
                                <div className='box-bottom-content-para'>{para}</div>
                            </div>
    </AnimatedContent>
  )
}

export default ServicesCards
