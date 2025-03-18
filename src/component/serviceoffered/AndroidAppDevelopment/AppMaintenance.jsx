import React from 'react'
import "./AppMaintenance.css"
import AppMaintenanceCard from "../../cards/AppMaintenanceCard"
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/AppMaintenanceArray'

function AppMaintenance() {
  return (
    <>
    <div className='aspect-body'>
        <div className='aspect-box'>

            <div className='box-heading'>
                <div className='header'>Cutting-Edge <span> Android App </span> Development Services </div>
            </div>
            <AnimatedContent>
            <div className='box-content'>
            {data.map((data,index)=>(<AppMaintenanceCard key={index} head={data.head} para={data.para}/>))}
            </div>
            </AnimatedContent>
        </div>
       
      
    </div>
    </>
  )
}

export default AppMaintenance
