import React from 'react'
import "./Aboutazure.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-imga'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Azure Development</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Azure Development refers to the process of building, deploying, and managing applications and services using Microsoft Azure, a cloud computing platform. It provides a wide range of tools, frameworks, and services for web applications, AI, IoT, DevOps, and enterprise solutions. Azure supports multiple programming languages, including .NET, Java, Python, and Node.js, allowing developers to create scalable and secure applications. Key Azure services include Azure App Services for web hosting, Azure Functions for serverless computing, and Azure DevOps for CI/CD automation. With Azure Virtual Machines and Kubernetes Service (AKS), businesses can run and manage cloud infrastructure efficiently. Security and compliance are top priorities in Azure, offering built-in security, identity management, and compliance tools to protect data and applications. Its pay-as-you-go pricing and global data centers make it a cost-effective and scalable solution for businesses of all sizes.</div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
