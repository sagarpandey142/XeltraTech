import React from 'react'
import "./About.css"
import Aboutlogo from "./images/Ios-about.jpg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About iOS Development</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Graphic design is more than just creating visuals; it is a powerful tool for communication that blends creativity, strategy, and technology. It plays a vital role in branding, marketing, and user experience by transforming ideas into compelling visuals that captivate audiences. From logos and brochures to social media graphics and website layouts, graphic design enhances the way businesses communicate their message and connect with their target audience.
                        A well-designed graphic is not just about aesthetics; it conveys emotions, builds trust, and strengthens brand identity. Every color, font, shape, and image used in a design has a purpose, influencing how people perceive a brand or message. Whether it’s designing a logo that symbolizes a company’s vision or crafting an engaging social media post, graphic design ensures consistency and professionalism across all platforms.The design process begins with understanding the brand, its audience, and the goals of the project. Research and brainstorming lead to conceptualizing ideas that align with the client’s vision. </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
