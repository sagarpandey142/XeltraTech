import React from 'react'
import './Hero.css'
import banner from "./images/banner.svg"
import SplitText from '../../SingleComponents/SplitText';
function Hero() {
  return (
    <div>
      <div className="hero-body">
                    <img src={banner}/>
                    <div className=' hero-box'>
                      <SplitText text="Android App Development" className="hero-box-heading1" delay={50}/>
                    </div>
                </div>
    </div>
  )
}

export default Hero
