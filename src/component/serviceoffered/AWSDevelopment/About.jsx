import React from 'react'
import "./about.css"
import Aboutlogo from "./images/AboutPHP.svg"
import AnimatedContent from "../../SingleComponents/AnimatedContent"

function About() {
  return (
    <div className='about-body'>
        <div className='about-box'>
                    <div className='about-imga'><img src={Aboutlogo}/></div>
                    <div className='about-content'>
                        <div className='about-content-heading'>Everything <span>You Need</span> to Know About AWS Development</div>
                        <AnimatedContent>
                        <div className='about-content-para1'>AWS Development refers to designing, building, and deploying applications using Amazon Web Services (AWS), the leading cloud computing platform. AWS provides a vast range of cloud services, including computing power, storage, databases, AI, security, and DevOps tools, enabling businesses to create scalable, secure, and high-performance applications. With AWS, developers can leverage services like EC2 for computing, S3 for storage, RDS for managed databases, and Lambda for serverless computing. AWS also supports DevOps automation with tools like AWS CodePipeline, CloudFormation, and Elastic Beanstalk, streamlining software development and deployment. Security is a key focus, with IAM, encryption, and compliance ensuring robust data protection. The benefits of AWS Development include cost efficiency, global scalability, high availability, and seamless integration with AI and machine learning.</div>
                        </AnimatedContent>
                        
                    </div>
        </div>
    </div>
  )
}

export default About
