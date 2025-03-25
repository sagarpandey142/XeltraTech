import React from 'react'
import "./DevOpsNeeds.css"
import bodyimage from "../WordPressDevelopment/images/Wordpressneed.svg"

function DevOpsNeeds() {
  return (
    <div className='needs-body'>
        <div className='needs-box'>
            <div className="needs-heading"><span className='text-[64px] text-red-500 '>B</span><span className='text-red-500'>enefits</span> of Devops Development</div>
            <div className="needs-content">
                <div className='needs-para'>
                    <div className="needs-para1">DevOps development enhances software delivery by automating processes, improving collaboration, and ensuring faster, more reliable deployments. It reduces development cycles through continuous integration and continuous deployment (CI/CD), allowing teams to release updates quickly with minimal errors. By implementing Infrastructure as Code (IaC), businesses achieve scalability, consistency, and efficient resource management.</div>
                    <div className="needs-para1"> With real-time monitoring and logging, DevOps ensures proactive issue resolution, improving system reliability and uptime. Security is integrated into the development lifecycle through DevSecOps, strengthening compliance and data protection. DevOps also optimizes cloud usage, reducing operational costs while maintaining high performance.</div>
                </div>
                <img src={bodyimage}/>
                </div>
        </div>
      
    </div>
  )
}

export default DevOpsNeeds
