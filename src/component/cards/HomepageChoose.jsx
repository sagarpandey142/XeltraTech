import React from 'react'
import "../Homepage/chooseus.css"
import AnimatedContent from "../SingleComponents/AnimatedContent"

function HomepageChoose({icon, head, para}) {
  return (

    <AnimatedContent>
    <div className="choose-body-why-box1">
                                <div className="choose-body-why-box1-header">
                                    <div className="choose-body-why-box1-header-image">{icon}</div>
                                    <div className="choose-body-why-box1-header-content">{head}</div>
                                </div>
                                <div className="choose-body-why-box1-footer">{para}</div>
                            </div>
                            </AnimatedContent>
  )
}

export default HomepageChoose
