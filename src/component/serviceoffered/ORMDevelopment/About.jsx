import React from 'react'
import "./About.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Online Reputation Management</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Online Reputation Management (ORM) is the process of monitoring, influencing, and improving how a brand or individual is perceived online. It involves managing reviews, social media presence, search engine results, and overall digital credibility. Key ORM strategies include proactive reputation building, responding to negative feedback, and promoting positive content. Businesses use ORM to handle customer reviews on platforms like Google, Trustpilot, and social media, ensuring a strong brand image. Search Engine Optimization (SEO) plays a crucial role in ORM by pushing positive content higher in search results while suppressing negative or misleading information. Crisis management is also essential, addressing issues swiftly to maintain trust. Benefits of ORM include increased customer trust, higher sales, and a competitive edge. </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
