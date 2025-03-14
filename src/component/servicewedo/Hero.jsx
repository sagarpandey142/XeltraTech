import React from 'react'
import './hero.css'
import banner from './images/banner.jpg'
import SplitText from '../SingleComponents/SplitText';
function Hero() {
  return (
    <div className='hero-body'>
            <img src={banner}/>
            <div className='hero-box'>
              <SplitText text="Services We Offer" className="hero-box-heading1" delay={50}/>
            </div>
        </div>
  )
}

export default Hero

