import React from 'react'
import './offerings.css'
import mobileapp from "./images/touch-screen.gif"
import webdesign from "./images/logo-design.gif"
import advertising from "./images/advertising.gif"
import webdeveloper from "./images/web-developer.gif"
import OfferingsCards from '../cards/OfferingsCards'
import AnimatedContent from "../SingleComponents/AnimatedContent"

function Offerings() {

  const data=[
          {
              icon:mobileapp,
              head:"Mobile App Development",
              link1:"Mobile App UI/UX Design",  url1:"/Servicewedo/MobileUI",
              link2:"Hybrid App Development", url2:"/Servicewedo/HybridAppDevelopment",
              link3:"Android Apps Development",  url3:"/ContactUs",
              link4:"IOS Application Development", url4:"/ContactUs",
              link5:"App Support And Maintenance",  url5:"/ContactUs",
          },
          {
              icon:webdesign,
              head:"Website & UI/UX Design",
              link1:"Logo Design", url1:"/Servicewedo/LogoDesign",
              link2:"React Design",
              link3:"Graphic Design", url3:"/Servicewedo/GraphicDesign",
              link4:"Custom Web Design",
              link5:"Responsive + Website Design"
          },
          {
              icon:advertising,
              head:"Website Development",
              link1:"PHP Development",
              link2:"Drupal Development",
              link3:"Interspire Development",
              link4:"Wordspress Development",
              link5:"E-commerce Development"
          },
          {
              icon:webdeveloper,
              head:"Digital Marketing & Ads",
              link1:"Seo Consulting",
              link2:"PPC Advertising",
              link3:"Content Writing",
              link4:"Social Media Marketing",
              link5:"Online Reputation Management"
          },
          {
              icon:mobileapp,
              head:"Mobile Platform migration",
              link1:"IOS Application Development",
              link2:"Android Apps Development",
              link3:"Windows Apps Development",
              link4:"App Support And Maintenance",
              link5:"App Marketing Services"
          },
          {
              icon:mobileapp,
              head:"Mobile App Development",
              link1:"IOS Application Development",
              link2:"Android Apps Development",
              link3:"Windows Apps Development",
              link4:"App Support And Maintenance",
              link5:"App Marketing Services" 
          }
      ]

  return (
    <>
    <div className='offerings-body'>
    <div class="offerings-box">
    <div class="offerings-box-header">
          <div className="offerings-box-header1 ">
            WHAT SERVICES <span> WE OFFER </span></div>
          <div className="offerings-box-header2">We provide responsive web design, software development, digital marketing, SEO, e-commerce solutions, app development, and secure IT services.</div>
        </div>
        <AnimatedContent>
        <div className="offerings-box-content">
        

        {
        data.map((data,index)=>(
        <OfferingsCards key={index} icon={data.icon} head={data.head} link1={data.link1} url1={data.url1} url2={data.url2} url3={data.url3} url4={data.url4} url5={data.url5}
                             link2={data.link2} link3={data.link3} link4={data.link4} link5={data.link5}/>
            ))
          }

        </div>
        </AnimatedContent>
        </div>
      </div>
      </>
  )
}
export default Offerings