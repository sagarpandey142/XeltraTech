import React from 'react'
import "./about.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-imgp'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Payment Gateway</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>A payment gateway is a technology that enables secure online transactions by authorizing and processing payments between customers and merchants. It acts as a bridge between e-commerce websites, mobile apps, and financial institutions, ensuring smooth and encrypted money transfers. Payment gateways support multiple payment methods, including credit/debit cards, digital wallets, UPI, and net banking. They use encryption and tokenization to protect sensitive customer data, ensuring compliance with security standards like PCI-DSS. Popular payment gateways include PayPal, Stripe, Razorpay, and Square, offering seamless checkout experiences. Businesses benefit from fast transactions, fraud detection, and automated payment processing, enhancing customer trust and operational efficiency. A reliable payment gateway reduces cart abandonment, improves cash flow, and enables global transactions.</div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
