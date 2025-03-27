import React from 'react'
import "./CreateLogo.css"
import CreateLogoBanner from "./images/CreateLogoBanner.png"

function CreateLogo() {
  return (
    <div className='ld-CreateLogo-body'>
      <div className='ld-CreateLogo-box'><img src={CreateLogoBanner}/></div>
    </div>
  )
}

export default CreateLogo
