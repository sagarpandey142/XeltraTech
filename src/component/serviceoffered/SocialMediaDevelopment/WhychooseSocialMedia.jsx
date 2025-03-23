import React from 'react'
import "./WhychooseSocialMedia.css"
import WhychooseSocialMediaCard from '../../cards/SocialMediaCard/WhychooseSocialMediaCard'
import {leftdata} from "../../../arraydata/SocialMediaArray/WhychooseSocialMediaArray"
import {rightdata} from "../../../arraydata/SocialMediaArray/WhychooseSocialMediaArray"
import whychoosebg from "./images/whychoosebg.png"

function WhySocialMedia() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for Social Media Marketing
            Services ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseSocialMediaCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseSocialMediaCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhySocialMedia
