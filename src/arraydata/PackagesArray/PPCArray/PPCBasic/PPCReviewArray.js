import tick from "../../../../component/Packages/SeoPackages/images/tick.svg"
import untick from "../../../../component/Packages/PPCPackages/images/untick.svg"
import React from 'react'

const PPCReview =[
    {
         feature: "Reporting",
         plan: "Bi-Weekly",
       },
       {
         feature: "ROI Tracking",
         plan: React.createElement("img", { src: untick, alt: "X" }),
       },
  ]
 

  export default PPCReview