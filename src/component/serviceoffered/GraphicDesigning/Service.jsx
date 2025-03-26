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
    <div className='gd-service-body'>
        <div className='gd-service-box'>
                <AnimatedContent>
            <div className='gd-service-box1'>
                <div className='gd-service-box1-heading'>
                    <div className='gd-service-box1-heading1'><p><span> Graphics</span> & </p>
                    <p>Web Design Services</p></div>
                    <div className='gd-service-box1-heading2'>We offer professional graphics and web design services, creating visually stunning, user-friendly designs that enhance brand identity. From logos, brochures, and social media graphics to responsive websites, we ensure creativity, functionality, and seamless user experiences tailored to your business needs.</div>
                </div>


                <div className='gd-service-box1-content1'>
                  <div className='gd-content1-image'>
                    <img src={service1}/>
                  </div>
                  <div className='gd-content1-head'>
                    <p>ADOBE PHOTOSHOP</p>
                  </div>
                  <div className='gd-content1-head1'>
                    <p>A powerful tool for image editing, manipulation, and graphic design, essential for creating stunning visuals, web elements, and marketing materials.</p>
                  </div>
                </div>

                 <div className='gd-service-box1-content1'>
                  <div className='gd-content1-image'>
                    <img src={service2}/>
                  </div>
                  <div className='gd-content1-head'>
                    <p>ADOBE INDESIGN</p>
                  </div>
                  <div className='gd-content1-head1'>
                    <p>Ideal for designing professional layouts, brochures, magazines, and digital publications with precise typography, grids, and advanced formatting features.</p>
                  </div>
                </div>
                
            </div>
            </AnimatedContent>
            <AnimatedContent>

            <div className='gd-service-box2'>

              <div className='gd-service-box1-content1'>
                  <div className='gd-content1-image'>
                    <img src={service3}/>
                  </div>
                  <div className='gd-content1-head'>
                    <p>ADOBE CREATIVE SUITE</p>
                  </div>
                  <div className='gd-content1-head1'>
                    <p>A comprehensive collection of design tools, including Photoshop, Illustrator, and InDesign, enabling seamless creativity for web and graphic design projects.</p>
                  </div>
                </div>

              <div className='gd-service-box1-content1'>
                  <div className='gd-content1-image'>
                    <img src={service4}/>
                  </div>
                  <div className='gd-content1-head'>
                    <p>VISUAL CSS TOOLS</p>
                  </div>
                  <div className='gd-content1-head1'>
                    <p>Enhance web design with intuitive CSS generators, live previews, and customization options for responsive, visually appealing layouts.</p>
                  </div>
                </div>

              <div className='gd-service-box1-content1'>
                  <div className='gd-content1-image'>
                    <img src={service5}/>
                  </div>
                  <div className='gd-content1-head'>
                    <p>INDESIGN SECRETS</p>
                  </div>
                  <div className='gd-content1-head1'>
                    <p>A resourceful platform offering expert tips, tutorials, and industry insights to maximize efficiency and creativity in Adobe InDesign.</p>
                  </div>
                </div>

              <div className='gd-service-box1-content1'>
                  <div className='gd-content1-image'>
                    <img src={service6}/>
                  </div>
                  <div className='gd-content1-head'>
                    <p>ICON FINDER</p>
                  </div>
                  <div className='gd-content1-head1'>
                    <p>A vast library of high-quality icons, perfect for enhancing websites, apps, and graphic designs with visually appealing elements.</p>
                  </div>
                </div>
            </div>
            </AnimatedContent>
        </div>
      
    </div>
  )
}

export default Service
