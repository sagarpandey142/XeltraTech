import React from 'react'
import "./service.css"

import service1 from "./images/photoshoot.svg"
import service2 from "./images/id.svg"
import service3 from "./images/adobe.svg"
import service4 from "./images/visual-css.svg"
import service5 from "./images/id.svg"
import service6 from "./images/icon-finder.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function Service() {
  return (
    <div className='service-body'>
        <div className='service-box'>
                <AnimatedContent>
            <div className='service-box1'>
                <div className='service-box1-heading'>
                    <div className='service-box1-heading1'><p>Our <span>Responsive Website</span> Design</p>
                    <p>Service</p></div>
                    <div className='service-box1-heading2'>We offer professional graphics and web design services, creating visually stunning, user-friendly designs that enhance brand identity. From logos, brochures, and social media graphics to responsive websites, we ensure creativity, functionality, and seamless user experiences tailored to your business needs.</div>
                </div>


                <div className='service-box1-content1'>
                  <div className='content1-image'>
                    <img src={service1}/>
                  </div>
                  <div className='content1-head'>
                    <p>Mobile-First Approach</p>
                  </div>
                  <div className='content1-head1'>
                    <p> We design for mobile users first, ensuring smooth navigation, fast load times, and an engaging experience across all devices.</p>
                  </div>
                </div>

                 <div className='service-box1-content1'>
                  <div className='content1-image'>
                    <img src={service2}/>
                  </div>
                  <div className='content1-head'>
                    <p>Flexible & Adaptive Layouts</p>
                  </div>
                  <div className='content1-head1'>
                    <p>Our designs use fluid grids and media queries, making websites adjust perfectly to different screen sizes and resolutions.</p>
                  </div>
                </div>
                
            </div>
            </AnimatedContent>
            <AnimatedContent>

            <div className='service-box2'>

              <div className='service-box1-content1'>
                  <div className='content1-image'>
                    <img src={service3}/>
                  </div>
                  <div className='content1-head'>
                    <p>Optimized Performance</p>
                  </div>
                  <div className='content1-head1'>
                    <p>We optimize images, scripts, and caching techniques to improve speed, reduce load times, and enhance user experience.</p>
                  </div>
                </div>

              <div className='service-box1-content1'>
                  <div className='content1-image'>
                    <img src={service4}/>
                  </div>
                  <div className='content1-head'>
                    <p>SEO-Friendly Design</p>
                  </div>
                  <div className='content1-head1'>
                    <p>Our responsive websites follow SEO best practices, helping improve search rankings and increasing organic traffic for better online visibility.</p>
                  </div>
                </div>

              <div className='service-box1-content1'>
                  <div className='content1-image'>
                    <img src={service5}/>
                  </div>
                  <div className='content1-head'>
                    <p>Touch-Friendly Navigation</p>
                  </div>
                  <div className='content1-head1'>
                    <p>We implement easy-to-use menus, large buttons, and intuitive layouts to provide a seamless experience for touchscreen users.</p>
                  </div>
                </div>

              <div className='service-box1-content1'>
                  <div className='content1-image'>
                    <img src={service6}/>
                  </div>
                  <div className='content1-head'>
                    <p>Cross-Browser &Device Testing</p>
                  </div>
                  <div className='content1-head1'>
                    <p>We rigorously test websites across multiple browsers and devices to ensure flawless functionality and design consistenc</p>
                  </div>
                </div>
            </div>
            </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Service
