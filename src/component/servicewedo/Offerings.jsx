import React from 'react'
import './offerings.css'
import mobileapp from "./images/touch-screen.gif"
import webdesign from "./images/logo-design.gif"
import advertising from "./images/advertising.gif"
import webdeveloper from "./images/web-developer.gif"
import cloud from "./images/cloud.gif"
import Ecommerce from "./images/Ecommerce.gif"
import OfferingsCards from '../cards/OfferingsCards'
import AnimatedContent from "../SingleComponents/AnimatedContent"

function Offerings() {

  const data=[
          {
              icon:mobileapp,
              head:"Mobile App Development",
              link1:"Mobile App UI/UX Design",  url1:"/Servicewedo/MobileUI",
              link2:"Hybrid App Development", url2:"/Servicewedo/HybridAppDevelopment",
              link3:"Android Apps Development",  url3:"/Servicewedo/AndroidAppDevelopment",
              link4:"IOS Application Development", url4:"/Servicewedo/IosAppDevelopment",
              link5:"App Support And Maintenance",  url5:"/Servicewedo/MobileAppSupport",
          },
          {
              icon:webdesign,
              head:"Website & UI/UX Design",
              link1:"Logo Design", url1:"/Servicewedo/LogoDesign",
              link2:"React Design", url2:"/Servicewedo/ReactNativeDevelopment",
              link3:"Graphic Design", url3:"/Servicewedo/GraphicDesign",
              link4:"Custom Web Design", url4:"/Servicewedo/WebDesign",
              link5:"Responsive + Website Design", url5:"/Servicewedo/ResponsiveDesign",
          },
          {
              icon:advertising,
              head:"Website Development",
              link1:"PHP Development",  url1:"/Servicewedo/PHPDevelopment",
              link2:"Drupal Development", url2:"/Servicewedo/DrupalWebDevelopment",
              link3:"Interspire Development", url3:"/Servicewedo/InterspireDevelopment",
              link4:"Wordspress Development", url4:"/Servicewedo/WordPressDevelopment",
              link5:"E-commerce Development", url5:"/Servicewedo/eCommerceDevelopment",
          },
          {
              icon:webdeveloper,
              head:"Digital Marketing & Ads",
              link1:"Seo Consulting", url1:"/Servicewedo/SEODevelopment",
              link2:"PPC Advertising", url2:"/Servicewedo/PPCDevelopment",
              link3:"Content Writing", url3:"/Servicewedo/ContentWriting",
              link4:"Social Media Marketing", url4:"/Servicewedo/SocialMediaMarketing",
              link5:"Online Reputation Management", url5:"/Servicewedo/ORMDevelopment",
          },
          {
              icon:cloud,
              head:"Cloud Services",
              link1:"Cloud Automation Services", url1:"/Servicewedo/CloudAutomationServices",
              link2:"Cloud Migration Services", url2:"/ContactUs",
              link3:"DevOps Development", url3:"/ContactUs",
              link4:"AZURE Development", url4:"/Servicewedo/AzureDevelopment",
              link5:"AWS Development", url5:"/Servicewedo/AWSDevelopment",
          },
          {
              icon:Ecommerce,
              head:"E-commerce Solutions",
              link1:"Payment Gateway", url1:"/Servicewedo/PaymentGateway",
              link2:"E-commerce maintenance", url2:"/ContactUs",
              link3:"Seo & Digital Marketing", url3:"/ContactUs",
              link4:"Custom E-commerce Website", url4:"/ContactUs",
              link5:"Subscription Based E-commerce", url5:"/ContactUs", 
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