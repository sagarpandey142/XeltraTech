import React from 'react'
import "./about.css"
import Aboutlogo from "./images/responsive-abt.png"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-img'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'> Ensuring a <span>Seamless</span> Experience Across All Devices</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Responsive design ensures that a website adapts seamlessly to different screen sizes, providing an optimal user experience across devices. Whether viewed on a desktop, tablet, or smartphone, a responsive website adjusts its layout, images, and content dynamically for better readability and navigation.
                            A key benefit of responsive design is improved user engagement. Visitors stay longer on a site that functions smoothly without zooming or excessive scrolling. It also enhances SEO, as search engines prioritize mobile-friendly websites in rankings. Faster loading speeds and efficient performance contribute to lower bounce rates and higher conversions.
                            Businesses benefit from responsive design by maintaining a consistent brand experience, reducing development costs, and avoiding the need for separate mobile sites. With an increasing number of users accessing the web from mobile devices, responsive design is essential for staying competitive. </div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
