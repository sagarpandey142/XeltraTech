import React from 'react'
import "./InterspireNeeds.css"
import bodyimage from "./images/bodyimage.svg"

function InterspireNeeds() {
  return (
    <div className='needs-body'>
        <div className='needs-box'>
            <div className="needs-heading"><span className='text-[64px] text-red-500'>I</span>nterspire Customization Tailored to Your Business Needs</div>
            <div className="needs-content">
                <div className='needs-para'>
                    <div className="needs-para1">Interspire is a powerful e-commerce and email marketing platform, but every business has unique requirements. Our Interspire customization services ensure your platform is tailored to match your specific business goals, improving functionality and user experience.</div>
                    <div className="needs-para1">We specialize in custom module development, theme customization, API integrations, and performance optimization to enhance your Interspire store or email marketing system. Whether you need custom checkout flows, advanced reporting, or seamless third-party integrations, we develop solutions that align perfectly with your operations</div>
                    <div className="needs-para1">Our team ensures scalability, security, and responsiveness, making your Interspire platform more efficient and user-friendly. From UI enhancements to backend modifications, we deliver a seamless experience that maximizes productivity and conversions.</div>
                </div>
                <img src={bodyimage}/>
                </div>
        </div>
      
    </div>
  )
}

export default InterspireNeeds
