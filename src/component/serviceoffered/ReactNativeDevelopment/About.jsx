import React from 'react'
import "./About.css"
import Aboutlogo from "./images/react-about-img.png"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='react-about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About React JS Development</div>
                        <AnimatedContent>
                        <div className='about-content-para1'><p>React JS is a powerful framework for building cross-platform mobile applications using a single codebase for both iOS and Android. Developed by Facebook, it enables faster development, cost efficiency, and a native-like user experience. With React Native, developers write code in JavaScript and leverage reusable components, ensuring smooth performance across different devices.</p>
                            <p>The framework’s hot-reloading feature speeds up development by instantly reflecting code changes without rebuilding the entire app. It integrates seamlessly with native modules, enabling access to device features like cameras, GPS, and push notifications. Popular libraries such as Redux and React Navigation enhance state management and app navigation.
                            Businesses prefer React JS for its scalability, faster time-to-market, and lower development costs. It is widely used by top companies like Instagram, Airbnb, and Uber Eats.</p></div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
