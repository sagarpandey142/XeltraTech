import React from 'react'
import "./ourservices.css"
import frame12 from "./images/Frame 12.svg"

function OurServices() {
  return (
    <>
        <div className='our-services-bodyy'>
          <div className='our-sevices-img'>
            <img src={frame12} />
          </div>
        </div>

        
        <div className='services'>
            <div className='our-services'>
                <h1>Our <span>Services</span></h1>
            </div>
            <div className='our-services-head'>
                <p>We offer top-notch solutions to elevate your brand and business.</p>
            </div>
            <div className='our-services1'>
                <div className='our-services-head1'>
                    <div className='service1'>
                        <div className='heading1'>
                            <p>Illustration & Infographics</p>
                        </div>
                        <div className='heading2'>
                            <p>Transforming complex ideas into clear, visually engaging illustrations and infographics that make information accessible and interesting.</p>
                        </div>
                    </div>

                    <div className='service2'>
                        <div className='heading1'>
                            <p>Digital & Web Graphics</p>
                        </div>
                        <div className='heading2'>
                            <p>Creating eye-catching graphics for websites, social media platforms, and digital advertisements that drive engagement and boost your online presence.</p>
                        </div>
                    </div>
                </div>

                <div className='our-services-head2'>
                    <div className='service1'>
                        <div className='heading1'>
                            <p>Marketing Collateral</p>
                        </div>
                        <div className='heading2'>
                            <p>Designing brochures, flyers, business cards, posters, and more to ensure your marketing materials stand out and effectively communicate your message.</p>
                        </div>
                    </div>

                    <div className='service2'>
                        <div className='heading1'>
                            <p>Packaging Design</p>
                        </div>
                        <div className='heading2'>
                            <p>Developing packaging that not only protects your product but also enhances shelf appeal and tells your brand story.</p>
                        </div>
                    </div>
                </div>

                <div className='our-services-head3'>
                    <div className='service1'>
                        <div className='heading1'>
                            <p>Logo Design & Branding:</p>
                        </div>
                        <div className='heading2'>
                            <p>Crafting unique logos and comprehensive branding systems that capture the essence of your business. We focus on developing identities that are both memorable and meaningful.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurServices
