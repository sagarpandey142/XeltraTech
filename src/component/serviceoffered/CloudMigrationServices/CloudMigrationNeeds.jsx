import React from 'react'
import "./cloudmigrationNeeds.css"
import bodyimage from "./images/cms-needs.jpg"

function CloudMigrationNeeds() {
  return (
    <div className='needs-body'>
        <div className='needs-box'>
            <div className="needs-heading"><span className='text-[64px] text-red-500'>B</span><span className='text-red-500'>enefits</span> of Cloud Migration</div>
            <div className="needs-content">
                <div className='needs-para'>
                    <div className="needs-para1">Benefits of Cloud MigrationCloud migration offers significant cost savings by eliminating the need for expensive hardware and maintenance. It enhances scalability, allowing businesses to adjust resources based on demand effortlessly. With optimized cloud infrastructure, performance improves, ensuring faster application speeds and reduced latency.</div>
                    <div className="needs-para1"> Security is a top priority, with advanced encryption, compliance measures, and threat protection safeguarding data. Cloud migration also strengthens business continuity with reliable backups and disaster recovery solutions, minimizing downtime.</div>
                    <div className="needs-para1">  Additionally, it enables seamless remote access, allowing employees to work from anywhere securely. By adopting cloud technology, businesses gain agility, fostering innovation and accelerating digital transformation.</div>
                </div>
                <img src={bodyimage}/>
                </div>
        </div>
      
    </div>
  )
}

export default CloudMigrationNeeds
