import React from 'react'
import "./about.css"
import Aboutlogo from "./images/about-cloud.png"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-imgca'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About Cloud Automation Services</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>Cloud automation services streamline cloud infrastructure management by eliminating manual tasks and improving efficiency. Businesses use automation to deploy, configure, monitor, and scale cloud resources with minimal human intervention.</div>
                        <div className='about-content-para2'>Key components include Infrastructure as Code (IaC) tools like Terraform and CloudFormation, which automate provisioning. CI/CD pipelines enable faster software deployment, while auto-scaling adjusts resources based on demand, optimizing performance and cost. Security automation ensures compliance with real-time monitoring and automated threat detection. Self-healing mechanisms resolve system failures automatically, ensuring uptime.</div> 
                        <div className='about-content-para3'>The benefits of cloud automation include reduced operational costs, improved scalability, enhanced security, and faster deployment cycles. It also helps businesses achieve high availability and disaster recovery through automated backups and failover systems.</div>  
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
