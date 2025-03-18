import React from 'react'
import "./AboutUI.css"
import AboutUIimg from "./images/AboutUI.svg"

function AboutUI() {
  return (
    <div className='About-body'>
        <div className='About-box'>
                    <div className='About-img'><img src={AboutUIimg}/></div>
                    <div className='About-content'>
                        <div className='About-content-heading-UI'>App <span>Performance</span>  Optimization</div>
                        <div className='About-content-para1'>Mobile app support and maintenance are crucial for ensuring a seamless user experience, security, and optimal performance. After launching an app, continuous monitoring, updates, and improvements are necessary to keep it relevant and functional. Regular maintenance helps in fixing bugs, enhancing security, and updating the app to comply with the latest OS versions and device requirements.</div>

                          <div className='About-content-para2'>Support services include troubleshooting technical issues, addressing user concerns, and ensuring smooth functionality across various devices. App maintenance involves routine updates, performance optimization, and compatibility checks. Security patches are essential to prevent vulnerabilities and data breaches, ensuring user trust and compliance with industry standards</div>


                        <div className='About-content-para3'>Regular updates also improve user engagement by adding new features, enhancing UI/UX, and fixing any glitches. Performance monitoring tools help detect crashes, slowdowns, and compatibility issues, allowing developers to make necessary adjustments.</div>
                    </div>
        </div>
    </div>
  )
}

export default AboutUI
