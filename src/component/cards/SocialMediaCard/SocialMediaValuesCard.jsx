import React from 'react'
import "../../serviceoffered/SocialMediaDevelopment/SocialMediaValues.css"

function SocialMediaValuesCard({icon, para}) {
  return (
    <div className='SocialMediaValues-content-box'>
                        <div className='SocialMediaValue-content-box-image'>{icon}</div>
                        <div className='SocialMediaValue-content-box-para'>{para}</div>
    </div>
  )
}

export default SocialMediaValuesCard
