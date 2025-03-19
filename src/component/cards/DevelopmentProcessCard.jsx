import React from 'react'
import '../Homepage/developmentprocess.css'

function DevelopmentProcessCard({icon, head}) {
  return (
    <div className='dp-content-box1'>
        <div className='dp-content-box1-image'>{icon}</div>
        <div className='dp-content-box1-head'>{head}</div>
    </div>
  )
}

export default DevelopmentProcessCard
